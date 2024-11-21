import { ApplicationConfig, Provider } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';



export const appConfig: ApplicationConfig = { providers: [provideClientHydration(), provideAnimations()] };
