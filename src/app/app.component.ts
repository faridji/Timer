import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timer';
  timeLeft;
  hoursLeft;
  minutesLeft;
  secondsLeft;
  interval;
  constructor() {
    let currentTime = new Date();
        let acceptingTime = new Date(2019,1,15,12,25,0);
        let arrivalTime = new Date(acceptingTime.getTime());
        this.timeLeft = arrivalTime.getTime() - currentTime.getTime();

        if (this.timeLeft > 0) {
          this.hoursLeft = Math.round((this.timeLeft / (1000 * 60 * 60)) % 24);
          this.minutesLeft = Math.round((this.timeLeft / 60000) % 60)
          this.secondsLeft = Math.round((this.timeLeft / 1000) % 60)

          this.startTimer();
        }else{
          this.hoursLeft = 0;
          this.minutesLeft = 0;
          this.secondsLeft = 0;
        }

  }
  
  startTimer() {
    setInterval(() => {
      if(this.secondsLeft > 0) {
        this.secondsLeft--;
      }else{
        if (this.minutesLeft < 0 && this.hoursLeft > 0){
            this.minutesLeft = 60;
            this.hoursLeft--;
        }

        if (this.minutesLeft >= 0)
          this.secondsLeft = 60;

        this.minutesLeft--;
      }
    },1000)
  }

}
