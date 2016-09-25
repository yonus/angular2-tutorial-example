import { Component, OnInit } from '@angular/core';
//Models
import {Stock} from '../shared/models/stock';
import {StockSummary} from '../shared/models/stock-summary';

//directives: `[directive1,directive2]` 
import{StockSummaryListComponent} from '../stock-summary-list/stock-summary-list.component'
import{StockDetailComponent} from '../stock-detail/stock-detail.component';
 
//Services
import {StockService} from '../shared/services/stock.service';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [StockSummaryListComponent,StockDetailComponent],
   
})
export class DashboardComponent implements OnInit {
   selectedStock:Stock;
   stockSummaryList:StockSummary[];
  constructor(private stockService:StockService) { // Inject Stock service
  }

  ngOnInit() {
    // this.stockSummaryList = this.stockService.getStokSummaryList(); 
     this.stockService.getStockSummaryByWebSocket().subscribe(data =>{
       this.stockSummaryList = data;
     });
}

openStockDetail(symbol:string){
    this.stockService.getStock(symbol).subscribe(stock => this.selectedStock = stock);
}

}
