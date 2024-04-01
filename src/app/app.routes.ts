import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'card', component: CardComponent},
  {path: 'login', component:LoginComponent},
  {path:'sign-up', component:SignUpComponent},
];
