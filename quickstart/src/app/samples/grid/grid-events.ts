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
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            .grid-evnts-normal
            {
                width: 800px;
                height: 300px;
            }
            .grid-evnts-control-panel
            {
                margin: 20px 0;
                width: 800px;
            }
            .grid-evnts-event-block
            {
                background: white;
                border: thin solid gray;
                border-radius:3px;
                width: 800px;
                height: 200px;
            }
            .grid-evnts-event-log
            {
                list-style-type: none;
                margin: 2px 0 0 0;
                padding: 0;
                height: 170px;
                overflow: auto;
            }
            .grid-evnts-event-log li
            {
                padding-left: 15px;
            }
            .grid-evnts-event-log li > span
            {
                color: #c60d0d;
            }
            .grid-evnts-add-remove-btns
            {
            }
            .grid-evnts-add-remove-btns button
            {
                margin: 5px 0;
                width: 125px;
            }
        </style>
        <div>
            <h2 class="feature-title">Grid / Events</h2>
            <div class="feature-content" #application>
                <div class="grid-evnts-add-remove-btns">
                    <button (click)="add()">Add Row</button>
                    <button (click)="remove()" [disabled]="disableButtons">Remove Row</button>
                    <button (click)="clear()" [disabled]="disableButtons">Clear Rows</button>
                </div>
                <iui-grid [columns]="columns" [rows]="rows" [controlStyle]="gridStyle" [appRef]="applicationRef" [allowDrag]="true" [allowFocus]="true"
                    (afterSelect)="onAfterSelect($event)"
                    (beforeSelect)="onBeforeSelect($event)"
                    (dragOver)="onDragOver($event)"
                    (dragDrop)="onDragDrop($event)"
                    (keyDown)="onKeyDown($event)"
                    (keyPress)="onKeyPress($event)"
                    (keyUp)="onKeyUp($event)"
                    (rowAdding)="onRowAdding($event)"
                    (rowAdded)="onRowAdded($event)"
                    (rowClick)="onRowClick($event)"
                    (rowDblClick)="onRowDblClick($event)"
                    (rowRemoving)="onRowRemoving($event)"
                    (rowRemoved)="onRowRemoved($event)"
                    (rowsCleared)="onClearRows($event)"
                    (scrollPosChanged)="onScrollPosChanged($event)"
                    (selectionChanged)="onSelectionChanged()"
                 #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.headerText}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span class="grid-mst-cell-label">{{cell.text}}</span>
                    </ng-template>
                    <ng-template let-column [iuiTemplate]="{ type: 'footer' }">
                        {{column.footerText}}
                    </ng-template>
                </iui-grid>
                <div class="grid-evnts-control-panel">
                    <div class="grid-evnts-event-block">
                        <button type="button" (click)="clearEventLog()" style="float:right;margin:3px 12px; width:50px">Clear</button>
                        <p style="margin:0 10px; padding: 3px; border-bottom: thin solid #c5c5c5">Event log:</p>
                        <ul class="grid-evnts-event-log">
                            <li *ngFor="let ev of eventLog">
                                <span class="event-name">{{ev.name}}</span>{{ev.info}}<span class="event-value">{{ev.value}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <br style="clear:both;"/>
                <div class="feature-help" style="width:800px;">
                    <p><span class="initial-space"></span>This sample presents all events that are fired from the Grid. Depending on action, a specific event is fired, which you can handle by creating an event handler.</p>
                    <p><span class="initial-space"></span>The following events are supported:</p>
                    <ul class="feature-points">
                        <li><span style="color:#c60d0d">afterSelect</span> - Occurs after row is selected</li>
                        <li><span style="color:#c60d0d">beforeSelect</span> - Occurs before row is selected</li>
                        <li><span style="color:#c60d0d">columnAdding</span> - Occurs before column is added</li>
                        <li><span style="color:#c60d0d">columnAdded</span> - Occurs after column is added</li>
                        <li><span style="color:#c60d0d">columnRemoving</span> - Occurs before column is removed</li>
                        <li><span style="color:#c60d0d">columnRemoved</span> - Occurs after column is removed</li>
                        <li><span style="color:#c60d0d">columnsCleared</span> - Occurs when all columns are removed</li>
                        <li><span style="color:#c60d0d">dragOver</span> - Occurs when row is dragged over Grid space</li>
                        <li><span style="color:#c60d0d">dragDrop</span> - Occurs when drag-drop operation is completed</li>
                        <li><span style="color:#c60d0d">keyDown</span> - Occurs when key is hold down while the cell has focus</li>
                        <li><span style="color:#c60d0d">keyPress</span> - Occurs when key is pressed while the cell has focus</li>
                        <li><span style="color:#c60d0d">keyUp</span> - Occurs when key is released while the cell has focus</li>
                        <li><span style="color:#c60d0d">loadComplete</span> - Occurs when data is loaded into the Grid using loadData method</li>
                        <li><span style="color:#c60d0d">rowAdding</span> - Occurs before row is added</li>
                        <li><span style="color:#c60d0d">rowAdded</span> - Occurs after row is added</li>
                        <li><span style="color:#c60d0d">rowClick</span> - Occurs when row is clicked</li>
                        <li><span style="color:#c60d0d">rowDblclick</span> - Occurs when row is double-clicked</li>
                        <li><span style="color:#c60d0d">rowRemoving</span> - Occurs before row is removed</li>
                        <li><span style="color:#c60d0d">rowRemoved</span> - Occurs after row is removed</li>
                        <li><span style="color:#c60d0d">rowsCleared</span> - Occurs when all rows are removed</li>
                        <li><span style="color:#c60d0d">scrollPosChanged</span> - Occurs when scroll position changes</li>
                        <li><span style="color:#c60d0d">selectionChanged</span> - Occurs when selected row has changed</li>
                        <li><span style="color:#c60d0d">updateComplete</span> - Occurs when Grid layout is updated</li>
                    </ul>
                    <p><span class="initial-space"></span>Depending on some conditions, when handling some of above events you can prevent the default action to proceed, by canceling the operation. Event data has a <span style="color:#0000ff">cancel</span> field, which when set to true will cancel the process.</p>
                    <p><span class="initial-space"></span>In this sample event log will not register add/remove events for columns, because these kind of operations are not demonstrated here.</p>
                    <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-events.ts</i>) file.</p> 
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridEventsSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('grid') grid: IntegralUIGrid;

    // An array that holds grid columns
    public columns: Array<any>;
   
    // An array that holds grid rows
    public rows: Array<any>;

    public eventLog: Array<any> = [];
    private rowCount: number = 8;
    private rowIndex: number = -1;

    public disableButtons: boolean = false;

    public gridStyle: any = {
        general: {
            normal: 'grid-evnts-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 1, headerText: "Customer/Order ID", headerAlignment: "center", width: 180 },
            { id: 2, headerText: "Ordered", headerAlignment: "center", contentAlignment: "center", width: 90 },
            { id: 3, headerText: "Shipped", headerAlignment: "center", contentAlignment: "center", width: 90 },
            { id: 4, headerText: "Ship Via", headerAlignment: "center", width: 125 },
            { id: 5, headerText: "Freight", headerAlignment: "center", contentAlignment: "right", width: 80 },
            { id: 6, headerText: "Address", headerAlignment: "center", width: 200 },
            { id: 7, headerText: "City", headerAlignment: "center" },
            { id: 8, headerText: "Country", headerAlignment: "center" }

        ];

        this.rows = [
            { 
                id: 1,
                icon: "icons-medium people",
                text: "Piccolo und mehr",
                cells: [{ cid: 1, text: "Piccolo und mehr" }, { cid: 6, text: "Geislweg 14" }, { cid: 7, text: "Salzburg" }, { cid: 8, text: "Austria" }]
            },
            { 
                id: 11,
                text: "Order #10259",
                cells: [{ cid: 1, text: "10259" }, { cid: 2, text: "9/13/2012" }, { cid: 3, text: "9/27/2012" }, { cid: 4, text: "Federal Shipping" }, { cid: 5, text: "360.63" }]
            },
            { 
                id: 12,
                text: "Order #11094",
                cells: [{ cid: 1, text: "11094" }, { cid: 2, text: "1/20/2013" }, { cid: 3, text: "2/5/2013" }, { cid: 4, text: "Federal Shipping" }, { cid: 5, text: "200.14" }]
            },
            { 
                id: 2,
                icon: "icons-medium people",
                text: "Frankenversand",
                cells: [{ cid: 1, text: "Frankenversand" }, { cid: 6, text: "Berliner Platz 43" }, { cid: 7, text: "München" }, { cid: 8, text: "Germany" }]
            },
            { 
                id: 21,
                text: "Order #11536",
                cells: [{ cid: 1, text: "11536" }, { cid: 2, text: "12/9/2013" }, { cid: 3, text: "1/7/2014" }, { cid: 4, text: "Speedy Express" }, { cid: 5, text: "85.53" } ]
            },
            { 
                id: 22,
                text: "Order #14472",
                cells: [{ cid: 1, text: "14472" }, { cid: 2, text: "11/14/2014" }, { cid: 3, text: "11/25/2014" }, { cid: 4, text: "Speedy Express" }, { cid: 5, text: "112.30" } ]
            },
            { 
                id: 3,
                icon: "icons-medium people",
                text: "Laughing Bacchus Wine Cellars",
                cells: [{ cid: 1, text: "Laughing Bacchus Wine Cellars" }, { cid: 6, text: "1900 Oak St." }, { cid: 7, text: "Vancouver" }, { cid: 8, text: "Canada" }]
            },
            { 
                id: 31,
                text: "Order #11495",
                cells: [{ cid: 1, text: "11495" }, { cid: 2, text: "8/7/2013" }, { cid: 3, text: "9/20/2013" }, { cid: 4, text: "United Package" }, { cid: 5, text: "49.28" } ]
            }
        ];
    }  
                
    createNewRow(){
        this.rowCount++;

        let row: any = {
            text: "Row " + this.rowCount,
            cells: []
        }

        for (let j = 1; j <= this.columns.length; j++)
            row.cells.push({ text: "Item" + this.rowCount + j });

        return row;
    }

    add(){
        let row: any = this.createNewRow();

        this.grid.addRow(row);
        this.grid.selectedRow = row;

        this.disableButtons = false;
    }

    remove(){
        if (this.grid.selectedRow)
            this.grid.removeRow(this.grid.selectedRow);
    }

    clear(){
        this.grid.clearRows();
    }

    selectNewRow(){
        let list: Array<any> = this.grid.getList();
        if (list && list.length > 0){
            if (this.rowIndex == list.length)
                this.rowIndex = list.length - 1;

            if (this.rowIndex >= 0 && this.rowIndex < list.length){
                if (this.rowIndex < list.length)
                    this.grid.selectedRow = list[this.rowIndex];
                else
                    this.grid.selectedRow = list[list.length-1];
            }
        }
        else
            this.grid.selectedRow = null;
    }

    clearEventLog(){
        this.eventLog.length = 0;
    }

    // Events
    onAfterSelect(e: any){
        if (e.obj){
            switch (e.obj.type){
                case 'column':
                    this.eventLog.unshift({ name: "afterSelect", info: " event was fired after column is selected: ", value: e.obj.headerText }); 
                    break;

                case 'row':
                    this.eventLog.unshift({ name: "afterSelect", info: " event was fired after row is selected: ", value: e.obj.text }); 
                    break;
            }
        }
    }

    onBeforeSelect(e: any){
        if (e.obj){
            switch (e.obj.type){
                case 'column':
                    this.eventLog.unshift({ name: "beforeSelect", info: " event was fired before column is selected: ", value: e.obj.headerText }); 
                    break;

                case 'row':
                    this.eventLog.unshift({ name: "beforeSelect", info: " event was fired before row is selected: ", value: e.obj.text }); 
                    break;
            }
        }
    }
    
    onDragOver(e: any){
        this.eventLog.unshift({ name: "dragover", info: " event was fired when row is dragged over Grid space" }); 
    }
    
    onDragDrop(e: any){
        this.eventLog.unshift({ name: "dragdrop", info: " event was fired when drag-drop operation is completed" }); 
    }

    onKeyDown(e: any){
        this.eventLog.unshift({ name: "keyDown", info: " event was fired when key is hold down while the cell has focus: ", value: e.cell.text }); 
    }

    onKeyPress(e: any){
        this.eventLog.unshift({ name: "keyPress", info: " event was fired when key is pressed while the cell has focus: ", value: e.cell.text }); 
    }

    onKeyUp(e: any){
        this.eventLog.unshift({ name: "keyUp", info: " event was fired when key is released while the cell has focus: ", value: e.cell.text }); 
    }

    onRowAdding(e: any){
        this.eventLog.unshift({ name: "rowAdding", info: " event was fired before row is added: ", value: e.row.text }); 
    }

    onRowAdded(e: any){
        this.eventLog.unshift({ name: "rowAdded", info: " event was fired after row is added: ", value: e.row.text }); 

        this.disableButtons = false;
        this.grid.updateLayout();
    }

    onRowClick(e: any){
        this.eventLog.unshift({ name: "rowClick", info: " event was fired when " + e.row.text + " is clicked" }); 
    }
    
    onRowDblClick(e: any){
        this.eventLog.unshift({ name: "rowDblclick", info: " event was fired when " + e.row.text + " is double-clicked" }); 
    }

    onClearRows(e: any){
        this.eventLog.unshift({ name: "rowsCleared", info: " event was fired when all rows are removed at once", value: '' }); 
        
        this.rowCount = 0;
        this.disableButtons = true;

        this.grid.updateLayout();
    }

    onRowRemoving(e: any){
        this.eventLog.unshift({ name: "rowRemoving", info: " event was fired before row is removed: ", value: e.row.text }); 

        this.rowIndex = -1;
        let list: Array<any> = this.grid.getList();
        if (list && list.length > 0)
            this.rowIndex = list.indexOf(e.row);
    }

    onRowRemoved(e: any){
        this.eventLog.unshift({ name: "rowRemoved", info: " event was fired after row is removed: ", value: e.row.text }); 

        this.rowCount = this.rowCount > 0 ? this.rowCount - 1 : 0;
        this.selectNewRow();

        if (this.rowCount == 0)
            this.disableButtons = true;

        this.grid.updateLayout();
    }

    onScrollPosChanged(e: any){
        this.eventLog.unshift({ name: "scrollPosChanged", info: " event was fired when scroll position changes: ", value: "{ x: " + e.value.x + ", y: " + e.value.y + " }" }); 
    }

    onSelectionChanged(){
        this.eventLog.unshift({ name: "selectionChanged", info: " event was fired when selected column or row is changed." }); 
    }
}
