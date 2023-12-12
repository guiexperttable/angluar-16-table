import { TestBed } from '@angular/core/testing';
import {DomService} from "angular-table";



describe('DomService', () => {
  let service: DomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
