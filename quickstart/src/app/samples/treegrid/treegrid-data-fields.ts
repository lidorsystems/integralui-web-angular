/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IntegralUIEditorType } from '../../integralui/components/integralui.core';
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

@Component({
    selector: '',
    template: `
        <style>
            /* TreeGrid */
            .trg-dfjson-normal {
                width: 800px;
                height: 400px;
            }
            .trg-dfjson-normal .iui-treegrid-lines-both {
                border-bottom: thin solid #d9d9d9;
            }
            .trg-dfjson-normal .iui-treegrid-row-cell:last-child {
                border-right: thin solid #d9d9d9;
            }
            .trg-dfjson-label {
                display: inline-block;
                margin: 0 0 0 5px;
                padding: 5px 0;
            }

            .trg-dfjson-normal .iui-editor-progress {
                background: #f5f5f5;
            }
            .trg-dfjson-normal .iui-editor-progress-content {
                background: #c54848;
            }
       </style>
        <h2 class="feature-title">TreeGrid / Load Data from JSON using Custom Data Fields</h2>
        <div class="feature-content">
            <div #application>
                <iui-treegrid [appRef]="applicationRef" [controlStyle]="gridStyle" [dataFields]="gridFields" [columns]="columns" [rows]="rows" [showFooter]="false" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span class="trg-dfjson-label">{{column.title}}</span>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span class="trg-dfjson-label">{{cell.description}}</span>
                    </ng-template>
                </iui-treegrid>
            </div>
            <div class="feature-help" style="width:750px">
                <p><span class="initial-space"></span>This sample shows how to populate the TreeGrid using JSON file as a data source. The data source has custom data fields, which are mapped to the ones used by the tree grid.</p>
                <p><span class="initial-space"></span>For data binding, use the <strong>dataFields</strong> property of the TreeGrid component. This property accepts an object that replaces the default field names with your own.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-data-fields.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridDataFieldsSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid') treegrid: IntegralUITreeGrid;

    public columns: Array<any> = [];
    public rows: Array<any> = [];

    public gridStyle: any = {
        general: {
            normal: 'trg-dfjson-normal'
        }
    }

    public gridFields: any = {
        column: {
            contentAlignment: 'alignContent', 
            editorType: 'content',
            headerAlignment: 'alignHeader', 
            headerText: 'title',
            id: 'columnID',
            width: 'size'
        },
        row: {
            cells: 'items',
            id: 'nodeID',
            expanded: 'isExpanded',
            pid: 'parentID',
            rows: 'children',
            text: 'description'
        },
        cell: {
            cid: 'columnID',
            text: 'description',
            value: 'itemValue'
        }
    }

    constructor(private http: HttpClient){
        this.columns = [
            { columnID: 2, title: "Summary", size: 400 },
            { 
                columnID: 3, 
                alignContent: "center", 
                alignHeader: "center",
                content: IntegralUIEditorType.Progress,
                title: "Progress"
            },
            { columnID: 4, title: "Status", alignHeader: "center", alignContent: "center" },
            { columnID: 5, title: "Assignee", size: 125 }
        ];
    }   

    ngAfterViewInit(){
        this.treegrid.selectedColumn = this.columns[0];

        // Load data into the grid from a JSON file
        this.loadFromJSON();
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/treegrid-data.json").subscribe((data: Array<any>) => {
            // Suspend the grid layout from updates, to increase performance
            self.treegrid.suspendLayout();

            // Load data into the grid
            self.treegrid.loadData(data, null, self.gridFields.row, false);

            // Resume and update the grid layout
            self.treegrid.resumeLayout();

            // Use this aggregate function to calculate the progress value of parent rows
            // This value is calculated as an average of progress values from its children
            self.treegrid.rows.map(row => { 
                let progressCell = self.treegrid.getCellByColumnId(row.items, 3); 
                progressCell ? progressCell.itemValue = self.getParentProgressFromChildren(row) : null;
            });
        });
    }

    getParentProgressFromChildren(parent: any){
        let progressCell = this.treegrid.getCellByColumnId(parent.items, 3); 

        if (progressCell && parent.children && parent.children.length > 0){
            let result = 0;
            parent.children.map(row => {
                result += this.getParentProgressFromChildren(row); 
            })

            progressCell.itemValue = result / parent.children.length;
        }

        return progressCell ? progressCell.itemValue || 0 : 0;
    }
}
