import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaNutritionalPlanComponent } from './lista-nutritional-plan/lista-nutritional-plan.component';
import {HttpClientModule} from "@angular/common/http";
import { CrearPlanComponent } from './crear-plan/crear-plan.component';
import { ObjetivoMpComponent } from './objetivo-mp/objetivo-mp.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaNutritionalPlanComponent,
    CrearPlanComponent,
    ObjetivoMpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
