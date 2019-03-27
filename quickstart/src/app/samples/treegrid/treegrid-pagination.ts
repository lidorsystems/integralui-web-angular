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
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-pgnt-cmb
            {
                display: inline-block;
                width: 150px;
            }
            .treegrid-pgnt-normal
            {
                width: 900px;
                height: 400px;
            }
            .treegrid-pgnt-normal .iui-treegrid-expand-box
            {
                margin-top: -1px;
            }
            .treegrid-pgnt-cell-label
            {
                display: inline-block;
                padding: 1px 0;
            }
            .treegrid-pgnt-ctrl-button
            {
                margin: 20px 10px 0 0;
                width: 125px;
            }
            .treegrid-pgnt-input-numeric
            {
                margin: 5px 20px 5px 0;
                width: 75px;
            }
        </style>
        <h2 class="feature-title">TreeGrid / Pagination</h2>
        <div class="feature-content">
            <div #application>
                <div>
                    <span style="display:inline-block;padding:10px 5px 5px 0;vertical-align:top;">Rows per page: </span>
                    <iui-combobox [items]="comboItems" [controlStyle]="comboStyle" [maxDropDownItems]="5" [integralHeight]="true" [selectedIndex]="4" (selectedItemChanged)="onComboSelectionChanged($event)">
                        <iui-item *ngFor="let item of comboItems" [text]="item.text"></iui-item>
                    </iui-combobox>
                </div>
                <iui-treegrid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [paging]="{ enabled: true, pageSize: selSize }" (pageChanged)="gridPageChanged($event)" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.title}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        {{cell.text}}
                    </ng-template>
                    <ng-template let-column [iuiTemplate]="{ type: 'footer' }">
                        {{column.footerText}}
                    </ng-template>
                </iui-treegrid>
                <br />
                <div align="center">
                    <span>Max columns:</span> <input class="treegrid-pgnt-input-numeric" type="number" [(ngModel)]="numColumns" min="1" max="250" />
                    <span>Max rows:</span> <input class="treegrid-pgnt-input-numeric" type="number" [(ngModel)]="numRows" min="1" max="100000" />
                    <span>Levels:</span> <input class="treegrid-pgnt-input-numeric" type="number" [(ngModel)]="numLevels" min="0" max="100" />
                    <br />
                    <button (click)="add()" class="treegrid-pgnt-ctrl-button">Add</button>
                    <button (click)="clear()" class="treegrid-pgnt-ctrl-button">Clear</button>
                    <button (click)="expandAll()" class="treegrid-pgnt-ctrl-button">Expand All</button>
                    <button (click)="collapseAll()" class="treegrid-pgnt-ctrl-button">Collapse All</button>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>This example shows how to divide the data set in multiple pages.</p>
                <p><span class="initial-space"></span>Using options above the grid, you can choose the size of the page. The page size determines the maximum number of root rows per page. If you have rows with children, child rows are excluded from this number.</p>
                <p><span class="initial-space"></span>For demonstration purposes only, a limit is set to 250 columns and 100,000 rows with maximum depth of 100 tree levels. In real scenario, the only limit is how much data the browser can handle. By clicking on the Load button, the treegrid is populated with custom data.</p>
                <p><span class="initial-space"></span>The pagination panel is fully customizable, even you can create your own pagination controls by using these built-in methods and events:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">currentPage</span> - Gets or sets the number of page currently visible in grid view</li>
                    <li><span style="color:#c60d0d">firstPage</span> - the first page is shown in the grid view</li>
                    <li><span style="color:#c60d0d">lastPage</span> - the last page is shown in the grid view</li>
                    <li><span style="color:#c60d0d">nextPage</span> - moves to the next page</li>
                    <li><span style="color:#c60d0d">prevPage</span> - moves to the previous page</li><br/>
                    <li><span style="color:#c60d0d">pageChanged</span> - occurs when current page changes</li>
                </ul>
                <p><span class="initial-space"></span>In this example, when page changes the scroll position resets, moves the scroll to the top of the view.</p> 
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-pagination.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridPaginationSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid') treegrid: IntegralUITreeGrid;

    // An array that holds all options in the comboo box
    public comboItems: Array<any>;

    public columns: Array<any>;
    public rows: Array<any>;

    public numColumns: number = 25;
    public numRows: number = 10000;
    public numLevels: number = 3;
    private rowCount: number = 0;

    public selSize: number = 100;

    public gridStyle: any = {
        general: {
            normal: 'treegrid-pgnt-normal'
        }
    }

    public comboStyle: any = {
        general: {
            normal: 'treegrid-pgnt-cmb'
        }
    }

    constructor(){
        // Options to choose from
        this.comboItems = [
            { text: "2" },
            { text: "10" },
            { text: "25" },
            { text: "50" },
            { text: "100" },
            { text: "250" },
            { text: "500" },
            { text: "1000" },
            { text: "2500" },
            { text: "5000" }
        ];

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

    onComboSelectionChanged(e: any){
        if (e.item)
            this.selSize = Number(e.item.text);

        this.resetScrollPos();
    } 

    gridPageChanged(e: any){
        this.resetScrollPos();
    }

    private resetScrollPos(){
        this.treegrid.scrollPos({ x: 0, y: 0 });
    }
}
