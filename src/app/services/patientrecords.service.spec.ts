import { TestBed } from '@angular/core/testing';

import { PatientrecordsService } from './patientrecords.service';

describe('PatientrecordsService', () => {
  let service: PatientrecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientrecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
