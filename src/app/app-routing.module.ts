import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { WohngemeinschaftenComponent } from './wohngemeinschaften/wohngemeinschaften.component';
import { AboutComponent } from './about/about.component';
import { KostenComponent } from './kosten/kosten.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';

const appRoutes: Routes = [
  { path: 'leistungen', component: LeistungenComponent },
  { path: 'wohngemeinschaften', component: WohngemeinschaftenComponent },
  { path: 'kosten', component: KostenComponent },
  { path: 'about', component: AboutComponent },
  { path: 'aktuelles', component: AktuellesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
