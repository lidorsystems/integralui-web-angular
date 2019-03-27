/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

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
            .trw-comp-normal
            {
                width: 350px;
                height: 400px;
            }
            .trw-comp-item-label
            {
                padding: 5px;
            }
            .trw-comp-list
            {
                width: 350px;
                height: 400px;
            }
        </style>
        <h2 class="feature-title">TreeView / Compact View</h2>
        <div class="feature-content">
            <div style="float:left">
                <iui-treeview [items]="treeItems" [controlStyle]="treeStyle" [virtualMode]="true" [compactMode]="true" #treeview>
                    <ng-template let-item>
                          <span class="trw-comp-item-label">{{item.text}}</span>
                    </ng-template>
                </iui-treeview>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span>This sample demonstrates the compact mode of the TreeView. This mode allows you to quickly navigate among tree hierarchy and work with thouse items that are closely related.</p>
                <p><span class="initial-space"></span>When compact mode is enabled, the visible tree shows only items related to the currently selected item, that is its parent(s), other siblings if collapsed and its children if expanded. Whenever a new item is selected the view can change.</p>
                <p><span class="initial-space"></span>To move to another item, collapse the currently selected item or select a new item. To display all root items, collapse the root item of the currently selected item.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-compact.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewCompactSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeview') treeview: IntegralUITreeView;
    
    // An array that holds a flat list of tree hierarchy
    private flatData: Array<any>;
    
    // An object that holds all items in the TreeView
    public treeItems: Array<any>;

    public treeStyle: any = {
        general: {
            normal: 'trw-comp-normal'
        }
    }

    constructor(){
        // At first TreeView doesn't have any data
        // We will use loadData method to load a flat list into the TreeView after the view is initialized
        this.treeItems = [];

        // Create a tree hierarchy
        this.flatData = [
            { id: 1, text: "Dairy", expanded: false },
            { id: 11, pid: 1, text: "Milk" },
            { id: 12, pid: 1, text: "Butter" },
            { id: 13, pid: 1, text: "Cheese", checked: true },
            { id: 14, pid: 1, text: "Yogurt" },
            { id: 2, text: "Fruits", checked: true },
            { id: 21, pid: 2, text: "Berries", expanded:  false},
            { id: 211, pid: 21, text: "BlackBerries" },
            { id: 212, pid: 21, text: "CranBerries", checked: true },
            { id: 213, pid: 21, text: "StrawBerries" },
            { id: 22, pid: 2, text: "Pits", checked: true },
            { id: 23, pid: 2, text: "Core" },
            { id: 24, pid: 2, text: "Citrus Fruits" },
            { id: 241, pid: 24, text: "Oranges" },
            { id: 242, pid: 24, text: "Lemons", checked: true },
            { id: 25, pid: 2, text: "Melons" },
            { id: 26, pid: 2, text: "Tropical Fruits", expanded: false },
            { id: 261, pid: 26, text: "Avocados", checked: true },
            { id: 262, pid: 26, text: "Bananas", checked: true },
            { id: 263, pid: 26, text: "Dates" },
            { id: 3, text: "Grains" },
            { id: 4, text: "Meat", checked: true },
            { id: 41, pid: 4, text: "Beef" },
            { id: 42, pid: 4, text: "Lamb", expanded: false },
            { id: 421, pid: 42, text: "Lamb Breast" },
            { id: 422, pid: 42, text: "Lamb Leg", checked: true },
            { id: 423, pid: 42, text: "Lamb Ribs" },
            { id: 43, pid: 4, text: "Pork", checked: true },
            { id: 5, text: "Sweets" },
            { id: 6, text: "Vegetables", checked: true },
            { id: 7, text: "Water" }
        ];
    }

    ngAfterViewInit(){
        this.treeview.loadData(this.flatData);

        // Initially the selected is set to Tropical Fruits
        this.treeview.selectedItem = this.treeview.findItemById(26);
    }
}
