import { TestBed } from '@angular/core/testing';

import { HoraTrabalhadaService } from './hora-trabalhada.service';

describe('HoraTrabalhadaService', () => {
  let service: HoraTrabalhadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoraTrabalhadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
