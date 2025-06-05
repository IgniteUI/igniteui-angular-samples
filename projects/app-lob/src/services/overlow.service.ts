
import { Injectable, DOCUMENT, inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OverflowService {
  private router = inject(Router);
  private document = inject<Document>(DOCUMENT);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      this.setOverflow(event.url);
    });
  }

  private setOverflow(url: string) {
    if (url.endsWith('finjs')) {
      this.document.body.style.overflow = 'auto';
    } else {
      this.document.body.style.overflow = 'hidden';
    }
  }
}
