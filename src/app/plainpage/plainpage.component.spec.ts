import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainpageComponent } from './plainpage.component';

describe('PlainpageComponent', () => {
  let component: PlainpageComponent;
  let fixture: ComponentFixture<PlainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
