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
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            .grid-pgnt-cmb
            {
                display: inline-block;
                width: 150px;
            }
            .grid-pgnt-normal
            {
                width: 900px;
                height: 400px;
            }
            .grid-pgnt-ctrl-button
            {
                margin: 20px 10px 0 0;
                width: 75px;
            }
            .grid-pgnt-input-numeric
            {
                margin: 5px 20px 5px 0;
                width: 75px;
            }
        </style>
        <h2 class="feature-title">Grid / Pagination</h2>
        <div class="feature-content">
            <div #application>
                <div>
                    <span style="display:inline-block;padding:10px 5px 5px 0;vertical-align:top;">Rows per page: </span>
                    <iui-combobox [items]="comboItems" [controlStyle]="comboStyle" [maxDropDownItems]="5" [integralHeight]="true" [selectedIndex]="4" (selectedItemChanged)="onComboSelectionChanged($event)">
                        <iui-item *ngFor="let item of comboItems" [text]="item.text"></iui-item>
                    </iui-combobox>
                </div>
                <iui-grid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [paging]="{ enabled: true, pageSize: selSize }" (pageChanged)="gridPageChanged($event)"  #grid>
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
                    <span>Max columns:</span> <input class="grid-pgnt-input-numeric" type="number" [(ngModel)]="numColumns" min="1" max="250" />
                    <span>Max rows:</span> <input class="grid-pgnt-input-numeric" type="number" [(ngModel)]="numRows" min="1" max="100000" />
                    <br />
                    <button (click)="add()" class="grid-pgnt-ctrl-button">Add</button>
                    <button (click)="clear()" class="grid-pgnt-ctrl-button">Clear</button>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>This example shows how to divide the data set in multiple pages.</p>
                <p><span class="initial-space"></span>Using options above the grid, you can choose the size of the page. The page size determines the maximum number of rows per page.</p>
                <p><span class="initial-space"></span>Although there is no limit on how many rows you can add, for demonstration purposes we have limited the maximum number of rows to 100,000. Using controls below the grid, you can add maximum 250 columns and 100,000 rows.</p>
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
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-pagination.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridPaginationSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('grid', { static: false }) grid: IntegralUIGrid;

    // An array that holds all options in the comboo box
    public comboItems: Array<any>;

    public columns: Array<any>;
    public rows: Array<any>;
    private numLevels: number = 0; 

    public numColumns: number = 25;
    public numRows: number = 10000;

    public selSize: number = 100;

    public gridStyle: any = {
        general: {
            normal: 'grid-pgnt-normal'
        }
    }

    public comboStyle: any = {
        general: {
            normal: 'grid-pgnt-cmb'
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
                row.cells.push({ text: "Item" + i + j });

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

    onComboSelectionChanged(e: any){
        if (e.item)
            this.selSize = Number(e.item.text);

        this.resetScrollPos();
    } 

    gridPageChanged(e: any){
        this.resetScrollPos();
    }

    private resetScrollPos(){
        this.grid.scrollPos({ x: 0, y: 0 });
    }
}
