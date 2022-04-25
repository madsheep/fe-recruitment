import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { fetch, select } from "./thread-list.actions";
import { selectedThread, threads } from "./thread-list.selector";

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  selected$ = this.store.select(selectedThread);
  threads$ = this.store.select(threads);

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(fetch());
  }

  selectThread(threadId: number) {
    this.store.dispatch(select({id: threadId}));
  }
}
