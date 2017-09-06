import { TestBed, inject } from '@angular/core/testing';

import { WorldmapService } from './worldmap.service';

describe('WorldmapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorldmapService]
    });
  });

  it('should ...', inject([WorldmapService], (service: WorldmapService) => {
    expect(service).toBeTruthy();
  }));
});
