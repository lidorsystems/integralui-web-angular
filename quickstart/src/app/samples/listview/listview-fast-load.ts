/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUIScrollMode, IntegralUISelectionMode } from '../../integralui/components/integralui.core';
import { IntegralUIListView } from '../../integralui/components/integralui.listview';

@Component({
    selector: '',
    template: `
        <style>
            .listview-fsld-normal
            {
                width: 900px;
                height: 400px;
            }
            .listview-fsld-ctrl-button
            {
                margin: 20px 10px 0 0;
                width: 75px;
            }
            .listview-fsld-input-numeric
            {
                margin: 5px 20px 5px 0;
                width: 75px;
            }
            .listview-fsld-item-label
            {
                padding: 1px 0;
            }
            .listview-fsld-block
            {
                padding: 10px 0 20px 0;
                width: 900px;
            }
        </style>
        <h2 class="feature-title">ListView / Fast Load</h2>
        <div class="feature-content">
            <div #application>
                <div class="listview-fsld-block" align="center">
                    <label><input type="radio" [checked]="isScrollHorizontal()" (click)="scrollTypeClicked()" />Horizontal</label>
                    <label><input type="radio" [checked]="isScrollVertical()"  (click)="scrollTypeClicked(true)" />Vertical</label>
                </div>
                <iui-listview #listview [appRef]="applicationRef" [items]="items" [allowDrag]="true" [controlStyle]="listStyle" [scrollMode]="scrollType" [selectionMode]="selMode" [virtualMode]="true" [itemSize]="{ width: 125, height: 24 }">
                    <ng-template let-item>
                        <span class="listview-fsld-item-label">{{item.text}}</span>
                    </ng-template>
                </iui-listview>
                <br />
                <div align="center">
                    <span>Max items:</span> <input class="listview-fsld-input-numeric" type="number" [(ngModel)]="numItems" min="1" max="100000" />
                    <button (click)="add()" class="listview-fsld-ctrl-button">Add</button>
                    <button (click)="clear()" class="listview-fsld-ctrl-button">Clear</button>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>In above demo, you can choose how many items to display in the ListView. For demonstration purposes only, a limit is set to 100,000 items. In real scenario, the only limit is how much data the browser can handle. By clicking on the Add button, the ListView is populated with custom data.</p>
                <p><span class="initial-space"></span>To start a drag and drop operation, left-click on a item and move the mouse cursor, so that you can reorder items during run-time. In this example, there are no restrictions set, and you can drag and drop a item and place it above or below another item. However, if you want you can set conditions and provide custom drag drop operations on your own.</p>
                <p><span class="initial-space"></span>To select multiple items, hold SHIFT or CTRL key and click on specific item.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>listview/listview-fast-load.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ListViewFastLoadSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('listview') listview: IntegralUIListView;

    public items: Array<any>;

    public numItems: number = 10000;

    public scrollType: IntegralUIScrollMode = IntegralUIScrollMode.Horizontal;  
    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;

    public listStyle: any = {
        general: {
            normal: 'listview-fsld-normal'
        }
    }

    constructor(){
        this.items = [];
    } 
    
    ngAfterViewInit(){
        this.add();
    }

    isScrollHorizontal(){
        return this.scrollType == IntegralUIScrollMode.Horizontal ? true : false;
    }

    isScrollVertical(){
        return this.scrollType == IntegralUIScrollMode.Vertical ? true : false;
    }

    scrollTypeClicked(flag?: boolean){
        if (flag)
            this.scrollType = IntegralUIScrollMode.Vertical;
        else
            this.scrollType = IntegralUIScrollMode.Horizontal;
    }

    addItems(){
        for (let i = 1; i <= this.numItems; i++){
            let item: any = {
                text : 'Item ' + i.toString(),
                id: i
            };

            this.items.push(item);
        }
    }

    add(){
        this.clear();
        this.addItems();

        this.listview.updateLayout();
    }

    clear(){
        this.listview.clearItems();
        this.listview.updateLayout();
    }
}
