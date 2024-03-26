import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './settings/role/role.component';
import { UserComponent } from './settings/user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { MenuComponent } from './settings/menu/menu.component';
import { TableComponent } from './settings/table/table.component';
import { StockComponent } from './settings/stock/stock.component';
import { IngredientComponent } from './settings/ingredient/ingredient.component';
import { CategoryComponent } from './settings/category/category.component';
import { DineInComponent } from './dine-in/dine-in.component';
import { DineInFormComponent } from './dine-in/dine-in-form/dine-in-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './settings/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'role', component: RoleComponent },
  { path: 'user', component: UserComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'table', component: TableComponent},
  { path: 'stock', component: StockComponent},
  { path: 'ingredient', component: IngredientComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'dine-in', component: DineInComponent},
  { path: 'dine-in/:tableId', component: DineInFormComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile' , component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
