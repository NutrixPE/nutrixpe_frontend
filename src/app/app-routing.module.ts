import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterNutritionistComponent } from './register-nutritionist/register-nutritionist.component';
import { RegisterClientComponent } from './register-client/register-client.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'register', component: RegisterComponent, children: [
      { path: 'nutritionist', component: RegisterNutritionistComponent },
      { path: 'user', component: RegisterClientComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
