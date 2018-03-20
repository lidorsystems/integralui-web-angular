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
import { IntegralUIScrollMode } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .lscrl-ovw-vertical
            {
                height: 200px;
            }

            /* Control Panel */
            .lscrl-ovw-container
            {
                float: left;
                width: 300px;
            }
            .lscrl-ovw-control-panel
            {
                float: left;
                margin-left: 150px;
                padding-left: 20px;
                width: 250px;
            }
        </style>
        <h2 class="feature-title">ListScroller / Overview</h2>
        <div class="feature-content">
            <div class="lscrl-ovw-container">
                <iui-listscroller [controlStyle]="ctrlStyle" [items]="items" [itemSize]="{ width: 64, height: 22 }" [scrollMode]="ctrlScrollMode" #listscroll>
                    <ng-template let-item>
                        <span>{{item.text}}</span>
                    </ng-template>
                </iui-listscroller>
            </div>
            <div class="lscrl-ovw-control-panel">
                <span>Scroll Mode:</span><br/><br/>
                <label><input type="radio" [checked]="ctrlScrollMode == 0" (click)="scrollModeClicked()" />Horizontal</label>
                <label><input type="radio" [checked]="ctrlScrollMode == 1"  (click)="scrollModeClicked(true)" />Vertical</label><br/><br/>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> ListScroller</strong> is a native Angular component that displays a scrollable item list in horizontal or vertical layout. You can specify the item size and add any custom HTML elements or Angular components in each item. In addition, using different CSS styles you can customize the component overall appearance.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">items</span> - Gets or sets the collection of items that are assigned to the component</li>
                    <li><span style="color:#c60d0d">itemSize</span> - Specifies the width and height of items</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">scrollMode</span> - Specifies whether the view is scrolled horizontally or vertically</li>
                    <li><span style="color:#c60d0d">selectedItem</span> - An object that points to the currently selected item</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <br/>
                    <li><span style="color:#c60d0d">afterSelect</span> - Occurs after item is selected</li>
                    <li><span style="color:#c60d0d">beforeSelect</span> - Occurs before item is selected</li>
                    <li><span style="color:#c60d0d">clear</span> - Occurs when all items are removed</li>
                    <li><span style="color:#c60d0d">itemAdded</span> - Occurs after item is added to the collection</li>
                    <li><span style="color:#c60d0d">itemAdding</span> - Occurs before item is added to the collection</li>
                    <li><span style="color:#c60d0d">itemRemoved</span> - Occurs after item is removed from the collection</li>
                    <li><span style="color:#c60d0d">itemRemoving</span> - Occurs before item is removed from the collection</li>
                    <li><span style="color:#c60d0d">scrollModeChanged</span> - Occurs when scrollMode property changes</li>
                    <li><span style="color:#c60d0d">scrollPosChanged</span> - Occurs when current scroll position changes</li>
                    <li><span style="color:#c60d0d">selectionChanged</span> - Occurs whenever selection changes from one item to another</li>
                    <li><span style="color:#c60d0d">updateComplete</span> - Occurs when updating of component layout is completed</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>listscroller/listscroller-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ListScrollerOverviewSample {

    public ctrlStyle: any = {
        general: { normal: 'lscrl-ovw-vertical' }
    }

    public ctrlScrollMode: IntegralUIScrollMode = IntegralUIScrollMode.Horizontal;
    public items: Array<any> = [];

    constructor(){
        for (let i = 1; i <= 10; i++){
            let item: any = {
                id: i,
                text : 'Item ' + i.toString()
            };

            this.items.push(item);
        }
    }

    scrollModeClicked(flag?: boolean){
        if (flag)
            this.ctrlScrollMode = IntegralUIScrollMode.Vertical;
        else
            this.ctrlScrollMode = IntegralUIScrollMode.Horizontal;
    }
}
