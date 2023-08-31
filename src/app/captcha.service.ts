import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  generateMixedCaptcha(length: number): { question: string, answer: string } {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captchaText += characters.charAt(randomIndex);
    }
    return { question: captchaText, answer: captchaText };
  }
}
 