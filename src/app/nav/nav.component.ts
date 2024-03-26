import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from './nav.service';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Output() messageEvent = new EventEmitter<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    public navService: NavService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}
  
  openBottomSheet(): void {
    // this._buttomSheet.open(NavItemsComponent);
  }

  logout() {
    localStorage.setItem('isAuth', 'false');
    setTimeout(() => {
      this.router.navigate(['/', 'login']);
    }, 500);
    const options = {
      title: '',
      message: 'logout-confirm',
      cancelText: 'cancel',
      confirmText: 'yes',
    };
  }
}
