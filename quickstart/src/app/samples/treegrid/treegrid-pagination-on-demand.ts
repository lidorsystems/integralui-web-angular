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
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';
import { IntegralUIVisibility } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-resize-container
            {
                border: thin solid transparent;
                position: relative;
            }
            .treegrid-pgnt-cmb
            {
                display: inline-block;
                width: 150px;
            }
            .treegrid-pgnt-normal
            {
               width: 100%;
               height: 100%;
            }
            .treegrid-pgnt-normal .iui-treegrid-expand-box
            {
                margin-top: -1px;
            }
            .treegrid-pgnt-cell-label
            {
                display: inline-block;
                padding: 1px 0;
            }
            .treegrid-pgnt-ctrl-button
            {
                margin: 20px 10px 0 0;
                width: 125px;
            }
            .treegrid-pgnt-input-numeric
            {
                margin: 5px 20px 5px 0;
                width: 75px;
            }
            .treegrid-pgn-rsz-control-panel
            {
                float: left;
                margin-left: 20px;
                width: 900px;
            }
            .treegrid-pgn-rsz-control-panel button
            {
                display: inline-block;
                margin: 5px 0;
                width: 100px;
                height: 25px;
            }
        </style>
        <h2 class="feature-title">TreeGrid / Pagination on Demand</h2>
        <div class="feature-content">
            <div #application class="treegrid-resize-container" [ngStyle]="{ width: containerSize.width + 'px', height: containerSize.height + 'px' }" [iuiFrame]="frameSettings" (sizeChanged)="frameSizeChanged($event)">
                <iui-treegrid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [showScroll]="gridScrollSettings" [paging]="paginationSettings" (pageChanged)="gridPageChanged($event)" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.headerText}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        {{cell.text}}
                    </ng-template>
                    <ng-template let-column [iuiTemplate]="{ type: 'footer' }">
                        {{column.footerText}}
                    </ng-template>
                </iui-treegrid>
                <br />
                <div class="treegrid-pgn-rsz-control-panel" align="center">
                    <button (click)="addRoot()">Add Root</button>
                    <button (click)="addChild()">Add Child</button>
                    <button (click)="removeRow()">Remove Row</button>
                    <button (click)="clearRows()">Clear Rows</button>
                    <label style="margin-left:50px">Container Height: <input type="number" [(ngModel)]="containerSize.height" (change)="containerHeightChanged($event)" (input)="containerHeightChanged($event)" /></label>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>This example shows how to divide the data set in multiple pages automatically.</p>
                <p><span class="initial-space"></span>You can change the Grid size either from Container Height input box or through the grip handle at bottom-right corner in grid space. Depending on grid height and number of rows present, the pagination is enabled or not. The visiblity of vertical scroll bar is set to hidden.</p>
                <p><span class="initial-space"></span>For grip handle, the <a routerLink="/frame">iuiFrame</a> directive is used, which allos you to change the size of any element during run-time.</p>
                <p><span class="initial-space"></span>During size changed, the grid layout is updated. Because there may be multiple calls to update layout (if you change the height too quickly), there is a small time delay so that grid layout is updated only once, when last update call is processed. This is done to avoid performance drawbacks, but may result in delay in position update of the paginator panel.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-pagination-on-demand.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridPaginationOnDemandSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid') treegrid: IntegralUITreeGrid;

    public containerSize: any = { width: 900, height: 400 }
    public gridScrollSettings: any = { vertical: false }

    public columns: Array<any>;
    public rows: Array<any>;

    public paginationSettings: any = {
        enabled: false,
        pageSize: 10,
        showControlPanel: true
    }

    private rowCount: number = 3;

    public gridStyle: any = {
        general: {
            normal: 'treegrid-pgnt-normal'
        }
    }

    private avgRowHeight: number = 27;
    private footerHeight: number = 34;
    private headerHeight: number = 34;
    private paginatorHeight: number = 37;

    constructor(){
        this.columns = [
            { id: 1, headerText: "Header1", footerText: "Footer1", width: 150 },
            { id: 2, headerText: "Header2", footerText: "Footer2" }
        ];

        this.rows = [
            { id: 1, text: "Row 1", cells: [{ cid: 1, text: "Item11" }, { cid: 2, text: "Item12" }] },
            { id: 2, text: "Row 2", cells: [{ cid: 1, text: "Item21" }, { cid: 2, text: "Item22" }] },
            { id: 3, text: "Row 3", cells: [{ cid: 1, text: "Item31" }, { cid: 2, text: "Item32" }] }
        ];
    } 

    gridPageChanged(e: any){
        this.resetScrollPos();
    }

    private resetScrollPos(){
        this.treegrid.scrollPos({ x: 0, y: 0 });
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

    addRoot(){
        let row: any = this.createNewRow();
        this.treegrid.addRow(row);
        this.treegrid.updateLayout();

        this.updatePagination();
    }

    addChild(){
        let row: any = this.createNewRow();
        this.treegrid.addRow(row, this.treegrid.selectedRow);
        this.treegrid.updateLayout();

        this.updatePagination();
    }

    removeRow(){
        if (this.treegrid.selectedRow){
            this.treegrid.removeRow(this.treegrid.selectedRow);
            this.treegrid.updateLayout();
        }

        this.updatePagination();
    }

    clearRows(){
        this.treegrid.clearRows();
        this.treegrid.updateLayout();

        this.updatePagination();
    }
           
    // Frame -----------------------------------------------------------------------------

    public frameSettings: any = {
        visible: IntegralUIVisibility.Always
    }

    frameSizeChanged(e: any){
        this.containerSize = { width: e.width, height: e.height }
        this.updatePagination();
    }
           
    // Container -------------------------------------------------------------------------

    containerHeightChanged(e: any){
        this.updatePagination();
    }

    private updatePagination(){
        let list: Array<any> = this.treegrid.getList();

        if (this.containerSize.height > (this.headerHeight + this.footerHeight)){
            let newPageSize = Math.floor((this.containerSize.height - (this.headerHeight + this.footerHeight + this.paginatorHeight)) / this.avgRowHeight);
            newPageSize = newPageSize >= 1 ? newPageSize : 1;

            this.paginationSettings = {
                enabled: list.length > this.paginationSettings.pageSize ? true : false,
                pageSize: newPageSize
            }

            // A timeout here ius rerquired so that paginator appears in the Grid.
            let self = this;
            setTimeout(function(){
                self.treegrid.updateLayout();
            }, 1);
        }
    }
}
