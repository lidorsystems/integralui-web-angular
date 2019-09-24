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
import { IntegralUIGridLines } from '../../integralui/components/integralui.base.grid';
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

@Component({
    selector: '',
    template: `
        <style>
            .trg-hglrows-normal
            {
                width: 800px;
                height: 400px;
            }
            .trg-hglrows-normal .iui-treegrid-row-cell
            {
                padding: 2px 0 !important;
            }
            .trg-hglrows-normal .iui-treegrid-row-selected
            {
                color: green;
            }
            .trg-hglrows-cell-checkbox
            {
                background: url('') no-repeat 0 0;
                display: inline-block;
                padding: 0;
                margin: 0 7px;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }
        </style>
        <h2 class="feature-title">TreeGrid / Highlight Rows</h2>
        <div class="feature-content">
            <div #application>
                <iui-treegrid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [showFooter]="false" [gridLines]="gridLines" [expandColumnIndex]="1" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span [ngSwitch]="column.id">
                            <span *ngSwitchCase="1">
                                <span class="trg-hglrows-cell-checkbox" [ngStyle]="{ 'background-image': getCheckValue(column) }" (mousedown)="columnCheckClicked(column)"></span>
                            </span>
                            <span *ngSwitchDefault>
                                <span>{{column.headerText}}</span>
                            </span>
                        </span>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span [ngSwitch]="cell.cid">
                            <span *ngSwitchCase="1">
                                <span class="trg-hglrows-cell-checkbox" [ngStyle]="{ 'background-image': getCheckValue(cell) }" (mousedown)="checkBoxClicked($event, cell)" (mouseup)="checkBoxMouseUp($event)" (dblclick)="checkBoxDblClick($event)"></span>
                            </span>
                            <span *ngSwitchDefault>
                                <span class="trg-rtng-cell-text">{{cell.text}}</span>
                            </span>
                        </span>
                    </ng-template>
                </iui-treegrid>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> TreeGrid</strong> is a native Angular component that displays hierarchical data structures in multiple columns. You can load data on demand during run-time from local or remote data sources, and add custom HTML content or other Angular components in each treegrid cell.</p>
                <p><span class="initial-space"></span>In above demo, the treegrid has columns with different content: checkbox, text and image. When you click on header with check box, all rows become checked or unchecked. In addition, a click on parent row changes the check box value to its child rows. In this example, check boxes can have 2 values: checked or unchecked, but you can change this easily by providing three values.</p>
                <p><span class="initial-space"></span>Some columns have their content aligned to center, while others have their alignment set to left. You may also notice that expand icon is shown in second column. This is customizable, you can set which column has the expand box in your code.</p>
                <p><span class="initial-space"></span>The Ratings column in this example uses an image. Instead of an image, you can use the <a routerLink="/rating">Rating component</a> that allows user interaction and changes to the rating value on the fly. An example that shows a TreeGrid where cells have a rating component, is available here: <a routerLink="/treegrid/cell-rating">TreeGrid Cells with Rating Component</a>.</p>
                <p><span class="initial-space"></span>To select multiple rows, hold SHIFT or CTRL key and click on specific row.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-overview.ts</i>) file, or read the following article:</p> 
                <p style="padding-bottom:30px"><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/treegrid/treegrid-component.aspx">Overview of IntegralUI TreeGrid for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridHighlightRowsSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid', { static: false }) treegrid: IntegralUITreeGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public gridLines: IntegralUIGridLines = IntegralUIGridLines.Horizontal;

    private imageChecked: string = 'url(app/integralui/resources/checkbox/checkbox-checked-9.png)';
    private imageUnchecked: string = 'url(app/integralui/resources/checkbox/checkbox-unchecked-9.png)';

    public gridStyle: any = {
        general: {
            normal: 'trg-hglrows-normal'
        }
    }

    private highlightList: Array<any> = [];

    constructor(){
        this.columns = [
            { id: 1, contentAlignment: 'center', width: 30, fixedWidth: true },
            { id: 2, headerText: "Continents/Countries", width: 180 },
            { id: 3, headerText: "Population", headerAlignment: "center", contentAlignment: "right", width: 125 },
            { id: 4, headerText: "Date", headerAlignment: "center", contentAlignment: "center", width: 140 },
            { id: 6, headerText: "Land in km2", headerAlignment: "center", contentAlignment: "right", width: 125 },
            { id: 7, headerText: "Capital", headerAlignment: "center", width: 120 }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Africa",
                cells: [{ cid: 1 }, { cid: 2, text: "Africa" }],
                rows: [
                    { id: 11, pid: 1, text: "Egypt", cells: [{ cid: 1 }, { cid: 2, text: "Egypt" }, { cid: 3, text: "88,311,000", value: 88311000 }, { cid: 4, text: "06 Apr 2015", value: new Date(2015, 3, 6) }, { cid: 6, text: "995,450", value: 995450 }, { cid: 7, text: "Cairo" }] },
                    { id: 12, pid: 1, text: "Nigeria", cells: [{ cid: 1 }, { cid: 2, text: "Nigeria" }, { cid: 3, text: "185,043,000", value: 185043000 }, { cid: 4, text: "01 Jul 2015", value: new Date(2015, 6, 1) }, { cid: 6, text: "910,768", value: 910768 }, { cid: 7, text: "Abuja" }] },
                    { id: 13, pid: 1, text: "South Africa", cells: [{ cid: 1 }, { cid: 2, text: "South Africa" }, { cid: 3, text: "54,002,000", value: 54002000 }, { cid: 4, text: "01 Jul 2014", value: new Date(2014, 6, 1) }, { cid: 6, text: "1,214,470", value: 1214470 }, { cid: 7, text: "Pretoria" }] }
                ]
            },
            { 
                id: 2,
                text: "Asia",
                cells: [{ cid: 1 }, { cid: 2, text: "Asia" }],
                rows: [
                    { id: 21, pid: 2, text: "China", cells: [{ cid: 1 }, { cid: 2, text: "China" }, { cid: 3, text: "1,369,140,000", value: 1369140000 }, { cid: 4, text: "06 Apr 2015", value: new Date(2015, 3, 6) }, { cid: 6, text: "9,326,410", value: 9326410 }, { cid: 7, text: "Beijing" }] },
                    { id: 22, pid: 2, text: "India", cells: [{ cid: 1 }, { cid: 2, text: "India" }, { cid: 3, text: "1,269,545,000", value: 1269545000 }, { cid: 4, text: "01 Jul 2015", value: new Date(2015, 6, 1) }, { cid: 6, text: "2,864,021", value: 2864021 }, { cid: 7, text: "New Delhi" }] },
                    { id: 23, pid: 2, text: "Japan", cells: [{ cid: 1 }, { cid: 2, text: "Japan" }, { cid: 3, text: "126,910,000", value: 126910000 }, { cid: 4, text: "01 Mar 2015", value: new Date(2015, 2, 1) }, { cid: 6, text: "364,485", value: 364485 }, { cid: 7, text: "Tokyo" }] },
                    { id: 24, pid: 2, text: "Saudi Arabia", cells: [{ cid: 1 }, { cid: 2, text: "Saudi Arabia" }, { cid: 3, text: "31,521,418", value: 31521418 }, { cid: 4, text: "01 Jul 2015", value: new Date(2015, 6, 1) }, { cid: 6, text: "2,149,690", value: 2149690 }, { cid: 7, text: "Riyadh" }] },
                    { id: 25, pid: 2, text: "South Korea", cells: [{ cid: 1 }, { cid: 2, text: "South Korea" }, { cid: 3, text: "51,342,881", value: 51342881 }, { cid: 4, text: "01 Jan 2015", value: new Date(2015, 0, 1) }, { cid: 6, text: "100,032", value: 100032 }, { cid: 7, text: "Seoul" }] }
                ]
            },
            { 
                id: 3,
                text: "Europe",
                cells: [ { cid: 1 }, { cid: 2, text: "Europe" }],
                rows: [
                    { id: 31, pid: 3, text: "France", cells: [{ cid: 1 }, { cid: 2, text: "France" }, { cid: 3, text: "66,109,000", value: 66109000 }, { cid: 4, text: "01 Mar 2015", value: new Date(2015, 2, 1) }, { cid: 6, text: "640,427", value: 640427 }, { cid: 7, text: "Paris" }] },
                    { id: 32, pid: 3, text: "Germany", cells: [{ cid: 1 }, { cid: 2, text: "Germany" }, { cid: 3, text: "80,925,000", value: 80925000 }, { cid: 4, text: "30 Jun 2014", value: new Date(2014, 5, 30) }, { cid: 6, text: "348,672", value: 348672 }, { cid: 7, text: "Berlin" }] },
                    { id: 33, pid: 3, text: "Italy", cells: [{ cid: 1 }, { cid: 2, text: "Italy" }, { cid: 3, text: "60,788,845", value: 60788845 }, { cid: 4, text: "30 Nov 2014", value: new Date(2014, 10, 30) }, { cid: 6, text: "294,140", value: 294140 }, { cid: 7, text: "Rome" }] },
                    { id: 34, pid: 3, text: "Macedonia", cells: [{ cid: 1 }, { cid: 2, text: "Macedonia" }, { cid: 3, text: "2,065,769", value: 2065769 }, { cid: 4, text: "31 Dec 2013", value: new Date(2013, 11, 31) }, { cid: 6, text: "25,433", value: 25433}, { cid: 7, text: "Skopje" }] }
                ]
            },
            { 
                id: 4,
                text: "North America",
                cells: [{ cid: 1 }, { cid: 2, text: "North America" }],
                rows: [
                    { id: 41, pid: 4, text: "Canada", cells: [{ cid: 1 }, { cid: 2, text: "Canada" }, { cid: 3, text: "35,702,707", value: 35702707 }, { cid: 4, text: "01 Jan 2015", value: new Date(2015, 0, 1) }, { cid: 6, text: "9,093,507", value: 9093507 }, { cid: 7, text: "Ottawa" }] },
                    { id: 42, pid: 4, text: "Mexico", cells: [{ cid: 1 }, { cid: 2, text: "Mexico" }, { cid: 3, text: "121,005,815", value: 121005815 }, { cid: 4, text: "01 Jul 2015", value: new Date(2015, 6, 1) }, { cid: 6, text: "1,943,945", value: 1943945 }, { cid: 7, text: "Mexico City" }] },
                    { id: 43, pid: 4, text: "USA", cells: [{ cid: 1 }, { cid: 2, text: "USA" }, { cid: 3, text: "320,651,000", value: 320651000 }, { cid: 4, text: "07 Apr 2015", value: new Date(2015, 3, 7) }, { cid: 6, text: "9,161,966", value: 9161966 }, { cid: 7, text: "Washington" }] }
                ]
            },
            { 
                id: 5,
                text: "South America",
                cells: [{ cid: 1 }, { cid: 2, text: "South America" }],
                rows: [
                    { id: 51, pid: 5, text: "Argentina", cells: [{ cid: 1 }, { cid: 2, text: "Argentina" }, { cid: 3, text: "43,131,966", value: 43131966 }, { cid: 4, text: "01 Jul 2015", value: new Date(2015, 6, 1) }, { cid: 6, text: "2,736,690", value: 2736690 }, { cid: 7, text: "Buenos Aires" }] },
                    { id: 52, pid: 5, text: "Brazil", cells: [{ cid: 1 }, { cid: 2, text: "Brazil" }, { cid: 3, text: "204,134,000", value: 204134000 }, { cid: 4, text: "08 Apr 2015", value: new Date(2015, 3, 8) }, { cid: 6, text: "8,460,415", value: 8460415 }, { cid: 7, text: "Brasília" }] }
                ]
            }
        ];
    } 

    // CheckBox Cell ---------------------------------------------------------------------

    private getCheckValue(obj: any){
        return obj && obj.value == true ? this.imageChecked : this.imageUnchecked;
    }

    checkBoxClicked(e: any, cell: any){
        if (cell){
            let currentValue = cell.value == true ? true : false;
            cell.value = !currentValue;

            let row = this.treegrid.findRowById(cell.rid);
            if (row.rows){
                this.highlightChildRows(row, cell.value);
            }
            else
                this.highlightRow(row, cell.value);

            e.stopPropagation();
        }
    }

    checkBoxMouseUp(e: any){
        e.stopPropagation();
    }

    private columnCheckClicked(column: any){
        if (column){
            let currentValue = column.value == true ? true : false;
            column.value = !currentValue;

            let list = this.treegrid.getFullList();
            for (let i = 0; i < list.length; i++){
                let cell = this.getCellWithCheckBox(list[i]);
                if (cell){
                    cell.value = column.value;
                    this.highlightRow(list[i], cell.value);
                }
            }
        }
    }

    private getCellWithCheckBox(row: any){
        let found: any = null;

        for (let j = 0; j < row.cells.length; j++){
            if (row.cells[j].cid == 1){
                found = row.cells[j];
                break;
            }

        }

        return found;
    }

    checkBoxDblClick(e: any){
        e.stopPropagation();
    }

    // Highlighting ----------------------------------------------------------------------

    // A method that handles the checkbox value update 
    highlightRow(row: any, value: boolean){
        if (row){
            row.highlight = value;

            if (row.highlight)
                row.style = { background: 'green', color: 'white' }
            else
                row.style = null;

             this.treegrid.refresh();
        }
    }

    highlightChildRows(parent: any, value: boolean){
        this.highlightRow(parent, value);

        for (let i = 0; i < parent.rows.length; i++){
            let childRow = parent.rows[i];

            let cell = this.getCellWithCheckBox(childRow);
            if (cell)
                cell.value = value;

            this.highlightRow(childRow, value);

            if (childRow.rows)
                this.highlightChildRows(childRow, value);
        }
    }
}
