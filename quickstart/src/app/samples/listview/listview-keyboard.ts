/*
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, HostListener, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUIScrollMode } from '../../integralui/components/integralui.core';
import { IntegralUIListView } from '../../integralui/components/integralui.listview';

@Component({
    selector: '',
    template: `
        <style>
            .listview-keynav-normal
            {
                width: 700px;
                height: 400px;
            }
            .listview-keynav-ctrl-button
            {
                margin: 20px 10px 0 0;
                width: 75px;
            }
            .listview-keynav-input-numeric
            {
                margin: 5px 20px 5px 0;
                width: 75px;
            }
            .listview-keynav-item-label
            {
                display: block;
                padding: 1px 0;
            }
            .listview-keynav-block
            {
                padding: 10px 0 20px 0;
            }
        </style>
        <h2 class="feature-title">ListView / Keyboard Navigation</h2>
        <div class="feature-content">
            <div style="width:700px;" #application>
                <div class="listview-keynav-block" align="center">
                    <label><input type="radio" [checked]="isScrollHorizontal()" (click)="scrollTypeClicked()" />Horizontal</label>
                    <label><input type="radio" [checked]="isScrollVertical()"  (click)="scrollTypeClicked(true)" />Vertical</label>
                </div>
                <iui-listview #listview [appRef]="applicationRef" [items]="items" [allowDrag]="true" [allowFocus]="true" [controlStyle]="listStyle" [scrollMode]="scrollType" [virtualMode]="true" [itemSize]="{ width: 125, height: 24 }" [allowFocus]="true">
                    <ng-template let-item>
                        <span class="listview-keynav-item-label">{{item.text}}</span>
                    </ng-template>
                </iui-listview>
                <br />
                <div align="center">
                    <span>Max items:</span> <input class="listview-keynav-input-numeric" type="number" [(ngModel)]="numItems" min="1" max="100000" />
                    <button (click)="add()" class="listview-keynav-ctrl-button">Add</button>
                    <button (click)="clear()" class="listview-keynav-ctrl-button">Clear</button>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>This sample demonstrates keyboard navigation in ListView component.</p>
                <p><span class="initial-space"></span>You can navigate among items using the following keys:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">Left Arrow</span> - moves the focus to one item left</li>
                    <li><span style="color:#c60d0d">Right Arrow</span> - moves the focus to one item right</li>
                    <li><span style="color:#c60d0d">Up Arrow</span> - moves the focus to one item up</li>
                    <li><span style="color:#c60d0d">Down Arrow</span> - moves the focus to one item down</li>
                    <li><span style="color:#c60d0d">PageUp</span> - moves one view up</li>
                    <li><span style="color:#c60d0d">PageDown</span> - moves one view down</li>
                    <li><span style="color:#c60d0d">Home</span> - moves the focus to the first item</li>
                    <li><span style="color:#c60d0d">End</span> - moves the focus to the last item</li>
                </ul>
                <p><span class="initial-space"></span>During navigation, if focused item is not present in current view, the list is scrolled accordingly.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>listview/listview-keyboard.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ListViewKeyboardSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('listview') listview: IntegralUIListView;

    public items: Array<any>;

    public numItems: number = 1000;

    public scrollType: IntegralUIScrollMode = IntegralUIScrollMode.Horizontal;  

    public listStyle: any = {
        general: {
            normal: 'listview-keynav-normal'
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
