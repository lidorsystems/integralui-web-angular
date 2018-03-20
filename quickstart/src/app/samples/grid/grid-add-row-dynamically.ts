/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, enableProdMode, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUICommonService } from '../../integralui/services/integralui.common.service';
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

enableProdMode();

@Component({
    selector: 'iui-app',
    template: `
        <style>
            /* 
                Add Rows Panel
            */
            .grid-ardyn-top-panel
            {
                background: #2455b0;
                padding: 3px;
                margin-bottom: 1px;
            }
            .grid-ardyn-button
            {
                background: transparent;
                border: thin solid transparent;
                color: white;
                padding: 5px 10px;
                display: inline-block;
                vertical-align: middle;
            }
            .grid-ardyn-button:hover
            {
                background-color: #153268;
                border: thin solid #0F244A;
            }
            .grid-ardyn-icon-add-root
            {
                background: url("app/integralui/resources/icons-x24.png") no-repeat -48px -120px;
                display: inline-block;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .grid-ardyn-icon-add-child
            {
                background: url("app/integralui/resources/icons-x24.png") no-repeat -120px -168px;
                display: inline-block;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }


            /* 
                General Grid settings
            */
            .grid-ardyn-normal
            {
                width: 800px;
                height: 300px;
            }
            .grid-ardyn-normal .iui-grid-expand-box
            {
                float: left;
                margin: 3px 3px 0 0;
            }

            /* 
                Cell Active Buttons
            */
            .grid-ardyn-normal button
            {
                background: #0064bb;
                border: thin solid #0048aa;
                color: white;
                margin-top: 1px;
                padding: 3px 5px;
            }
            .grid-ardyn-normal button:hover
            {
                background: #008000;
                border-color: #006400;
            }
            .grid-ardyn-button-block
            {
                background: #e9e9e9;
                border: thin solid #d5d5d5;
                display: inline-block;
                padding: 3px;
            }
            .grid-ardyn-button-block:hover
            {
                background: white;
                border-color: #bebebe;
            }
            .grid-ardyn-icons
            {
                background-image: url(app/integralui/resources/icons.png);
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                width: 16px;
                height: 16px;
                opacity: 0.6;
                vertical-align: middle;
            }
            .grid-ardyn-button-edit
            {
                background-position: -128px -81px;
            }
            .grid-ardyn-button-remove
            {
                background-position: -160px -96px;
            }
            .grid-ardyn-button-edit:hover, .grid-ardyn-button-remove:hover
            {
                opacity: 1;
            } 

            /* 
                Cell Text Editor
            */
            .grid-ardyn-cell-text
            {
                display: inline-block;
                margin-top: 4px;
                text-align: center;
                vertical-align: middle;
            }
            .grid-ardyn-cell-input
            {
                margin-top: 2px;
            }
        </style>
        <div>
            <h2 class="feature-title">Grid / Add Rows Dynamically</h2>
            <div class="feature-content" #application style="width:802px;">
                <div class="grid-ardyn-top-panel">
                    <button class="grid-ardyn-button"(click)="addRow()"><span class="grid-ardyn-icon-add-root"></span>Add Row</button>
                </div>
                <iui-grid [columns]="columns" [rows]="rows" [controlStyle]="gridStyle" [showFooter]="false" [rowHeight]="26" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span>{{column.headerText}}</span>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <div [ngSwitch]="cell.cid">
                            <div *ngSwitchCase="7" (dblclick)="onButtonsDblClick($event)" (mousedown)="onButtonsMouseDown($event)">
                                <div *ngIf="cell.rid==currentEditRowID">
                                    <button (mousedown)="saveRow(cell.rid)">Save</button>
                                    <button (mousedown)="cancelEdit(cell.rid)">Cancel</button>
                                </div>
                                <div *ngIf="cell.rid!=currentEditRowID">
                                    <div class="grid-ardyn-button-block" (mousedown)="editRow(cell.rid)">
                                        <span class="grid-ardyn-icons grid-ardyn-button-edit"></span>
                                    </div>
                                    <div class="grid-ardyn-button-block" (mousedown)="removeRow(cell.rid)">
                                        <span class="grid-ardyn-icons grid-ardyn-button-remove"></span>
                                    </div>
                                </div>
                            </div>
                            <div *ngSwitchDefault style="display:inline-block;">
                                <input *ngIf="cell.saved==false" class="grid-ardyn-cell-input" [(ngModel)]="cell.editText" [iuiFocus]="currentEditCell==cell" (focus)="selectContent($event)" (keydown)="editorKeyDown($event)" [ngStyle]="{ width: getCellWidth(cell) + 'px' }" />
                                <span *ngIf="cell.saved!=false" class="grid-ardyn-cell-text">{{cell.text}}</span>
                            </div>
                        </div>
                    </ng-template>
                </iui-grid>
                <br style="clear:both;"/>
                <div class="feature-help" style="width:800px;">
                    <p><span class="initial-space"></span>To populate the Grid component with data, you can either load data on demand from local or remote data source or add new rows dynamically when required. In order to create a new row manually, you can use some of public methods available that allows you to insert a row at specific position in the grid. This sample demonstrates how to add new rows on demand and how to create and use a custom cell editor.</p>
                    <p><span class="initial-space"></span>To add a new row use the button above the grid. Whenever the add button is clicked, a new row is created at first position in the grid and an inline cell editor appears. The cells in the last column contain action buttons that confirm or cancel the change of cell values.</p>
                    <p><span class="initial-space"></span>After row is created, you can easily edit its cell values by clicking on edit action button (represented by pencil icon). In addition, you can remove rows by clicking on remove action button (represented by delete icon).</p>
                    <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-add-row-dynamically.ts</i>) file.</p> 
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridAddRowDynamicallySample {

    // Get a reference to the Grid component
    @ViewChild('grid') grid: IntegralUIGrid;

    // An Array object that holds all column objects shown in the Grid
    public columns: Array<any>;
    // An Array object that holds all row objects shown in the Grid
    public rows: Array<any>;

    // Edit variables
    private currentEditRow: any = null;
    public currentEditRowID: any = null;
    public currentEditCell: any = null;
    private isNewRow: boolean = false;

    public gridStyle: any = {
        general: {
            normal: 'grid-ardyn-normal'
        }
    }

    constructor(private commonService?: IntegralUICommonService){
        this.columns = [
            { id: 2, headerText: "Title", width: 290},
            { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
            { id: 4, headerText: "Genre", headerAlignment: "center", contentAlignment: "center", width: 150 },
            { id: 6, headerText: "Released", headerAlignment: "center", contentAlignment: "center", width: 120 },
            { id: 7, contentAlignment: "center", width: 100, fixedWidth: true }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Gravity",
                cells: [{ cid: 2, text: "Gravity" }, { cid: 3, text: "2013" }, { cid: 4, text: "Sci-Fi" }, { cid: 6, text: "04 Oct 2013" }, { cid: 7 }]
            },
            { 
                id: 2,
                text: "Prometheus",
                cells: [{ cid: 2, text: "Prometheus" }, { cid: 3, text: "2012" }, { cid: 4, text: "Sci-Fi" }, { cid: 6, text: "08 Jun 2012" }, { cid: 7 }]
            },
            { 
                id: 3,
                text: "The Dark Knight Rises",
                cells: [{ cid: 2, text: "The Dark Knight Rises" }, { cid: 3, text: "2012" }, { cid: 4, text: "Action" }, { cid: 6, text: "20 Jul 2012" }, { cid: 7 }]
            },
        ];
    } 

    // Prevent dblclick and mousedown events to bubble up from clicks on active buttons
    // This stops the expand.collapse of rows when doubleclicked
    onButtonsDblClick(e: any){
        e.stopPropagation();
    }

    onButtonsMouseDown(e: any){
        e.stopPropagation();
    }

    // Returns the level of the row in tree hierearchy
    getRowLevel(row: any){  
        let level: number = 0;

        let parent: any = this.grid.getRowParent(row);
        while (parent){
            level++;
            parent = this.grid.getRowParent(parent);
        }

        return level;
    }

    // Calculates the width of grid cell
    getCellWidth(cell: any){
        let cellWidth: number = 100;

        for (let j = 0; j < this.columns.length; j++){
            if (this.columns[j].id == cell.cid){
                cellWidth = this.columns[j].width; 
                break;
            }
        }

        let cellPadding: number = 4;

        if (cell.cid == 2){
            let row = this.grid.findRowById(cell.rid);
            let level: number = this.getRowLevel(row);

            cellPadding = 23 + level*15;
        }

        cellWidth -= cellPadding;

        return cellWidth;
    }

    // Selects the whole text in the text editor
    selectContent(e: any){
        if (e.target){
            setTimeout(function(){
                e.target.setSelectionRange(0, e.target.value.length);
            }, 1);
        }
    }

    // Creates a new row object
    createNewRow(){
        let row: any = {
            id: this.commonService.getUniqueId(),
            cells: [
                { cid: 2, text: "", saved: false },
                { cid: 3, text: "", saved: false },
                { cid: 4, text: "", saved: false },
                { cid: 6, text: "", saved: false },
                { cid: 7, saved: false }
            ]
        }

        for (let j = 0; j < row.cells.length; j++)
            row.cells[j].rid = row.id;

        this.isNewRow = true;

        return row;
    }

    // Adds a new row as root
    addRow(){
        if (this.currentEditRow)
            this.cancelEdit(this.currentEditRow.id);

        this.insertRowInGrid();
    }

    // Inserts the created row at specific position and updates the grid layout
    insertRowInGrid(selRow?: any){
        let row: any = this.createNewRow();
    
        this.currentEditRow = row;
        this.currentEditRowID = row.id;
        this.currentEditCell = row.cells[0];

        this.grid.insertRowAt(row, 0, selRow);
        this.grid.updateLayout();
    }

    // Confirms the changes and saves the row
    saveRow(id: any){
        let row = this.grid.findRowById(id);
        if (row){
            this.updateEditStatus(row, true);

            for (let j = 0; j < row.cells.length; j++)
                row.cells[j].text = row.cells[j].editText;

            if (this.isNewRow)
                this.moveRowToEnd(row);
        }

        this.resetEditor();
        this.isNewRow = false;
    }

    // Cancels the edit process and closes the editor
    cancelEdit(id: any){
        if (this.isNewRow)
            this.removeRow(id);

        this.resetEditor();
        this.isNewRow = false;
    }

    // Sets the row in edit mode and opens the editor
    editRow(id: any){
        this.resetEditor();
        
        let row = this.grid.findRowById(id);
        if (row){
            this.updateEditStatus(row);

            this.currentEditRow = row;
            this.currentEditRowID = row.id;
            this.currentEditCell = row.cells[0];
        }
    } 

    // Cancels the edit process when ESCAPE key is pressed
    editorKeyDown(e: any){
        if (this.currentEditRow){
            switch (e.keyCode){
                case 27: // ESCAPE
                    this.cancelEdit(this.currentEditRow.id);
                    break;
            }
        }
    }

    // Removes a row from the grid
    removeRow(id: any){
        let row = this.grid.findRowById(id);
        if (row){
            this.grid.removeRow(row);
            this.grid.updateLayout();
        }
    }

    // Resets the variables for editing
    resetEditor(){
        this.updateEditStatus(this.currentEditRow, true);

        this.currentEditRow = null;
        this.currentEditRowID = null;
        this.currentEditCell = null;
    }

    // Updates the status of row, for edit or normal mode
    updateEditStatus(row: any, flag?: boolean){
        let status: boolean = flag ? true : false;

        if (row)
            for (let j = 0; j < row.cells.length; j++){
                row.cells[j].saved = status;

                // If row is in edit mode, copy the text value of grid cell to the cell editor
                if (!status)
                    row.cells[j].editText = row.cells[j].text;
            }
    }

    // Moves a row at end of the list
    moveRowToEnd(row: any){
        if (row){
            let list: Array<any> = this.rows;
            if (list){
                list.splice(list.length-1, 0, list.splice(0, 1)[0]);
                this.grid.updateLayout();
            }
        }
    }
}
