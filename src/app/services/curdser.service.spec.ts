import { TestBed } from '@angular/core/testing';

import { CURDSERService } from './curdser.service';

describe('CURDSERService', () => {
  let service: CURDSERService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CURDSERService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
