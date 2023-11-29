import { TestBed } from '@angular/core/testing';

import { ControllerAppService } from './controller-app.service';

describe('ControllerAppService', () => {
  let service: ControllerAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
