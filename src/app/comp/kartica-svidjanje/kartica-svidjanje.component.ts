import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from 'Reduktor/counter.reducer';
import {  Observable } from 'rxjs';
import { increment,decrement } from 'Reduktor/counter.actions';
import { counterReducer } from 'Reduktor/counter.reducer';

@Component({
  selector: 'app-kartica-svidjanje',
  templateUrl: './kartica-svidjanje.component.html',
  styleUrls: ['./kartica-svidjanje.component.css']
})
export class KarticaSvidjanjeComponent implements OnInit {

  counter$!:Observable<number>;

  constructor(public store:Store<CounterState>) { 
    this.counter$=this.store.select('count');
    
  }

  like(){
   
    console.log(this.counter$)
    this.store.dispatch(new increment());
  }

  dislike(){
    console.log(this.counter$)
    this.store.dispatch(new decrement());
  }
  ngOnInit(): void {
  
  }

}
