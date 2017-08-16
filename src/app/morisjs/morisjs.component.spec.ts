import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorisjsComponent } from './morisjs.component';

describe('MorisjsComponent', () => {
  let component: MorisjsComponent;
  let fixture: ComponentFixture<MorisjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorisjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorisjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
