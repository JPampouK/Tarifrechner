import { TestBed } from '@angular/core/testing';

import { GetTarifeService } from './get-tarife.service';

describe('GetTarifeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTarifeService = TestBed.get(GetTarifeService);
    expect(service).toBeTruthy();
  });
});
