import { TestBed } from '@angular/core/testing';

import { RecieveTranslationsService } from './recieve-translations.service';

describe('RecieveTranslationsService', () => {
  let service: RecieveTranslationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecieveTranslationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
