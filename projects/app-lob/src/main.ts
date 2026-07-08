import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { defineCustomElements } from 'igniteui-dockmanager/loader';


import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppConfig } from './app/app.config';
import { initSampleSizeReporter } from '@shared/sample-size-reporter';

if (environment.production) {
    enableProdMode();
}

initSampleSizeReporter();

bootstrapApplication(AppComponent, {...AppConfig, providers: [provideZoneChangeDetection(), ...AppConfig.providers]}).catch(err => console.error(err));

defineCustomElements(window);
