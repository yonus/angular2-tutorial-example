/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Stock} from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock()).toBeTruthy();
  });
});
