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
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-fsld-normal
            {
                width: 900px;
                height: 400px;
            }
            .treegrid-fsld-normal .iui-treegrid-expand-box
            {
                margin-top: -1px;
            }
            .treegrid-fsld-cell-label
            {
                display: inline-block;
                padding: 1px 0;
            }
            .treegrid-fsld-ctrl-button
            {
                margin: 20px 10px 0 0;
                width: 125px;
            }
            .treegrid-fsld-input-numeric
            {
                margin: 5px 20px 5px 0;
                width: 75px;
            }
        </style>
        <h2 class="feature-title" style="margin-left:0">TreeGrid / Fast Load</h2>
        <div class="feature-content" style="width:900px">
            <div #application>
                <iui-treegrid [appRef]="applicationRef" [controlStyle]="treegridStyle" [columns]="columns" [rows]="rows" [selectionMode]="selMode" [allowDrag]="true" [autoExpand]="true" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.title}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span class="treegrid-fsld-cell-label">{{cell.text}}</span>
                    </ng-template>
                    <ng-template let-column [iuiTemplate]="{ type: 'footer' }">
                        {{column.footerText}}
                    </ng-template>
                </iui-treegrid>
                <br />
                <div align="center">
                    <span>Max columns:</span> <input class="treegrid-fsld-input-numeric" type="number" [(ngModel)]="numColumns" min="1" max="250" />
                    <span>Max rows:</span> <input class="treegrid-fsld-input-numeric" type="number" [(ngModel)]="numRows" min="1" max="100000" />
                    <span>Levels:</span> <input class="treegrid-fsld-input-numeric" type="number" [(ngModel)]="numLevels" min="0" max="100" />
                    <br />
                    <button (click)="add()" class="treegrid-fsld-ctrl-button">Add</button>
                    <button (click)="clear()" class="treegrid-fsld-ctrl-button">Clear</button>
                    <button (click)="expandAll()" class="treegrid-fsld-ctrl-button">Expand All</button>
                    <button (click)="collapseAll()" class="treegrid-fsld-ctrl-button">Collapse All</button>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>In above demo, you can choose how many columns and rows to display in the TreeGrid. For demonstration purposes only, a limit is set to 250 columns and 100,000 rows with maximum depth of 100 tree levels. In real scenario, the only limit is how much data the browser can handle. By clicking on the Load button, the treegrid is populated with custom data.</p>
                <p><span class="initial-space"></span>To start a drag and drop operation, left-click on a row and move the mouse cursor, so that you can reorder rows during run-time. In this example, there are no restrictions set, and you can drag and drop a row and place it above, below or as a child of another row. However, if you want you can set conditions and provide custom drag drop operations on your own.</p>
                <p><span class="initial-space"></span>While dragging a row over middle space of some target row, when dropped the row will be added as a child of the target row. If the <span style="color:#c60d0d">autoExpand</span> property is set to true, the target row will expand, after a short delay of 500ms.</p>
                <p><span class="initial-space"></span>To select multiple rows, hold SHIFT or CTRL key and click on specific row.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-fast-load.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridFastLoadSample {
    @ViewChild('treegrid') treegrid: IntegralUITreeGrid;
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public columns: Array<any>;
    public rows: Array<any>;

    public numColumns: number = 25;
    public numRows: number = 10000;
    public numLevels: number = 3;
    private rowCount: number = 0;

    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;

    public treegridStyle: any = {
        general: {
            normal: 'treegrid-fsld-normal'
        }
    }

    constructor(){
        this.columns = [];
        this.rows = [];
    } 
    
    ngAfterViewInit(){
        this.add();
    }
    
    addColumns(){
        for (let j = 1; j <= this.numColumns; j++){
            let column = { 
                id: j, 
                title: "Header " + j,
                footerText: "Footer " + j,
                width: 100
            }

            if (j == 1)
                column.width = 200;

            this.columns.push(column);
        }
    }

    addRows(parentRow: any, level: number){
        if (level > this.numLevels)
            return;
            
        let numChilds = this.getRandomNumber(level);    
        for (let i = 0; i < numChilds; i++){
            if (this.rowCount < this.numRows){
                let row: any = {
                    text : 'Row ' + (this.rowCount+1).toString(),
                    id: this.rowCount,
                    expanded : false,
                    cells: []
                };
                    
                for (let j = 0; j < this.columns.length; j++){
                    row.cells.push({ text: "Item" + (this.rowCount+1).toString() + j });
                }

                this.treegrid.addRow(row, parentRow);
                this.rowCount++;
            
                this.addRows(row, level + 1);
            }
        }
    }
            
    // Make sure each row has a random set of child rows
    getRandomNumber(level: number){
        let nCount: number = 1 + Math.floor(Math.random() * 10);
        
        if (level === 0){
            if (this.numLevels == 0)
                nCount = this.numRows;
            else {
                let derivative = 1;
                for (var k = 1; k <= this.numLevels; k++)
                    derivative = (derivative * nCount) + 1;

                nCount = this.numRows / derivative + 1;
                if (nCount < 1000)
                    nCount = 1000;
            }
        }
        
        return nCount;
    }

    add(){
        this.clear();

        this.addColumns();
        this.addRows(null, 0);

        this.treegrid.updateLayout();
    }

    clear(){
        this.rowCount = 0;

        this.treegrid.clearColumns();
        this.treegrid.clearRows();

        this.treegrid.updateLayout();
    }

    expandAll(){
        this.treegrid.expand();
    }

    collapseAll(){
        this.treegrid.collapse();
    }
}
