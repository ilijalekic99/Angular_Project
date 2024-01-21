import { Action,StoreModule } from "@ngrx/store";
import {INCREMENT,DECREMENT,All} from 'Reduktor/counter.actions'
export interface CounterState {
  count:number;
}

const initState: CounterState= { count:999};


export function counterReducer(state: CounterState = initState, action: Action)         {
  switch (action.type) {
    case INCREMENT:
        return Object.assign({}, state, { count: state.count + 1 });
    case DECREMENT:
        return Object.assign({}, state, { count: state.count - 1 });
    default:
        return state;    
  }
}