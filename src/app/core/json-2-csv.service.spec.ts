import { TestBed } from '@angular/core/testing';

import { Json2CsvService } from './json-2-csv.service';

describe('Json2CsvService', () => {
  let service: Json2CsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Json2CsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
