import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nimba-front';
  pageHidden = false;

  handleNavigationRequest(value: string) {
    console.log('Event received ' + value);
    this.pageHidden = !this.pageHidden;
  }
}
