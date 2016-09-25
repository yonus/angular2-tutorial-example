import { Component, OnInit , Input} from '@angular/core';
import {Router} from '@angular/router'
import {Stock} from '../shared/models/stock';

import {Highlight} from '../shared/directives/highlight.directive';

@Component({
  moduleId: module.id,
  selector: 'app-stock-detail',
  templateUrl: 'stock-detail.component.html',
  styleUrls: ['stock-detail.component.css'],
  directives: [Highlight] 
})
export class StockDetailComponent implements OnInit {
  @Input()
  stock:Stock;
  constructor(private router:Router) {}

  ngOnInit() {
  }

  gotoEdit(){
     this.router.navigate(["/manage" ,this.stock.symbol]);
  }

}
