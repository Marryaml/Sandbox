import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-sandbox';

  getValue() {
    console.log('Event Binding ');  // View ->>> Component
  }
}
