import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { UsersService } from './services/users.service';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { CategoryService } from './services/category.service';
import { ShowCategoryComponent } from './admin/show-category/show-category.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shares/footer/footer.component';
import { NavbarComponent } from './shares/navbar/navbar.component';
import { HeaderComponent } from './shares/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddCategoryComponent,
    ShowCategoryComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [
    // 
    UsersService,
    CategoryService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
