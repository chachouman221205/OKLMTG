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
  goal = Math.floor(Math.random() * 50);
  tries = 10;
  thune = 0;
  result_message = "";

  add_money() {
    this.thune += 1;
  }

  reset_money() {
    this.thune = 0;
  }

  validate() {
    if (this.thune == this.goal) {
      this.messageEvent.emit("captcha validated");
    }
    else
    {
      if (this.thune > this.goal) {
        this.result_message = "Vous avez obtenu trop d'argent";
      }
      if (this.thune < this.goal) {
        this.result_message = "Vous n'avez pas obtenu assez d'argent";
      }
      if (this.tries < 1) {
        this.messageEvent.emit("captcha failed");
      }
      this.tries -= 1;
      this.reset_money();
    }
  }
  
}
