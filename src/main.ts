import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { environment } from './environments/environment';
import { defineCustomElements } from 'igniteui-dockmanager/loader';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppConfig } from './app/app.config';
import { initSampleSizeReporter } from '@shared/sample-size-reporter';

if (environment.production) {
    enableProdMode();
}

initSampleSizeReporter();

bootstrapApplication(AppComponent, {...AppConfig, providers: [provideZoneChangeDetection(), ...AppConfig.providers]}).catch(err => console.log(err));

defineCustomElements(window);
