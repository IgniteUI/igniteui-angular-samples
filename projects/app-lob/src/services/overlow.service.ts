import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OverflowService {
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      this.setOverflow(event.url);
    });
  }

  private setOverflow(url: string) {
    if (url.endsWith('finjs')) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
}
