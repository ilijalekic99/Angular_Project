import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { korisnik } from 'korisnici_klase';

@Component({
  selector: 'app-korisnik-kartica',
  templateUrl: './korisnik-kartica.component.html',
  styleUrls: ['./korisnik-kartica.component.css']
})
export class KorisnikKarticaComponent implements OnInit {

 @Input()  korisnik!:korisnik
 @Output() brisanjeKlik:EventEmitter<korisnik> = new EventEmitter();
 @Output() izmeniKlik:EventEmitter<korisnik> = new EventEmitter();

 constructor() { }

  ngOnInit(): void {
  }
  brisanje(korisnik:korisnik){
    this.brisanjeKlik.emit(korisnik);
  }
  izmena(){
    this.izmeniKlik.emit(this.korisnik);
  }
  

}
