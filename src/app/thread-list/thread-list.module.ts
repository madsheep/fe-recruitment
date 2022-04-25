import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadListComponent } from "./thread-list.component";
import { StoreModule } from "@ngrx/store";
import { threadListFeatureKey, threadListReducer } from "./thread-list.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ThreadListEffects } from "./thread-list.effect";

@NgModule({
  declarations: [
    ThreadListComponent
  ],
  exports: [
    ThreadListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(threadListFeatureKey, threadListReducer),
    EffectsModule.forFeature([ThreadListEffects])
  ]
})
export class ThreadListModule { }
