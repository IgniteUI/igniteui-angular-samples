import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { defineComponents, IgcDockManagerComponent } from 'igniteui-dockmanager';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppConfig } from './app/app.config';
import { initSampleSizeReporter } from '@shared/sample-size-reporter';

if (environment.production) {
    enableProdMode();
}

initSampleSizeReporter();

bootstrapApplication(AppComponent, AppConfig).catch(err => console.log(err));

defineComponents(IgcDockManagerComponent);
