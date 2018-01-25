import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

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
    this.onDecrease.emit(this.counter);
    console.log("count is: ", this.counter);

    if(this.counter == 0) {
      this.onComplete.emit();
      console.log("counter END");
    } else {
      this.doCountDown();
    }
  }

}
