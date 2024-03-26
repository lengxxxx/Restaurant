import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DineInComponent } from './dine-in/dine-in.component';
import { DineInFormComponent } from './dine-in/dine-in-form/dine-in-form.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SettingsComponent } from './settings/settings.component';
import { CategoryComponent } from './settings/category/category.component';
import { IngredientComponent } from './settings/ingredient/ingredient.component';
import { MenuComponent } from './settings/menu/menu.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { StockComponent } from './settings/stock/stock.component';
import { TableComponent } from './settings/table/table.component';
import { RoleComponent } from './settings/role/role.component';
import { UserComponent } from './settings/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    ConfirmComponent,
    DashboardComponent,
    DineInComponent,
    DineInFormComponent,
    HomeComponent,
    NavComponent,
    SettingsComponent,
    CategoryComponent,
    IngredientComponent,
    MenuComponent,
    ProfileComponent,
    StockComponent,
    TableComponent,
    RoleComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
