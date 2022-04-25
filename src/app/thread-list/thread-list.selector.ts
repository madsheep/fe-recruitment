import { createFeatureSelector, createSelector } from '@ngrx/store';
import { threadListFeatureKey, ThreadListState } from "./thread-list.reducer";

export const feature = createFeatureSelector<ThreadListState>(threadListFeatureKey)

export const threads = createSelector(feature, (state: ThreadListState) => state.threads);
export const selectedThread = createSelector(feature, (state: ThreadListState) => state.selected);
