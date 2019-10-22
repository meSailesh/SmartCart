import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule',canActivate: [AuthService]  },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'shopping-lists', loadChildren: './shopping-lists/shopping-lists.module#ShoppingListsPageModule' },
  { path: 'product/:id', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'single', loadChildren: './single/single.module#SinglePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
