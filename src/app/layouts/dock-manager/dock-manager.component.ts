import {Component} from "@angular/core";
import { IgcDockManagerLayout,
         IgcDockManagerPaneType,
         IgcSplitPaneOrientation } from "@infragistics/igniteui-dockmanager";

@Component({
    selector: "dock-manager",
    templateUrl: "./dock-manager.component.html"
})
export class DockManagerComponent {
    public layout: IgcDockManagerLayout = {
        rootPane: {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: "content1",
                    header: "Content Pane 1"
                },
                {
                    type: IgcDockManagerPaneType.splitPane,
                    orientation: IgcSplitPaneOrientation.vertical,
                    size: 200,
                    panes: [
                        {
                            type: IgcDockManagerPaneType.documentHost,
                            size: 200,
                            rootPane: {
                                type: IgcDockManagerPaneType.splitPane,
                                orientation: IgcSplitPaneOrientation.horizontal,
                                panes: [
                                    {
                                        type: IgcDockManagerPaneType.tabGroupPane,
                                        panes: [
                                            {
                                                type: IgcDockManagerPaneType.contentPane,
                                                header: "Document 1",
                                                contentId: "content2"
                                            },
                                            {
                                                type: IgcDockManagerPaneType.contentPane,
                                                header: "Document 2",
                                                contentId: "content3"
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            type: IgcDockManagerPaneType.contentPane,
                            contentId: "content7",
                            header: "Unpinned Pane",
                            isPinned: false
                        }
                    ]
                },
                {
                    type: IgcDockManagerPaneType.tabGroupPane,
                    panes: [
                        {
                            type: IgcDockManagerPaneType.contentPane,
                            contentId: "content4",
                            header: "Tab 1"
                        },
                        {
                            type: IgcDockManagerPaneType.contentPane,
                            contentId: "content5",
                            header: "Tab 2"
                        }
                    ]
                }
            ]
        },
        floatingPanes: [
            {
                type: IgcDockManagerPaneType.splitPane,
                orientation: IgcSplitPaneOrientation.horizontal,
                floatingHeight: 150,
                floatingWidth: 250,
                floatingLocation: { x: 300, y: 200 },
                panes: [
                    {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: "content6",
                        header: "Floating Pane"
                    }
                ]
            }
        ]
    };
}
