import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counterProgress:number = 0;
  totalCountDown:number = 20;

  constructor() { }

  updateProgress($event) {
    console.log("event", $event);
    this.counterProgress = (this.totalCountDown - $event)/this.totalCountDown * 100;
  }

  countDownFinished() {
    console.log("countDown has Finished");
  }

}
