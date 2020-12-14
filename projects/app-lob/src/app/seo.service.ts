import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})

export class SEOService {
    private defaultTitle: string = 'Build Better Modern Web Experiences, Faster with Angular Components';
    private defaultDesc: string = 'Create feature-rich, progressive web apps with Ignite UI for Angular! A complete library for Angular native UI components, including the fastest Angular data grid and 60+ high-performance charts.'


    constructor(private title: Title, private meta: Meta) { }


    updateTitle(title: string) {
        title ? this.title.setTitle(title) : this.title.setTitle(this.defaultTitle);
    }

    updateDescription(desc: string) {
        desc ? this.meta.updateTag({ name: 'description', content: desc }) : this.meta.updateTag({ name: 'description', content: this.defaultDesc })
    }
}