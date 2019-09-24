/*
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUISelectionMode } from '../../integralui/components/integralui.core';
import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';

@Component({
    selector: '',
    template: `
        <style>
            .treeview-fsld-normal
            {
                float: left;
                width: 400px;
                height: 400px;
            }
            .treeview-fsld-input-numeric
            {
                margin: 5px 20px 5px 0;
                width: 75px;
            }
            .treeview-fsld-item-label
            {
                padding: 1px 0;
            }
            .treeview-add-rmv-control-panel button
            {
                margin: 5px 0;
                width: 125px;
            }
        </style>
        <h2 class="feature-title">TreeView / Fast Load</h2>
        <div class="feature-content">
            <div #application>
                <iui-treeview #treeview [appRef]="applicationRef" [items]="items" [allowDrag]="true" [controlStyle]="treeStyle" [selectionMode]="selMode" [virtualMode]="true">
                    <ng-template let-item>
                        <span class="treeview-fsld-item-label">{{item.text}}</span>
                    </ng-template>
                </iui-treeview>
                <br />
                <div class="control-panel">
                    <table>
                        <tr>
                            <td>Max items: </td>
                            <td class="align-left"><input type="number" [(ngModel)]="numItems" min="1" max="100000" style="width:75px" integer /></td>
                        </tr>
                        <tr>
                            <td>Levels: </td>
                            <td class="align-left"><input type="number" [(ngModel)]="numLevels" min="0" max="100" style="width:75px" integer /></td>
                        </tr>
                    </table>
                    <div align="center" style="margin-top:20px">
                        <button (click)="add()" style="width:65px; margin-right:10px">Add</button>
                        <button (click)="clear()" style="width:65px">Clear</button>
                    </div>
                    <div align="center" style="margin-top:20px">
                        <button (click)="expandAll()" style="margin-bottom:5px;width:140px">Expand All</button>
                        <button (click)="collapseAll()" style="width:140px">Collapse All</button>
                    </div>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In above demo, you can choose how many items to display in the TreeView. For demonstration purposes only, a limit is set to 100,000 items. In real scenario, the only limit is how much data the bitemser can handle. By clicking on the Add button, the TreeView is populated with custom data.</p>
                <p><span class="initial-space"></span>To start a drag and drop operation, left-click on a item and move the mouse cursor, so that you can reorder items during run-time. In this example, there are no restrictions set, and you can drag and drop a item and place it above or below another item. However, if you want you can set conditions and provide custom drag drop operations on your own.</p>
                <p><span class="initial-space"></span>To select multiple items, hold SHIFT or CTRL key and click on specific item.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-fast-load.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewFastLoadSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treeview', { static: false }) treeview: IntegralUITreeView;

    public items: Array<any>;

    public numItems: number = 10000;
    public numLevels: number = 3;
    private itemCount: number = 0;

    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;

    public treeStyle: any = {
        general: {
            normal: 'treeview-fsld-normal'
        }
    }

    constructor(){
        this.items = [];
    } 
    
    ngAfterViewInit(){
        this.add();
    }

    addItems(parentItem: any, level: number){
        if (level > this.numLevels)
            return;
            
        let numChilds = this.getRandomNumber(level);    
        for (let i = 0; i < numChilds; i++){
            if (this.itemCount < this.numItems){
                let item: any = {
                    text : 'Item ' + (this.itemCount+1).toString(),
                    id: this.itemCount,
                    expanded : false,
                    items: []
                };

                this.treeview.addItem(item, parentItem);
                this.itemCount++;
            
                this.addItems(item, level + 1);
            }
        }
    }
            
    // Make sure each item has a random set of child items
    getRandomNumber(level: number){
        let nCount: number = 1 + Math.floor(Math.random() * 10);
        
        if (level === 0){
            if (this.numLevels == 0)
                nCount = this.numItems;
            else {
                let derivative = 1;
                for (var k = 1; k <= this.numLevels; k++)
                    derivative = (derivative * nCount) + 1;

                nCount = this.numItems / derivative + 1;
                if (nCount < 1000)
                    nCount = 1000;
            }
        }
        
        return nCount;
    }

    add(){
        this.treeview.suspendLayout();

        this.clear();
        this.addItems(null, 0);

        this.treeview.resumeLayout();
    }

    clear(){
        this.itemCount = 0;

        this.treeview.clearItems();
        this.treeview.updateLayout();
    }

    expandAll(){
        this.treeview.expand();
    }

    collapseAll(){
        this.treeview.collapse();
    }
}
