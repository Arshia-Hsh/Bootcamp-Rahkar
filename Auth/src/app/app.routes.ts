import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path:"auth",
    loadChildren:()=>import("./auth/auth.routes").then((m)=>m.TaskRoutes)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "cart",
    component: CartComponent,
  }
];
