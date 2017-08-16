import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlyphiconsComponent } from './glyphicons.component';

describe('GlyphiconsComponent', () => {
  let component: GlyphiconsComponent;
  let fixture: ComponentFixture<GlyphiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlyphiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlyphiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
