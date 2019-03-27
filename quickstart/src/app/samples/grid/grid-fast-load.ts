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
import { IntegralUISelectionMode } from '../../integralui/components/integralui.core';
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            .grid-fsld-normal
            {
                width: 900px;
                height: 400px;
            }
            .grid-fsld-ctrl-button
            {
                margin: 20px 10px 0 0;
                width: 75px;
            }
            .grid-fsld-input-numeric
            {
                margin: 5px 20px 5px 0;
                width: 75px;
            }
        </style>
        <h2 class="feature-title">Grid / Fast Load</h2>
        <div class="feature-content">
            <div #application>
                <iui-grid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [selectionMode]="selMode" [allowDrag]="true" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.title}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        {{cell.text}}
                    </ng-template>
                    <ng-template let-column [iuiTemplate]="{ type: 'footer' }">
                        {{column.footerText}}
                    </ng-template>
                </iui-grid>
                <br />
                <div align="center">
                    <span>Max columns:</span> <input class="grid-fsld-input-numeric" type="number" [(ngModel)]="numColumns" min="1" max="250" />
                    <span>Max rows:</span> <input class="grid-fsld-input-numeric" type="number" [(ngModel)]="numRows" min="1" max="100000" />
                    <br />
                    <button (click)="add()" class="grid-fsld-ctrl-button">Add</button>
                    <button (click)="clear()" class="grid-fsld-ctrl-button">Clear</button>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>In above demo, you can choose how many columns and rows to display in the Grid. For demonstration purposes only, a limit is set to 250 columns and 100,000 rows. In real scenario, the only limit is how much data the browser can handle. By clicking on the Load button, the grid is populated with custom data.</p>
                <p><span class="initial-space"></span>To start a drag and drop operation, left-click on a row and move the mouse cursor, so that you can reorder rows during run-time. In this example, there are no restrictions set, and you can drag and drop a row and place it above or below another row. However, if you want you can set conditions and provide custom drag drop operations on your own.</p>
                <p><span class="initial-space"></span>To select multiple rows, hold SHIFT or CTRL key and click on specific row.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-fast-load.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridFastLoadSample {

    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('grid') grid: IntegralUIGrid;

    public columns: Array<any>;
    public rows: Array<any>;
    private numLevels: number = 0; 

    public numColumns: number = 25;
    public numRows: number = 10000;

    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;

    public gridStyle: any = {
        general: {
            normal: 'grid-fsld-normal'
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

            this.columns.push(column);
        }
    }

    addRows(){
        for (let i = 1; i <= this.numRows; i++){
            let row: any = {
                text : 'Row ' + i.toString(),
                id: i,
                cells: [],
                rows: []
            };
            
            for (let j = 1; j <= this.columns.length; j++)
                row.cells.push({ cid: j, text: "Item" + i + j });

            this.rows.push(row);
        }
    }

    add(){
        this.clear();

        this.addColumns();
        this.addRows();

        this.grid.updateLayout();
    }

    clear(){
        this.grid.clearColumns();
        this.grid.clearRows();

        this.grid.updateLayout();
    }
}
