import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { Table } from '../../settings/table/table';
import { ResponseModel } from '../../_helper/responseModel';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MenuService } from '../../settings/menu/menu.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavService } from '../../nav/nav.service';
import { RecipeService } from '../recipe.service';
import { TotalService } from '../total.service';
import { TableService } from '../../settings/table/table.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Total } from '../total';
import { Menu } from '../../settings/menu/menu';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-dine-in-form',
  templateUrl: './dine-in-form.component.html',
  styleUrls: ['./dine-in-form.component.css','../../../styles/styled.mat-card.css','../../../styles/styled.content.css']
})
export class DineInFormComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  data: Menu[] = [];
  order: Recipe[] = []
  newOrder: Recipe[] = []
  subTotal: Total[] = []
  granTotal: number = 0
  grandUnits: number = 0
  recipeId!: number
  _tableId: string | number | null = 0;
  data_table!: Table;
  myDate = new Date();
  constructor(
    private menuService: MenuService,
    private breakpointObserver: BreakpointObserver,
    public navService: NavService,
    private recipeService: RecipeService,
    private totalService: TotalService,
    private dialog: MatDialog,
    private tableService: TableService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) {
    this._tableId = this.route.snapshot.paramMap.get('tableId');
    if (this.data_table != undefined)
      this.data_table.id = this._tableId

    this.getRecipeId();
    
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAll();
  }

  getAll() {
    this.menuService.gets().subscribe((res) => {
      this.data = res
    });
  }

  getRecipeId() {
    this.tableService.getTableById(this._tableId).subscribe((res) => {
      this.data_table = res
      this.recipeId = res.recipeId;
      this.getRecipe(this.recipeId);
    })
  };

  updateDailog(data: Recipe, isSum: boolean) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    dialogConfig.data.issum = isSum;

    this.dialog
      .open(DineInFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }

  onCheckOut( ) {
    this._tableId = this.route.snapshot.paramMap.get('tableId');
    console.log("data_table::", this.data_table);
    
    const newData: Table = {
      "isBusy": false,
      "id": this._tableId,
      "recipeId": 0,
      "floor": this.data_table.floor,
      "name": this.data_table.name,
      "grandTotal": this.data_table.grandTotal,
      "grandUnits": this.data_table.grandUnits,
    }
    
    if(this.order.length <= 0){
      this.recipeService.delete(this.recipeId).subscribe();
    }
    
    this.tableService.putTable(newData).subscribe((res => {
      this.router.navigate([`/dine-in`]);
    }))
  };

  getRecipe(id: number ) {
    
    console.log("!!id", !!id);
    
    if (!!id) {
      this.recipeService.gets(id).subscribe((res) => {
        this.order = (res as ResponseModel).order;
        this.getUnits();
        this.getTotal();
      });
    } else {
      let order: Recipe = {
        "name": "any",
        "price": 0,
        "isHave": false,
        "units": 0,
        "date": this.myDate,
      }
      this.recipeService.post().subscribe((res) => {
        this._tableId = this.route.snapshot.paramMap.get('tableId');
        if (res.id != undefined) {
          const data: Table = {
            "isBusy": true,
            "id": this._tableId,
            "recipeId": res.id,
            "floor": this.data_table.floor,
            "name": this.data_table.name,
          }
          this.tableService.putTable(data).subscribe((res => {
            
          }))
        }
        // this.getRecipe(this.recipeId);
      })
    }
  }

  getTotal() {
    const array_price: any = this.order.map(p => p.price * p.units)
    this.granTotal = array_price.reduce((a: number, b: number) => a + b, 0)
  }

  getUnits() {
    const array_unit: any = this.order.map(u => u.units)
    this.grandUnits = array_unit.reduce((c: number, d: number) => c + d)
  }

  onPress(order: any) {
    
    console.log("order::", order)
    
    if (this.recipeId !== undefined) {
      const array: any = this.order.map(o => o.name);
      // console.log("arr::",array);
      
      let isExits: boolean = false;
      const conditon = (e: string) => e == order.name ? true : false;
      const _arr = this.order.map((recipe: any, index: number) => {
        if (recipe.name == order.name) {
          this.order[index].units += 1
          
        }
      }
      )
      isExits = (array.some(conditon));
      if (!isExits) {
        const newRecipe: Recipe = {
          name: order.name,
          units: 1,
          id: order.id,
          price: order.price,
          isHave: true,
          date:this.myDate,
          granTotal: this.granTotal,
          grandUnits: this.grandUnits,
        }
        this.order.push(newRecipe)
        this.getTotal()
        

      }

      this.recipeService.put(this.recipeId, this.order).subscribe((res => {
        this.getRecipe(this.recipeId);

      }))

    }
  }
}
