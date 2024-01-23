import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './comp/header/header.component';
import { ParallaxComponent } from './comp/parallax/parallax.component';
import { FooterComponent } from './comp/footer/footer.component';
import { KarticaComponent } from './comp/kartica/kartica.component';
import { KorisnikKarticaComponent } from './comp/korisnik-kartica/korisnik-kartica.component';
import { GrupaKorisniciComponent } from './comp/grupa-korisnici/grupa-korisnici.component';
import { HttpClientModule } from '@angular/common/http';
import { KorisnikKreacijaComponent } from './comp/korisnik-kreacija/korisnik-kreacija.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './stranice/login/login.component';
import { GlavnaComponent } from './stranice/glavna/glavna.component';
import { RegistracijaComponent } from './stranice/registracija/registracija.component';
import { AdminPanelComponent } from './stranice/admin-panel/admin-panel.component';
import { UspesnaRegistracijaComponent } from './stranice/uspesna-registracija/uspesna-registracija.component';
import { KarticaSvidjanjeComponent } from './comp/kartica-svidjanje/kartica-svidjanje.component';
import { StoreModule } from '@ngrx/store';
import {CounterState, counterReducer} from 'Reduktor/counter.reducer'
import { reduce } from 'rxjs';
import { AboutComponent } from './stranice/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParallaxComponent,
    FooterComponent,
    KarticaComponent,
    KorisnikKarticaComponent,
    GrupaKorisniciComponent,
    KorisnikKreacijaComponent,
    LoginComponent,
    GlavnaComponent,
    RegistracijaComponent,
    AdminPanelComponent,
    UspesnaRegistracijaComponent,
    KarticaSvidjanjeComponent,
    AboutComponent,
    

   
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({count:counterReducer})
   
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
