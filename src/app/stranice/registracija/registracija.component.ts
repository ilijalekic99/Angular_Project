import { Component, OnInit, Output } from '@angular/core';
import { KorisniciService } from 'src/app/service/korisnici.service';
import { korisnik } from 'korisnici_klase';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private korisnikServis:KorisniciService, private router:Router) { }

  @Output() korisnik!:korisnik

  ngOnInit(): void {
  }

  dodajKorisnika(korisnik:korisnik){
    console.log(korisnik)
    this.korisnikServis.postKorisnik(korisnik).subscribe(
      res=>{
        this.router.navigate(['uspesna_registracija']);
        
        
      },err=>{
        alert('Pojavio se neki problem')
      }
    )
  }

  
}
