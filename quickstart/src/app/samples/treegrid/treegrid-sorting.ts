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
import { IntegralUISortOrder } from '../../integralui/components/integralui.core';
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-sort-normal
            {
                width: 800px;
                height: 400px;
            }
            .treegrid-sort-normal .iui-treegrid-expand-box
            {
                margin-top: -2px;
            }
            .treegrid-sort-cell-label
            {
                display: inline-block;
                padding: 2px 0;
            }
        </style>
        <h2 class="feature-title">TreeGrid / Sorting</h2>
        <div class="feature-content">
            <iui-treegrid [columns]="columns" [rows]="rows" [controlStyle]="treegridStyle" [showFooter]="false" (columnClick)="onColumnClick($event)" (columnSizeChanged)="gridColumnSizeChanged($event)" #treegrid>
                <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                    <div style="white-space:pre-wrap">{{column.headerText}}</div>
                </ng-template>
                <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                    <span class="treegrid-sort-cell-label">{{cell.text}}</span>
                </ng-template>
            </iui-treegrid>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span>This sample demonstrates basic and custom sorting operations in the TreeGrid component.</p>
                <p><span class="initial-space"></span>If column cells contain a String or a Number as their value, a basic sorting is executed, using built-in sort operations, for which you only need to specify by which column rows will be sorted and the sort order.</p>
                <p><span class="initial-space"></span>For columns which cells contains custom values, a <span style="color:#c60d0d">comparer</span> function is required. In case of this example, 3rd column contains date values, and a custom comparer function is created and applied to the TreeGrid.</p>
                <p>The following properties and methods are presented:</p>
                <ul class="feature-points" style="padding-bottom:10px;width:800px">
                    <li><span style="color:#c60d0d">sorting</span> a property which determines the sort order</li>
                    <li><span style="color:#c60d0d">sort</span> a method which sorts the TreeGrid rows based on applied order for specified column</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-sorting.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridSortingSample {
    gridColumnSizeChanged(e: any){
        this.treegrid.updateLayout();
    }

    @ViewChild('treegrid', { static: false }) treegrid: IntegralUITreeGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public treegridStyle: any = {
        general: {
            normal: 'treegrid-sort-normal'
        }
    }

    private sorting: IntegralUISortOrder = IntegralUISortOrder.None;
    private sortColumn: any = null;
    private prevColumn: any = null;


    constructor(){
        this.columns = [
            { id: 2, headerText: "Continents / Countries", width: 220 },
            { id: 3, headerText: "Population", headerAlignment: "center", contentAlignment: "right", width: 125 },
            { id: 4, headerText: "Date", headerAlignment: "center", contentAlignment: "center", width: 140 },
            { id: 6, headerText: "Land in km2", headerAlignment: "center", contentAlignment: "right", width: 55 },
            { id: 7, headerText: "Capital", headerAlignment: "center", width: 120 }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Africa",
                cells: [{ cid: 2, text: "Africa" }],
                rows: [
                    { id: 11, pid: 1, text: "Egypt", cells: [{ cid: 2, text: "Egypt" }, { cid: 3, text: "88,311,000", value: 88311000 }, { cid: 4, text: "06 Apr 2015", value: new Date(2015, 3, 6) }, { cid: 6, text: "995,450", value: 995450 }, { cid: 7, text: "Cairo" }] },
                    { id: 12, pid: 1, text: "Nigeria", cells: [{ cid: 2, text: "Nigeria" }, { cid: 3, text: "185,043,000", value: 185043000 }, { cid: 4, text: "01 Jul 2015", value: new Date(2015, 6, 1) }, { cid: 6, text: "910,768", value: 910768 }, { cid: 7, text: "Abuja" }] },
                    { id: 13, pid: 1, text: "South Africa", cells: [{ cid: 2, text: "South Africa" }, { cid: 3, text: "54,002,000", value: 54002000 }, { cid: 4, text: "01 Jul 2014", value: new Date(2014, 6, 1) }, { cid: 6, text: "1,214,470", value: 1214470 }, { cid: 7, text: "Pretoria" }] }
                ]
            },
            { 
                id: 2,
                text: "Asia",
                cells: [{ cid: 2, text: "Asia" }],
                rows: [
                    { id: 21, pid: 2, text: "China", cells: [{ cid: 2, text: "China" }, { cid: 3, text: "1,369,140,000", value: 1369140000 }, { cid: 4, text: "06 Apr 2015", value: new Date(2015, 3, 6) }, { cid: 6, text: "9,326,410", value: 9326410 }, { cid: 7, text: "Beijing" }] },
                    { id: 22, pid: 2, text: "India", cells: [{ cid: 2, text: "India" }, { cid: 3, text: "1,269,545,000", value: 1269545000 }, { cid: 4, text: "01 Jul 2015", value: new Date(2015, 6, 1) }, { cid: 6, text: "2,864,021", value: 2864021 }, { cid: 7, text: "New Delhi" }] },
                    { id: 23, pid: 2, text: "Japan", cells: [{ cid: 2, text: "Japan" }, { cid: 3, text: "126,910,000", value: 126910000 }, { cid: 4, text: "01 Mar 2015", value: new Date(2015, 2, 1) }, { cid: 6, text: "364,485", value: 364485 }, { cid: 7, text: "Tokyo" }] },
                    { id: 24, pid: 2, text: "Saudi Arabia", cells: [{ cid: 2, text: "Saudi Arabia" }, { cid: 3, text: "31,521,418", value: 31521418 }, { cid: 4, text: "01 Jul 2015", value: new Date(2015, 6, 1) }, { cid: 6, text: "2,149,690", value: 2149690 }, { cid: 7, text: "Riyadh" }] },
                    { id: 25, pid: 2, text: "South Korea", cells: [{ cid: 2, text: "South Korea" }, { cid: 3, text: "51,342,881", value: 51342881 }, { cid: 4, text: "01 Jan 2015", value: new Date(2015, 0, 1) }, { cid: 6, text: "100,032", value: 100032 }, { cid: 7, text: "Seoul" }] }
                ]
            },
            { 
                id: 3,
                text: "Europe",
                cells: [ { cid: 2, text: "Europe" }],
                rows: [
                    { id: 31, pid: 3, text: "France", cells: [{ cid: 2, text: "France" }, { cid: 3, text: "66,109,000", value: 66109000 }, { cid: 4, text: "01 Mar 2015", value: new Date(2015, 2, 1) }, { cid: 6, text: "640,427", value: 640427 }, { cid: 7, text: "Paris" }] },
                    { id: 32, pid: 3, text: "Germany", cells: [{ cid: 2, text: "Germany" }, { cid: 3, text: "80,925,000", value: 80925000 }, { cid: 4, text: "30 Jun 2014", value: new Date(2014, 5, 30) }, { cid: 6, text: "348,672", value: 348672 }, { cid: 7, text: "Berlin" }] },
                    { id: 33, pid: 3, text: "Italy", cells: [{ cid: 2, text: "Italy" }, { cid: 3, text: "60,788,845", value: 60788845 }, { cid: 4, text: "30 Nov 2014", value: new Date(2014, 10, 30) }, { cid: 6, text: "294,140", value: 294140 }, { cid: 7, text: "Rome" }] },
                    { id: 34, pid: 3, text: "Macedonia", cells: [{ cid: 2, text: "Macedonia" }, { cid: 3, text: "2,065,769", value: 2065769 }, { cid: 4, text: "31 Dec 2013", value: new Date(2013, 11, 31) }, { cid: 6, text: "25,433", value: 25433}, { cid: 7, text: "Skopje" }] }
                ]
            },
            { 
                id: 4,
                text: "North America",
                cells: [{ cid: 2, text: "North America" }],
                rows: [
                    { id: 41, pid: 4, text: "Canada", cells: [{ cid: 2, text: "Canada" }, { cid: 3, text: "35,702,707", value: 35702707 }, { cid: 4, text: "01 Jan 2015", value: new Date(2015, 0, 1) }, { cid: 6, text: "9,093,507", value: 9093507 }, { cid: 7, text: "Ottawa" }] },
                    { id: 42, pid: 4, text: "Mexico", cells: [{ cid: 2, text: "Mexico" }, { cid: 3, text: "121,005,815", value: 121005815 }, { cid: 4, text: "01 Jul 2015", value: new Date(2015, 6, 1) }, { cid: 6, text: "1,943,945", value: 1943945 }, { cid: 7, text: "Mexico City" }] },
                    { id: 43, pid: 4, text: "USA", cells: [{ cid: 2, text: "USA" }, { cid: 3, text: "320,651,000", value: 320651000 }, { cid: 4, text: "07 Apr 2015", value: new Date(2015, 3, 7) }, { cid: 6, text: "9,161,966", value: 9161966 }, { cid: 7, text: "Washington" }] }
                ]
            },
            { 
                id: 5,
                text: "South America",
                cells: [{ cid: 2, text: "South America" }],
                rows: [
                    { id: 51, pid: 5, text: "Argentina", cells: [{ cid: 2, text: "Argentina" }, { cid: 3, text: "43,131,966", value: 43131966 }, { cid: 4, text: "01 Jul 2015", value: new Date(2015, 6, 1) }, { cid: 6, text: "2,736,690", value: 2736690 }, { cid: 7, text: "Buenos Aires" }] },
                    { id: 52, pid: 5, text: "Brazil", cells: [{ cid: 2, text: "Brazil" }, { cid: 3, text: "204,134,000", value: 204134000 }, { cid: 4, text: "08 Apr 2015", value: new Date(2015, 3, 8) }, { cid: 6, text: "8,460,415", value: 8460415 }, { cid: 7, text: "Brasília" }] }
                ]
            }
        ];
    } 
    
    ngAfterViewInit(){
        this.sortColumn = this.columns[0];
        
        this.sorting = IntegralUISortOrder.Ascending;
        this.treegrid.selectedColumn = this.sortColumn;
        this.treegrid.sort(this.sortColumn, this.sorting);

        this.prevColumn = this.sortColumn;
    }

    getCellValue(row: any){
        let cellValue: any = null;

        if (this.sortColumn && row.cells){
            for (let j = 0; j < row.cells.length; j++){
                if (row.cells[j].cid == this.sortColumn.id){
                    cellValue = row.cells[j].value;
                    break;
                }
            }
        }

        return cellValue;
    }

    comparer = (firstRow: any, secondRow: any) => {
        let x: any = this.getCellValue(firstRow);
        let y: any = this.getCellValue(secondRow);

        x = x ? x.valueOf() : null;
        y = y ? y.valueOf() : null;

        switch (this.sorting){
            case IntegralUISortOrder.Ascending:
                if (x < y)
                    return -1;
                else if (x > y)
                    return 1;
                break;

            case IntegralUISortOrder.Descending:
                if (x > y)
                    return -1;
                else if (x < y)
                    return 1;
                break;

            default:
                return 0;
        }
    }

    onColumnClick(e: any){
        if (e.column){
            if (e.column != this.prevColumn){
                if (this.sorting == IntegralUISortOrder.None)
                    this.sorting = IntegralUISortOrder.Ascending;
            }
            else {
                if (this.sorting == IntegralUISortOrder.Ascending)
                    this.sorting = IntegralUISortOrder.Descending;
                else
                    this.sorting = IntegralUISortOrder.Ascending;
            }

            this.sortColumn = e.column;
            this.prevColumn = e.column;

            if (e.column.id == 4)
                this.treegrid.sort(e.column, this.sorting, this.comparer);
            else
                this.treegrid.sort(e.column, this.sorting);
        }
    }
}
