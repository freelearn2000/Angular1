import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = 'Todays temperature is 32C';

  changeModel(event:any)
  {
    this.model=event?.target.value;
  }
}
