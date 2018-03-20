/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            .grid-cmn-normal
            {
                width: 625px;
                height: 300px;
            }
            .iui-contextmenu
            {
                width: 175px;
            }
            .grid-cmn-cell
            {
                padding: 1px 0;
            }
            .grid-cmn-cell-editor
            {
                border: 0;
                padding: 1px 0;
            }
            .grid-cmn-cell-editor[type]:focus
            {
                outline: 0 none;
            }
        </style>
        <h2 class="feature-title">Grid / Context Menu</h2>
        <div class="feature-content">
            <div style="width:400px" #application>
                <iui-grid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <div style="width:100%" [iuiContextMenu]="columnMenu" [contextMenuRef]="contextMenuReference" (itemClick)="columnMenuItemClick($event)">
                            {{column.headerText}}
                        </div>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <div class="grid-cmn-cell" [iuiContextMenu]="rowMenu" [contextMenuRef]="contextMenuReference" (itemClick)="rowMenuItemClick($event, cell)">
                            <span *ngIf="cell!=editCell">{{cell.text}}</span>
                            <input class="grid-cmn-cell-editor" *ngIf="cell==editCell" type="text" [(ngModel)]="cell.text" (keydown)="editorKeyDown($event)" [iuiFocus]="editorFocused" (focus)="selectContent($event)" (blur)="editorLostFocus()" [ngStyle]="{ width: getCellWidth(cell) + 'px' }" />
                        </div>
                    </ng-template>
                    <ng-template let-column [iuiTemplate]="{ type: 'footer' }">
                        {{column.footerText}}
                    </ng-template>
                </iui-grid>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In this sample you can see how to add a <a routerLink="../../contextmenu">ContextMenu</a> to columns and rows in Grid component. To open the context menu, right-click anywhere inside a coumn header or a row.</p>
                <p><span class="initial-space"></span>The Context Menu for columns and rows is different, in general consists of these options:</p>
                <ul class="feature-points">
                    <li><span style="color:#000080">Edit</span> - for editing of selected row cell</li>
                    <li><span style="color:#000080">Add</span> - adds a new column or row at the end</li>
                    <li><span style="color:#000080">Insert Before</span> - inserts a new column or row before selected one</li>
                    <li><span style="color:#000080">Insert After</span> - inserts a new column or row after selected one</li>
                    <li><span style="color:#000080">Remove</span> - deletes the selected column or row</li>
                </ul>
                <p><span class="initial-space"></span>You can also add a context menu to the column footer, but in this sample this is excluded.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-context-menu.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridContextMenuSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('grid') grid: IntegralUIGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    // Add Remove
    private columnCount: number = 3;
    private rowCount: number = 3;

    // Editing
    private isEditActive: boolean = false;
    public editCell: any = null;
    private originalText: string = '';
    public editorFocused: boolean = false; 

    // Column Menu settings
    public columnMenu: any = {
        appRef: null,
        items: [
            { id: 3, text: "Add Column" },
            { id: 4, text: "Insert Column Before" },
            { id: 5, text: "Insert Column After" },
            { id: 6, type: "separator" },
            { id: 7, text: "Remove Column" }
        ]
    }

    // Row Menu settings
    public rowMenu: any = {
        appRef: null,
        items: [
            { id: 1, text: "Edit" },
            { id: 2, type: "separator" },
            { id: 3, text: "Add Row" },
            { id: 4, text: "Insert Row Before" },
            { id: 5, text: "Insert Row After" },
            { id: 6, type: "separator" },
            { id: 7, text: "Remove Row" }
        ]
    }

    public contextMenuReference: any = null;

    public gridStyle: any = {
        general: {
            normal: 'grid-cmn-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 1, headerText: "Header1", footerText: "Footer1", width: 200 },
            { id: 2, headerText: "Header2", footerText: "Footer2", width: 250 },
            { id: 3, headerText: "Header3", footerText: "Footer3", width: 120 }
        ];

        this.rows = [
            { id: 1, text: "Row1", cells: [{ cid: 1, text: "Item11" },  { cid: 2, text: "Item12" }, { cid: 3, text: "Item13" }] },
            { id: 2, text: "Row2", cells: [{ cid: 1, text: "Item21" }, { cid: 2, text: "Item22" }, { cid: 3, text: "Item23" }] },
            { id: 3, text: "Row3", cells: [{ cid: 1, text: "Item31" }, { cid: 2, text: "Item32" }, { cid: 3, text: "Item33" }] }
        ];
    }

    ngAfterViewInit(){
        // This is required in order for Context Menu component to appear
        // The menu is added as a child of specified app component
        this.columnMenu.appRef = this.applicationRef;
        this.rowMenu.appRef = this.applicationRef;
    }

    // ContextMenu events ----------------------------------------------------------------

    columnMenuItemClick(e: any){
        if (e.item){
            // Action depends on selected menu option
            switch (e.item.id){
                case 3:
                    this.grid.addColumn(this.createNewColumn());
                    break;

                case 4:
                    this.grid.insertColumnBefore(this.createNewColumn(), this.grid.selectedColumn);
                    break;

                case 5:
                    this.grid.insertColumnAfter(this.createNewColumn(), this.grid.selectedColumn);
                    break;

                case 7:
                    this.grid.removeColumn(this.grid.selectedColumn);
                    break;
            }

            this.grid.updateLayout();
       }
    }

    rowMenuItemClick(e: any, cell: any){
        if (e.item){
            // Action depends on selected menu option
            switch (e.item.id){
                case 1:
                    this.showEditor(cell);
                    break;

                case 3:
                    this.grid.addRow(this.createNewRow());
                    break;

                case 4:
                    this.grid.insertRowBefore(this.createNewRow(), this.grid.selectedRow);
                    break;

                case 5:
                    this.grid.insertRowAfter(this.createNewRow(), this.grid.selectedRow);
                    break;

                case 7:
                    this.grid.removeRow(this.grid.selectedRow);
                    break;
            }

            this.grid.updateLayout();
       }
    }

    // Add Remove Columns ----------------------------------------------------------------
                
    createNewColumn(){
        this.columnCount++;

        return { id: this.columnCount, headerText: "Header" + this.columnCount, footerText: "Footer" + this.columnCount };
    }

    // Add Remove Rows ----------------------------------------------------------------
                
    createNewRow(){
        this.rowCount++;

        let newRow: any = {
            text: "Row" + this.rowCount,
            cells: []
        }

        for (let j = 1; j <= this.columns.length; j++){
            let colId: any = this.columns[j-1].id;

            newRow.cells.push({ cid: colId, text: "Item" + this.rowCount + colId });
        }

        return newRow;
    }


    // Editing ---------------------------------------------------------------------------

    showEditor(cell: any){
        // A timeout is required in this case, because when edit option from context menu is selected
        // there is a small delay prior context menu closes and focus is transfered from context menu to the cell
        // In other cases (when context menu is not used), the timout is not needed
        
        let self = this;

        let editTimeout = setTimeout(function(){
            self.originalText = cell.text;
            self.isEditActive = true;
            self.editCell = cell;
            self.editorFocused = true;

            clearTimeout(editTimeout);
        }, 150);
    }

    // Selects the whole text in the text editor
    selectContent(e: any){
        if (e.target){
            setTimeout(function(){
                e.target.setSelectionRange(0, e.target.value.length);
            }, 1);
        }
    }

    closeEditor(){
        this.editCell = null;
        this.originalText = '';
        this.editorFocused = false;
    }

    editorKeyDown(e: any){
        if (this.editCell){
            switch (e.keyCode){
                case 13: // ENTER
                    this.closeEditor();
                    break;
                    
                case 27: // ESCAPE
                    this.editCell.text = this.originalText;
                    this.closeEditor();
                    break;
            }
        }
    }

    editorLostFocus(){
        if (this.editCell)
            this.editCell.text = this.originalText;

        this.closeEditor();
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

        return cellWidth;
    }
}
