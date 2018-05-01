import { TestBed, inject } from '@angular/core/testing';

import { WikipediaSearchAppService } from './wikipedia-search-app.service';

describe('WikipediaSearchAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikipediaSearchAppService]
    });
  });

  it('should be created', inject([WikipediaSearchAppService], (service: WikipediaSearchAppService) => {
    expect(service).toBeTruthy();
  }));
});
