import { TestBed } from '@angular/core/testing';

import { DatingService } from './dating-service.service';

describe('DatingServiceService', () => {
    let service: DatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
      service = TestBed.inject(DatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
