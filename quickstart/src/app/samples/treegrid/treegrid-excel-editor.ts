/*
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, HostListener, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-excedit-normal
            {
                width: 900px;
                height: 400px;
            }
            .treegrid-excedit-cell-content
            {
                display: inline-block;
            }
        </style>
        <div>
            <h2 class="feature-title">TreeGrid / Excel Like Editor</h2>
            <div class="feature-content" #application>
                <iui-treegrid [appRef]="applicationRef" [columns]="columns" [rows]="rows" [controlStyle]="gridStyle" [showFooter]="false" [allowDrag]="true" [allowFocus]="true" [rowHeight]="19" (beforeEdit)="onBeforeEdit($event)" #treegrid>
                        <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                            {{column.headerText}}
                        </ng-template>
                        <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                            <div class="treegrid-excedit-cell-content" (mouseup)="cellMouseUp($event, cell)">
                                <input *ngIf="cell==editCell" type="text" [(ngModel)]="cell.text" (keydown)="editorKeyDown($event)" (focus)="selectContent($event)" (blur)="editorLostFocus()" [iuiFocus]="editorFocused" [ngStyle]="{ width: getCellWidth(cell) + 'px' }" />
                                <span *ngIf="cell!=editCell">
                                    {{cell.text}}
                                </span>
                            </div>
                        </ng-template>
                </iui-treegrid>
                <br style="clear:both;"/>
                <div class="feature-help" style="width:800px;">
                    <p><span class="initial-space"></span>This sample demonstrates keyboard navigation and editing of TreeGrid cells like in Excel application.</p>
                    <p><span class="initial-space"></span>You can navigate among cells using the following keys:</p>
                    <ul class="feature-points">
                        <li><span style="color:#c60d0d">Left Arrow</span> - moves the focus to one cell left</li>
                        <li><span style="color:#c60d0d">Right Arrow</span> - moves the focus to one cell right</li>
                        <li><span style="color:#c60d0d">Up Arrow</span> - moves the focus to one cell up</li>
                        <li><span style="color:#c60d0d">Down Arrow</span> - moves the focus to one cell down</li>
                        <li><span style="color:#c60d0d">PageUp</span> - moves one view up</li>
                        <li><span style="color:#c60d0d">PageDown</span> - moves one view down</li>
                        <li><span style="color:#c60d0d">Home</span> - moves the focus to a cell in first row</li>
                        <li><span style="color:#c60d0d">End</span> - moves the focus to a cell in last row</li>
                    </ul>
                    <p><span class="initial-space"></span>During navigation, if a cell is not present in current view, the grid is scrolled accordingly. If a cell has the expand box, it will first collapse or expand prior moving to the next cell.</p>
                    <p><span class="initial-space"></span>When cell is focused, by pressing ENTER key you can start edit mode. When editing is active, you can still navigate among cells using described keys above. Any change to the cell text is automatically applied. This allows you to quickly move from one cell to another. To exit the edit mode, just press ENTER or ESCAPE key.</p>
                    <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-excel-editor.ts</i>) file.</p> 
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridExcelEditorSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid') treegrid: IntegralUITreeGrid;

    // Data
    public columns: Array<any> = [];
    public rows: Array<any> = [];

    public gridStyle: any = {
        general: {
            normal: 'treegrid-excedit-normal'
        }
    }

    private rowCount: number = 0;
    private cellCount: number = 0;
    public numRows: number = 1000;
    public numLevels: number = 2;

    // Editing
    public editCell: any = null;
    public editorFocused: boolean = false;
    private editTimeout: any = null;
    private isEditActive: boolean = false;
    private originalText: string = '';

    private leftColumnIndex: number = 0;
    private topRowIndex: number = 0;
    private gridScrollPos = { x: 0, y: 0 }

    // Initiaization ---------------------------------------------------------------------

    constructor(){
    } 

    ngAfterViewInit(){
        // Create Columns
        for (let j = 1; j <= 10; j++){
            let column: any = {
                headerText : 'Header ' + j,
                id: j,
                width: 100
            };

            if (j == 1)
                column.width = 150;

            this.columns.push(column);
        }

        // Create Rows
        this.addRows(null, 0);
    }

    ngOnDestroy(){
        if (this.editTimeout)
            clearTimeout(this.editTimeout);
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
                    this.cellCount++;
                    row.cells.push({ cid: this.columns[j].id, text: "Cell" + (this.rowCount+1).toString() + j, tabIndex: this.cellCount });
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

    // Editing ---------------------------------------------------------------------------

    selectContent(e: any){
        if (e.target){
            setTimeout(function(){
                e.target.setSelectionRange(0, e.target.value.length);
            }, 1);
        }
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

        if (cell.cid == 1){
            let row = this.treegrid.findRowById(cell.rid);
            let level: number = this.getRowLevel(row);

            cellPadding = 25 + level*15;
        }

        cellWidth -= cellPadding;

        return cellWidth;
    }

    cellMouseUp(e: any, cell: any){
        // Show text editor on mouse up, but only on left mouse button click, when there is no active multi-selection and no menu option clicked
        if (e.which == 1 && !e.ctrlKey && !e.shiftKey)
            this.showEditor(cell);
    }

    onBeforeEdit(e: any){
        e.cancel = true;

        this.showEditor(e.cell, 0);
    }

    showEditor(cell: any, delay?: number){
        if (cell){
            let self = this;

            self.treegrid.focusedCell = null;

            if (self.editTimeout)
                clearTimeout(self.editTimeout);

            let editorDelay = delay == 0 ? 0 : 500;

            if (!self.isEditActive)
                self.editTimeout = setTimeout(function(){
                    self.openTextEditor(cell);

                    clearTimeout(self.editTimeout);
                }, editorDelay);
            else
                self.openTextEditor(cell);
        }
    }

    openTextEditor(cell: any){
        this.originalText = cell.text;
        this.isEditActive = true;
        this.editCell = cell;
        this.editorFocused = true;
    }

    closeEditor(){
        this.editCell = null;
        this.originalText = '';
        this.editorFocused = false;
    }

    editorKeyDown(e: any){
        let self = this;

        if (this.editCell){
            let focusTimer: any = null;
            let newCell: any = null;
            
            switch (e.keyCode){
                case 13: // ENTER
                    this.treegrid.focusedCell = this.editCell;
                    this.closeEditor();
                    break;
                    
                case 27: // ESCAPE
                    this.treegrid.focusedCell = this.editCell;
                    this.editCell.text = this.originalText;
                    this.closeEditor();
                    break;

                case 33: // PAGE_UP
                    newCell = this.treegrid.moveFocusFromCell(this.editCell, 'pageup');
                    break;

                case 34: // PAGE_DOWN
                    newCell = this.treegrid.moveFocusFromCell(this.editCell, 'pagedown');
                    break;

                case 35: // END
                    newCell = this.treegrid.moveFocusFromCell(this.editCell, 'end');
                    break;

                case 36: // HOME
                    newCell = this.treegrid.moveFocusFromCell(this.editCell, 'home');
                    break;

                case 37: // LEFT_ARROW
                    newCell = this.treegrid.moveFocusFromCell(this.editCell, 'left');
                    break;

                case 38: // UP_ARROW
                    newCell = this.treegrid.moveFocusFromCell(this.editCell, 'up');
                    break;
                    
                case 39: // RIGHT_ARROW
                    newCell = this.treegrid.moveFocusFromCell(this.editCell, 'right');
                    break;
                    
                case 40: // DOWN_ARROW
                    newCell = this.treegrid.moveFocusFromCell(this.editCell, 'down');
                    break;
            }

            if (newCell)
                focusTimer = setTimeout(function(){
                    self.showEditor(newCell);
                    clearTimeout(focusTimer);
                }, 10);
        }

        e.stopPropagation();
    }

    editorLostFocus(){
        //if (this.editCell)
            //this.editCell.text = this.originalText;

        this.closeEditor();
    }
}
