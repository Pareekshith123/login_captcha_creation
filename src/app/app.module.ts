import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptchaVComponent } from './captcha-v/captcha-v.component';
import { CaptchaService } from './captcha.service';

@NgModule({
  declarations: [
    AppComponent,
    CaptchaVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [CaptchaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
