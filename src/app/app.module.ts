
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import {
  MDBSpinningPreloader,
  MDBBootstrapModulesPro,
  ToastModule, MDBBootstrapModule,
} from 'ng-uikit-pro-standard';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { WohngemeinschaftenComponent } from './wohngemeinschaften/wohngemeinschaften.component';
import { AboutComponent } from './about/about.component';
import { KostenComponent } from './kosten/kosten.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import {KontaktModalComponent} from './modal/kontakt-modal/kontakt-modal.component';
import { StandortModalComponent } from './modal/standort-modal/standort-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LeistungenComponent,
    WohngemeinschaftenComponent,
    AboutComponent,
    KostenComponent,
    AktuellesComponent,
    KontaktModalComponent,
    StandortModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    AppRoutingModule
  ],
  entryComponents: [
    KontaktModalComponent,
    StandortModalComponent
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
