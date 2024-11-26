import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { defineCustomElements } from 'igniteui-dockmanager/loader';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch(err => console.log(err));

defineCustomElements(window);
