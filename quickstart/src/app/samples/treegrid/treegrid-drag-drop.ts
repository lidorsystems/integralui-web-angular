/*
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-ddtg-normal
            {
                float: left;
                margin-right: 20px;
                width: 350px;
                height: 300px;
            }
            .treegrid-ddtg-normal .iui-treegrid-expand-box
            {
                margin-top: -3px;
            }
            .treegrid-ddtg-item-label
            {
                display: inline-block;
                padding: 2px 0;
            }
        </style>
        <h2 class="feature-title">TreeGrid / Drag Drop to TreeGrid</h2>
        <div class="feature-content">
            <div #application>
                <iui-treegrid [name]="'TreeGrid 1'" [appRef]="applicationRef" [controlStyle]="treegridStyle" [columns]="columns" [rows]="rows" [showFooter]="false" [allowDrag]="allowDrag" [allowDrop]="allowDrop"  #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.headerText}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span class="treegrid-ddtg-item-label">{{cell.text}}</span>
                    </ng-template>
                </iui-treegrid>
                <iui-treegrid [name]="'TreeGrid 2'" [appRef]="applicationRef" [controlStyle]="treegridStyle" [columns]="columns2" [rows]="rows2" [showFooter]="false" [allowDrag]="allowDrag2" [allowDrop]="allowDrop2"  #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.headerText}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span class="treegrid-ddtg-item-label">{{cell.text}}</span>
                    </ng-template>
                </iui-treegrid>
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
                <p><span class="initial-space"></span>In this sample you can drag drop rows within the same TreeGrid or between two TreeGrid components. When row is dragged a drop marker is displayed showing the exact location at which dragged row can drop. If the marker is not shown, the drop position is not allowed.</p>
                <p><span class="initial-space"></span>You can reorder rows by click and drag over specific row. A dragging window will appear, stating the target row and position at which row can be dropped. During drag drop operations, you can also create a copy of an row by holding the SHIFT key. The dragging window will change its icon, showing a <span style="color:#c60d0d;font-weight:bold">+</span> sign next to the position marker.</p>
                <p><span class="initial-space"></span>While dragging an row over middle space of some target row, when dropped the row will be added as a child of the target row.</p>
                <p><span class="initial-space"></span>By clicking on check boxes, you can change the built-in properties:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">allowDrag</span> - determines whether rows can be dragged</li>
                    <li><span style="color:#c60d0d">allowDrop</span> - determines whether rows can be dropped</li>
               </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-drag-drop.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridDragDropSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    // TreeGrid  settings
    public allowDrag: boolean = true;
    public allowDrop: boolean = true;
    public columns: Array<any>;
    public rows: Array<any>;

    // TreeGrid  settings
    public allowDrag2: boolean = true;
    public allowDrop2: boolean = true;
    public columns2: Array<any>;
    public rows2: Array<any>;


    // Both TreeGrid have the same CSS settings
    public treegridStyle: any = {
        general: {
            normal : 'treegrid-ddtg-normal'
        }
    }

    constructor(){
        // Add columns and rows for the TreeGrid
        this.columns = [
            { id: 1, headerText: "Header1", footerText: "Footer1", width: 150 },
            { id: 2, headerText: "Header2", footerText: "Footer2", width: 180 }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Item1",
                cells: [{ cid: 1, text: "Item11" }, { cid: 2, text: "Item12" }],
                rows: [
                    { id: 11, pid: 1, text: "Item11", cells: [{ cid: 1, text: "Item111" }, { cid: 2, text: "Item112" }] }
                ]
            },
            { id: 2, text: "Row2", cells: [{ cid: 1, text: "Item21" }, { cid: 2, text: "Item22" }] }
        ];

        // Add columns and rows for the TreeGrid
        this.columns2 = [
            { id: 1, headerText: "Header1", footerText: "Footer1", width: 150 },
            { id: 2, headerText: "Header2", footerText: "Footer2", width: 180 }
        ];

        this.rows2 = [
            { 
                id: 4,
                text: "Item41",
                cells: [{ cid: 1, text: "Item41" }, { cid: 2, text: "Item42" }],
                rows: [
                    { 
                        id: 41,
                        pid: 4,
                        text: "Item411",
                        cells: [{ cid: 1, text: "Item411" }, { cid: 2, text: "Item412" }]
                    },
                    { 
                        id: 42,
                        pid: 4,
                        text: "Item421",
                        expanded: false,
                        cells: [{ cid: 1, text: "Item421" }, { cid: 2, text: "Item422" }],
                        rows: [
                            { 
                                id: 421,
                                pid: 42,
                                text: "Item4211",
                                cells: [{ cid: 1, text: "Item4211" }, { cid: 2, text: "Item4212" }]
                            }
                        ]
                    }
                ]
            },
            { 
                id: 5,
                text: "Item51",
                cells: [{ cid: 1, text: "Item51" }, { cid: 2, text: "Item52" }],
                rows: [
                    { 
                        id: 51,
                        pid: 5,
                        text: "Item511",
                        cells: [{ cid: 1, text: "Item511" }, { cid: 2, text: "Item512" }]
                    }
                ]
            }
        ];
    }
}
