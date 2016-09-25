/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { StockSummaryListComponent } from './stock-summary-list.component';

describe('Component: StockSummaryList', () => {
  it('should create an instance', () => {
    let component = new StockSummaryListComponent();
    expect(component).toBeTruthy();
  });
});
