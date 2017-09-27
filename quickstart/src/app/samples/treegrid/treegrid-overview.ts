/*
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

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
            .treegrid-ovw-normal
            {
                width: 800px;
                height: 400px;
            }
            .treegrid-ovw-normal .iui-treegrid-row-cell
            {
                padding: 2px 0 !important;
            }
            .treegrid-ovw-normal .iui-treegrid-row-selected
            {
                color: green;
            }
            .cell-checkbox
            {
                background: url('') no-repeat 0 0;
                display: inline-block;
                padding: 0;
                margin: 0 7px;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }
            .cell-rating
            {
                margin: 0 15px;
                vertical-align: middle;
            }
            .cell-text
            {
                text-align: center;
                vertical-align: middle;
            }
        </style>
        <h2 class="feature-title">TreeGrid / Overview</h2>
        <div class="feature-content">
            <div #application>
                <iui-treegrid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [showFooter]="false" [expandColumnIndex]="1" [selectionMode]="treegridSelMode" [allowDrag]="true" (dragOver)="treegridDragOver($event)" [rowHeight]="22" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span *ngIf="column.id==1" class="cell-checkbox" [ngStyle]="{ 'background-image': getCheckValue(column) }" (mousedown)="columnCheckClicked(column)"></span>
                        <span>{{column.headerText}}</span>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span *ngIf="cell.cid==1" class="cell-checkbox" [ngStyle]="{ 'background-image': getCheckValue(cell) }" (mousedown)="checkBoxClicked(cell)"></span>
                        <img *ngIf="cell.cid==4" class="cell-rating" src="{{getCellRating(cell)}}" />
                        <span class="cell-text">{{cell.text}}</span>
                    </ng-template>
                </iui-treegrid>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> TreeGrid</strong> is a native Angular 2 component that displays hierarchical data structures in multiple columns. You can load data on demand during run-time from local or remote data sources, and add custom HTML content or other Angular components in each treegrid cell.</p>
                <p><span class="initial-space"></span>In above demo, the treegrid has columns with different content: checkbox, text and image. When you click on header with check box, all rows become checked or unchecked. In addition, a click on parent row changes the check box value to its child rows. In this example, check boxes can have 2 values: checked or unchecked, but you can change this easily by providing three values.</p>
                <p><span class="initial-space"></span>Some columns have their content aligned to center, while others have their alignment set to left. You may also notice that expand icon is shown in second column. This is customizable, you can set which column has the expand box in your code.</p>
                <p><span class="initial-space"></span>To select multiple rows, hold SHIFT or CTRL key and click on specific row.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-overview.ts</i>) file, or read the following article:</p> 
                <p style="padding-bottom:30px"><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/treegrid/treegrid-component.aspx">Overview of IntegralUI TreeGrid for Angular 2</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridOverviewSample {

    @ViewChild('treegrid') treegrid: IntegralUITreeGrid;
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public treegridSelMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;
    public columns: Array<any>;
    public rows: Array<any>;

    private imageChecked: string = 'url(app/integralui/resources/checkbox/checkbox-checked-1.png)';
    private imageUnchecked: string = 'url(app/integralui/resources/checkbox/checkbox-unchecked-1.png)';

    public gridStyle: any = {
        general: {
            normal: 'treegrid-ovw-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 1, width: 30, fixedWidth: true },
            { id: 2, headerText: "Title", width: 300},
            { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
            { id: 4, headerText: "Ratings", headerAlignment: "center", contentAlignment: "center", width: 150, fixedWidth: true },
            { id: 5, headerText: "Released", headerAlignment: "center", contentAlignment: "center", width: 180 }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Mystery",
                cells: [{ cid: 1 }, { cid: 2, text: "Mystery" }],
                rows: [
                    { 
                        id: 11,
                        pid: 1,
                        text: "Inception",
                        cells: [{ cid: 1, value: true }, { cid: 2, text: "Inception" }, { cid: 3, text: "2010" }, { cid: 4, value: 4 }, { cid: 5, text: "16 Jul 2010" } ]
                    },
                    { 
                        id: 12,
                        pid: 1,
                        text: "Snowpiercer",
                        cells: [{ cid: 1 }, { cid: 2, text: "Snowpiercer" }, { cid: 3, text: "2014" }, { cid: 4, value: 3 }, { cid: 5, text: "11 Jul 2014" } ]
                    },
                    { 
                        id: 13,
                        pid: 1,
                        text: "Shutter Island",
                        cells: [ { cid: 1, value: true }, { cid: 2, text: "Shutter Island" }, { cid: 1, value: true }, { cid: 3, text: "2010" }, { cid: 4, value: 4 }, { cid: 5, text: "19 Feb 2010" } ]
                    },
                ]
            },
            { 
                id: 2,
                text: "Sci-Fi",
                expanded: false,
                cells: [{ cid: 1 }, { cid: 2, text: "Sci-Fi" }],
                rows: [
                    { 
                        id: 21,
                        pid: 2,
                        text: "Gravity",
                        cells: [{ cid: 1 }, { cid: 2, text: "Gravity" }, { cid: 3, text: "2013" }, { cid: 4, value: 4 }, { cid: 5, text: "04 Oct 2013" } ]
                    },
                    { 
                        id: 22,
                        pid: 2,
                        text: "Prometheus",
                        cells: [{ cid: 1, value: true }, { cid: 2, text: "Prometheus" }, { cid: 3, text: "2012" }, { cid: 4, value: 3 }, { cid: 5, text: "08 Jun 2012" } ]
                    },
                    { 
                        id: 23,
                        pid: 2,
                        text: "The Avengers",
                        cells: [{ cid: 1 }, { cid: 2, text: "The Avengers" }, { cid: 3, text: "2012" }, { cid: 4, value: 4 }, { cid: 5, text: "04 May 2012" } ]
                    },
                    { 
                        id: 24,
                        pid: 2,
                        text: "Dawn of the Planet of the Apes",
                        cells: [{ cid: 1, value: true }, { cid: 2, text: "Dawn of the Planet of the Apes" }, { cid: 3, text: "2014" }, { cid: 4, value: 3 }, { cid: 5, text: "11 Jul 2014" } ]
                    },
                    { 
                        id: 25,
                        pid: 2,
                        text: "Interstellar",
                        cells: [{ cid: 1 }, { cid: 2, text: "Interstellar" }, { cid: 3, text: "2014" }, { cid: 4, value: 5 }, { cid: 5, text: "07 Nov 2014" } ]
                    },
                ]
            },
            { 
                id: 3,
                text: "Action",
                cells: [{ cid: 2, text: "Action" }, { cid: 1, value: true }],
                rows: [
                    { 
                        id: 31,
                        pid: 3,
                        text: "Edge of Tomorrow",
                        cells: [{ cid: 1, value: true }, { cid: 2, text: "Edge of Tomorrow" }, { cid: 3, text: "2014" }, { cid: 4, value: 4 }, { cid: 5, text: "06 Jun 2014" } ]
                    },
                    { 
                        id: 32,
                        pid: 3,
                        text: "The Dark Knight Rises",
                        cells: [{ cid: 1, value: true }, { cid: 2, text: "The Dark Knight Rises" }, { cid: 3, text: "2012" }, { cid: 4, value: 5 }, { cid: 5, text: "20 Jul 2012" } ]
                    },
                ]
            },
            { 
                id: 4,
                text: "Drama",
                cells: [ { cid: 1 }, { cid: 2, text: "Drama" }],
                rows: [
                    { 
                        id: 41,
                        pid: 4,
                        text: "Locke",
                        cells: [{ cid: 1 }, { cid: 2, text: "Locke" }, { cid: 3, text: "2014" }, { cid: 4, value: 3 }, { cid: 5, text: "29 May 2014" } ]
                    },
                    { 
                        id: 42,
                        pid: 4,
                        text: "Blue Jasmine",
                        cells: [{ cid: 1, value: true }, { cid: 2, text: "Blue Jasmine" }, { cid: 3, text: "2013" }, { cid: 4, value: 2 }, { cid: 5, text: "23 Aug 2013" } ]
                    },
                    { 
                        id: 43,
                        pid: 4,
                        text: "Black Swan",
                        cells: [{ cid: 1 }, { cid: 2, text: "Black Swan" }, { cid: 3, text: "2010" }, { cid: 4, value: 4 }, { cid: 5, text: "17 Dec 2010" } ]
                    },
                    { 
                        id: 44,
                        pid: 4,
                        text: "American Hustle",
                        cells: [{ cid: 1 }, { cid: 2, text: "American Hustle" }, { cid: 3, text: "2013" }, { cid: 4, value: 3 }, { cid: 5, text: "20 Dec 2013" } ]
                    },
                ]
            },
            { 
                id: 5,
                text: "Horror",
                expanded: false,
                cells: [{ cid: 1 }, { cid: 2, text: "Horror" }],
                rows: [
                    { 
                        id: 51,
                        pid: 5,
                        text: "The Conjuring",
                        cells: [{ cid: 1 }, { cid: 2, text: "The Conjuring" }, { cid: 3, text: "2013" }, { cid: 4, value: 3 }, { cid: 5, text: "19 Jul 2013" } ]
                    },
                ]
            },
            { 
                id: 6,
                text: "Crime",
                cells: [{ cid: 1 }, { cid: 2, text: "Crime" }],
                rows: [
                    { 
                        id: 61,
                        pid: 6,
                        text: "Nightcrawler",
                        cells: [{ cid: 1, value: true }, { cid: 2, text: "Nightcrawler" }, { cid: 3, text: "2014" }, { cid: 4, value: 4 }, { cid: 5, text: "31 Oct 2014" } ]
                    },
                    { 
                        id: 62,
                        pid: 6,
                        text: "Prisoners",
                        cells: [{ cid: 1 }, { cid: 2, text: "Prisoners" }, { cid: 3, text: "2013" }, { cid: 4, value: 4 }, { cid: 5, text: "20 Sep 2013" } ]
                    },
                    { 
                        id: 63,
                        pid: 6,
                        text: "The Town",
                        cells: [{ cid: 1 }, { cid: 2, text: "The Town" }, { cid: 3, text: "2010" }, { cid: 4, value: 3 }, { cid: 5, text: "17 Sep 2010" } ]
                    },
                ]
            },
            { 
                id: 7,
                text: "Biography",
                cells: [{ cid: 1 }, { cid: 2, text: "Biography" }],
                rows: [
                    { 
                        id: 71,
                        pid: 7,
                        text: "The Social Network",
                        cells: [{ cid: 1, value: true }, { cid: 2, text: "The Social Network" }, { cid: 3, text: "2010" }, { cid: 4, value: 4 }, { cid: 5, text: "01 Oct 2010" } ]
                    },
                    { 
                        id: 72,
                        pid: 7,
                        text: "The Wolf of Wall Street",
                        cells: [{ cid: 1, value: true }, { cid: 2, text: "The Wolf of Wall Street" }, { cid: 3, text: "2013" }, { cid: 4, value: 4 }, { cid: 5, text: "25 Dec 2013" } ]
                    },
                    { 
                        id: 73,
                        pid: 7,
                        text: "Rush",
                        cells: [{ cid: 1 }, { cid: 2, text: "Rush" }, { cid: 3, text: "2013" }, { cid: 4, value: 2 }, { cid: 5, text: "27 Sep 2013" } ]
                    },
                ]
            },
            { 
                id: 8,
                text: "Animation",
                cells: [{ cid: 1 }, { cid: 2, text: "Animation" }],
                rows: [
                    { 
                        id: 81,
                        pid: 8,
                        text: "Frozen",
                        cells: [{ cid: 1 }, { cid: 2, text: "Frozen" }, { cid: 3, text: "2013" }, { cid: 4, value: 3 }, { cid: 5, text: "27 Nov 2013" } ]
                    },
                    { 
                        id: 82,
                        pid: 8,
                        text: "Toy Story 3",
                        cells: [{ cid: 1, value: true }, { cid: 2, text: "Toy Story 3" }, { cid: 3, text: "2010" }, { cid: 4, value: 4 }, { cid: 5, text: "18 Jun 2010" } ]
                    },
                ]
            }
        ];
    } 

    private columnCheckClicked(column: any){
        if (column){
            let currentValue = column.value == true ? true : false;
            column.value = !currentValue;

            let list = this.treegrid.getFullList();
            for (let i = 0; i < list.length; i++){
                let cell = this.getCellWithCheckBox(list[i]);
                if (cell)
                    cell.value = column.value;
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

    private updateChildRows(row: any, value: boolean){
        if (row && row.rows){
            for (let i = 0; i < row.rows.length; i++){
                let cell = this.getCellWithCheckBox(row.rows[i]);
                if (cell)
                    cell.value = value;
            }
        }
    }

    private checkBoxClicked(cell: any){
        if (cell){
            let currentValue = cell.value == true ? true : false;
            cell.value = !currentValue;

            if (cell.rid){
                let row = this.treegrid.findRowById(cell.rid);
                this.updateChildRows(row, cell.value);
            }
        }
    }

    private getCheckValue(obj: any){
        return obj && obj.value == true ? this.imageChecked : this.imageUnchecked;
    }

    private getCellRating(cell: any): string {
        return cell.value ? 'app/integralui/resources/stars-small-' + cell.value.toString() + '.png' : '';
    }

    treegridDragOver(e: any){
        if (e.targetRow){
            switch (e.dropPos){
                case 0:
                    e.cancel = true;
                    break;

                case 1:
                    if (!e.dragRow.pid && e.targetRow.pid)
                        e.cancel = true;
                    else if (e.dragRow.pid && !e.targetRow.pid)
                        e.cancel = true;
                    break;

                case 2:
                    if (!e.dragRow.pid && e.targetRow.pid)
                        e.cancel = true;
                    else if (e.dragRow.pid && !e.targetRow.pid)
                        e.cancel = true;
                    break;
            }
        }
        else if (e.dragRow.pid)
            e.cancel = true;
    }
}
