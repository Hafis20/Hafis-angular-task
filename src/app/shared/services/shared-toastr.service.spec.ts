import { TestBed } from '@angular/core/testing';

import { SharedToastrService } from './shared-toastr.service';

describe('SharedToastrService', () => {
  let service: SharedToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
