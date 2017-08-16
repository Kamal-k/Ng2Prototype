import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chartjs2Component } from './chartjs2.component';

describe('Chartjs2Component', () => {
  let component: Chartjs2Component;
  let fixture: ComponentFixture<Chartjs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chartjs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chartjs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
