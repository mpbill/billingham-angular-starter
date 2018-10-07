import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {empty, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions) {}

  @Effect()
  pageLoad: Observable<Action> = this.actions$.pipe(
    switchMap((a: Action) => {
      console.log(a);
      return empty();
    })
  );
}
