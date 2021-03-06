import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { AddItemsComponent } from './admin/add-items/add-items.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ShowAllUsersComponent } from './admin/show-all-users/show-all-users.component';
import { ShowCategoryComponent } from './admin/show-category/show-category.component';
import { ShowItemsComponent } from './admin/show-items/show-items.component';
import { ShowSingleCatComponent } from './admin/show-single-cat/show-single-cat.component';
import { ShowSingleItemComponent } from './admin/show-single-item/show-single-item.component';
import { ShowSingleUserComponent } from './admin/show-single-user/show-single-user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // Paths users
  { path: 'users/login', component: LoginComponent },
  { path: 'users/register', component: RegisterComponent },
  // Paths category
  { path: 'category/addCat', component: AddCategoryComponent },
  { path: 'category/displayCats', component: ShowCategoryComponent },
  { path: 'category/displaySingleCat/:id', component: ShowSingleCatComponent },
  { path: 'category/editCats/:id', component: EditCategoryComponent },
  { path: 'category/delCats/:id', component: ShowCategoryComponent },
  // Paths items
  { path: 'category/addItems', component: AddItemsComponent }, //
  { path: 'category/addItem', component: AddItemComponent }, // 
  { path: 'category/showAllItems', component: ShowItemsComponent },
  { path: 'category/showSingleItem/:id', component: ShowSingleItemComponent },
  { path: 'category/editItem/:id', component: EditItemComponent },
  //path admin
  { path: 'showallusers', component: ShowAllUsersComponent },
  { path: 'showsingleuser/:id', component: ShowSingleUserComponent },
  { path: 'edituser/:id', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
