import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
        path: 'home',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'data-display/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'data-entries/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'interactions/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'notifications/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'lists',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'theming',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'scheduling',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'menus',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'layouts',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'services',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'tree-grid',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'grid',
        renderMode: RenderMode.Prerender
    },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
