import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
//    {
//        path: 'grid/grid',
//        renderMode: RenderMode.Client // TODO: Fails with Prerender
//    },
//    {
//        path: 'treegrid-finjs',
//        renderMode: RenderMode.Client // TODO: Fails with Prerender
//    },
//    {
//        path: 'samples/treegrid-finjs',
//        renderMode: RenderMode.Client // TODO: Fails with Prerender
//    },
//    {
//        path: 'grid-finjs-dock-manager/**',
//        renderMode: RenderMode.Client // TODO: Fails with Prerender
//    },
//    {
//        path: 'samples/grid-finjs-dock-manager/**',
//        renderMode: RenderMode.Client // TODO: Fails with Prerender
//    },
    {
        path: '**',
        renderMode: RenderMode.Client // SSR disabled for all routes
    }
];
