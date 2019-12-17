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
import { IntegralUIMoveDirection, IntegralUISelectionMode } from '../../integralui/components/integralui.core';
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-mlh-normal
            {
                width: 900px;
                height: 400px;
            }
        </style>
        <h2 class="feature-title">TreeGrid / Multi Level Headers</h2>
        <div class="feature-content">
            <div #application>
                <iui-treegrid [appRef]="applicationRef" [controlStyle]="treegridStyle" [columns]="columns" [rows]="rows" [autoSizeColumns]="columnsAutoSized" [selectionMode]="selMode" [showFooter]="false" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.title}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        {{cell.text}}
                    </ng-template>
                    <ng-template let-column [iuiTemplate]="{ type: 'footer' }">
                        {{column.footerText}}
                    </ng-template>
                </iui-treegrid>
                <br />
                <div><input type="checkbox" [checked]="columnsAutoSized" (click)="changeAutoSized()" style="width:auto" /><span>Auto-Size Columns</span></div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>In this demo, the TreeGrid displays columns with multiple header levels. Each column can contain other columns as children, resulting in displaying headers below the parent column header.</p>
                <p><span class="initial-space"></span>You can resize each header, this will auto resize all related parent-child headers.</p>
                <p><span class="initial-space"></span>The alignment of header and cell content can be set from headerAlignment and contentAlignment fields of each column. As you can see from the demo, columns have their content aligned on left, center or right side.</p>
                <p><span class="initial-space"></span>By checking the 'Auto-Size Columns' option, all columns will be displayed so that the treegrid width is filled in full, removing any empty space and hiding the horizontal scroll bar from the view. In AutoSize mode, you can only resize columns within the grid width, meaning resize of one column affects also the size of neighboring columns.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-multi-level-headers.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridMultiLevelHeadersSample {

    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid', { static: false }) treegrid: IntegralUITreeGrid;

    public columns: Array<any> = [];
    public rows: Array<any> = [];

    public columnsAutoSized: boolean = false;
    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;

    public treegridStyle: any = {
        general: {
            normal: 'treegrid-mlh-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 1, title: 'Header 1' },
            { 
                id: 2, 
                title: 'Header 2',
                headerAlignment: 'center',
                columns: [
                    { 
                        id: 21, 
                        pid: 2, 
                        title: 'Header21', 
                        headerAlignment: 'center',
                        columns: [
                            { id: 211, title: 'Header211', width: 80 },
                            { id: 212, title: 'Header212', headerAlignment: 'center', contentAlignment: 'center', width: 120 },
                            { id: 213, pid: 2, title: 'Header213', headerAlignment: 'right', contentAlignment: 'right', width: 120 }
                        ]
                    },
                    { id: 22, pid: 2, title: 'Header22', headerAlignment: 'center', contentAlignment: 'center', width: 150 }
                ]
            },
            { id: 3, title: 'Header 3' }
        ];

        let flatColumnList = [];
        this.createFlatColumnList(this.columns, flatColumnList);

        for (let i = 1; i <= 3; i++){
            let rowId = i.toString();
            let row = this.createRow(rowId, flatColumnList);

            // Create child rows only for the second row
            if (i === 2){
                row.rows.push(this.createRow(rowId + '1', flatColumnList));
                row.rows.push(this.createRow(rowId + '2', flatColumnList));
            }

            this.rows.push(row);
        }
    }

    private createRow(rowId: string, columnList: Array<any>){
        let row: any = {
            id: rowId,
            text: 'Row ' + rowId,
            cells: columnList.map(column => { 
                return { cid: column.id, text: 'Cell ' + rowId + column.id }
            }),
            rows: []
        }

        return row;
    }

    private createFlatColumnList(columnList: Array<any>, result: Array<any>){
        if (columnList)
            columnList.map(column => {
                result.push(column);

                this.createFlatColumnList(column.columns, result);
            });
    }

    changeAutoSized(){
        this.columnsAutoSized = !this.columnsAutoSized;
    }
}
