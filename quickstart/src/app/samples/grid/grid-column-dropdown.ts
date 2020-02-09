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
import { IntegralUIDirection, IntegralUIPlacement } from '../../integralui/components/integralui.core';
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            .grid-coldd-feature-content .iui-contextmenu
            {
                width: 125px !important;
            }
            .grid-coldd-normal
            {
                width: 625px;
                height: 300px;
            }
            .grid-coldd-normal .iui-grid-column-header
            {
                padding: 0;
            }
            .grid-coldd-label
            {
                display: inline-block;
                margin-top: 5px;
            }
            .grid-coldd-normal .grid-col-dropdown-normal
            {
                opacity: 0;
            }
            .grid-coldd-normal .iui-grid-column-header-hovered .grid-col-dropdown-normal, .grid-coldd-normal .iui-grid-column-header-selected .grid-col-dropdown-normal
            {
                opacity: 1;
            }
            .grid-col-dropdown-normal
            {
                background: transparent;
                border: thin solid transparent;
                border-radius: 0;
                display: inline-block;
                float: right;
            }
            .grid-col-dropdown-normal:hover
            {
                background: #d5d5d5;
                /*border: thin solid #ababab; */
            }
            .grid-coldd-normal .iui-grid-column-header-selected .grid-col-dropdown-normal:hover
            {
                background: #bebebe;
                border: thin solid #999999;
            }
            .grid-col-dropdown-selected
            {
                background: #ababab;
                border: thin solid #999999;
            }
            .grid-col-dropdown-selected:hover
            {
                background: #ababab;
                border: thin solid #999999;
            }
            .grid-col-dropdown-normal > div
            {
                border: 0;
                margin: 0;
            }
            .grid-col-dropdown-normal > div > span
            {
                margin: 0;
            }
            .grid-col-dropdown-icons
            {
                background: url(app/resources/icons.png) no-repeat 0 0;
                display: inline-block;
                overflow: hidden;
                padding: 0;
                margin: 0 0 0 5px;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }
            .check-mark
            {
                background-position: -96px -48px;
            }
       </style>
        <h2 class="feature-title">Grid / Column with DropDown Button</h2>
        <div class="feature-content grid-coldd-feature-content">
            <div #application>
                <iui-grid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <div style="white-space: no-wrap;width:100%">
                            <iui-dropdown-button [controlStyle]="dropdownStyle" [placement]="buttonPlacement" [direction]="openDirection" [settings]="dropDownSettings" (itemClick)="onDropDownItemClicked($event)" (dropDownOpened)="onDropDownOpened($event, column)"></iui-dropdown-button>
                            <span class="grid-coldd-label">{{column.headerText}}</span>
                        </div>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span>{{cell.text}}</span>
                    </ng-template>
                    <ng-template let-column [iuiTemplate]="{ type: 'footer' }">
                        {{column.footerText}}
                    </ng-template>
                </iui-grid>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In this sample you can see how to add a <a routerLink="../../dropdownbutton">DropDown Button</a> to column headers in Grid component.</p>
                <p><span class="initial-space"></span>In this case, the DropDown Button appearance is changed via CSS, so that it appears only when column is hovered or selected. Also, the button displays only a dropdown arrow, the label is omitted.</p>
                <p><span class="initial-space"></span>When dropdown button is clicked, a list of all Grid columns appears stating column visibility with a check mark. If some item from this list is clicked, the visiblity of corresponding column changes to true or false.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/column-dropdown.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridColumnDropDownSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('grid', { static: false }) grid: IntegralUIGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public buttonPlacement: IntegralUIPlacement = IntegralUIPlacement.Right;
    public openDirection: IntegralUIDirection = IntegralUIDirection.Left | IntegralUIDirection.Below;
    public dropDownSettings: any;

    public gridStyle: any = {
        general: {
            normal: 'grid-coldd-normal'
        }
    }

    public dropdownStyle: any = {
        general: {
            normal: 'grid-col-dropdown-normal',
            selected: 'grid-col-dropdown-selected'
        }
    }

    constructor(){
        this.columns = [
            { id: 1, headerText: "Header1", footerText: "Footer1", width: 180 },
            { id: 2, headerText: "Header2", footerText: "Footer2", width: 220 },
            { id: 3, headerText: "Header3", footerText: "Footer3", width: 150 }
        ];

        this.rows = [
            { id: 1, text: "Row1", cells: [{ cid: 1, text: "Item11" },  { cid: 2, text: "Item12" }, { cid: 3, text: "Item13" }] },
            { id: 2, text: "Row2", cells: [{ cid: 1, text: "Item21" }, { cid: 2, text: "Item22" }, { cid: 3, text: "Item23" }] },
            { id: 3, text: "Row3", cells: [{ cid: 1, text: "Item31" }, { cid: 2, text: "Item32" }, { cid: 3, text: "Item33" }] }
        ];
    }

    ngAfterViewInit(){
        this.dropDownSettings = {
            adjustment: { top: 0, left: 4 },
            appRef: this.applicationRef,
            items: this.getColumnList()
        }

        this.grid.selectedColumn = this.columns[0];
    }

    private getColumnList(){
        let list: Array<any> = [];

        for (let j = 0; j < this.columns.length; j++){
            list.push({
                icon: this.getItemIcon(this.columns[j]),
                text: this.columns[j].headerText,
                key: this.columns[j].id 
            });
        }

        return list;
    }

    private getItemIcon(column: any){
        return column.visible != false ? 'grid-col-dropdown-icons check-mark' : 'grid-col-dropdown-icons';
    }

    onDropDownOpened(e: any, column: any){
        this.grid.selectedColumn = column;
    }

    onDropDownItemClicked(e: any){
        let column = this.grid.getColumnById(e.item.key);
        if (column){
            column.visible = column.visible == undefined ? false : true;
            e.item.icon = this.getItemIcon(column);

            this.grid.updateLayout();
        }
    }
}
