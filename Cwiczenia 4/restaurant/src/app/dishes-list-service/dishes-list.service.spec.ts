import { TestBed } from '@angular/core/testing';

import { DishesListService } from './dishes-list.service';

describe('DishService', () => {
  let service: DishesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
