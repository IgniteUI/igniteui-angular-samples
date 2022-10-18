const Routes = {
    // Landing: '/',
    // GridFinjs: '/grid-finjs',
    // TreeGridFinjs: '/treegrid-finjs',
    // TreeGridChilddatakey: '/tree-grid/treegrid-childdatakey',
    // TreeGridPrimaryforeignkey: '/tree-grid/treegrid-primaryforeignkey',
    // BostonMarathon: '/grid/grid',
    // MasterDetail: '/grid/grid-master-detail',
    // FinJsDockManagerGrid: '/grid-finjs-dock-manager/grid-finjs-dock-manager',
    // HierarchicalGrid: '/hierarchical-grid/hierarchical-grid-resizing',

    // GridDynamicChartDataAnalysis: '/custom-product-space',
    // GridDynamicChartDataAnalysisDockmanager: '/custom-industry-space',

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

const metadata = [
    {
        url: Routes.Landing,
        title: defaultTitle,
        description: defaultDescription
    },
    {
        url: Routes.GridFinjs,
        title: 'GridFinjs | ' + defaultTitle,
        description: 'GridFinjs' + defaultDescription
    },
    {
        url: Routes.TreeGridFinjs,
        title: 'TreeGridFinjs | ' + defaultTitle,
        description: 'TreeGridFinjs' + defaultDescription
    },
    {
        url: Routes.TreeGridChilddatakey,
        title: 'TreeGridChilddatakey | ' + defaultTitle,
        description: 'TreeGridChilddatakey' + defaultDescription
    },
    {
        url: Routes.TreeGridPrimaryforeignkey,
        title: 'TreeGridPrimaryforeignkey | ' + defaultTitle,
        description: 'TreeGridPrimaryforeignkey' + defaultDescription
    },
    {
        url: Routes.BostonMarathon,
        title: 'BostonMarathon | ' + defaultTitle,
        description: 'BostonMarathon' + defaultDescription
    },
    {
        url: Routes.MasterDetail,
        title: 'MasterDetail | ' + defaultTitle,
        description: 'MasterDetail' + defaultDescription
    },
    {
        url: Routes.FinJsDockManagerGrid,
        title: 'FinJsDockManagerGrid | ' + defaultTitle,
        description: 'FinJsDockManagerGrid' + defaultDescription
    },
    {
        url: Routes.HierarchicalGrid,
        title: 'HierarchicalGrid | ' + defaultTitle,
        description: 'HierarchicalGrid' + defaultDescription
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
            description: defaultDescription
        }
    }
}

module.exports = {
    metadata,
    Routes,
    get,
};