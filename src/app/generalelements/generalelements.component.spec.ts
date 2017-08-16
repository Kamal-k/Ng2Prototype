import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralelementsComponent } from './generalelements.component';

describe('GeneralelementsComponent', () => {
  let component: GeneralelementsComponent;
  let fixture: ComponentFixture<GeneralelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
