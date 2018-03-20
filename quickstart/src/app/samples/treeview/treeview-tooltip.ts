/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';

@Component({
    selector: '',
    template: `
        <style>
            .iui-treeview
            {
                background: white;
                width: 350px;
                height: 300px;
            }
        </style>
        <h2 class="feature-title">TreeView / Tooltip</h2>
        <div class="feature-content">
            <div style="width:400px" #application>
                <iui-treeview [items]="data" #treeview>
                    <ng-template let-item>
                        <span [iuiTooltip]="item.tooltip" [tooltipRef]="tooltipReference">{{item.text}}</span>
                    </ng-template>
                </iui-treeview>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In this sample you can see how to add a tooltip to each item in the TreeView component.</p>
                <p><span class="initial-space"></span>Whenever a mouse cursor enters the item label space, a tooltip will appear. To simplify this example, the default tooltip settings are used and only the tooltip title is set.</p>
                <p><span class="initial-space"></span>We are using the <a routerLink="../../tooltip">IntegralUI Tooltip</a> directive to apply a tooltip to TreeView items. Each item has a <span style="color:#c60d0d">tooltip</span> field that accepts an object with all options that determines the appearance and behavior of the tooltip.</p>
                <p><span class="initial-space"></span>In our example, all tooltips are set after the initial data is set. You can attach/detach a tooltip or change its settings at any time, changes are applied automatically.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-tooltip.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewTooltipSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeview') treeview: IntegralUITreeView;

    public data: Array<any>;
    public tooltipReference: any = null;

    constructor(){
        this.data = [
            { 
                id: 1,
                text: "Item1",
                items: [
                    { id: 11, pid: 1, text: "Item11" },
                    { 
                        id: 12,
                        pid: 1,
                        text: "Item12",
                        items: [
                            { id: 121, pid: 12, text: "Item121" },
                            { 
                                id: 122,
                                pid: 12,
                                text: "Item122", 
                                expanded: false,
                                items: [
                                    { id: 1221, pid: 122, text: "Item1221" },
                                    { id: 1222, pid: 122, text: "Item1222" }
                                ]
                            },
                            { id: 123, pid: 12, text: "Item123" },
                            { id: 124, pid: 12, text: "Item124" },
                            { id: 125, pid: 12, text: "Item125" }
                        ]
                    },
                    { id: 13, pid: 1, text: "Item13" },
                    {
                        id: 14,
                        pid: 1,
                        text: "Item14", 
                        items: [
                            { id: 141, pid: 14, text: "Item141" },
                            { id: 142, pid: 14, text: "Item142" }
                        ]
                    }
                ]
            },
            {
                id: 2,
                text: "Item2",
                expanded: false,
                items: [
                    { id: 21, pid: 2, text: "Item21" },
                    { id: 22, pid: 2, text: "Item22" },
                    {
                        id: 23,
                        pid: 2,
                        text: "Item23", 
                        expanded: false,
                        items: [
                            { id: 231, pid: 23, text: "Item231" },
                            { id: 232, pid: 23, text: "Item232" }
                        ]
                    }
                ]
            },
            { id: 3, text: "Item3" },
            { id: 4, text: "Item4" },
            { id: 5, text: "Item5" },
            {
                id: 6,
                text: "Item6",
                items: [
                    { id: 61, pid: 6, text: "Item61" },
                    { id: 62, pid: 6, text: "Item62" }
                ]
            },
            { id: 7, text: "Item7" }
        ];
    }


    ngAfterViewInit(){
        // Set the reference component by which the position of tooltip is calculated
        // Usually, the appRef should point to the root component, to avoid position adjustment
        this.tooltipReference = this.applicationRef;

        // Get a flat list of all items in tree hierarchy
        let list: Array<any> = this.treeview.getFullList();

        if (list)
            for (let i = 0; i < list.length; i++)
                list[i].tooltip = {
                    title: list[i].text
                }

    }
}
