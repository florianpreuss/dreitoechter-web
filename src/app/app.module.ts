
import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
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
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import {KontaktModalComponent} from './modal/kontakt-modal/kontakt-modal.component';
import { ImpressumModalComponent } from './modal/impressum-modal/impressum-modal.component';

declare var Hammer: any;


export class MobileHammerConfig extends HammerGestureConfig {
  overrides = {
    pan: { direction: Hammer.DIRECTION_All },
    swipe: { direction: Hammer.DIRECTION_VERTICAL },
  } as any;

  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'auto',
      inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
      recognizers: [
        [Hammer.Swipe, {
          direction: Hammer.DIRECTION_HORIZONTAL
        }]
      ]
    });
    return mc;
  }
}


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
    AktuellesComponent,
    KontaktModalComponent,
    ImpressumModalComponent
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
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [
    KontaktModalComponent,
    ImpressumModalComponent
  ],
  providers: [
    MDBSpinningPreloader,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MobileHammerConfig
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
