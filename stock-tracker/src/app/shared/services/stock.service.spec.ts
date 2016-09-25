/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { StockService } from './stock.service';

describe('Stock Service', () => {
  beforeEachProviders(() => [StockService]);

  it('should ...',
      inject([StockService], (service: StockService) => {
    expect(service).toBeTruthy();
  }));
});
