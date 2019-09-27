import { TestBed } from '@angular/core/testing';

import { ViaCepAPIService } from './via-cep-api.service';

describe('ViaCepAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViaCepAPIService = TestBed.get(ViaCepAPIService);
    expect(service).toBeTruthy();
  });
});
