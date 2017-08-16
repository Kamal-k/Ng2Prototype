import { TestBed, inject } from '@angular/core/testing';

import { LeftNavService } from './left-nav.service';

describe('LeftNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftNavService]
    });
  });

  it('should ...', inject([LeftNavService], (service: LeftNavService) => {
    expect(service).toBeTruthy();
  }));
});
