import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { CaptchaComponent } from "./captcha/captcha.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, CommonModule, CaptchaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oklmtg';
  stage = 'welcome';
  gotocaptcha() {
    this.stage='captcha';
  }
  receiveMessage($event: string) {
    if ($event == "captcha validated") {
      this.stage = "home";
    }
    else if ($event == "captcha failed") {
      this.stage = "denied";
    }
  }

}
