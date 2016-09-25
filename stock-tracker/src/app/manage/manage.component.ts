import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {Stock} from '../shared/models/stock';
import {StockService} from '../shared/services/stock.service';

@Component({
  moduleId: module.id,
  selector: 'app-manage',
  templateUrl: 'manage.component.html',
  styleUrls: ['manage.component.css']
})
export class ManageComponent implements OnInit {
  editStock:Stock ;
  listStock:Stock[];
  isNew:boolean = false;
  constructor(private stockService:StockService, private route:ActivatedRoute) {}
                        
  ngOnInit() {
    this.editStock = new Stock();
    this.route.params.subscribe(params =>{
        //edit mode
        if(params["symbol"]){
            this.stockService.getStocks().subscribe(stockList =>{
               this.editStock = stockList.filter(stock => stock.symbol === params["symbol"])[0];
               this.listStock = stockList;
            });
          this.isNew = false;
        }else{ // new mode
           this.getStockList();
           this.isNew = true;
        }
    })
  }

  onChangeSymbol($event){
    let symbol = $event.target.value;
    this.editStock = this.listStock.filter(stock => stock.symbol == symbol)[0]
    
  }

  onSubmit(){
    this.stockService.saveStock(this.editStock).subscribe(stock =>{
        let index = this.listStock.findIndex(foundStock => foundStock.symbol === stock.symbol);
        if(index >= 0){
          this.listStock[index] = stock;
        }else{
          this.listStock.push(stock);
        }
    })
  }
  clear(){
    this.editStock = new Stock();
    this.isNew = true;
  }

  private getStockList(){
      this.stockService.getStocks().subscribe(stockList => this.listStock = stockList);
  }

}
