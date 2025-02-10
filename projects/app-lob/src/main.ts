import { enableProdMode } from '@angular/core';
import { defineCustomElements } from 'igniteui-dockmanager/loader';


import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppConfig } from './app/app.config';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, AppConfig).catch(err => console.error(err));

defineCustomElements(window);
