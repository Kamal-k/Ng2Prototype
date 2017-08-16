import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesdynamicComponent } from './tablesdynamic.component';

describe('TablesdynamicComponent', () => {
  let component: TablesdynamicComponent;
  let fixture: ComponentFixture<TablesdynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesdynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesdynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
