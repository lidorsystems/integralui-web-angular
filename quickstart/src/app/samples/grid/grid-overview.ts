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
import { IntegralUISelectionMode } from '../../integralui/components/integralui.core';
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            .grid-ovw-normal
            {
                width: 800px;
                height: 375px;
            }

            /* CheckBox Cell */
            .grid-ovw-cell-checkbox
            {
                background: url('') no-repeat 0 0;
                display: inline-block;
                padding: 0;
                margin: 0 7px;
                width: 32px;
                height: 14px;
                vertical-align: middle;
            }

            /* DropDown Cell */
            .grid-ovw-dropdown-list
            {
                cursor: default;
                margin: 0;
                overflow: auto;
                padding: 0;
                list-style-type: none;
                white-space: nowrap;
                width: 150px;
                height: 140px;
            }
            .grid-ovw-dropdown-list li
            {
                padding: 5px;
            }
            .grid-ovw-dropdown-list li:hover
            {
                background: #e5e5e5;
            }
            .grid-ovw-item-drop-mark
            {
                float: right;
                margin-top: -2px;
            }
            .grid-ovw-item-drop-mark span
            {
                background: url(app/integralui/resources/icons.png) -144px -80px no-repeat;
                display: inline-block;
                opacity: 0.5;
                overflow: hidden;
                padding: 0 !important;
                margin: 4px 2px 0 0;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }

            /* Price Cell */
            .grid-ovw-price-cell
            {
                margin-top: 5px;
                padding-right: 2px;
            }
            .grid-ovw-icons
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
        </style>
        <h2 class="feature-title">Grid / Overview</h2>
        <div class="feature-content">
            <div #application>
                <iui-grid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [selectionMode]="selMode" [allowDrag]="true" [allowAnimation]="true" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span *ngIf="column.id==9" class="grid-ovw-cell-checkbox" [ngStyle]="{ 'background-image': getCheckValue(column) }" (mousedown)="columnCheckClicked(column)"></span>
                        {{column.headerText}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <div [ngSwitch]="cell.cid">
                            <div *ngSwitchCase="2" class="grid-ovw-price-cell">
                                <span [ngClass]="getPriceClass(cell)"></span>
                                {{cell.text}}
                            </div>
                            <div *ngSwitchCase="6">
                                <div [iuiDropDown]="cell.dropdown" [dropDownRef]="dropDownReference" (dropDownOpen)="onDropDownOpen($event, cell)">
                                    <div class="grid-ovw-item-drop-mark">
                                        <span></span> 
                                    </div>
                                    <span class="grid-ovw-item-label">{{cell.text}}</span> 
                                    <ng-template let-obj [iuiTemplate]="{ type: 'dropdown' }">
                                        <ul class="grid-ovw-dropdown-list" [ngStyle]="{ width: dropDownWidth + 'px'}" (mousedown)="listMouseDown($event)">
                                            <li *ngFor="let item of dropdownItems" (mousedown)="itemSelected(cell, item)">
                                                {{item.text}}
                                            </li>
                                        </ul>
                                    </ng-template>
                                </div>
                            </div>
                            <div *ngSwitchCase="5">
                                <span class="grid-ovw-item-label">{{numberWithCommas(cell.value)}}</span>
                            </div>
                            <div *ngSwitchCase="9">
                                <span class="grid-ovw-cell-checkbox" [ngStyle]="{ 'background-image': getCheckValue(cell) }" (mousedown)="checkBoxClicked(cell)"></span>
                            </div>
                            <div *ngSwitchDefault>
                                <span class="grid-ovw-item-label">{{cell.text}}</span>
                            </div>
                        </div>
                    </ng-template>
                    <ng-template let-column [iuiTemplate]="{ type: 'footer' }">
                        <span style="color:#484848;font-weight:bold">{{column.footerText}}</span>
                        
                    </ng-template>
                </iui-grid>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Grid</strong> is a native Angular component that displays tabular data sets. You can load data on demand during run-time from local or remote data sources. Each grid cell can have custom HTML content or other Angular components.</p>
                <p><span class="initial-space"></span>In above demo, there are cells with different content: checkbox, icon with image and dropdown list. In addition, the footer displays the total volume in bold. Using the dropdown you can choose a different country from the list, and using the checkbox in column header you can check or uncheck all rows.</p>
                <p><span class="initial-space"></span>In order to see columns with different kinds of editors, check out this example <a routerLink="/grid/builtin-editors">Built-In Editors</a>. By default editor is not specified, and the content in each cell is determined by its template, where you can add any custom HTML elements.</p>
                <p><span class="initial-space"></span>To start a drag and drop operation, left-click on a row and move the mouse cursor, so that you can reorder rows during run-time. In this example, there are no restrictions set, and you can drag and drop a row and placed it as a child of another row. However, if you want you can set conditions and provide custom drag drop operations on your own.</p>
                <p><span class="initial-space"></span>To select multiple rows, hold SHIFT or CTRL key and click on specific row.</p>
                <p><span class="initial-space"></span>This example also shows an animation effect during hovering or selection of columns and rows. This is controlled by the <span style="color:#c60d0d">allowAnimation</span> property, which by default is set to false.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-overview.ts</i>) file, or read the following article:</p> 
                <p style="padding-bottom:30px"><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/grid/grid-component.aspx">Overview of IntegralUI Grid for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridOverviewSample {

    @ViewChild('grid', { static: false }) grid: IntegralUIGrid;
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;

    public columns: Array<any>;
    public rows: Array<any>;

    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;

    private imageChecked: string = 'url(app/integralui/resources/checkbox/checkbox-checked-3.png)';
    private imageUnchecked: string = 'url(app/integralui/resources/checkbox/checkbox-unchecked-3.png)';

    public gridStyle: any = {
        general: {
            normal: 'grid-ovw-normal'
        }
    }

    // An array that holds all options in the comboo box
    public dropdownItems: Array<any>;
    public dropDownWidth: number = 150;
    public dropDownReference: any = null;

    constructor(){
        // Options to choose from
        this.dropdownItems = [
            { text: "Argentina" },
            { text: "Austria" },
            { text: "Belgium" },
            { text: "Brazil" },
            { text: "Canada" },
            { text: "China" },
            { text: "Finland" },
            { text: "France" },
            { text: "Germany" },
            { text: "India" },
            { text: "Italy" },
            { text: "Mexico" },
            { text: "Norway" },
            { text: "Russia" },
            { text: "Spain" },
            { text: "Sweden" },
            { text: "UK" },
            { text: "USA" }
        ];

        this.columns = [
            { id: 9, width: 44, fixedWidth: true },
            { id: 1, headerText: "Company", width: 275 },
            { id: 2, headerText: "Price", contentAlignment: 'right', headerAlignment: 'center', footerAlignment: 'center' },
            { id: 5, headerText: "Volume", width: 150, headerAlignment: 'center', contentAlignment: 'right', footerAlignment: 'right' },
            { id: 6, headerText: "Country", width: 150, headerAlignment: 'center' }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Lacus Aliquam Consulting",
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Lacus Aliquam Consulting" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$32.46"
                    },
                    { cid: 5, value: 2749325 },
                    { cid: 6, text: "Brazil" }
                ]
            },
            { 
                id: 2,
                text: "Augue LLC",
                cells: [
                    { cid: 9, value: true },
                    { cid: 1, text: "Augue LLC" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$7.43"
                    },
                    { cid: 5, value: 12251937 },
                    { cid: 6, text: "Germany" },
                ]
            },
            { 
                id: 3,
                text: "Porttitor Corp.",
                cells: [
                    { cid: 9, value: true },
                    { cid: 1, text: "Porttitor Corp." },
                    {
                        cid: 2, 
                        indicator: false,
                        text: "$196.53"
                    },
                    { cid: 5, value: 2763552 },
                    { cid: 6, text: "Italy" }
                ]
            },
            { 
                id: 5,
                text: "Varius Orci In PC",
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Varius Orci In PC" },
                    {
                        cid: 2, 
                        indicator: false,
                        text: "$59.27"
                    },
                    { cid: 5, value: 7920374 },
                    { cid: 6, text: "India" }
                ]
            },
            { 
                id: 6,
                text: "Hymenaeos Corporation",
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Hymenaeos Corporation" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$44.67"
                    },
                    { cid: 5, value: 3399847 },
                    { cid: 6, text: "Canada" }
                ]
            },
            { 
                id: 7,
                text: "Id Risus PC",
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Id Risus PC" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$69.23"
                    },
                    { cid: 5, value: 15973926 },
                    { cid: 6, text: "France" }
                ]
            },
            { 
                id: 8,
                text: "Urna Institute",
                cells: [
                    { cid: 9, value: true },
                    { cid: 1, text: "Urna Institute" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$77.79"
                    },
                    { cid: 5, value: 9732775 },
                    { cid: 6, text: "USA" }
                ]
            },
            { 
                id: 9,
                text: "Viverra LLC",
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Viverra LLC" },
                    {
                        cid: 2, 
                        indicator: false,
                        text: "$9.76"
                    },
                    { cid: 5, value: 6892784 },
                    { cid: 6, text: "Argentina" }
                ]
            },
            { 
                id: 4,
                text: "Magna Sed Limited",
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Magna Sed Limited" },
                    {
                        cid: 2, 
                        text: "$78.60"
                    },
                    { cid: 5, value: 5198276 },
                    { cid: 6, text: "Germany" }
                ]
            },
            { 
                id: 10,
                text: "Proin Ltd",
                cells: [
                    { cid: 9, value: true },
                    { cid: 1, text: "Proin Ltd" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$290.32"
                    },
                    { cid: 5, value: 5999324 },
                    { cid: 6, text: "USA" }
                ]
            },
            { 
                id: 11,
                text: "Id Consulting",
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Id Consulting" },
                    {
                        cid: 2, 
                        indicator: false,
                        text: "$54.99"
                    },
                    { cid: 5, value: 3542897 },
                    { cid: 6, text: "Mexico" }
                ]
            },
            { 
                id: 12,
                text: "Mi Felis Ltd",
                cells: [
                    { cid: 9 },
                    { cid: 1, text: "Mi Felis Ltd" },
                    {
                        cid: 2, 
                        indicator: true,
                        text: "$27.85"
                    },
                    { cid: 5, value: 1945483 },
                    { cid: 6, text: "France" }
                ]
            }
        ];
    } 
    
    ngAfterViewInit(){
        this.dropDownReference = this.applicationRef;

        let list = this.grid.getList();

        let volumeTotal: number = 0;

        for (let i = 0; i < list.length; i++)
            for (let j = 0; j < list[i].cells.length; j++){
                let cell: any = list[i].cells[j];

                switch (cell.cid){
                    // Calculate the volume for all rows
                    case 5:
                        volumeTotal += cell.value;
                        break;

                    // Apply drop down to Country cells
                    case 6:
                        cell.dropdown = {
                            //appRef: this.applicationRef,
                            adjustment: { top: 0, left: -3 }
                        }
                        break;
                }
            }

        // Display total volume in the footer
        this.columns[2].footerText = "Total";
        this.columns[3].footerText = this.numberWithCommas(volumeTotal);
    }

    private numberWithCommas(value: number): string {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

    // DropDown Cell ---------------------------------------------------------------------

    private isItemSelected: boolean = false;

    // Prevent clicks in the list scrollbar area to close the dropdown window
    listMouseDown(e: any){
        if (!this.isItemSelected)
            e.stopPropagation();
    }

    itemSelected(cell: any, item: any){
        if (cell)
            cell.text = item.text;

        this.isItemSelected = true;
    }

    // Calculates the width of grid cell
    protected getColumnWidth(column: any): number {
        return column && column.width != undefined ? column.width : 100;
    }

    getCellWidth(cell: any){
        let cellWidth: number = 100;

        for (let j = 0; j < this.columns.length; j++){
            if (this.columns[j].id == cell.cid){
                cellWidth = this.getColumnWidth(this.columns[j]) + 3; 
                break;
            }
        }

        return cellWidth;
    }

    onDropDownOpen(e: any, cell: any){
        this.isItemSelected = false;

        if (cell)
            this.dropDownWidth = this.getCellWidth(cell);
    }

    // Price Cell ------------------------------------------------------------------------

    getPriceClass(cell: any){
        return cell.indicator == true ? 'grid-ovw-icons price-up' : cell.indicator == false ? 'grid-ovw-icons price-down' : 'grid-ovw-icons';
    }
}
