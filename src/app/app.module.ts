import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetupComponent } from './setup/setup.component';
import { RoutesComponent } from './routes/routes.component';
import {FormsModule} from '@angular/forms';
import {DigitransitService} from './services/digitransit.service';
import {HttpClientModule} from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SetupComponent,
    RoutesComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserModule,
      AgmCoreModule.forRoot({apiKey: 'AIzaSyAbos3jG3-NcWSROdboxsgV-ugEEyk_nLM'})
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }