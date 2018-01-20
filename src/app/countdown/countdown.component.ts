import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  
  

  @Input() init:number = null;
  public counter:number = 0;

  ngOnInit(): void {
    this.startCountDown()
  }

  constructor() { }


  startCountDown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountDown();
    }
  }

  doCountDown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountDown();

    }, 1000)
  }

  processCountDown() {
    //emite evento
    console.log("count is: ", this.counter);

    if(this.counter == 0) {
      console.log("counter END");
    } else {
      this.doCountDown();
    }
  }

}
