import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  threads: any
  selected: any
  constructor(private readonly http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("https://recruapi.herokuapp.com/threads").subscribe((response) => {
      console.log('response', response)
      this.threads = response
    })
  }

  selectThread(thread: any) {
    this.selected = thread
  }
}
