import { Injectable } from '@angular/core';

//Models
import {Stock} from '../models/stock';
import {StockSummary} from '../models/stock-summary';

import {Http , Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operator/map'

@Injectable()
export class StockService {
  websocket:WebSocket;

  constructor(private http:Http) { }

  getStockSummaryListByObservable():Observable<StockSummary[]>{
   return  this.http.get("http://localhost:3100/getStocksSummary").map(res =>{
       let body = res.json();
       return body;
    })
  }

  getStock(symbol:string):Observable<Stock>{
    return this.http.get("http://localhost:3100/getStocks/"+symbol).map(res => res.json());
  }

  getStocks():Observable<Stock[]>{
    return this.http.get("http://localhost:3100/getStocks/").map(res => res.json());
  }

  getStockSummaryByWebSocket():Observable<StockSummary[]>{
      this.websocket = new WebSocket("ws://localhost:3100/wsapi/getCurrentStockSummary");
      this.websocket.onopen = (evt) =>{
        this.websocket.send("Get Stock Summary");
      }
      
      return Observable.create(observer =>{
          this.websocket.onmessage = (evt) =>{
            let stockSummaryList:StockSummary[] = <StockSummary[]>(JSON.parse(evt.data));
            observer.next(stockSummaryList);
          }
      });
      
  }

  saveStock(stock:Stock):Observable<Stock>{
    let body = {
      "stock":stock
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:3100/saveStock/",body).map(res =>res.json());
  }
}
