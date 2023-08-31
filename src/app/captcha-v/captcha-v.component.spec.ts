import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaVComponent } from './captcha-v.component';

describe('CaptchaVComponent', () => {
  let component: CaptchaVComponent;
  let fixture: ComponentFixture<CaptchaVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptchaVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptchaVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
