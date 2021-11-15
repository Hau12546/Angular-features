import { TestBed } from '@angular/core/testing';

import { ObserUserService } from './obser-user.service';

describe('ObserUserService', () => {
  let service: ObserUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
