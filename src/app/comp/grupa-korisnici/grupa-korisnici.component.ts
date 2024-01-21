import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { korisnik } from 'korisnici_klase';
import { KorisniciService } from 'src/app/service/korisnici.service';

@Component({
  selector: 'app-grupa-korisnici',
  templateUrl: './grupa-korisnici.component.html',
  styleUrls: ['./grupa-korisnici.component.css']
})
export class GrupaKorisniciComponent implements OnInit {

  korisnici!:korisnik[]
  forma_username!:string;
  forma_password!:string;
  forma_id!:number;
  forma_admin!:boolean;
  temp_korisnik!:korisnik;
  
  constructor(private korisniciServis:KorisniciService) { }

  ngOnInit(): void {
    this.korisniciServis.getKorisnici().subscribe((korisnici)=>this.korisnici=korisnici)
  }

  brisanje_korisnika(korisnik:korisnik){
    this.korisniciServis.deleteKorisnik(korisnik).subscribe(()=>(this.korisnici=this.korisnici.filter((k)=>k.id !== korisnik.id)))
  }
  izmena_korisnika(){
    this.korisniciServis.putKorisnik({id:this.forma_id,username:this.forma_username,password:this.forma_password,admin:this.forma_admin}).subscribe()
  }

  dodaj_u_formu(korisnik:korisnik){
    this.forma_id=korisnik.id;
    this.forma_username=korisnik.username;
    this.forma_password=korisnik.password;
    this.forma_admin=korisnik.admin;
    
    
  }
}
