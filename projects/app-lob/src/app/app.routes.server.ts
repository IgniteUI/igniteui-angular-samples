import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
        path: 'treegrid-finjs',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'samples/treegrid-finjs',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: 'samples/grid-finjs-dock-manager',
        renderMode: RenderMode.Client // TODO: Fails with Prerender
    },
    {
        path: '**',
        renderMode: RenderMode.Prerender
    }
];
