import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  componentTitle = 'cjmponent title';

  clickHandler (){
    alert('Отакои');
  }
}


