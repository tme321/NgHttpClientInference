import { TestBed, inject } from '@angular/core/testing';

import { InferHttpGetService } from './infer-http-get.service';

describe('InferHttpGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InferHttpGetService]
    });
  });

  it('should be created', inject([InferHttpGetService], (service: InferHttpGetService) => {
    expect(service).toBeTruthy();
  }));
});
