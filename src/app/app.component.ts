import { Component } from '@angular/core';
import { environment } from 'E:/Code/env POC/angularFe/src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFe';
  constructor() {
    console.log(environment.texttest); // Logs false for default environment
  }

}
