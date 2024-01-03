import { TestBed } from '@angular/core/testing';

import { GaurdSerService } from './gaurd-ser.service';

describe('GaurdSerService', () => {
  let service: GaurdSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaurdSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
