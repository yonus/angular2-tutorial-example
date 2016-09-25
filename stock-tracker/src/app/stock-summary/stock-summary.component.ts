import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import {StockSummary} from '../shared/models/stock-summary';

@Component({
  moduleId: module.id,
  selector: 'app-stock-summary',
  templateUrl: 'stock-summary.component.html',
  styleUrls: ['stock-summary.component.css']
})
export class StockSummaryComponent implements OnInit {
  @Input()
  stockSummary:StockSummary;

  @Output()
  selectStockSummaryEvent:EventEmitter<StockSummary> = new EventEmitter<StockSummary>();


  

  constructor() {}

  ngOnInit() {
    
  }
   
  selectStockSummary(stockSummary:StockSummary){
     this.selectStockSummaryEvent.emit(stockSummary);
  }

   isPositive(){
     if(this.stockSummary && this.stockSummary.change > 0){
       return true;
     }
     return false;
   }

   isNegative(){
     if(this.stockSummary && this.stockSummary.change < 0){
       return true;
     }
     return false;
   }
}
