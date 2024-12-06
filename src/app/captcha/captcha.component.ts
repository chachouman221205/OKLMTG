import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-captcha',
  imports: [CommonModule],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.css'
})
export class CaptchaComponent {
  @Output() messageEvent = new EventEmitter<string>();
  goal = Math.floor(Math.random() * (50-1)+1);
  random = Math.random();
  default_tries = 7;
  tries = this.default_tries;
  jetons = 0;
  result_message = "";
  gained = 0;
  max_gain = 5;

  add_money() {
    this.gained = Math.floor(Math.random()*(this.max_gain-1)+1);
    this.jetons += this.gained;
    if (this.random < 0.05) {
      this.gained += 40;
      this.jetons += 40;
    }
  }

  reset_money() {
    this.jetons = 0;
  }

  validate() {
    if (this.jetons == this.goal) {
      this.messageEvent.emit("captcha validated");
    }
    else
    {
      if (this.jetons > this.goal) {
        this.result_message = "Vous avez obtenu trop de jetons";
      }
      if (this.jetons < this.goal) {
        this.result_message = "Vous n'avez pas obtenu assez de jetons";
      }
      if (this.tries <= 1) {
        this.messageEvent.emit("captcha failed");
      }
      this.tries -= 1;
      this.reset_money();
    }
  }
  
}
