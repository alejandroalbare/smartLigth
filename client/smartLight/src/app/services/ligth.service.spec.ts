import { TestBed } from '@angular/core/testing';

import { LigthService } from './ligth.service';

describe('LigthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigthService = TestBed.get(LigthService);
    expect(service).toBeTruthy();
  });
});
