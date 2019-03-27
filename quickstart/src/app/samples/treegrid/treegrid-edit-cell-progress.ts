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
import { IntegralUIEditorType } from '../../integralui/components/integralui.core';
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

@Component({
    selector: '',
    template: `
        <style>
            /* TreeGrid */
            .trg-cellprg-normal {
                width: 800px;
                height: 400px;
            }
            .trg-cellprg-normal .iui-grid-lines-both {
                border-bottom: thin solid #d9d9d9;
            }
            .trg-cellprg-normal .iui-grid-row-cell:last-child {
                border-right: thin solid #d9d9d9;
            }
            .trg-cellprg-label {
                display: inline-block;
                margin: 0 0 0 5px;
                padding: 7px 0;
            }

            .trg-cellprg-normal .iui-editor-progress {
                border: 0;
                background: #f5f5f5;
                padding: 0;
            }
            .trg-cellprg-normal .iui-editor-progress-content {
                background: #48c548;
            }
        </style>
        <h2 class="feature-title">TreeGrid / Cell with ProgressBar</h2>
        <div class="feature-content">
            <div #application>
                <iui-treegrid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [showFooter]="false" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span class="trg-cellprg-label">{{column.headerText}}</span>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span class="trg-cellprg-label">{{cell.text}}</span>
                    </ng-template>
                </iui-treegrid>
            </div>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>TreeGrid that displays a progress bar in column cells. You can set a specific column to show a progress bar in each cell and change the way it appears using custom CSS styles.</p>
                <p><span class="initial-space"></span>In this demo, the Progress column displays a progress bar visualizing the completion of specific operation. Depending on cell value, the progress is updated. For parent rows, the progress value is calculated from its children, using an aggregation function.</p>
                <p><span class="initial-space"></span>To enable the ProgressBar, in <strong>column object</strong> you need to set the following fields:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">editorType</span> - determines the editor type in use, in this case <span style="color:#2424dd">IntegralUIEditorType.<strong>Progress</strong></span></li>
                    <li><span style="color:#c60d0d">editorSettings</span> - specifies whether two or three state values are in use and the editor style</li>
                </ul>
                <p><span class="initial-space"></span>When editor is set in this way, all cells that belong to specified column will display a progress. You can modify this by changing the editor visibility in the cell object using the editorSettings field. In addition, you can also set whether the editor is enabled or disabled. The <strong>cell object</strong> has the following editorSettings fields:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">enabled</span> - determines whether the editor is enabled or disabled, by default is set to true</li>
                    <li><span style="color:#c60d0d">visible</span> - determines whether the editor is visible or hidden, by default is set to <span style="color:#2424dd">IntegralUIVisibility</span>.None</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-edit-cell-progress.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridEditCellProgressSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid') treegrid: IntegralUITreeGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public gridStyle: any = {
        general: {
            normal: 'trg-cellprg-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 2, headerText: "Summary", width: 400 },
            { 
                id: 3, 
                contentAlignment: "center", 
                headerText: "Progress", 
                headerAlignment: "center", 
                editorType: IntegralUIEditorType.Progress
            },
            { id: 4, headerText: "Status", headerAlignment: "center", contentAlignment: "center" },
            { id: 5, headerText: "Assignee", width: 125 }
        ];

        this.rows = [
            { 
                id: 1, 
                cells: [{ cid: 2, text: "Theme Park Construction" }, { cid: 3 }, { cid: 4, text: "In Progress" } ],
                rows: [
                    { 
                        id: 11,
                        cells: [{ cid: 2, text: "Site Preparations" }, { cid: 3 }, { cid: 4, text: "Open" }, { cid: 5, text: "Steven Beck" } ],
                        rows: [
                            { 
                                id: 111,
                                expanded: false,
                                cells: [{ cid: 2, text: "Location Map" }, { cid: 3 }, { cid: 4, text: "In Progress" } ],
                                rows: [
                                    { 
                                        id: 1111,
                                        cells: [{ cid: 2, text: "Relocate trees" }, { cid: 3, value: 100 }, { cid: 4, text: "Resolved" }, { cid: 5, text: "Unassigned" } ]
                                    },
                                    { 
                                        id: 1112,
                                        cells: [{ cid: 2, text: "Relocate Elves" }, { cid: 3, value: 78 }, { cid: 4, text: "Reopened" }, { cid: 5, text: "Bruno Klein" } ]
                                    },
                                    { 
                                        id: 1113,
                                        cells: [{ cid: 2, text: "Bulldoze the hills" }, { cid: 3, value: 40 }, { cid: 4, text: "Open" }, { cid: 5, text: "Kamal Fuller" } ]
                                    },
                                    { 
                                        id: 1114,
                                        cells: [{ cid: 2, text: "Remove waste rock and soil" }, { cid: 3, value: 90 }, { cid: 4, text: "In Progress" }, { cid: 5, text: "Ryan Foley" } ]
                                    },
                                    { 
                                        id: 1115,
                                        cells: [{ cid: 2, text: "Build access road" }, { cid: 3, value: 28 }, { cid: 4, text: "Open" }, { cid: 5, text: "Ryan Foley" } ]
                                    }
                                ]
                            },
                            { 
                                id: 112,
                                cells: [{ cid: 2, text: "Dig escape tunnels for staff" }, { cid: 3, value: 71 }, { cid: 4, text: "Open" }, { cid: 5, text: "Kamal Fuller" } ]
                            },
                            { 
                                id: 113,
                                cells: [{ cid: 2, text: "Build a transparent dome over the theme park" }, { cid: 3 }, { cid: 4, text: "Open" }, { cid: 5, text: "Kamal Fuller" } ],
                                rows: [
                                    { 
                                        id: 1131,
                                        cells: [{ cid: 2, text: "Check seismic activity" }, { cid: 3, value: 0 }, { cid: 4, text: "To Do" }, { cid: 5, text: "Unassigned" } ]
                                    }
                                ]
                            },
                            { 
                                id: 114,
                                cells: [{ cid: 2, text: "Install entrance checkpoints" }, { cid: 3, value: 50 }, { cid: 4, text: "Open" }, { cid: 5, text: "Ryan Foley" } ]
                            }
                        ]
                    },
                    { 
                        id: 12,
                        cells: [{ cid: 2, text: "Marketing + PR activities" }, { cid: 3 }, { cid: 4, text: "In Progress" }, { cid: 5, text: "Aurelia Rivers" } ],
                        rows: [
                            { 
                                id: 121,
                                cells: [{ cid: 2, text: "New folders" }, { cid: 3 }, { cid: 4, text: "Open" } ],
                                rows: [
                                    { 
                                        id: 1211,
                                        cells: [{ cid: 2, text: "Advertising" }, { cid: 3, value: 0 }, { cid: 4, text: "To Do" }, { cid: 5, text: "Unassigned" } ]
                                    },
                                    { 
                                        id: 1212,
                                        cells: [{ cid: 2, text: "Backlog Breakdown Plugin requirements" }, { cid: 3, value: 0 }, { cid: 4, text: "To Do" }, { cid: 5, text: "Unassigned" } ]
                                    },
                                    { 
                                        id: 1213,
                                        cells: [{ cid: 2, text: "30-minute TV advertisement for prime-time broadcast/superbowl etc." }, { cid: 3, value: 0 }, { cid: 4, text: "To Do" }, { cid: 5, text: "Bert Gibbs" } ]
                                    },
                                    { 
                                        id: 1214,
                                        cells: [{ cid: 2, text: "Celebrity endorsements" }, { cid: 3, value: 90 }, { cid: 4, text: "To Do" }, { cid: 5, text: "Isabella Parsons" } ]
                                    }
                                ]
                            },
                            { 
                                id: 122,
                                cells: [{ cid: 2, text: "Anti-PR campaign to discredit safety of competing theme parks" }, { cid: 3, value: 76 }, { cid: 4, text: "In Progress" }, { cid: 5, text: "Bert Gibbs" } ]
                            }
                        ]
                    },
                    { 
                        id: 13,
                        cells: [{ cid: 2, text: "Rides + attractions" }, { cid: 3 }, { cid: 4, text: "Open" }, { cid: 5, text: "Theodore Reese" } ],
                        rows: [
                            { 
                                id: 131,
                                cells: [{ cid: 2, text: "Redefine the Standard Model of particle physics" }, { cid: 3, value: 0 }, { cid: 4, text: "Open" }, { cid: 5, text: "Benjamin Oliver" } ]
                            },
                            { 
                                id: 132,
                                cells: [{ cid: 2, text: "Arrange black hole insurance" }, { cid: 3, value: 100 }, { cid: 4, text: "Reopened" }, { cid: 5, text: "Benjamin Oliver" } ]
                            },
                            { 
                                id: 133,
                                cells: [{ cid: 2, text: "Automatic hyper-drive engine warm up when enemy ships are close" }, { cid: 3, value: 0 }, { cid: 4, text: "Open" }, { cid: 5, text: "George Thornton" } ]
                            },
                            { 
                                id: 134,
                                cells: [{ cid: 2, text: "Use reverse hyper-driving to accumulate energy on braking" }, { cid: 3, value: 15 }, { cid: 4, text: "Open" }, { cid: 5, text: "Larissa Olsen" } ]
                            },
                            { 
                                id: 135,
                                cells: [{ cid: 2, text: "Fuel Efficiency" }, { cid: 3, value: 30 }, { cid: 4, text: "Open" }, { cid: 5, text: "Blaze Lester" } ]
                            }
                        ]
                    }
                ]
            },
        ];
    }   

    ngAfterViewInit(){
        this.treegrid.selectedColumn = this.columns[0];

        this.rows.map(row => { 
            let progressCell = this.treegrid.getCellByColumnId(row.cells, 3); 
            progressCell ? progressCell.value = this.getParentProgressFromChildren(row) : null;
        });
    }

    getParentProgressFromChildren(parent: any){
        let progressCell = this.treegrid.getCellByColumnId(parent.cells, 3); 

        if (parent.rows && parent.rows.length > 0){
            let result = 0;
            parent.rows.map(row => {
                result += this.getParentProgressFromChildren(row); 
            })

            progressCell.value = result / parent.rows.length;
        }

        return progressCell.value || 0;
    }
}
