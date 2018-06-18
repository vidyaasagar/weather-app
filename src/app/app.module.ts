import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherService } from './weather/weather.service';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './/material.module';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CitySearchComponent } from './city-search/city-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    CitySearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    MatCardModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
