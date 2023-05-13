import { Component, OnInit } from '@angular/core';
import { doSomething } from '@nx208/lib1';


@Component({
  selector: 'nx208-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    doSomething();
  }
  title = 'myapp2';
}
