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
import { IntegralUIEditorType } from '../../integralui/components/integralui.core';
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-fxcol-normal
            {
                width: 800px;
                height: 400px;
            }
            .treegrid-fxcol-normal .iui-treegrid-expand-box
            {
                margin: 7px 5px 0 0;
            }
            .treegrid-fxcol-cell-label
            {
                display: inline-block;
                margin-top: 5px;
                padding: 1px 0;
                vertical-align: top;
            }
            .treegrid-fxcol-normal .iui-editor-checkbox
            {
                margin-top: 7px;
            }
            .treegrid-fxcol-project-icons
            {
                background-image: url(app/integralui/resources/project.png);
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0 !important;
                margin: 4px 7px 0 0;
                width: 24px;
                height: 24px;
                vertical-align: top;
            }
            .empty
            {
                background-position: 0px 0px;
            }
            .solution
            {
                background-position: -24px 0px;
            }
            .documents
            {
                background-position: -48px 0px;
            }
            .references
            {
                background-position: -72px 0px;
            }
            .notes
            {
                background-position: -96px 0px;
            }
            .assembly
            {
                background-position: -120px 0px;
            }
            .resources
            {
                background-position: -144px 0px;
            }
            .properties
            {
                background-position: -168px 0px;
            }
            .new
            {
                background-position: -192px 0px;
            }
            .form
            {
                background-position: -216px 0px;
            }
            .empty-doc
            {
                background-position: -240px 0px;
            }
        </style>
        <h2 class="feature-title" style="margin-left:0">TreeGrid / Fixed Columns</h2>
        <div class="feature-content">
            <div #application>
                <iui-treegrid [appRef]="applicationRef" [allowAnimation]="true" [controlStyle]="treegridStyle" [columns]="columns" [rows]="rows" [expandColumnID]="1" [showFooter]="false" [rowHeight]="32" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.headerText}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span [ngSwitch]="cell.cid">
                            <span *ngSwitchCase="1">
                                <span class="treegrid-fxcol-project-icons {{cell.icon}}"></span>
                                <span class="treegrid-fxcol-cell-label">{{cell.text}}</span>
                            </span>
                            <span *ngSwitchDefault>
                                <span class="treegrid-fxcol-cell-label">{{cell.text}}</span>
                            </span>
                        </span>
                    </ng-template>
                </iui-treegrid>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help">
                <p><span class="initial-space"></span>In this sample, first two columns are fixed on left side of the TreeGrid, while other columns remain non-fixed. When scrolling the grid view, the fixed columns will remain at the same position.</p>
                <p><span class="initial-space"></span>You can fix columns either on left or right side of the TreeGrid. The view will display columns following this priority (from top to low): left, right, none. This means that columns fixed on left side will appear in front of all other columns.</p>
                <p><span class="initial-space"></span>When column is fixed it will appear in darker colors then non-fixed columns. This is set via CSS and you can modify it on your side.</p>
                <p><span class="initial-space"></span>You can change the fixed state of a column either initially, or during run-time. Whenever this change happens, the grid layout requires an update. You can update the grid by calling the updateLayout method.</p>
                <p><span class="initial-space"></span>When you have fixed and non-fixed columns, because cells can have different content, the row with cells from fixed and non-fixed columns, can appear unaligned. To make sure the cells are aligned at all times, use the <span style="color:#c60d0d">rowHeight</span> property and set it to desired number.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-fixed-columns.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridFixedColumnsSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid', { static: false }) treegrid: IntegralUITreeGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public treegridStyle: any = {
        general: {
            normal: 'treegrid-fxcol-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 5, editorType: IntegralUIEditorType.CheckBox, editorSettings: { threeState: true }, fixed: 'left', fixedWidth: true, width: 30 },
            { id: 1, headerText: "Name", fixed: 'left', width: 300 },
            { id: 2, headerText: "Date Modified", headerAlignment: "center", contentAlignment: "center", width: 150 },
            { id: 3, headerText: "Type", headerAlignment: "center", width: 250 },
            { id: 4, headerText: "Size", headerAlignment: "center", contentAlignment: "right", width: 90 }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Solution 'Application1' (1 project)",
                cells: [{ cid: 1, icon: "solution", text: "Solution 'Application1' (1 project)" }, { cid: 5, value: 'unchecked' }]
            },
            { 
                id: 2,
                cells: [{ cid: 1, icon: "documents", text: "Application1" }, { cid: 5, value: 'indeterminate' }],
                text: "Application1",
                rows: [
                    { 
                        id: 21,
                        text: "Properties",
                        cells: [{ cid: 1, icon: "properties", text: "Properties" }, { cid: 2, text: "03 Apr 2019" }, { cid: 3, text: "File Folder" }, { cid: 5, value: 'unchecked' }],
                        rows: [
                            { id: 211, pid: 21, text: "AssemblyInfo.cs", cells: [{ cid: 1, icon: "assembly", text: "AssemblyInfo.cs" }, { cid: 2, text: "09 Mar 2019" }, { cid: 3, text: "Visual C# Source File" }, { cid: 4, text: "2 KB" }, { cid: 5, value: 'checked' }] },
                            { id: 212, pid: 21, text: "licenses.licx", cells: [{ cid: 1, icon: "notes", text: "licenses.licx" }, { cid: 2, text: "12 Mar 2019" }, { cid: 3, text: "LICX File" }, { cid: 4, text: "1 KB" }] },
                            { 
                                id: 213,
                                text: "Resources.resx",
                                cells: [{ cid: 1, icon: "resources", text: "Resources.resx" }, { cid: 2, text: "27 Mar 2019" }, { cid: 3, text: ".NET Managed Resources File" }, { cid: 4, text: "3 KB" }, { cid: 5, value: 'checked' }],
                                expanded: false,
                                rows: [
                                    { id: 2131, pid: 213, text: "Resources.Designer.cs", cells: [{ cid: 1, text: "Resources.Designer.cs" }, { cid: 2, text: "27 Mar 2019" }, { cid: 3, text: "Visual C# Source File" }, { cid: 4, text: "6 KB" }, { cid: 5, value: 'checked' }] }
                                ]
                            },
                            { 
                                id: 214,
                                text: "Settings.settings",
                                cells: [{ cid: 1,  icon: "documents", text: "Settings.settings" }, { cid: 2, text: "27 Mar 2019" }, { cid: 3, text: "Visual Studio Settings-Designer File" }, { cid: 4, text: "2 KB" }, { cid: 5, value: 'unchecked' }],
                                expanded: false,
                                rows: [
                                    { id: 2141, pid: 214, text: "Settings.Designer.cs", cells: [{ cid: 1, text: "Settings.Designer.cs" }, { cid: 2, text: "27 Mar 2019" }, { cid: 3, text: "Visual C# Source File" }, { cid: 4, text: "1 KB" }, { cid: 5, value: 'unchecked' }] }
                                ]
                            }
                        ]
                    },
                    { 
                        id: 22,
                        text: "References",
                        cells: [{ cid: 1, icon: "references", text: "References" }, { cid: 5, value: 'indeterminate' }],
                        expanded: false,
                        rows: [
                            { id: 221, pid: 22, text: "System", cells: [{ cid: 1, text: "System" }, { cid: 2, text: "03 Jul 2018" }, { cid: 3, text: "Application Extension" }, { cid: 4, text: "3,433 KB" }, { cid: 5, value: 'checked' }] },
                            { id: 222, pid: 22, text: "System.Data", cells: [{ cid: 1, text: "System.Data" }, { cid: 2, text: "17 May 2015" }, { cid: 3, text: "Application Extension" }, { cid: 4, text: "2,906 KB" }, { cid: 5, value: 'checked' }] },
                            { id: 223, pid: 22, text: "System.Deployment", cells: [{ cid: 1, text: "System.Deployment" }, { cid: 2, text: "03 Sep 2018" }, { cid: 3, text: "Application Extension" }, { cid: 4, text: "824 KB" }, { cid: 5, value: 'unchecked' }] },
                            { id: 224, pid: 22, text: "System.Drawing", cells: [{ cid: 1, text: "System.Drawing" }, { cid: 2, text: "09 Oct 2016" }, { cid: 3, text: "Application Extension" }, { cid: 4, text: "603 KB" }, { cid: 5, value: 'checked' }] },
                            { id: 225, pid: 22, text: "System.Xml", cells: [{ cid: 1, text: "System.Xml" }, { cid: 2, text: "03 Jul 2018" }, { cid: 3, text: "Application Extension" }, { cid: 4, text: "2,163 KB" }, { cid: 5, value: 'unchecked' }] }
                        ]
                    },
                    { 
                        id: 23,
                        text: "Form1.cs",
                        cells: [{ cid: 1, icon: "form", text: "Form1.cs" }, { cid: 2, text: "03 Apr 2019" }, { cid: 3, text: "Visual C# Source File" }, { cid: 4, text: "81 KB" }, { cid: 5, value: 'checked' }],
                        rows: [
                            { id: 231, pid: 23, text: "Form1.Designer.cs", cells: [{ cid: 1, text: "Form1.Designer.cs" }, { cid: 2, text: "03 Apr 2019" }, { cid: 3, text: "Visual C# Source File" }, { cid: 4, text: "27 KB" }, { cid: 5, value: 'checked' }] },
                            { id: 232, pid: 23, text: "Form1.resx", cells: [{ cid: 1, text: "Form1.resx" }, { cid: 2, text: "03 Apr 2019" }, { cid: 3, text: ".NET Managed Resources File" }, { cid: 4, text: "9 KB" }, { cid: 5, value: 'checked' }] }
                        ]
                    },
                    { id: 24, text: "Program.cs", cells: [{ cid: 1, icon: "new", text: "Program.cs" }, { cid: 2, text: "02 Apr 2019" }, { cid: 3, text: "Visual C# Source File" }, { cid: 4, text: "3 KB" }, { cid: 5, value: 'unchecked' }] }
                ]
            }
        ];
    } 
}
