import { TestBed } from '@angular/core/testing';

import { ReceptiService } from './recepti.service';

describe('ReceptiService', () => {
  let service: ReceptiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
