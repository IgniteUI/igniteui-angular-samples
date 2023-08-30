const Routes = {
    Landing: '/',
    GridFinjs: '/grid-finjs',
    TreeGridFinjs: '/treegrid-finjs',
    TreeGridChilddatakey: '/treegrid-childdatakey',
    TreeGridPrimaryforeignkey: '/treegrid-primaryforeignkey',
    BostonMarathon: '/grid',
    MasterDetail: '/grid-master-detail',
    FinJsDockManagerGrid: '/grid-finjs-dock-manager',
    HierarchicalGrid: '/hierarchical-grid-resizing',
}

const defaultTitle = 'Data Grids built with Ignite UI for Angular';
const defaultDescription = 'Data Grids built with Ignite UI for Angular Description';
const defaultOgUrl = 'https://www.infragistics.com';

const metadata = [
    {
        url: Routes.Landing,
        title: defaultTitle,
        description: defaultDescription,
        og_url: defaultOgUrl,
        folder: ''
    },
    {
        url: Routes.GridFinjs,
        title: 'Real-Time Financial Analysis Data Grid built with Ignite UI for Angular',
        description: 'Real-Time Financial Analysis Data Grid built with Ignite UI for Angular',
        og_url: 'https://www.infragistics.com/angular-demos-lob/grid-finjs',
        folder: ''
    },
    {
        url: Routes.TreeGridFinjs,
        title: 'Angular Tree Grid Example built with Ignite UI for Angular',
        description: 'Angular Tree Grid Example built with Ignite UI for Angular',
        og_url: 'https://www.infragistics.com/angular-demos-lob/treegrid-finjs',
        folder: ''
    },
    {
        url: Routes.TreeGridChilddatakey,
        title: 'Build Better Modern Web Experiences, Faster with Angular Components',
        description: 'Create feature-rich, progressive web apps with Ignite UI for Angular! A complete library for Angular native UI components, including the fastest Angular data grid and 60+ high-performance charts.',
        og_url: 'https://www.infragistics.com/angular-demos-lob/tree-grid/treegrid-childdatakey',
        folder: 'tree-grid'
    },
    {
        url: Routes.TreeGridPrimaryforeignkey,
        title: 'Build Better Modern Web Experiences, Faster with Angular Components',
        description: 'Create feature-rich, progressive web apps with Ignite UI for Angular! A complete library for Angular native UI components, including the fastest Angular data grid and 60+ high-performance charts.',
        og_url: 'https://www.infragistics.com/angular-demos-lob/tree-grid/treegrid-primaryforeignkey',
        folder: 'tree-grid'
    },
    {
        url: Routes.BostonMarathon,
        title: 'Boston Marathon 2023 – Angular Data Grid Example',
        description: 'Boston Marathon 2023 – Angular Data Grid Example',
        og_url: 'https://www.infragistics.com/angular-demos-lob/grid/grid',
        folder: 'grid'
    },
    {
        url: Routes.MasterDetail,
        title: 'Angular Grid Master-Detail Example built with Ignite UI for Angular',
        description: 'Angular Grid Master-Detail Example built with Ignite UI for Angular',
        og_url: 'https://www.infragistics.com/angular-demos-lob/grid/grid-master-detail',
        folder: 'grid'
    },
    {
        url: Routes.FinJsDockManagerGrid,
        title: 'Build Better Modern Web Experiences, Faster with Angular Components',
        description: 'Create feature-rich, progressive web apps with Ignite UI for Angular! A complete library for Angular native UI components, including the fastest Angular data grid and 60+ high-performance charts.',
        og_url: 'https://www.infragistics.com/angular-demos-lob/grid-finjs-dock-manager/grid-finjs-dock-manager',
        folder: 'grid-finjs-dock-manager'
    },
    {
        url: Routes.HierarchicalGrid,
        title: 'Build Better Modern Web Experiences, Faster with Angular Components',
        description: 'Create feature-rich, progressive web apps with Ignite UI for Angular! A complete library for Angular native UI components, including the fastest Angular data grid and 60+ high-performance charts.',
        og_url: 'https://www.infragistics.com/angular-demos-lob/hierarchical-grid/hierarchical-grid-resizing',
        folder: 'hierarchical-grid'
    }
];

const get = (route) => {
    const data = metadata.find(({ url }) => url === route);
    if (data) {
        return data;
    } else {
        return {
            url: route,
            title: defaultTitle,
            description: defaultDescription,
            og_url: defaultOgUrl
        }
    }
}

module.exports = {
    metadata,
    Routes,
    get,
};
