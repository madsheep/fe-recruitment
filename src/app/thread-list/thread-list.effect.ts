import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, switchMap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { fetch, persistThreads } from "./thread-list.actions";
import { Store } from "@ngrx/store";

@Injectable()
export class ThreadListEffects {

  loadThreadList$ = createEffect(() => this.actions$.pipe(
      ofType(fetch),
      switchMap(() => this.http.get("https://recruapi.herokuapp.com/threads")
        .pipe(
          map(threads => {
            this.store.dispatch(persistThreads({threads: threads}))
          }),
          catchError(() => EMPTY)
        ))
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private http: HttpClient,
  ) {
  }
}
