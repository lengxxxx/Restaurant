import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmComponent } from './confirm/confirm.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
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

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
// import { NgChartsModule } from 'ng2-charts';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavItemComponent } from './nav/nav-item/nav-item.component';
import { CategoryFormComponent } from './settings/category/category-form/category-form.component';
import { IngredientFormComponent } from './settings/ingredient/ingredient-form/ingredient-form.component';
import { MenuFormComponent } from './settings/menu/menu-form/menu-form.component';
import { RoleFormComponent } from './settings/role/role-form/role-form.component';
import { StockFormComponent } from './settings/stock/stock-form/stock-form.component';
import { TableFormComponent } from './settings/table/table-form/table-form.component';
import { UserFormComponent } from './settings/user/user-form/user-form.component';
import { ThemeComponent } from './components/theme/theme.component';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    ConfirmComponent,
    // DashboardComponent,
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
    UserComponent,
    NavItemComponent,
    CategoryFormComponent,
    IngredientFormComponent,
    MenuFormComponent,
    RoleFormComponent,
    StockFormComponent,
    TableFormComponent,
    UserFormComponent,
    ThemeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    LayoutModule,
    NgIf,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // NgChartsModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
