/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, HostListener, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUISelectionMode } from '../../integralui/components/integralui.core';
import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';

@Component({
    selector: '',
    template: `
        <style>
            .treeview-keynav-normal
            {
                width: 400px;
                height: 400px;
            }
            .treeview-keynav-ctrl-button
            {
                margin: 20px 10px 0 0;
                width: 90px;
            }
            .treeview-keynav-input-numeric
            {
                margin: 5px 20px 5px 0;
                width: 75px;
            }
            .treeview-keynav-item-label
            {
                padding: 1px 0;
            }
            .treeview-keynav-control-panel button
            {
                margin: 5px 0;
                width: 125px;
            }
        </style>
        <h2 class="feature-title">TreeView / Keyboard Navigation</h2>
        <div class="feature-content">
            <div #application>
                <iui-treeview #treeview [appRef]="applicationRef" [items]="items" [allowDrag]="true" [controlStyle]="treeStyle" [virtualMode]="true" [allowFocus]="true">
                    <ng-template let-item>
                        <span class="treeview-keynav-item-label">{{item.text}}</span>
                    </ng-template>
                </iui-treeview>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px;">
                <p><span class="initial-space"></span>This sample demonstrates keyboard navigation in TreeView component.</p>
                <p><span class="initial-space"></span>You can navigate among cells using the following keys:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">Left Arrow</span> - collapses the item</li>
                    <li><span style="color:#c60d0d">Right Arrow</span> - expands the item</li>
                    <li><span style="color:#c60d0d">Up Arrow</span> - moves the focus to one item up</li>
                    <li><span style="color:#c60d0d">Down Arrow</span> - moves the focus to one item down</li>
                    <li><span style="color:#c60d0d">PageUp</span> - moves one view up</li>
                    <li><span style="color:#c60d0d">PageDown</span> - moves one view down</li>
                    <li><span style="color:#c60d0d">Home</span> - moves the focus to the first item</li>
                    <li><span style="color:#c60d0d">End</span> - moves the focus to the last item</li>
                </ul>
                <p><span class="initial-space"></span>During navigation, if item is not present in current view, the TreeView is scrolled accordingly. If item has the expand box, it will collapse/expand using the left/right arrow keys.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-keyboard.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewKeyboardSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treeview', { static: false }) treeview: IntegralUITreeView;

    public items: Array<any>;

    public numItems: number = 1000;
    public numLevels: number = 2;
    private itemCount: number = 0;

    public treeStyle: any = {
        general: {
            normal: 'treeview-keynav-normal'
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

                //this.treeview.addItem(item, parentItem);
                if (parentItem)
                    parentItem.items.push(item);
                else
                    this.items.push(item);

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
        this.clear();
        this.addItems(null, 0);

        this.treeview.updateLayout();
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
