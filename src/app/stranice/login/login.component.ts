import { Component, OnInit } from '@angular/core';
import { korisnik } from 'korisnici_klase';
import { KorisniciService } from 'src/app/service/korisnici.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

;

  username!:string;
  password!:string;

  constructor(private korisnikServis:KorisniciService,private putanja:Router) { }

  ngOnInit(): void {
  }
  login(){
    const lista_korisnika =this.korisnikServis.getKorisnici().subscribe(
      res=>{
        const ulogovan = res.find((k:korisnik)=>{
          return k.username === this.username && k.password === this.password
        });
        if (ulogovan){
          alert('uspesan login')
          console.log(ulogovan.admin==true)

          if (!!ulogovan.admin==true)
          this.putanja.navigate(['/admin'])
        }
        else{
          alert('Login nije uspesan')
        }

      }
    )

  }
}
