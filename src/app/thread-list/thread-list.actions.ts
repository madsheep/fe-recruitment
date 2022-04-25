import { createAction, props } from '@ngrx/store';

export const fetch = createAction('[Thread List] Fetch');
export const persistThreads = createAction('[Thread List] Persist', props<{ threads: any; }>());
export const select = createAction('[Thread List] Select', props<{ id: number; }>());
