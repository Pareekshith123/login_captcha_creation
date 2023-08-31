import { Component, OnInit,NgZone  } from '@angular/core';
import { CaptchaService } from '../captcha.service';
@Component({
  selector: 'app-captcha-v',
  templateUrl: './captcha-v.component.html',
  styleUrls: ['./captcha-v.component.css']
})
export class CaptchaVComponent implements OnInit {
  captcha: { question: string, answer: string } = { question: '', answer: '' };
  userAnswer: string='' ;
  resultMessage: string ='';
  captchaboolean:boolean=false;

  constructor(private captchaService: CaptchaService ,private ngZone: NgZone) { }

  ngOnInit(): void {
    this.generateNewCaptcha();
   
  }

  generateNewCaptcha(): void {
    this.captcha = this.captchaService.generateMixedCaptcha(6); // Adjust the length as needed
    // Assign the captcha question text to userAnswer
  }
  

  checkAnswer(string:any): void {
    if (this.userAnswer === this.captcha.answer) {
      this.resultMessage = 'Captcha passed!';
      this.captchaboolean=true;
    } else {
      this.resultMessage = 'Captcha failed. Please try again.';
      this.ngZone.run(() => {
        console.log('Generating new captcha...');
        this.generateNewCaptcha();
      });
    }
    console.log('Result Message:', this.userAnswer);
  }
  captchaPassed(): boolean {
    return this.resultMessage === 'Captcha passed!';
  }
  
}
