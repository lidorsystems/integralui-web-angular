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
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            .grid-excedit-normal
            {
                width: 900px;
                height: 400px;
            }
        </style>
        <div>
            <h2 class="feature-title">Grid / Excel Like Editor</h2>
            <div class="feature-content" #application>
                <iui-grid [appRef]="applicationRef" [columns]="columns" [rows]="rows" [showFooter]="false" [controlStyle]="gridStyle" [allowDrag]="true" [allowFocus]="true" [rowHeight]="19" (beforeEdit)="onBeforeEdit($event)" #grid>
                        <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                            {{column.headerText}}
                        </ng-template>
                        <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                            <div (mouseup)="cellMouseUp($event, cell)">
                                <input *ngIf="cell==editCell" type="text" [(ngModel)]="cell.text" (keydown)="editorKeyDown($event)" (focus)="selectContent($event)" (blur)="editorLostFocus()" [iuiFocus]="editorFocused" [ngStyle]="{ width: getCellWidth(cell) + 'px' }" />
                                <span *ngIf="cell!=editCell">
                                    {{cell.text}}
                                </span>
                            </div>
                        </ng-template>
                </iui-grid>
                <br style="clear:both;"/>
                <div class="feature-help" style="width:800px;">
                    <p><span class="initial-space"></span>This sample demonstrates keyboard navigation and editing of Grid cells like in Excel application.</p>
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
                    <p><span class="initial-space"></span>During navigation, if a cell is not present in current view, the grid is scrolled accordingly.</p>
                    <p><span class="initial-space"></span>When cell is focused, by pressing ENTER key you can start edit mode. When editing is active, you can still navigate among cells using described keys above. Any change to the cell text is automatically applied. This allows you to quickly move from one cell to another. To exit the edit mode, just press ENTER or ESCAPE key.</p>
                    <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-excel-editor.ts</i>) file.</p> 
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridExcelEditorSample {
    @ViewChild('grid') grid: IntegralUIGrid;
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    // Data
    public columns: Array<any> = [];
    public rows: Array<any> = [];

    public gridStyle: any = {
        general: {
            normal: 'grid-excedit-normal'
        }
    }

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
        for (let j = 1; j <= 10; j++)
            this.columns.push({ id: j, headerText: "Header " + j });

        let count: number = 0;

        for (let i = 1; i <= 1000; i++){
            let row: any = {
                id: i,
                text: "Row " + i,
                cells: []
            }

            for (let j = 1; j <= this.columns.length; j++){
                count++;

                row.cells.push({ text: "Cell" + i + j, tabIndex: count });
            }

            this.rows.push(row);
        }
    } 

    ngOnDestroy(){
        if (this.editTimeout)
            clearTimeout(this.editTimeout);
    }

    // Editing ---------------------------------------------------------------------------

    selectContent(e: any){
        if (e.target){
            setTimeout(function(){
                e.target.setSelectionRange(0, e.target.value.length);
            }, 1);
        }
    }

    getCellWidth(cell: any){
        let row = this.grid.findRowById(cell.rid);
        if (row){
            let cellIndex = row.cells.indexOf(cell);

            if (cellIndex >= 0 && cellIndex < this.columns.length){
                if (!this.columns[cellIndex].width)
                    this.columns[cellIndex].width = 100;

                return this.columns[cellIndex].width - 4;
            }
        }

        return 100;
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

            self.grid.focusedCell = null;

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
                    this.grid.focusedCell = this.editCell;
                    this.closeEditor();
                    break;
                    
                case 27: // ESCAPE
                    this.grid.focusedCell = this.editCell;
                    this.editCell.text = this.originalText;
                    this.closeEditor();
                    break;

                case 33: // PAGE_UP
                    newCell = this.grid.moveFocusFromCell(this.editCell, 'pageup');
                    break;

                case 34: // PAGE_DOWN
                    newCell = this.grid.moveFocusFromCell(this.editCell, 'pagedown');
                    break;

                case 35: // END
                    newCell = this.grid.moveFocusFromCell(this.editCell, 'end');
                    break;

                case 36: // HOME
                    newCell = this.grid.moveFocusFromCell(this.editCell, 'home');
                    break;

                case 37: // LEFT_ARROW
                    newCell = this.grid.moveFocusFromCell(this.editCell, 'left');
                    break;

                case 38: // UP_ARROW
                    newCell = this.grid.moveFocusFromCell(this.editCell, 'up');
                    break;
                    
                case 39: // RIGHT_ARROW
                    newCell = this.grid.moveFocusFromCell(this.editCell, 'right');
                    break;
                    
                case 40: // DOWN_ARROW
                    newCell = this.grid.moveFocusFromCell(this.editCell, 'down');
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
