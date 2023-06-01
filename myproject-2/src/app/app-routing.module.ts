import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { RegisterComponent } from './components/register/register.component';

import { LoginComponent } from './components/login/login.component';
import { ToursdetailComponent } from './components/toursdetail/toursdetail.component';
import { CategoryToursComponent } from './components/category-tours/category-tours.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'about/:id' , component: CategoryToursComponent},
  {path:'register' , component: RegisterComponent},
  {path:'cart' , component: CartComponent},
  {path:'favourite' , component: FavouriteComponent},
  {path:'tours/:id' , component: ToursdetailComponent},
  {path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
