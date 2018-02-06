import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Turkcell 3';
  firstname = "Mahmut Baş"
  public options = {
    position:["bottom","right"],
    timeOut:3000,
    lastOnBottom:true
  }
}
