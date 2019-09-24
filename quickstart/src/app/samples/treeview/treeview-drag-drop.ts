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
            .trw-dd-normal
            {
                float: left;
                margin-right: 20px;
                width: 350px;
                height: 300px;
            }
            .trw-dd-normal .iui-treeitem-expand-box
            {
                margin-top: 4px !important;
            }
            .trw-dd-icons-medium
            {
                background-image: url(app/integralui/resources/icons-x24.png);
                background-position: 0 0;
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0 !important;
                margin: 0 1px 0 5px;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .trw-dd-icons-empty
            {
                display: inline-block;
                padding: 0 !important;
                height: 24px;
                vertical-align: middle;
            }
            .library
            {
                background-position: 0 -72px;
            }
            .economics
            {
                background-position: -24px -72px;
            }
            .people
            {
                background-position: -120px -72px;
            }
            .heart
            {
                background-position: -168px -72px;
            }
            .album
            {
                background-position: -144px -48px;
            }
            .camera
            {
                background-position: -168px -48px;
            }
            .software
            {
                background-position: -48px -72px;
            }
            .clock
            {
                background-position: -72px -72px;
            }
            .sports
            {
                background-position: -96px -72px;
            }
            .trw-dd-item-label
            {
                display: inline-block;
                padding: 3px 0;
                vertical-align: middle;
            }
        </style>
        <h2 class="feature-title">TreeView / Drag Drop</h2>
        <div class="feature-content">
            <div #application>
                <iui-treeview [name]="'TreeView 1'" [appRef]="applicationRef" [items]="data" [controlStyle]="treeStyle" [allowDrag]="allowDrag" [allowDrop]="allowDrop" [autoExpand]="false" #treeview>
                    <ng-template let-item>
                        <span [ngClass]="getItemIcon(item)"></span>
                        <span class="trw-dd-item-label">{{item.text}}</span>
                    </ng-template>
                </iui-treeview>
                <iui-treeview [name]="'TreeView 2'" [appRef]="applicationRef" [items]="data2" [controlStyle]="treeStyle" [allowDrag]="allowDrag2" [allowDrop]="allowDrop2" #treeview>
                    <ng-template let-item>
                        <span [ngClass]="getItemIcon(item)"></span>
                        <span class="trw-dd-item-label">{{item.text}}</span>
                    </ng-template>
                </iui-treeview>
                <br style="clear:both;"/>
            </div>
            <div style="display:inline-block; margin-top:20px">
                <div style="float:left;width:350px;margin-right:30px" align="center">
                    <label style="margin-right:30px"><input type="checkbox" [(ngModel)]="allowDrag" checked="checked" /> Allow Drag</label>
                    <label><input type="checkbox" [(ngModel)]="allowDrop" checked="checked" /> Allow Drop</label>
                </div>
                <div style="float:left;width:350px;" align="center">
                    <label style="margin-right:30px"><input type="checkbox" [(ngModel)]="allowDrag2" checked="checked" /> Allow Drag</label>
                    <label><input type="checkbox" [(ngModel)]="allowDrop2" checked="checked" /> Allow Drop</label>
                </div>
                <br style="clear:both;"/>
            </div>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In this sample you can drag drop items within the same TreeView or from left TreeView to the right TreeView and vice versa. When item is dragged a drop marker is displayed showing the exact location at which dragged item can drop. If the marker is not shown, the drop position is not allowed.</p>
                <p><span class="initial-space"></span>You can reorder items by click and drag over specific item. A dragging window will appear, stating the target item and position at which item can be dropped. During drag drop operations, you can also create a copy of an item by holding the SHIFT key. The dragging window will change its icon, showing a <span style="color:#c60d0d;font-weight:bold">+</span> sign next to the position marker.</p>
                <p><span class="initial-space"></span>While dragging an item over middle space of some target item, when dropped the item will be added as a child of the target item. If the <span style="color:#c60d0d">autoExpand</span> property is set to true, the target item will expand, after a short delay of 500ms.</p>
                <p><span class="initial-space"></span>By clicking on check boxes, you can change the built-in properties:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">allowDrag</span> - determines whether items can be dragged</li>
                    <li><span style="color:#c60d0d">allowDrop</span> - determines whether items can be dropped</li>
               </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-drag-drop.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewDragDropSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treeview', { static: false }) treeview: IntegralUITreeView;

    // Left TreeView  settings
    public data: Array<any>;
    public allowDrag: boolean = true;
    public allowDrop: boolean = true;

    // Right TreeView  settings
    public data2: Array<any>;
    public allowDrag2: boolean = true;
    public allowDrop2: boolean = true;

    // Both TreeView have the same CSS settings
    public treeStyle: any = {
        general: {
            normal : 'trw-dd-normal'
        }
    }

    constructor(){
        this.data = [
            { 
                id: 1,
                text: "Books",
                icon: "trw-dd-icons-medium library",
                items: [
                    { id: 11, pid: 1, text: "Art" },
                    { 
                        id: 12,
                        pid: 1,
                        text: "Business",
                        icon: "trw-dd-icons-medium people",
                        items: [
                            { id: 121, pid: 12, text: "Economics" },
                            { 
                                id: 122,
                                pid: 12,
                                checkState: 'checked',
                                text: "Investing", 
                                expanded: false,
                                icon: "trw-dd-icons-medium economics",
                                items: [
                                    { id: 1221, pid: 122, text: "Bonds" },
                                    { id: 1222, pid: 122, text: "Options" },
                                    { id: 1223, pid: 122, text: "Stocks" }
                                ]
                            },
                            { id: 123, pid: 12, text: "Management" },
                            { id: 124, pid: 12, text: "Small Business" }
                        ]
                    },
                    { id: 13, pid: 1, text: "Health", icon: "trw-dd-icons-medium heart", checkState: 'checked' },
                    { id: 14, pid: 1, text: "Literature" },
                    { 
                        id: 15,
                        pid: 1,
                        text: "Science",
                        expanded: false,
                        items: [
                            { id: 151, pid: 15, text: "Astronomy" },
                            { id: 152, pid: 15, text: "Mathematics" },
                            { id: 153, pid: 15, text: "Evolution" },
                            { id: 154, pid: 15, text: "Nature" }
                        ]
                    }
                ]
            },
            { id: 2, text: "Computers" },
            {
                id: 3,
                checkState: 'checked',
                text: "Electronics",
                items: [
                    { id: 31, pid: 3, text: "Camera", icon: "trw-dd-icons-medium camera" },
                    { id: 32, pid: 3, text: "Cell Phones" },
                    { id: 33, pid: 3, text: "Video Game Consoles" }
                ]
            },
            { 
                id: 4,
                text: "Music", 
                expanded: false,
                icon: "trw-dd-icons-medium album",
                items: [
                    { id: 41, pid: 4, text: "Blues" },
                    { id: 42, pid: 4, text: "Classic Rock" },
                    { id: 43, pid: 4, text: "Pop" },
                    { id: 44, pid: 4, text: "Jazz" }
                ]
            },
            { 
                id: 5,
                text: "Software",
                icon: "trw-dd-icons-medium software",
                items: [
                    { id: 51, pid: 5, text: "Games", checkState: 'checked' },
                    { id: 52, pid: 5, text: "Operating Systems" },
                    { id: 53, pid: 5, text: "Network & Servers" },
                    { id: 54, pid: 5, text: "Security" }
                ]
            },
            { 
                id: 6,
                text: "Sports",
                expanded: false,
                icon: "trw-dd-icons-medium sports",
                items: [
                    { id: 61, pid: 6, text: "Baseball" },
                    { id: 62, pid: 6, text: "Martial Arts", checkState: 'checked' },
                    { id: 63, pid: 6, text: "Running" },
                    { 
                        id: 64,
                        pid: 6,
                        text: "Tennis",
                        expanded: false,
                        items: [
                            { id: 641, pid: 64, text: "Accessories" },
                            { id: 642, pid: 64, text: "Balls" },
                            { id: 643, pid: 64, text: "Racquets" }
                        ]
                    }
                ]
            },
            { id: 7, text: "Video Games" },
            { id: 8, text: "Watches", icon: "trw-dd-icons-medium clock" }
        ];  

        this.data2 = []; 
    }

    getItemIcon(item: any){
        return item.icon ? item.icon : 'trw-dd-icons-empty';
    }
}
