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
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            /* Grid */
            .grid-cellnum-normal {
                width: 800px;
                height: 400px;
            }
            .grid-cellnum-normal .iui-grid-lines-both {
                border-bottom: thin solid #d9d9d9;
            }
            .grid-cellnum-normal .iui-grid-row-cell:last-child {
                border-right: thin solid #d9d9d9;
            }
            .grid-cellnum-label {
                display: block;
                padding: 7px 0;
            }

            .grid-cellnum-normal .iui-editor-numeric {
                background: white;
                border: thin solid #cecece;
                color: #2424cc;
                padding: 3px;
                width: calc(100% - 6px);
            }
       </style>
        <h2 class="feature-title">Grid / Edit Cell with Numeric UpDown</h2>
        <div class="feature-content">
            <div #application>
                <iui-grid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [showFooter]="false" (cellValueChanged)="numberChanged($event)" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span class="grid-cellnum-label">{{column.headerText}}</span>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span class="grid-cellnum-label">{{cell.text}}</span>
                    </ng-template>
                </iui-grid>
            </div>
            <div class="feature-help">
                <p><span class="initial-space"></span>An example of Grid, where you can edit numbers in grid cells using a built-in numeric up-down editor. Whenever editor is enabled, you can enter new numeric values using a keyboard or change the current number with up down buttons using a mouse or with touch.</p>
                <p><span class="initial-space"></span>In this demo, all cells in the Quantity column are having the Numeric editor enabled. By clicking inside the cell, the editor gets the input focus and you can enter a new value. The change is two-directional, meaning when a new value is entered in the editor, the cell value changes, and vice versa.</p>
                <p><span class="initial-space"></span>To enable the NumericUpDown editor, in <strong>column object</strong> you need to set the following fields:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">editorType</span> - determines the editor type in use, in this case <span style="color:#2424dd">IntegralUIEditorType.<strong>Numeric</strong></span></li>
                    <li><span style="color:#c60d0d">editorSettings</span> - specifies whether two or three state values are in use and the editor style</li>
                </ul>
                <p><span class="initial-space"></span>When editor is set in this way, all cells that belong to specified column will display a numeric up-down. You can modify this by changing the editor visibility in the cell object using the editorSettings field. In addition, you can also set whether the editor is enabled or disabled. The <strong>cell object</strong> has the following editorSettings fields:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">enabled</span> - determines whether the editor is enabled or disabled, by default is set to true</li>
                    <li><span style="color:#c60d0d">visible</span> - determines whether the editor is visible or hidden, by default is set to <span style="color:#2424dd">IntegralUIVisibility</span>.None</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-edit-cell-numeric.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridEditCellNumericSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('grid', { static: false }) grid: IntegralUIGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public gridStyle: any = {
        general: {
            normal: 'grid-cellnum-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 1, headerText: "Order ID", width: 80 },
            { id: 2, headerText: "Customer", width: 200 },
            { id: 3, headerText: "Ship Mode", width: 150 },
            { id: 4, headerText: "Ship Date", headerAlignment: "center", contentAlignment: "center" },
            { 
                id: 5, 
                contentAlignment: "center", 
                headerText: "Quantity", 
                headerAlignment: "center", 
                editorType: IntegralUIEditorType.Numeric,
                editorSettings: {
                    min: 1,
                    max: 1000
                },
                width: 80
            },
            { id: 6, headerText: "Price", headerAlignment: "center", contentAlignment: "right" }
        ];

        this.rows = [
            { 
                id: 1,
                text: "John MacIntyre",
                cells: [{ cid: 1, text: "293" }, { cid: 2, text: "John MacIntyre" }, { cid: 3, text: "Regular Air" }, { cid: 4, value: new Date(2016, 9, 21) }, { cid: 5, value: 6 }, { cid: 6, text: "$38.94" } ]
            },
            { 
                id: 2,
                text: "Barry French",
                cells: [{ cid: 1, text: "312" }, { cid: 2, text: "Barry French" }, { cid: 3, text: "Delivery Truck" }, { cid: 4, value: new Date(2018, 6, 16) }, { cid: 5, value: 49 }, { cid: 6, text: "$208.16" } ]
            },
            { 
                id: 3,
                text: "Benjamin Oliver",
                cells: [{ cid: 1, text: "476" }, { cid: 2, text: "Benjamin Oliver" }, { cid: 3, text: "Express Air" }, { cid: 4, value: new Date(2017, 2, 28) }, { cid: 5, value: 27 }, { cid: 6, text: "$8.69" } ]
            },
            { 
                id: 4,
                text: "Clay Rozendal",
                cells: [{ cid: 1, text: "119" }, { cid: 2, text: "Clay Rozendal" }, { cid: 3, text: "Express Air" }, { cid: 4, value: new Date(2018, 7, 15) }, { cid: 5, value: 30 }, { cid: 6, text: "$195.99" } ]
            },
            { 
                id: 5,
                text: "Carlos Soltero",
                cells: [{ cid: 1, text: "512" }, { cid: 2, text: "Carlos Soltero" }, { cid: 3, text: "Delivery Truck" }, { cid: 4, value: new Date(2019, 4, 20) }, { cid: 5, value: 19 }, { cid: 6, text: "$21.78" } ]
            },
            { 
                id: 6,
                text: "Noble Hancock",
                cells: [{ cid: 1, text: "575" }, { cid: 2, text: "Noble Hancock" }, { cid: 3, text: "Regular Air" }, { cid: 4, value: new Date(2016, 11, 10) }, { cid: 5, value: 21 }, { cid: 6, text: "$8.69" } ]
            },
            { 
                id: 7,
                text: "Carl Jackson",
                cells: [{ cid: 1, text: "237" }, { cid: 2, text: "Carl Jackson" }, { cid: 3, text: "Delivery Truck" }, { cid: 4, value: new Date(2018, 7, 8) }, { cid: 5, value: 12 }, { cid: 6, text: "$6.64" } ]
            },
            { 
                id: 8,
                text: "Monica Federle",
                cells: [{ cid: 1, text: "254" }, { cid: 2, text: "Monica Federle" }, { cid: 3, text: "Regular Air" }, { cid: 4, value: new Date(2019, 8, 24) }, { cid: 5, value: 22 }, { cid: 6, text: "$7.30" } ]
            },
            { 
                id: 9,
                text: "Dorothy Badders",
                cells: [{ cid: 1, text: "716" }, { cid: 2, text: "Dorothy Badders" }, { cid: 3, text: "Express Air" }, { cid: 4, value: new Date(2016, 2, 14) }, { cid: 5, value: 21 }, { cid: 6, text: "$42.76" } ]
            },
            { 
                id: 10,
                text: "Neola Schneider",
                cells: [{ cid: 1, text: "945" }, { cid: 2, text: "Neola Schneider" }, { cid: 3, text: "Delivery Truck" }, { cid: 4, value: new Date(2019, 1, 17) }, { cid: 5, value: 44 }, { cid: 6, text: "$138.14" } ]
            },
            { 
                id: 11,
                text: "Blaze Lester",
                cells: [{ cid: 1, text: "831" }, { cid: 2, text: "Blaze Lester" }, { cid: 3, text: "Regular Air" }, { cid: 4, value: new Date(2016, 6, 22) }, { cid: 5, value: 37 }, { cid: 6, text: "$4.98" } ]
            },
            { 
                id: 12,
                text: "Carlos Daly",
                cells: [{ cid: 1, text: "1024" }, { cid: 2, text: "Carlos Daly" }, { cid: 3, text: "Delivery Truck" }, { cid: 4, value: new Date(2018, 5, 29) }, { cid: 5, value: 32 }, { cid: 6, text: "$4.28" } ]
            },
            { 
                id: 13,
                text: "Steven Donaldson",
                cells: [{ cid: 1, text: "712" }, { cid: 2, text: "Steven Donaldson" }, { cid: 3, text: "Regular Air" }, { cid: 4, value: new Date(2017, 7, 9) }, { cid: 5, value: 19 }, { cid: 6, text: "$3.95" } ]
            },
            { 
                id: 14,
                text: "Claudia Miner",
                cells: [{ cid: 1, text: "449" }, { cid: 2, text: "Claudia Miner" }, { cid: 3, text: "Delivery Truck" }, { cid: 4, value: new Date(2019, 4, 4) }, { cid: 5, value: 24 }, { cid: 6, text: "$21.78" } ]
            },
            { 
                id: 15,
                text: "Bert Gibbs",
                cells: [{ cid: 1, text: "312" }, { cid: 2, text: "Bert Gibbs" }, { cid: 3, text: "Delivery Truck" }, { cid: 4, value: new Date(2017, 10, 11) }, { cid: 5, value: 11 }, { cid: 6, text: "$47.98" } ]
            },
            { 
                id: 16,
                text: "Allen Rosenblatt",
                cells: [{ cid: 1, text: "573" }, { cid: 2, text: "Allen Rosenblatt" }, { cid: 3, text: "Express Air" }, { cid: 4, value: new Date(2018, 7, 23) }, { cid: 5, value: 15 }, { cid: 6, text: "$5.28" } ]
            },
            { 
                id: 17,
                text: "Sylvia Foulston",
                cells: [{ cid: 1, text: "233" }, { cid: 2, text: "Sylvia Foulston" }, { cid: 3, text: "Regular Air" }, { cid: 4, value: new Date(2019, 2, 15) }, { cid: 5, value: 27 }, { cid: 6, text: "$39.89" } ]
            },
            { 
                id: 18,
                text: "Henry Branch",
                cells: [{ cid: 1, text: "119" }, { cid: 2, text: "Henry Branch" }, { cid: 3, text: "Delivery Truck" }, { cid: 4, value: new Date(2016, 5, 7) }, { cid: 5, value: 5 }, { cid: 6, text: "$15.74" } ]
            },
            { 
                id: 19,
                text: "Jim Radford",
                cells: [{ cid: 1, text: "158" }, { cid: 2, text: "Jim Radford" }, { cid: 3, text: "Express Air" }, { cid: 4, value: new Date(2019, 11, 4) }, { cid: 5, value: 9 }, { cid: 6, text: "$100.98" } ]
            },
            { 
                id: 20,
                text: "Carl Forbes",
                cells: [{ cid: 1, text: "356" }, { cid: 2, text: "Carl Forbes" }, { cid: 3, text: "Delivery Truck" }, { cid: 4, value: new Date(2016, 8, 27) }, { cid: 5, value: 12 }, { cid: 6, text: "$71.37" } ]
            },
            { 
                id: 21,
                text: "Christian Woodward",
                cells: [{ cid: 1, text: "627" }, { cid: 2, text: "Christian Woodward" }, { cid: 3, text: "Express Air" }, { cid: 4, value: new Date(2018, 3, 12) }, { cid: 5, value: 35 }, { cid: 6, text: "$7.26" } ]
            },
        ];
    }   

    ngAfterViewInit(){
        this.grid.selectedColumn = this.columns[0];

        for (let i = 0; i < this.rows.length; i++){
            if (this.rows[i].cells[3].value instanceof Date)
                this.rows[i].cells[3].text = this.rows[i].cells[3].value.toLocaleString('en-gb', { year: 'numeric', month: 'short', day: 'numeric' });
        }
    }

    numberChanged(e: any){
        console.log("Cell value changed to: ", e.value);
    }
}
