import { TestBed } from '@angular/core/testing';

import { ServicePracticeService } from './service-practice.service';

describe('ServicePracticeService', () => {
  let service: ServicePracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
