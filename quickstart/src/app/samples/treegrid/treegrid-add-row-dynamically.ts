/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, enableProdMode, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUICommonService } from '../../integralui/services/integralui.common.service';
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

enableProdMode();

@Component({
    selector: 'iui-app',
    template: `
        <style>
            /* 
                Add Rows Panel
            */
            .treegrid-ardyn-top-panel
            {
                background: #2455b0;
                padding: 3px;
                margin-bottom: 1px;
            }
            .treegrid-ardyn-button
            {
                background: transparent;
                border: thin solid transparent;
                color: white;
                padding: 5px 10px;
                display: inline-block;
                vertical-align: middle;
            }
            .treegrid-ardyn-button:hover
            {
                background-color: #153268;
                border: thin solid #0F244A;
            }
            .treegrid-ardyn-icon-add-root
            {
                background: url("app/integralui/resources/icons-x24.png") no-repeat -48px -120px;
                display: inline-block;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .treegrid-ardyn-icon-add-child
            {
                background: url("app/integralui/resources/icons-x24.png") no-repeat -120px -168px;
                display: inline-block;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }


            /* 
                General TreeGrid settings
            */
            .treegrid-ardyn-normal
            {
                width: 800px;
                height: 300px;
            }
            .treegrid-ardyn-normal .iui-treegrid-expand-box
            {
                float: left;
                margin: 3px 3px 0 0;
            }

            /* 
                Cell Active Buttons
            */
            .treegrid-ardyn-normal button
            {
                background: #0064bb;
                border: thin solid #0048aa;
                color: white;
                margin-top: 1px;
                padding: 3px 5px;
            }
            .treegrid-ardyn-normal button:hover
            {
                background: #008000;
                border-color: #006400;
            }
            .treegrid-ardyn-button-block
            {
                background: #e9e9e9;
                border: thin solid #d5d5d5;
                display: inline-block;
                padding: 3px;
            }
            .treegrid-ardyn-button-block:hover
            {
                background: white;
                border-color: #bebebe;
            }
            .treegrid-ardyn-icons
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
            .treegrid-ardyn-button-edit
            {
                background-position: -128px -81px;
            }
            .treegrid-ardyn-button-remove
            {
                background-position: -160px -96px;
            }
            .treegrid-ardyn-button-edit:hover, .treegrid-ardyn-button-remove:hover
            {
                opacity: 1;
            } 

            /* 
                Cell Text Editor
            */
            .treegrid-ardyn-cell-text
            {
                display: inline-block;
                margin-top: 4px;
                text-align: center;
                vertical-align: middle;
            }
            .treegrid-ardyn-cell-input
            {
                margin-top: 2px;
            }
        </style>
        <div>
            <h2 class="feature-title">TreeGrid / Add Rows Dynamically</h2>
            <div class="feature-content" #application style="width:802px;">
                <div class="treegrid-ardyn-top-panel">
                    <button class="treegrid-ardyn-button" (click)="addRoot()"><span class="treegrid-ardyn-icon-add-root"></span>Add Root</button>
                    <button class="treegrid-ardyn-button" (click)="addChild()"><span class="treegrid-ardyn-icon-add-child"></span>Add Child</button>
                </div>
                <iui-treegrid [columns]="columns" [rows]="rows" [controlStyle]="treegridStyle" [showFooter]="false" [rowHeight]="26" #treegrid>
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
                                    <div class="treegrid-ardyn-button-block" (mousedown)="editRow(cell.rid)">
                                        <span class="treegrid-ardyn-icons treegrid-ardyn-button-edit"></span>
                                    </div>
                                    <div class="treegrid-ardyn-button-block" (mousedown)="removeRow(cell.rid)">
                                        <span class="treegrid-ardyn-icons treegrid-ardyn-button-remove"></span>
                                    </div>
                                </div>
                            </div>
                            <div *ngSwitchDefault style="display:inline-block;">
                                <input *ngIf="cell.saved==false" class="treegrid-ardyn-cell-input" [(ngModel)]="cell.editText" [iuiFocus]="currentEditCell==cell" (focus)="selectContent($event)" (keydown)="editorKeyDown($event)" [ngStyle]="{ width: getCellWidth(cell) + 'px' }" />
                                <span *ngIf="cell.saved!=false" class="treegrid-ardyn-cell-text">{{cell.text}}</span>
                            </div>
                        </div>
                    </ng-template>
                </iui-treegrid>
                <br style="clear:both;"/>
                <div class="feature-help" style="width:800px;">
                    <p><span class="initial-space"></span>To populate the TreeGrid component with data, you can either load data on demand from local or remote data source or add new rows dynamically when required. In order to create a new row manually, you can use some of public methods available that allows you to insert a row at specific position in the treegrid. This sample demonstrates how to add new rows on demand and how to create and use a custom cell editor.</p>
                    <p><span class="initial-space"></span>To add a new row use the button above the treegrid. Whenever the add button is clicked, a new row is created at first position in the treegrid and an inline cell editor appears. The cells in the last column contain action buttons that confirm or cancel the change of cell values.</p>
                    <p><span class="initial-space"></span>After row is created, you can easily edit its cell values by clicking on edit action button (represented by pencil icon). In addition, you can remove rows by clicking on remove action button (represented by delete icon).</p>
                    <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-add-row-dynamically.ts</i>) file.</p> 
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridAddRowDynamicallySample {

    // Get a reference to the TreeGrid component
    @ViewChild('treegrid') treegrid: IntegralUITreeGrid;

    // An Array object that holds all column objects shown in the TreeGrid
    public columns: Array<any>;
    // An Array object that holds all row objects shown in the TreeGrid
    public rows: Array<any>;

    // Edit variables
    private currentEditRow: any = null;
    public currentEditRowID: any = null;
    public currentEditCell: any = null;
    private isNewRow: boolean = false;

    public treegridStyle: any = {
        general: {
            normal: 'treegrid-ardyn-normal'
        }
    }

    constructor(private commonService?: IntegralUICommonService){
        this.columns = [
            { id: 2, headerText: "Title", width: 420},
            { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
            { id: 5, headerText: "Released", headerAlignment: "center", contentAlignment: "center", width: 120 },
            { id: 7, contentAlignment: "center", width: 100, fixedWidth: true }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Mystery",
                cells: [ { cid: 2, text: "Mystery" }, { cid: 7 }],
                rows: [
                    { 
                        id: 11,
                        pid: 1,
                        text: "Inception",
                        cells: [ { cid: 2, text: "Inception" }, { cid: 3, text: "2010" }, { cid: 5, text: "16 Jul 2010" }, { cid: 7 } ]
                    },
                    { 
                        id: 13,
                        pid: 1,
                        text: "Shutter Island",
                        cells: [ { cid: 2, text: "Shutter Island" }, { cid: 3, text: "2010" }, { cid: 5, text: "19 Feb 2010" }, { cid: 7 } ]
                    }
                ]
            }
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

        let parent: any = this.treegrid.getRowParent(row);
        while (parent){
            level++;
            parent = this.treegrid.getRowParent(parent);
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
            let row = this.treegrid.findRowById(cell.rid);
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
                { cid: 5, text: "", saved: false },
                { cid: 7, saved: false }
            ]
        }

        for (let j = 0; j < row.cells.length; j++)
            row.cells[j].rid = row.id;

        this.isNewRow = true;

        return row;
    }

    // Adds a new row as root
    addRoot(){
        if (this.currentEditRow)
            this.cancelEdit(this.currentEditRow.id);

        this.insertRowInGrid();
    }

    // Adds a new row as child
    addChild(){
        if (this.currentEditRow)
            this.cancelEdit(this.currentEditRow.id);

        this.insertRowInGrid(this.treegrid.selectedRow);
    }

    // Inserts the created row at specific position and updates the grid layout
    insertRowInGrid(selRow?: any){
        let row: any = this.createNewRow();
    
        this.currentEditRow = row;
        this.currentEditRowID = row.id;
        this.currentEditCell = row.cells[0];

        this.treegrid.insertRowAt(row, 0, selRow);
        this.treegrid.updateLayout();
    }

    // Confirms the changes and saves the row
    saveRow(id: any){
        let row = this.treegrid.findRowById(id);
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
        
        let row = this.treegrid.findRowById(id);
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
        let row = this.treegrid.findRowById(id);
        if (row){
            this.treegrid.removeRow(row);
            this.treegrid.updateLayout();
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

            let parentRow = this.treegrid.getRowParent(row);
            if (parentRow)
                list = parentRow.rows;

            if (list){
                list.splice(list.length-1, 0, list.splice(0, 1)[0]);
                this.treegrid.updateLayout();
            }
        }
    }
}
