import { provideRouter, RouterConfig } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ManageComponent} from './manage/manage.component';
import {StockDetailComponent} from './stock-detail/stock-detail.component';

export const routes: RouterConfig = [
  { path: '', component: DashboardComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'manage/:symbol', component: ManageComponent },

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];