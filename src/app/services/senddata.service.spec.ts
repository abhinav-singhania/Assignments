import { TestBed, inject } from '@angular/core/testing';

import { SenddataService } from './senddata.service';

describe('SenddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SenddataService]
    });
  });

  it('should be created', inject([SenddataService], (service: SenddataService) => {
    expect(service).toBeTruthy();
  }));
});
