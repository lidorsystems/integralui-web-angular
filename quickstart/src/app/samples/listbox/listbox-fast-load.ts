/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUISelectionMode } from '../../integralui/components/integralui.core';
import { IntegralUIListBox } from '../../integralui/components/integralui.listbox';

@Component({
    selector: '',
    template: `
        <style>
            .listbox-fsld-normal
            {
                width: 900px;
                height: 400px;
            }
            .listbox-fsld-ctrl-button
            {
                margin: 20px 10px 0 0;
                width: 75px;
            }
            .listbox-fsld-input-numeric
            {
                margin: 5px 20px 5px 0;
                width: 75px;
            }
            .listbox-fsld-item-label
            {
                padding: 1px 0;
            }
        </style>
        <h2 class="feature-title">ListBox / Fast Load</h2>
        <div class="feature-content">
            <div #application>
                <iui-listbox #listbox [appRef]="applicationRef" [items]="items" [allowDrag]="true" [controlStyle]="listStyle" [selectionMode]="selMode" [virtualMode]="true">
                    <ng-template let-item>
                        <span class="listbox-fsld-item-label">{{item.text}}</span>
                    </ng-template>
                </iui-listbox>
                <br />
                <div align="center">
                    <span>Max items:</span> <input class="listbox-fsld-input-numeric" type="number" [(ngModel)]="numItems" min="1" max="100000" />
                    <button (click)="add()" class="listbox-fsld-ctrl-button">Add</button>
                    <button (click)="clear()" class="listbox-fsld-ctrl-button">Clear</button>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>In above demo, you can choose how many items to display in the ListBox. For demonstration purposes only, a limit is set to 100,000 items. In real scenario, the only limit is how much data the browser can handle. By clicking on the Add button, the ListBox is populated with custom data.</p>
                <p><span class="initial-space"></span>To start a drag and drop operation, left-click on an item and move the mouse cursor, so that you can reorder items during run-time. In this example, there are no restrictions set, and you can drag and drop an item or multiple items and place them above or below another item. However, if you want you can set conditions and provide custom drag drop operations on your own.</p>
                <p><span class="initial-space"></span>To select multiple items, hold SHIFT or CTRL key and click on specific item.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>listbox/listbox-fast-load.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ListBoxFastLoadSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('listbox') listbox: IntegralUIListBox;

    public items: Array<any>;

    public numItems: number = 10000;

    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;

    public listStyle: any = {
        general: {
            normal: 'listbox-fsld-normal'
        }
    }

    constructor(){
        this.items = [];
    } 
    
    ngAfterViewInit(){
        this.add();
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

        this.listbox.updateLayout();
    }

    clear(){
        this.listbox.clearItems();
        this.listbox.updateLayout();
    }
}
