import { enableProdMode } from '@angular/core';
import { defineComponents, IgcDockManagerComponent } from 'igniteui-dockmanager';


import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppConfig } from './app/app.config';
import { initSampleSizeReporter } from '@shared/sample-size-reporter';

if (environment.production) {
    enableProdMode();
}

initSampleSizeReporter();

bootstrapApplication(AppComponent, AppConfig).catch(err => console.error(err));

defineComponents(IgcDockManagerComponent);
