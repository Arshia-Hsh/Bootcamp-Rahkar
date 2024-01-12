import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { TransactionInputComponent } from './transaction-input/transaction-input.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { WalletComponent } from './wallet/wallet.component';

export const routes: Routes = [
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
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "wallet",
    component: WalletComponent
  },
  {
    path: "input",
    component: TransactionInputComponent
  },
  {
    path: "history",
    component: TransactionHistoryComponent
  },
  {
    path: "cart",
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"auth",
    loadChildren:()=>import("./auth/auth.routes").then((m)=>m.TaskRoutes)
  }
];
