import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormwizardscalendarComponent } from './formwizardscalendar.component';

describe('FormwizardscalendarComponent', () => {
  let component: FormwizardscalendarComponent;
  let fixture: ComponentFixture<FormwizardscalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormwizardscalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormwizardscalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
