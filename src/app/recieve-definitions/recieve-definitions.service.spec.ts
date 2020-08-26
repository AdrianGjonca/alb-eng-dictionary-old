import { TestBed } from '@angular/core/testing';

import { RecieveDefinitionsService } from './recieve-definitions.service';

describe('RecieveDefinitionsService', () => {
  let service: RecieveDefinitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecieveDefinitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
