import { TestBed } from '@angular/core/testing';

import { PreisBerechnenService } from './preis-berechnen.service';

describe('PreisBerechnenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreisBerechnenService = TestBed.get(PreisBerechnenService);
    expect(service).toBeTruthy();
  });
});
