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
import { IntegralUIColorFormat, IntegralUIEditorType } from '../../integralui/components/integralui.core';
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            .grid-cellcpkr-normal
            {
                width: 850px;
                height: 325px;
            }
            .grid-cellcpkr-normal .iui-treegrid-expand-box
            {
                margin-top: -3px;
            }
            .grid-cellcpkr-item-label
            {
                display: inline-block;
                margin-top: 3px;
                padding: 2px 0;
            }

            /* CheckBox Cell */
            .cell-checkbox
            {
                background: url('') no-repeat 0 0;
                display: inline-block;
                padding: 0;
                margin: 0 7px;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }

            /* Color Picker Cell */
            .grid-cellcpkr-normal .iui-editor-dropdown-button, .grid-cellcpkr-normal .iui-editor-color-value {
                margin-top: 2px;
            }
            .grid-cellcpkr-normal .iui-editor-color-background {
                top: -1px;
            }

            /* Price Cell */
            .price-cell
            {
                margin-top: 5px;
                padding-right: 2px;
            }
            .icons
            {
                background-image: url(app/integralui/resources/icons.png);
                background-repeat: no-repeat;
                display: inline-block;
                float: left;
                overflow: hidden;
                padding: 0 !important;
                margin: -1px 1px 0 0;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }
            .price-up
            {
                background-position: -64px -32px;
            }
            .price-down
            {
                background-position: -80px -32px;
            }

            /* Change Cell */
            .change-cell > span
            {
                display: inline-block;
                margin: 5px 2px 0 0;
                overflow: hidden;
                padding: 0;
                text-align: right;
                vertical-align: middle;
                width: 60px;
            }
            .change-cell > p
            {
                display: inline-block;
                margin: 0;
                padding: 0;
                height: 16px;
                vertical-align: middle;
            }
            .progress-blue
            {
                background: #0080ef;
            }
            .progress-red
            {
                background: #ef8000;
            }

            /* Button Cell */
            .button-cell
            {
                text-align: center;
            }
            .button-cell button
            {
                background: #004896;
                border: 0;
                color: white;
                padding: 5px;
                width: 75px;
            }
            .button-cell button:hover
            {
                background: #0080ef;
            }
        </style>
        <h2 class="feature-title">Grid / Edit Cell with ColorPicker</h2>
        <div class="feature-content">
            <div #application>
                <iui-grid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [showFooter]="false" [rowHeight]="25" (cellValueChanged)="colorChanged($event)" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <div [ngSwitch]="column.id">
                            <div *ngSwitchCase="9" class="cell-checkbox" [ngStyle]="{ 'background-image': getCheckValue(column) }" (mousedown)="columnCheckClicked(column)"></div>
                            <div *ngSwitchCase="7" style="white-space:pre-wrap">{{column.headerText}}</div>
                            <div *ngSwitchDefault>{{column.headerText}}</div>
                        </div>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <div [ngSwitch]="cell.cid">
                            <div *ngSwitchCase="2" class="price-cell">
                                <span [ngClass]="getPriceClass(cell)"></span>
                                {{cell.text}}
                            </div>
                            <div *ngSwitchCase="32" class="change-cell">
                                <span>{{cell.text}}</span>
                                <p [ngStyle]="{ width: getProgressWidth(cell.progress) + 'px' }" [ngClass]="getProgressClass(cell.indicator)"></p>
                            </div>
                            <div *ngSwitchCase="9">
                                <span class="cell-checkbox" [ngStyle]="{ 'background-image': getCheckValue(cell) }" (mousedown)="checkBoxClicked(cell)"></span>
                            </div>
                            <div *ngSwitchDefault>
                                <span class="grid-cellcpkr-item-label">{{cell.text}}</span>
                            </div>
                        </div>
                    </ng-template>
                </iui-grid>
            </div>
            <div class="feature-help" style="width:850px">
                <p><span class="initial-space"></span>An example with Grid component where you can edit cells using a ColorPicker. You can enable the built-in Color editor for all cells in specific column.</p>
                <p><span class="initial-space"></span>When cell is clicked, a dropdown window will popup showing a panel with color palette and slider that allows you to choose a color. Once a color is selected, the grid cell value is updated accordingly.</p>
                <p><span class="initial-space"></span>In this demo, when you choose a color (other than a black color), the row is highlighted showing all labels in bold using the selected color.</p>
                <p><span class="initial-space"></span>In order to apply a Color Editor to grid cells, you need to set the following fields for the specified column object:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">editorType</span> - determines the editor type in use, in this case <span style="color:#2424dd">IntegralUIEditorType.<strong>Color</strong></span></li>
                    <li><span style="color:#c60d0d">editorSettings</span> - specifies the color format that is in use: RGB or HEX.</li>
                </ul>
                <p><span class="initial-space"></span>When editor is set in this way, all cells that belong to specified column will display a Color in specified format. You can modify this by changing the editor visibility in the cell object using the editorSettings field. In addition, you can also set whether the editor is enabled or disabled. The <strong>cell object</strong> has the following editorSettings fields:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">enabled</span> - determines whether the editor is enabled or disabled, by default is set to true</li>
                    <li><span style="color:#c60d0d">visible</span> - determines whether the editor is visible or hidden, by default is set to <span style="color:#2424dd">IntegralUIVisibility</span>.None</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-edit-cell-colorpicker.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridEditCellColorPickerSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('grid', { static: false }) grid: IntegralUIGrid;

    // Grid  settings
    public columns: Array<any>;
    public rows: Array<any>;

    // Control Style
    public gridStyle: any = {
        general: {
            normal : 'grid-cellcpkr-normal'
        }
    }

    private imageChecked: string = 'url(app/integralui/resources/checkbox/checkbox-checked.png)';
    private imageUnchecked: string = 'url(app/integralui/resources/checkbox/checkbox-unchecked.png)';

    constructor(){
        // Add columns and rows for the Grid
        this.columns = [
            { id: 9, width: 30, fixedWidth: true },
            { id: 1, headerText: "Company", width: 170},
            { id: 2, headerText: "Price", width: 80, contentAlignment: 'right' },
            { 
                id: 3, 
                headerAlignment: 'center',
                headerText: "Price Change", 
                contentAlignment: 'center',
                columns: [
                    { id: 31, pid: 3, headerText: "Value", width: 70, contentAlignment: 'center' },
                    { id: 32, pid: 3, headerText: "Change %", width: 120, minWidth: 120, headerAlignment: 'center' }
                ]
            },
            { id: 5, headerText: "Volume", width: 90, headerAlignment: 'center', contentAlignment: 'right' },
            { id: 6, headerText: "Country",  width: 80 },
            { 
                id: 7, 
                headerAlignment: 'center',
                headerText: "Highlight Color", 
                width: 110,
                editorType: IntegralUIEditorType.Color,
                editorSettings: {
                    colorFormat: IntegralUIColorFormat.HEX
                }
            }
        ];

        this.rows = [
            { 
                id: 1,
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Lacus Aliquam Consulting" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$32.46"
                    },
                    { cid: 31, text: "+5.23" },
                    {
                        cid: 32, 
                        progress: 7.15,
                        text: "+7.15%"
                    },
                    { cid: 5, text: "2,749,325" },
                    { cid: 6, text: "Brazil" },
                    { cid: 7, value: '#000000' }
                ]
            },
            { 
                id: 2,
                cells: [
                    { cid: 9, value: true },
                    { cid: 1, text: "Augue LLC" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$7.43"
                    },
                    { cid: 31, text: "+2.83" },
                    {
                        cid: 32, 
                        progress: 18.5,
                        text: "+18.50%"
                    },
                    { cid: 5, text: "12,251,937" },
                    { cid: 6, text: "Germany" },
                    { cid: 7, value: '#000000' }
                ]
            },
            { 
                id: 3,
                cells: [
                    { cid: 9, value: true },
                    { cid: 1, text: "Porttitor Corp." },
                    {
                        cid: 2, 
                        indicator: false,
                        text: "$196.53"
                    },
                    { cid: 31, text: "-1.47" },
                    {
                        cid: 32, 
                        indicator: false,
                        progress: 4.2,
                        text: "-4.21%"
                    },
                    { cid: 5, text: "2,763,552" },
                    { cid: 6, text: "Italy" },
                    { cid: 7, value: '#000000' }
                ]
            },
            { 
                id: 5,
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Varius Orci In PC" },
                    {
                        cid: 2, 
                        indicator: false,
                        text: "$59.27"
                    },
                    { cid: 31, text: "-3.39" },
                    {
                        cid: 32, 
                        indicator: false,
                        progress: 6.92,
                        text: "-6.92%"
                    },
                    { cid: 5, text: "7,920,374" },
                    { cid: 6, text: "India" },
                    { cid: 7, value: '#000000' }
                ]
            },
            { 
                id: 6,
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Hymenaeos Corporation" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$44.67"
                    },
                    { cid: 31, text: "+8.67" },
                    {
                        cid: 32, 
                        progress: 12.68,
                        text: "+12.68%"
                    },
                    { cid: 5, text: "3,399,847" },
                    { cid: 6, text: "Canada" },
                    { cid: 7, value: '#000000' }
                ]
            },
            { 
                id: 7,
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Id Risus PC" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$69.23"
                    },
                    { cid: 31, text: "+3.51" },
                    {
                        cid: 32, 
                        progress: 5.59,
                        text: "+5.59%"
                    },
                    { cid: 5, text: "15,973,926" },
                    { cid: 6, text: "France" },
                    { cid: 7, value: '#000000' }
                ]
            },
            { 
                id: 8,
                cells: [
                    { cid: 9, value: true },
                    { cid: 1, text: "Urna Institute" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$77.79"
                    },
                    { cid: 31, text: "+0.79" },
                    {
                        cid: 32, 
                        progress: 3.24,
                        text: "+3.24%"
                    },
                    { cid: 5, text: "9,732,775" },
                    { cid: 6, text: "USA" },
                    { cid: 7, value: '#000000' }
                ]
            },
            { 
                id: 9,
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Viverra LLC" },
                    {
                        cid: 2, 
                        indicator: false,
                        text: "$9.76"
                    },
                    { cid: 31, text: "-9.25" },
                    {
                        cid: 32, 
                        indicator: false,
                        progress: 24.31,
                        text: "-24.31%"
                    },
                    { cid: 5, text: "6,892,784" },
                    { cid: 6, text: "Argentina" },
                    { cid: 7, value: '#000000' }
                ]
            },
            { 
                id: 4,
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Magna Sed Limited" },
                    {
                        cid: 2, 
                        text: "$78.60"
                    },
                    { cid: 31, text: "+0.07" },
                    {
                        cid: 32, 
                        progress: 0,
                        text: "+0.00%"
                    },
                    { cid: 5, text: "5,198,276" },
                    { cid: 6, text: "Germany" },
                    { cid: 7, value: '#000000' }
                ]
            },
            { 
                id: 10,
                cells: [
                    { cid: 9, value: true },
                    { cid: 1, text: "Proin Ltd" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$290.32"
                    },
                    { cid: 31, text: "+1.28" },
                    {
                        cid: 32, 
                        progress: 4.92,
                        text: "+4.92%"
                    },
                    { cid: 5, text: "5,999,324" },
                    { cid: 6, text: "USA" },
                    { cid: 7, value: '#000000' }
                ]
            },
            { 
                id: 11,
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Id Consulting" },
                    {
                        cid: 2, 
                        indicator: false,
                        text: "$54.99"
                    },
                    { cid: 31, text: "-2.39" },
                    {
                        cid: 32, 
                        indicator: false,
                        progress: 6.12,
                        text: "-6.12%"
                    },
                    { cid: 5, text: "3,542,897" },
                    { cid: 6, text: "Mexico" },
                    { cid: 7, value: '#000000' }
                ]
            },
            { 
                id: 12,
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Mi Felis Ltd" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$27.85"
                    },
                    { cid: 31, text: "+3.17" },
                    {
                        cid: 32, 
                        progress: 2.67,
                        text: "+2.67%"
                    },
                    { cid: 5, text: "1,945,483" },
                    { cid: 6, text: "France" },
                    { cid: 7, value: '#000000' }
                ]
            }
        ];
    }

    // CheckBox Cell ---------------------------------------------------------------------

    private getCheckValue(obj: any){
        return obj && obj.value == true ? this.imageChecked : this.imageUnchecked;
    }

    private checkBoxClicked(cell: any){
        if (cell){
            let currentValue = cell.value == true ? true : false;
            cell.value = !currentValue;
        }
    }

    private columnCheckClicked(column: any){
        if (column){
            let currentValue = column.value == true ? true : false;
            column.value = !currentValue;

            let list = this.grid.getList();
            for (let i = 0; i < list.length; i++){
                let cell = this.getCellWithCheckBox(list[i]);
                if (cell)
                    cell.value = column.value;
            }
        }
    }

    private getCellWithCheckBox(row: any){
        let found: any = null;

        for (let j = 0; j < row.cells.length; j++){
            if (row.cells[j].cid == 9){
                found = row.cells[j];
                break;
            }

        }

        return found;
    }

    // Price Cell ------------------------------------------------------------------------

    getPriceClass(cell: any){
        return cell.indicator == true ? 'icons price-up' : cell.indicator == false ? 'icons price-down' : 'icons';
    }

    // Progress Cell ---------------------------------------------------------------------

    getProgressClass(indicator: boolean){
        return indicator != false ? 'progress-blue' : 'progress-red';
    }

    getProgressWidth(value: number){
        return Math.floor(value * 5 / 3);
    }

    // ColorPicker Cell -----------------------------------------------------------------------

    colorChanged(e: any){
        if (e.value){
            let row = this.grid.findRowById(e.cell.rid);

            if (row){
                row.style = { color: e.value.hex, fontWeight: 'bold' }
                if (e.value.hex == '#000000')
                    row.style.fontWeight ='normal';

                this.grid.refresh();
            }
        }
    }
}
