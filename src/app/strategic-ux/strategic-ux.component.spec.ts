import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicUxComponent } from './strategic-ux.component';

describe('StrategicUxComponent', () => {
  let component: StrategicUxComponent;
  let fixture: ComponentFixture<StrategicUxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicUxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
