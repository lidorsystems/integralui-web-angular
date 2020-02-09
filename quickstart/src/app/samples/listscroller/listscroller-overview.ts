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
import { IntegralUIScrollMode } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .lscrl-ovw-container
            {
                width: 275px;
            }
            .lscrl-ovw-item-normal
            {
                opacity: 0.5;
            }
            .lscrl-ovw-item-hovered, .lscrl-ovw-item-selected
            {
                opacity: 1;
            }

            .lscrl-ovw-icons
            {
                background: url(app/resources/movie-genres.png) no-repeat 0 0;
                display: inline-block;
                padding: 0;
                margin: 3px 0;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .adventure
            {
                background-position: -24px 0;
            }
            .comedy
            {
                background-position: -48px 0;
            }
            .action
            {
                background-position: -72px 0;
            }
            .sci-fi
            {
                background-position: -120px 0;
            }
            .biography
            {
                background-position: 0 -24px;
            }
            .horror
            {
                background-position: -24px -24px;
            }
            .drama
            {
                background-position: -48px -24px;
            }
            .music
            {
                background-position: -72px -24px;
            }
            .romance
            {
                background-position: -96px -24px;
            }
            .western
            {
                background-position: -120px -24px;
            }
        </style>
        <h2 class="feature-title">ListScroller / Overview</h2>
        <div class="feature-content">
            <div class="lscrl-ovw-container">
                <label><input type="checkbox" [(ngModel)]="listEnabled" style="margin-bottom:20px">Movies</label>
                <iui-listscroller [controlStyle]="ctrlStyle" [enabled]="listEnabled" [items]="items" [itemSize]="{ width: 48, height: 36 }" (selectionChanged)="onSelectionChanged($event)" #listscroll>
                    <ng-template let-item>
                        <div align="center">
                            <div class="lscrl-ovw-icons {{item.icon}}"></div>
                        </div>
                    </ng-template>
                </iui-listscroller>
                <div align="center" *ngIf="selectedItem" style="margin-top:10px">{{selectedItem.text}}</div>
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
                    <li><span style="color:#c60d0d">mouseWheelSpeed</span> - Specifies the scrolling speed of the mouse wheel</li>
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
        item: {
            general: { 
                normal: 'lscrl-ovw-item-normal',
                hovered: 'lscrl-ovw-item-hovered',
                selected: 'lscrl-ovw-item-selected'
            }
        }
    }

    public items: Array<any> = [];

    public listEnabled: boolean = true;
    public selectedItem: any = null;

    constructor(){
        this.items = [
            { id: 1, icon: "sci-fi", text: "Sci-Fi" },
            { id: 2, icon: "adventure", text: "Adventure",  },
            { id: 3, icon: "action", text: "Action " },
            { id: 4, icon: "drama", text: "Drama" },
            { id: 5, icon: "music", text: "Music" },
            { id: 6, icon: "comedy", text: "Comedy"  },
            { id: 7, icon: "biography", text: "Biography"  },
            { id: 8, icon: "crime", text: "Crime" },
            { id: 9, icon: "western", text: "Western"  },
            { id: 10, icon: "horror", text: "Horror" },
            { id: 11, icon: "romance", text: "Romance" }
        ];
    }

    onSelectionChanged(e: any){
        this.selectedItem = e.item;
    }
}
