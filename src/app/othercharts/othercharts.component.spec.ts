import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherchartsComponent } from './othercharts.component';

describe('OtherchartsComponent', () => {
  let component: OtherchartsComponent;
  let fixture: ComponentFixture<OtherchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
