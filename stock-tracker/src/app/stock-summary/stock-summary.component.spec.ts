/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { StockSummaryComponent } from './stock-summary.component';

describe('Component: StockSummary', () => {
  it('should create an instance', () => {
    let component = new StockSummaryComponent();
    expect(component).toBeTruthy();
  });
});
