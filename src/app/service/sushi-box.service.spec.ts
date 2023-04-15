import { TestBed } from '@angular/core/testing';

import { SushiBoxService } from './sushi-box.service';

describe('SushiBoxService', () => {
  let service: SushiBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SushiBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
