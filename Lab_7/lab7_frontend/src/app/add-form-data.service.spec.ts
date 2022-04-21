import { TestBed } from '@angular/core/testing';

import { AddFormDataService } from './add-form-data.service';

describe('AddFormDataService', () => {
  let service: AddFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
