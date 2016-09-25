import { Component } from '@angular/core';

import {ROUTER_DIRECTIVES} from '@angular/router';

//Child Components
import {DashboardComponent} from './dashboard/dashboard.component';
import {ManageComponent} from './manage/manage.component';

//Service
import {StockService} from './shared/services/stock.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES,DashboardComponent,ManageComponent] ,
  providers: [StockService] 
  
})
export class AppComponent {
  title = 'app works!';
}
