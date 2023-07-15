import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './skeleton/navbar/navbar.component';
import { FooterComponent } from './skeleton/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { LoginComponent } from './pages/login/login.component';
import { ListaNutritionalPlanComponent } from './lista-nutritional-plan/lista-nutritional-plan.component';
import { CrearPlanComponent } from './crear-plan/crear-plan.component';
import { RegisterComponent } from './register/register.component';
import { RegisterNutritionistComponent } from './register-nutritionist/register-nutritionist.component';
import { RegisterClientComponent } from './register-client/register-client.component';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    LandingComponent,
    CarouselComponent,
    LoginComponent,
    ListaNutritionalPlanComponent,
    CrearPlanComponent,
    RegisterComponent,
    RegisterNutritionistComponent,
    RegisterClientComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
