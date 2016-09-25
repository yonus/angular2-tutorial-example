import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';


import {APP_ROUTER_PROVIDERS}  from './app/app-route'

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[APP_ROUTER_PROVIDERS,,disableDeprecatedForms,provideForms() , HTTP_PROVIDERS]);

