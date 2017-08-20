import { TestBed, inject } from '@angular/core/testing';

import { ContatoSearchService } from './contato-search.service';

describe('ContatoSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatoSearchService]
    });
  });

  it('should be created', inject([ContatoSearchService], (service: ContatoSearchService) => {
    expect(service).toBeTruthy();
  }));
});
