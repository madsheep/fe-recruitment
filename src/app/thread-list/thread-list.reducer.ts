import { createReducer, on } from '@ngrx/store';
import * as ThreadListActions from './thread-list.actions';
import { threads } from "./thread-list.selector";

export const threadListFeatureKey = 'thread-list';

export interface ThreadListState {
  threads: any[];
  selected: any;
}

export const initialState: ThreadListState = {
  threads: [],
  selected: null,
};

export const threadListReducer = createReducer(
  initialState,
  on(ThreadListActions.fetch,
    state => ({...state})
  ),
  on(ThreadListActions.persistThreads,
    (state, {threads}) => ({...state, threads: threads})
  ),
  on(ThreadListActions.select,
    (state, {id}) => {
      return {
        ...state,
        selected: state.threads.filter(t => t.id === id)
      }
    })
);
