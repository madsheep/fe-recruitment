import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { ThreadListModule } from "./thread-list/thread-list.module";
import { EffectsModule } from "@ngrx/effects";
import { ThreadListEffects } from "./thread-list/thread-list.effect";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([ThreadListEffects]),
    ThreadListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
