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
            .grid-cellchbox-normal {
                width: 800px;
                height: 400px;
            }
            .grid-cellchbox-normal .iui-grid-lines-both {
                border-bottom: thin solid #d9d9d9;
            }
            .grid-cellchbox-normal .iui-grid-row-cell:last-child {
                border-right: thin solid #d9d9d9;
            }
            .grid-cellchbox-label {
                display: block;
                padding: 7px 0;
            }
            .grid-cellchbox-checked {
                background-image: url(integralui/resources/checkbox/checkbox-checked-4.png);
            }
            .grid-cellchbox-unchecked {
                background-image: url(integralui/resources/checkbox/checkbox-unchecked-4.png);
            }
       </style>
        <h2 class="feature-title">Grid / Edit Cell with CheckBox</h2>
        <div class="feature-content">
            <div #application>
                <iui-grid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [showFooter]="false" (cellValueChanging)="valueIsChanging($event)" (cellValueChanged)="valueHasChanged($event)" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span class="grid-cellchbox-label">{{column.headerText}}</span>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span class="grid-cellchbox-label">{{cell.text}}</span>
                    </ng-template>
                </iui-grid>
            </div>
            <div class="feature-help">
                <p><span class="initial-space"></span>An example of a Grid cell with a checkbox as editor. CheckBox editor can display two or three state values and its fully customizable via CSS.</p>
                <p><span class="initial-space"></span>To enable the checkbox editor, in <strong>column object</strong> you need to set the following fields:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">editorType</span> - determines the editor type in use, in this case <span style="color:#2424dd">IntegralUIEditorType.<strong>CheckBox</strong></span></li>
                    <li><span style="color:#c60d0d">editorSettings</span> - specifies whether two or three state values are in use and the editor style</li>
                </ul>
                <p><span class="initial-space"></span>When editor is set in this way, all cells that belong to specified column will display a checkbox. You can modify this by changing the editor visibility in the cell object using the editorSettings field. In addition, you can also set whether the editor is enabled or disabled. The <strong>cell object</strong> has the following editorSettings fields:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">enabled</span> - determines whether the editor is enabled or disabled, by default is set to true</li>
                    <li><span style="color:#c60d0d">visible</span> - determines whether the editor is visible or hidden, by default is set to <span style="color:#2424dd">IntegralUIVisibility</span>.None</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-edit-cell-checkbox.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridEditCellCheckBoxSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('grid') grid: IntegralUIGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public gridStyle: any = {
        general: {
            normal: 'grid-cellchbox-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 1, headerText: "Order ID", width: 120 },
            { 
                id: 2, 
                contentAlignment: "center", 
                headerText: "Completed", 
                headerAlignment: "center", 
                editorType: IntegralUIEditorType.CheckBox,
                editorSettings: {
                    /* 
                    style: {
                        checked: 'grid-cellchbox-checked',
                        unchecked: 'grid-cellchbox-unchecked'
                    }*/
                },
                width: 80
            },
            { id: 3, headerText: "Company", width: 300 },
            { id: 4, headerText: "Date", headerAlignment: "center", contentAlignment: "center" },
            { id: 5, headerText: "Price", headerAlignment: "center", contentAlignment: "right" }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Mauris Nulla Integer Ltd",
                cells: [{ cid: 1, text: "1642030828199" }, { cid: 2, value: false }, { cid: 3, text: "Mauris Nulla Integer Ltd" }, { cid: 4, value: new Date(2018, 6, 20) }, { cid: 5, text: "$3,655.00" } ]
            },
            { 
                id: 2,
                text: "Vulputate Dui Nec Foundation",
                cells: [{ cid: 1, text: "1684122082299" }, { cid: 2, value: true }, { cid: 3, text: "Vulputate Dui Nec Foundation" }, { cid: 4, value: new Date(2017, 9, 15) }, { cid: 5, text: "$2,675.00" } ]
            },
            { 
                id: 3,
                text: "Semper Nam Limited",
                cells: [{ cid: 1, text: "1669110931899" }, { cid: 2, value: false }, { cid: 3, text: "Semper Nam Limited" }, { cid: 4, value: new Date(2019, 0, 8) }, { cid: 5, text: "$1,418.00" } ]
            },
            { 
                id: 4,
                text: "Justo Faucibus Incorporated",
                cells: [{ cid: 1, text: "1653011887699" }, { cid: 2, value: false }, { cid: 3, text: "Justo Faucibus Incorporated" }, { cid: 4, value: new Date(2017, 7, 17) }, { cid: 5, text: "$1,232.00" } ]
            },
            { 
                id: 5,
                text: "Ut Mi Industries",
                cells: [{ cid: 1, text: "1649090842499" }, { cid: 2, value: true }, { cid: 3, text: "Ut Mi Industries" }, { cid: 4, value: new Date(2018, 5, 23) }, { cid: 5, text: "$676.00" } ]
            },
            { 
                id: 6,
                text: "Eget Metus In Corp.",
                cells: [{ cid: 1, text: "1600052637599" }, { cid: 2, value: false }, { cid: 3, text: "Eget Metus In Corp." }, { cid: 4, value: new Date(2017, 11, 12) }, { cid: 5, text: "$3,472.00" } ]
            },
            { 
                id: 7,
                text: "Mauris Nulla Integer Ltd",
                cells: [{ cid: 1, text: "1640051724699" }, { cid: 2, value: true }, { cid: 3, text: "Facilisis Magna Institute" }, { cid: 4, value: new Date(2017, 10, 26) }, { cid: 5, text: "$4,054.00" } ]
            },
            { 
                id: 8,
                text: "Quis Massa Mauris LLC",
                cells: [{ cid: 1, text: "1667092366599" }, { cid: 2, value: true }, { cid: 3, text: "Quis Massa Mauris LLC" }, { cid: 4, value: new Date(2017, 5, 28) }, { cid: 5, text: "$1,241.00" } ]
            },
            { 
                id: 9,
                text: "Mauris A Corp.",
                cells: [{ cid: 1, text: "1629072849599" }, { cid: 2, value: false }, { cid: 3, text: "Mauris A Corp." }, { cid: 4, value: new Date(2018, 8, 18) }, { cid: 5, text: "$2,899.00" } ]
            },
            { 
                id: 10,
                text: "Sed Leo Cras Inc.",
                cells: [{ cid: 1, text: "1669081259199" }, { cid: 2, value: false }, { cid: 3, text: "Sed Leo Cras Inc." }, { cid: 4, value: new Date(2018, 3, 2) }, { cid: 5, text: "$2,942.00" } ]
            },
            { 
                id: 11,
                text: "Dapibus Id LLC",
                cells: [{ cid: 1, text: "1662122757299" }, { cid: 2, value: false }, { cid: 3, text: "Dapibus Id LLC" }, { cid: 4, value: new Date(2017, 5, 15) }, { cid: 5, text: "$4,747.00" } ]
            },
            { 
                id: 12,
                text: "Lobortis Consulting",
                cells: [{ cid: 1, text: "1647022121499" }, { cid: 2, value: true }, { cid: 3, text: "Lobortis Consulting" }, { cid: 4, value: new Date(2017, 7, 3) }, { cid: 5, text: "$550.00" } ]
            },
            { 
                id: 13,
                text: "Nullam Ut Ltd",
                cells: [{ cid: 1, text: "1676122710899" }, { cid: 2, value: true }, { cid: 3, text: "Nullam Ut Ltd" }, { cid: 4, value: new Date(2018, 1, 7) }, { cid: 5, text: "$1,326.00" } ]
            },
            { 
                id: 14,
                text: "Purus Duis Elementum Ltd",
                cells: [{ cid: 1, text: "1625040452099" }, { cid: 2, value: false }, { cid: 3, text: "Purus Duis Elementum Ltd" }, { cid: 4, value: new Date(2019, 0, 18) }, { cid: 5, text: "$622.00" } ]
            },
            { 
                id: 15,
                text: "Cras Foundation",
                cells: [{ cid: 1, text: "1627070468599" }, { cid: 2, value: true }, { cid: 3, text: "Cras Foundation" }, { cid: 4, value: new Date(2017, 5, 27) }, { cid: 5, text: "$1,790.00" } ]
            }
        ];
    }   

    ngAfterViewInit(){
        this.grid.selectedColumn = this.columns[0];

        for (let i = 0; i < this.rows.length; i++){
            if (this.rows[i].cells[3].value instanceof Date)
                this.rows[i].cells[3].text = this.rows[i].cells[3].value.toLocaleString('en-gb', { year: 'numeric', month: 'short', day: 'numeric' });
        }
    }

    valueIsChanging(e: any){
        console.log("cellValueChanging fired: ", e);
    }

    valueHasChanged(e: any){
        console.log("cellValueChanged fired: ", e);
    }
}
