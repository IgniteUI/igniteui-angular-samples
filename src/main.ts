import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { environment } from './environments/environment';
import { defineCustomElements } from 'igniteui-dockmanager/loader';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppConfig } from './app/app.config';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {...AppConfig, providers: [provideZoneChangeDetection(), ...AppConfig.providers]}).catch(err => console.log(err));

defineCustomElements(window);
