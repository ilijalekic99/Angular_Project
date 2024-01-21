import { Component, OnInit } from '@angular/core';
import { recept } from 'recepti_klasa';
import { ReceptiService } from 'src/app/service/recepti.service';

@Component({
  selector: 'app-glavna',
  templateUrl: './glavna.component.html',
  styleUrls: ['./glavna.component.css']
})
export class GlavnaComponent implements OnInit {

  sort!:string;
  rec!:string;
  recepti!:recept[];
  constructor( private receptServis:ReceptiService) { }

  ngOnInit(): void {
    this.receptServis.getRecepti().subscribe((recepti)=>
    this.recepti=recepti  )
  }
sortiraj(){
  if(this.sort==='desc'){
    this.receptServis.getSortDesc().subscribe((recepti)=>this.recepti=recepti)
  }
  if (this.sort==='asc'){
    this.receptServis.getSortAsc().subscribe((recepti)=>this.recepti=recepti)
  }
}
  pretraga(){
    console.log(this.rec)
    this.receptServis.getPretraga(this.rec).subscribe((recepti)=>this.recepti=recepti)

  }

}
