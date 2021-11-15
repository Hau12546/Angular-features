import { TestBed } from '@angular/core/testing';

import { ObsrevableHandlerService } from './obsrevable-handler.service';

describe('ObsrevableHandlerService', () => {
  let service: ObsrevableHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObsrevableHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
