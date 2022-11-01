import { TestBed } from '@angular/core/testing';

import { DatingServiceService } from './dating-service.service';

describe('DatingServiceService', () => {
  let service: DatingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
