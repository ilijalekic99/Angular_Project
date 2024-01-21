import { Component, OnInit, Input } from '@angular/core';
import { recept } from 'recepti_klasa';

@Component({
  selector: 'app-kartica',
  templateUrl: './kartica.component.html',
  styleUrls: ['./kartica.component.css']
})
export class KarticaComponent implements OnInit {

  @Input() recept!:recept
  constructor() { }

  ngOnInit(): void {
  }

}
