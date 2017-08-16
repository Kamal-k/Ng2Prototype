import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMethodComponent } from './our-method.component';

describe('OurMethodComponent', () => {
  let component: OurMethodComponent;
  let fixture: ComponentFixture<OurMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
