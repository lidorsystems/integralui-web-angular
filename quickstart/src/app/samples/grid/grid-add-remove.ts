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
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            .grid-adrm-normal
            {
                float: left;
                width: 600px;
                height: 375px;
            }
            .grid-adrm-cell-label
            {
                padding: 5px;
            }
            .grid-adrm-control-panel
            {
                float: left;
                margin-left: 20px;
                width: 170px;
            }
            .grid-adrm-control-panel button
            {
                margin: 5px 0;
                width: 165px;
                height: 25px;
            }
            .grid-adrm-control-panel .inline-block
            {
                display: inline-block;
                margin: 3px 0;
            }
            .grid-adrm-control-panel .inline-button
            {
                width: 125px;
                margin-right: 3px
            }
        </style>
        <h2 class="feature-title">Grid / Add Remove</h2>
        <div class="feature-content">
            <iui-grid [columns]="columns" [rows]="rows" [controlStyle]="gridStyle" [showFooter]="false"
                (afterSelect)="onAfterSelect($event)"
                (rowAdded)="onRowAdded($event)"
                (rowRemoving)="onRowRemoving($event)"
                (rowRemoved)="onRowRemoved($event)"
                (rowsCleared)="onClearRows()"
             #grid>
                <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                    {{column.headerText}}
                </ng-template>
                <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                    <span class="grid-adrm-cell-label">{{cell.text}}</span>
                </ng-template>
            </iui-grid>
            <div class="grid-adrm-control-panel" align="center">
                <button (click)="addColumn()">Add Column</button><br />
                <button (click)="removeColumn()">Remove Column</button><br />
                <button (click)="clearColumns()">Clear Columns</button>
                <hr/>
                <button (click)="addRow()">Add Row</button><br />
                <button (click)="insertRowAfter()" [disabled]="disableButtons">Insert Row After</button><br />
                <button (click)="insertRowBefore()" [disabled]="disableButtons">Insert Row Before</button><br />
                <div class="inline-block">
                   <button class="inline-button" (click)="insertRowAt()">Insert Row At</button><input [(ngModel)]="insertPos" type="number" min="0" max="100" style="width:35px" />
                </div>
                <button (click)="removeRow()" [disabled]="disableButtons">Remove Row</button><br />
                <div class="inline-block">
                    <button class="inline-button" (click)="removeRowAt()">Remove Row At</button><input [(ngModel)]="removePos" type="number" min="0" max="100" style="width:35px" /><br />
                </div>
                <button (click)="clearRows()">Clear Rows</button>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px;">
                <p><span class="initial-space"></span>In this sample you can create and/or modify the grid data structure using several different methods:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">addColumn</span> - adds a new column</li>
                    <li><span style="color:#c60d0d">removeColumn</span> - removes a column (in this sample the selected column)</li>
                    <li><span style="color:#c60d0d">clearColumns</span> - removes all columns</li><br/>
                    <li><span style="color:#c60d0d">addRow</span> - adds a new row</li>
                    <li><span style="color:#c60d0d">insertRowAfter</span> - adds a new row after specified row (in this sample the selected row)</li>
                    <li><span style="color:#c60d0d">insertRowAt</span> - adds a new row at specified position</li>
                    <li><span style="color:#c60d0d">insertRowBefore</span> - adds a new row before specified row (in this sample the selected row)</li>
                    <li><span style="color:#c60d0d">removeRow</span> - removes a row (in this sample the selected row)</li>
                    <li><span style="color:#c60d0d">removeRowAt</span> - removes a row at specified position from parent collection</li>
                    <li><span style="color:#c60d0d">clearRows</span> - removes all rows</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-add-remove.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridAddRemoveSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('grid') grid: IntegralUIGrid;

    // An array that holds grid columns
    public columns: Array<any>;
   
    // An array that holds grid rows
    public rows: Array<any>;

    public disableButtons: boolean = true;
    public insertPos: number = 0;
    public removePos: number = 0;

    private columnCount: number = 2;
    private rowCount: number = 3;
    private rowIndex: number = -1;

    public gridStyle: any = {
        general: {
            normal: 'grid-adrm-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 1, headerText: "Header1", footerText: "Footer1" },
            { id: 2, headerText: "Header2", footerText: "Footer2" }
        ];

        this.rows = [
            { id: 1, text: "Row 1", cells: [{ cid: 1, text: "Item11" }, { cid: 2, text: "Item12" }] },
            { id: 2, text: "Row 2", cells: [{ cid: 1, text: "Item21" }, { cid: 2, text: "Item22" }] },
            { id: 3, text: "Row 3", cells: [{ cid: 1, text: "Item31" }, { cid: 2, text: "Item32" }] }
        ];
    }   
            
    // Add Remove Columns ----------------------------------------------------------------

    createNewColumn(){
        this.columnCount++;

        return { id: this.columnCount, headerText: "Header" + this.columnCount, footerText: "Footer" + this.columnCount };
    }

    addColumn(){
        let column: any = this.createNewColumn();
        this.grid.addColumn(column);
        this.grid.updateLayout();
    }

    removeColumn(){
        if (this.grid.selectedColumn){
            this.grid.removeColumn(this.grid.selectedColumn);
            this.grid.updateLayout();
        }
    }

    clearColumns(){
        this.grid.clearColumns();
        this.grid.updateLayout();
    }
            
    // Add Remove Rows ----------------------------------------------------------------
                
    createNewRow(){
        this.rowCount++;

        let row: any = {
            id: this.rowCount,
            text: "Row " + this.rowCount,
            cells: []
        }

        for (let j = 1; j <= this.columns.length; j++){
            let columnId: number = this.columns[j-1].id;
            
            row.cells.push({ cid: columnId, text: "Item" + this.rowCount + columnId });
        }

        return row;
    }

    addRow(){
        let row: any = this.createNewRow();
        this.grid.addRow(row);
    }

    insertRowAfter(){
        let row: any = this.createNewRow();
        
        this.grid.insertRowAfter(row, this.grid.selectedRow);
    }

    insertRowBefore(){
        let row: any = this.createNewRow();
        
        this.grid.insertRowBefore(row, this.grid.selectedRow);
    }

    insertRowAt(){
        let row: any = this.createNewRow();
        
        this.grid.insertRowAt(row, this.insertPos);
    }

    removeRow(){
        if (this.grid.selectedRow)
            this.grid.removeRow(this.grid.selectedRow);
    }

    removeRowAt(){
        this.grid.removeRowAt(this.removePos, this.grid.selectedRow);
    }

    clearRows(){
        this.grid.clearRows();
        this.grid.updateLayout();
    }

    onRowAdded(e: any){
        this.grid.updateLayout();
    }

    onRowRemoving(e: any){
        this.rowIndex = -1;

        let list: Array<any> = this.grid.getList();
        if (list && list.length > 0)
            this.rowIndex = list.indexOf(e.row);
    }

    onRowRemoved(e: any){
        this.selectNewRow();

        if (!this.grid.selectedRow)
            this.disableButtons = true;

        this.grid.updateLayout();
    }

    onClearRows(){
        this.disableButtons = true;
    }

    onAfterSelect(e: any){
        this.disableButtons = this.grid.selectedRow ? false : true;
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
}
