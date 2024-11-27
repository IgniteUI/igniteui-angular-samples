import { ApplicationConfig } from '@angular/core';
import { provideAnimations} from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from "@angular/common/http";



export const appConfig: ApplicationConfig = { providers: [provideHttpClient(), provideClientHydration(), provideAnimations()] };
