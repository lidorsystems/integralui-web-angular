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
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';
import { IntegralUISelectionMode } from '../../integralui/components/integralui.core';
import { IntegralUIListBox } from '../../integralui/components/integralui.listbox';

@Component({
    selector: '',
    template: `
        <style>
            .grid-mst-cmb
            {
                display: inline-block;
                float: right;
                width: 150px;
            }
            .grid-mst-normal
            {
                width: 500px;
                height: 400px;
            }
            .grid-mst-cell-label
            {
                padding: 5px;
            }
            .grid-mst-list
            {
                width: 250px;
                height: 400px;
            }
        </style>
        <h2 class="feature-title">Grid / Multi Select</h2>
        <div class="feature-content">
            <div style="float:left">
                <div>
                    <iui-combobox [items]="comboItems" [controlStyle]="comboStyle" [maxDropDownItems]="4" [integralHeight]="true" [selectedIndex]="1" (selectedIndexChanged)="onComboSelectionChanged($event)">
                        <iui-item *ngFor="let item of comboItems" [text]="item.text"></iui-item>
                    </iui-combobox>
                    <span style="display:inline-block;float:right;padding:10px 5px 5px 0;">Selection Mode: </span>
                </div>
                <iui-grid [columns]="columns" [rows]="data" [controlStyle]="gridStyle" [selectionMode]="selMode" (selectionChanged)="onSelectionChanged($event)" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.headerText}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span class="grid-mst-cell-label">{{cell.text}}</span>
                    </ng-template>
                    <ng-template let-column [iuiTemplate]="{ type: 'footer' }">
                        {{column.footerText}}
                    </ng-template>
                </iui-grid>
            </div>
            <div style="float:left;margin-left:30px;">
              <div style="padding:10px 0 5px 0;">Selected Rows:</div>
              <iui-listbox [items]="selRows" [controlStyle]="listStyle" #listbox>
                  <iui-listitem *ngFor="let item of selRows">  
                      <div class="grid-mst-item-label">{{item.text}}</div>
                  </iui-listitem>
              </iui-listbox>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span>A demonstration of different selection types available in Grid component. By selecting an option from <a routerLink="../../combobox">ComboBox</a> above, you can change the current selected mode. There are four acceptable values:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">None</span> - selection is disabled</li>
                    <li><span style="color:#c60d0d">One</span> - Only one item is selectable</li>
                    <li><span style="color:#c60d0d">MultiSimple</span> - Multiple rows are selectable using mouse clicks without CTRL key</li>
                    <li><span style="color:#c60d0d">MultiExtended</span> - Multiple rows are selectabl using mouse clicks with CTRL and SHIFT key</li>
                </ul>
                <p><span class="initial-space"></span>In multi-selection mode, rows can become selected using the CTRL key or SHIFT key. The <strong>MultiExtended</strong> mode allows selection of multiple rows in wide range. While SHIFT key is pressed, all rows from first to last clicked item will become selected.</p>
                <p><span class="initial-space"></span>List on the right, shows which rows are currently selected. To retrieve this list, you can use the <span style="color:#c60d0d">getList</span> method with key value <span style="color:#0000ff">'selected'</span>.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-multi-select.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridMultiSelectSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('grid') grid: IntegralUIGrid;
    @ViewChild('listbox') listbox: IntegralUIListBox;

    // An array that holds all options in the comboo box
    public comboItems: Array<any>;

    // An array that holds grid columns
    public columns: Array<any>;
   
    // An array that holds grid rows
    public data: Array<any>;

    // An array that holds a list of all selected rows
    public selRows: Array<any>;

    // Current selection mode is set to single selection
    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.One;

    public comboStyle: any = {
        general: {
            normal: 'grid-mst-cmb'
        }
    }

    public gridStyle: any = {
        general: {
            normal: 'grid-mst-normal'
        }
    }

    public listStyle: any = {
        general: {
            normal: 'grid-mst-list'
        }
    }

    constructor(){
        // Options to choose from
        this.comboItems = [
          { text: "None" },
          { text: "One" },
          { text: "Multi Simple" },
          { text: "Multi Extended" }
        ];

        // Grid columns
        this.columns = [
            { headerText: "Header1", footerText: "Footer1", width: 200 },
            { headerText: "Header2", footerText: "Footer2", width: 250 },
            { headerText: "Header3", footerText: "Footer3", width: 120 }
        ];

        // Grid rows
        this.data = [
            { id: 1, text: "Item1", cells: [{ text: "Item11" }, { text: "Item12" }, { text: "Item13" }] },
            { id: 2, text: "Item2", cells: [{ text: "Item21" }, { text: "Item22" }, { text: "Item23" }] },
            { id: 3, text: "Item3", cells: [{ text: "Item31" }, { text: "Item32" }, { text: "Item33" }] },
            { id: 4, text: "Item4", cells: [{ text: "Item41" }, { text: "Item42" }, { text: "Item43" }] },
            { id: 5, text: "Item5", cells: [{ text: "Item51" }, { text: "Item52" }, { text: "Item53" }]},
            { id: 6, text: "Item6", cells: [{ text: "Item61" }, { text: "Item62" }, { text: "Item63" }] },
            { id: 7, text: "Item7", cells: [{ text: "Item71" }, { text: "Item72" }, { text: "Item73" }] },
            { id: 8, text: "Item8", cells: [{ text: "Item81" }, { text: "Item82" }, { text: "Item83" }] },
            { id: 9, text: "Item9", cells: [{ text: "Item91" }, { text: "Item92" }, { text: "Item93" }] },
            { id: 10, text: "Item10", cells: [{ text: "Item101" }, { text: "Item102" }, { text: "Item103" }] },
            { id: 11, text: "Item11", cells: [{ text: "Item111" }, { text: "Item112" }, { text: "Item113" }] },
            { id: 12, text: "Item12", cells: [{ text: "Item121" }, { text: "Item122" }, { text: "Item123" }] },
            { id: 13, text: "Item13", cells: [{ text: "Item131" }, { text: "Item132" }, { text: "Item133" }] },
            { id: 14, text: "Item14", cells: [{ text: "Item141" }, { text: "Item142" }, { text: "Item143" }] },
            { id: 15, text: "Item15", cells: [{ text: "Item151" }, { text: "Item152" }, { text: "Item153" }] },
            { id: 16, text: "Item16", cells: [{ text: "Item161" }, { text: "Item162" }, { text: "Item163" }] },
            { id: 17, text: "Item17", cells: [{ text: "Item171" }, { text: "Item172" }, { text: "Item173" }] },
            { id: 18, text: "Item18", cells: [{ text: "Item181" }, { text: "Item182" }, { text: "Item183" }] },
            { id: 19, text: "Item19", cells: [{ text: "Item191" }, { text: "Item192" }, { text: "Item193" }] },
            { id: 20, text: "Item20", cells: [{ text: "Item201" }, { text: "Item202" }, { text: "Item203" }] }
        ];

        // At first there are no selected rows
        this.selRows = [];
    }

    onComboSelectionChanged(e: any){
        switch (e.index){
          case 0:
            this.selMode = IntegralUISelectionMode.None;
            break;

          case 2:
            this.selMode = IntegralUISelectionMode.MultiSimple;
            break;

          case 3:
            this.selMode = IntegralUISelectionMode.MultiExtended;
            break;

          default:
            this.selMode = IntegralUISelectionMode.One;
            break;
        }

        let self = this;
        let selTimeout = setTimeout(function(){
            self.updateList();
            clearTimeout(selTimeout);
        }, 1);
    } 

    onSelectionChanged(e: any){
        this.updateList();
    }

    updateList(){
        // Get the list of currently selected items and display it in the Grid on the right
        let list: Array<any> = this.grid.getList('selected');

        this.selRows.length = 0;
        for (let i = 0; i < list.length; i++)
            this.selRows.push({ text: list[i].text });

        this.listbox.updateLayout();
    }
}
