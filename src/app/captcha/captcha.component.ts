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
  goal = 50;
  tries = 3;
  thune = 0;

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
      if (this.tries < 1) {
        this.messageEvent.emit("captcha failed");
      }
      this.tries -= 1;
      this.reset_money();
    }
  }
  
}
