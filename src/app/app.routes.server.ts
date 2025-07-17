import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
        path: 'home',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'samples/home',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'data-display/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'samples/data-display/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'data-entries/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'samples/data-entries/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'interactions/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'samples/interactions/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'notifications/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'samples/notifications/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'lists/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'samples/lists/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'theming/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'samples/theming/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'scheduling/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'samples/scheduling/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'menus/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'samples/menus/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'layouts/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'samples/layouts/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'services/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'samples/services/**',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'tree-grid/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'samples/tree-grid/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'grid/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'samples/grid/**',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: '**',
        renderMode: RenderMode.Client // TODO: Any leftover not covered above
    }
];
