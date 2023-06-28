import { TestBed } from '@angular/core/testing';

import { PokeInfoService } from './poke-info.service';

describe('PokeInfoService', () => {
  let service: PokeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
