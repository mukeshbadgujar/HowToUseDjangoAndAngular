import { TestBed } from '@angular/core/testing';

import { QuickstartService } from './quickstart.service';

describe('QuickstartService', () => {
  let service: QuickstartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickstartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
