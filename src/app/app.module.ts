import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';

import { FormsModule } from '@angular/forms'; 
import { WeatherService } from './weather.service'; // <-- Imported
import { HttpModule } from '@angular/http'; // <— Import


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    LosangelesComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule // <— include in imports array
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
