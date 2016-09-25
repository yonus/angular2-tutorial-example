import { Component, OnInit , Input, Output,EventEmitter} from '@angular/core';
//Models
import {StockSummary} from '../shared/models/stock-summary';

//directives: `[directive1,directive2]` 
import {StockSummaryComponent} from '../stock-summary/stock-summary.component';

@Component({
  moduleId: module.id,
  selector: 'app-stock-summary-list',
  templateUrl: 'stock-summary-list.component.html',
  styleUrls: ['stock-summary-list.component.css'],
  directives:[StockSummaryComponent] 
})
export class StockSummaryListComponent implements OnInit {
  @Input()
  stockSummaryList:StockSummary[];

  @Output()
  openStockDetailNotify:EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  
selectStockSummary(stockSummary:StockSummary){
   this.openStockDetailNotify.emit(stockSummary.symbol);
}      

}
