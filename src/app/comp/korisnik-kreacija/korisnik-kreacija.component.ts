import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { korisnik } from 'korisnici_klase';
import { KorisniciService } from 'src/app/service/korisnici.service';
@Component({
  selector: 'app-korisnik-kreacija',
  templateUrl: './korisnik-kreacija.component.html',
  styleUrls: ['./korisnik-kreacija.component.css']
})
export class KorisnikKreacijaComponent implements OnInit {

  username!:string;
  password!:string;

  @Output() klikDodavanje:EventEmitter<korisnik> = new EventEmitter();
  constructor(private korisnikServis:KorisniciService) { }

  ngOnInit(): void {
    
  }

  registracija(){
    if(!this.username){
      alert('Polje je prazno')
    }
    const novi_korisnik={
      id:Object.keys(this.korisnikServis.getKorisnici().subscribe()).length,
      username:this.username,
      password:this.password,
      admin:false
        }
    
    this.klikDodavanje.emit(novi_korisnik)

    this.username='';
    this.password='';
  }
}
