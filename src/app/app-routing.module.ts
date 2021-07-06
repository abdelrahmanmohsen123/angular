import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddItemsComponent } from './admin/add-items/add-items.component';
import { ShowCategoryComponent } from './admin/show-category/show-category.component';
import { ShowItemsComponent } from './admin/show-items/show-items.component';
import { ShowSingleItemComponent } from './admin/show-single-item/show-single-item.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'category/addCat', component: AddCategoryComponent},
  {path: 'category/displayCats', component: ShowCategoryComponent},
  {path: 'category/addItems', component: AddItemsComponent},
  {path: 'category/showAllItems', component: ShowItemsComponent},
  {path: 'category/showSingleItem/:id', component: ShowSingleItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
