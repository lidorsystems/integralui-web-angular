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
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';
import { IntegralUISelectionMode } from '../../integralui/components/integralui.core';
import { IntegralUIListBox } from '../../integralui/components/integralui.listbox';

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-mst-cmb
            {
                display: inline-block;
                float: right;
                width: 150px;
            }
            .treegrid-mst-normal
            {
                width: 500px;
                height: 400px;
            }
            .treegrid-mst-normal .iui-treegrid-expand-box
            {
                margin-top: -2px;
            }
            .treegrid-mst-cell-label
            {
                display: inline-block;
                padding: 3px 0;
            }
            .treegrid-mst-list
            {
                width: 250px;
                height: 400px;
            }
        </style>
        <h2 class="feature-title">TreeGrid / Multi Select</h2>
        <div class="feature-content">
            <div style="float:left">
                <div>
                    <iui-combobox [items]="comboItems" [controlStyle]="comboStyle" [maxDropDownItems]="4" [integralHeight]="true" [selectedIndex]="1" (selectedIndexChanged)="onComboSelectionChanged($event)">
                        <iui-item *ngFor="let item of comboItems" [text]="item.text"></iui-item>
                    </iui-combobox>
                    <span style="display:inline-block;float:right;padding:10px 5px 5px 0;">Selection Mode: </span>
                </div>
                <iui-treegrid [columns]="columns" [rows]="rows" [controlStyle]="treegridStyle" [selectionMode]="selMode" (selectionChanged)="onSelectionChanged($event)" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.headerText}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span class="treegrid-mst-cell-label">{{cell.text}}</span>
                    </ng-template>
                    <ng-template let-column [iuiTemplate]="{ type: 'footer' }">
                        {{column.footerText}}
                    </ng-template>
                </iui-treegrid>
            </div>
            <div style="float:left;margin-left:30px;">
              <div style="padding:10px 0 5px 0;">Selected Rows:</div>
              <iui-listbox [items]="selRows" [controlStyle]="listStyle" #listbox>
                  <iui-listitem *ngFor="let item of selRows">  
                      <div class="treegrid-mst-item-label">{{item.text}}</div>
                  </iui-listitem>
              </iui-listbox>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span>A demonstration of different selection types available in TreeGrid component. By selecting an option from <a routerLink="../../combobox">ComboBox</a> above, you can change the current selected mode. There are four acceptable values:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">None</span> - selection is disabled</li>
                    <li><span style="color:#c60d0d">One</span> - Only one item is selectable</li>
                    <li><span style="color:#c60d0d">MultiSimple</span> - Multiple rows are selectable using mouse clicks without CTRL key</li>
                    <li><span style="color:#c60d0d">MultiExtended</span> - Multiple rows are selectabl using mouse clicks with CTRL and SHIFT key</li>
                </ul>
                <p><span class="initial-space"></span>In multi-selection mode, rows can become selected using the CTRL key or SHIFT key. The <strong>MultiExtended</strong> mode allows selection of multiple rows in wide range. While SHIFT key is pressed, all rows from first to last clicked item will become selected.</p>
                <p><span class="initial-space"></span>List on the right, shows which rows are currently selected. To retrieve this list, you can use the <span style="color:#c60d0d">getList</span> method with key value <span style="color:#0000ff">'selected'</span>.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-multi-select.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridMultiSelectSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid') treegrid: IntegralUITreeGrid;
    @ViewChild('listbox') listbox: IntegralUIListBox;

    // An array that holds all options in the comboo box
    public comboItems: Array<any>;

    // An array that holds treegrid columns
    public columns: Array<any>;
   
    // An array that holds treegrid rows
    public rows: Array<any>;

    // An array that holds a list of all selected rows
    public selRows: Array<any>;

    // Current selection mode is set to single selection
    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.One;

    public comboStyle: any = {
        general: {
            normal: 'treegrid-mst-cmb'
        }
    }

    public treegridStyle: any = {
        general: {
            normal: 'treegrid-mst-normal'
        }
    }

    public listStyle: any = {
        general: {
            normal: 'treegrid-mst-list'
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

        // TreeGrid columns
        this.columns = [
            { headerText: "Header1", footerText: "Footer1", width: 200 },
            { headerText: "Header2", footerText: "Footer2", width: 250 },
            { headerText: "Header3", footerText: "Footer3", width: 120 }
        ];

        // TreeGrid rows
        this.rows = [
            { 
                id: 1,
                text: "Item1",
                cells: [{ text: "Item11" }, { text: "Item12" }, { text: "Item13" }],
                rows: [
                    { id: 11, pid: 1, text: "Item11", cells: [{ text: "Item111" }, { text: "Item112" }, { text: "Item113" }] },
                    { 
                        id: 12,
                        pid: 1,
                        text: "Item12",
                        cells: [{ text: "Item121" }, { text: "Item122" }, { text: "Item123" }],
                        rows: [
                            { id: 121, pid: 12, text: "Item121", cells: [{ text: "Item1211" }, { text: "Item1212" }, { text: "Item1213" }] },
                            { 
                                id: 122,
                                pid: 12,
                                text: "Item122", 
                                cells: [{ text: "Item1221" }, { text: "Item1222" }, { text: "Item1223" }],
                                expanded: false,
                                rows: [
                                    { id: 1221, pid: 122, text: "Item1221", cells: [{ text: "Item12211" }, { text: "Item12212" }, { text: "Item12213" }] },
                                    { id: 1222, pid: 122, text: "Item1222", cells: [{ text: "Item12221" }, { text: "Item12222" }, { text: "Item12223" }] }
                                ]
                            },
                            { id: 123, pid: 12, text: "Item123", cells: [{ text: "Item1231" }, { text: "Item1232" }, { text: "Item1233" }] },
                            { id: 124, pid: 12, text: "Item124", cells: [{ text: "Item1241" }, { text: "Item1242" }, { text: "Item1243" }] },
                            { id: 125, pid: 12, text: "Item125", cells: [{ text: "Item1251" }, { text: "Item1252" }, { text: "Item1253" }] }
                        ]
                    },
                    { id: 13, pid: 1, text: "Item13", cells: [{ text: "Item131" }, { text: "Item132" }, { text: "Item133" }] },
                    {
                        id: 14,
                        pid: 1,
                        text: "Item14",
                        cells: [{ text: "Item141" }, { text: "Item142" }, { text: "Item143" }],
                        rows: [
                            { id: 141, pid: 14, text: "Item141", cells: [{ text: "Item1411" }, { text: "Item1412" }, { text: "Item1413" }] },
                            { id: 142, pid: 14, text: "Item142", cells: [{ text: "Item1421" }, { text: "Item1422" }, { text: "Item1423" }] }
                        ]
                    }
                ]
            },
            {
                id: 2,
                text: "Item2",
                cells: [{ text: "Item21" }, { text: "Item22" }, { text: "Item23" }],
                expanded: false,
                rows: [
                    { id: 21, pid: 2, text: "Item21", cells: [{ text: "Item211" }, { text: "Item212" }, { text: "Item213" }] },
                    { id: 22, pid: 2, text: "Item22", cells: [{ text: "Item221" }, { text: "Item222" }, { text: "Item223" }] },
                    {
                        id: 23,
                        pid: 2,
                        text: "Item23", 
                        cells: [{ text: "Item231" }, { text: "Item232" }, { text: "Item233" }],
                        expanded: false,
                        rows: [
                            { id: 231, pid: 23, text: "Item231", cells: [{ text: "Item2311" }, { text: "Item2312" }, { text: "Item2313" }] },
                            { id: 232, pid: 23, text: "Item232", cells: [{ text: "Item2321" }, { text: "Item2322" }, { text: "Item2323" }] }
                        ]
                    }
                ]
            },
            { id: 3, text: "Item3", cells: [{ text: "Item31" }, { text: "Item32" }, { text: "Item33" }] },
            { id: 4, text: "Item4", cells: [{ text: "Item41" }, { text: "Item42" }, { text: "Item43" }] },
            { id: 5, text: "Item5", cells: [{ text: "Item51" }, { text: "Item52" }, { text: "Item53" }] },
            {
                id: 6,
                text: "Item6",
                cells: [{ text: "Item61" }, { text: "Item62" }, { text: "Item63" }],
                rows: [
                    { id: 61, pid: 6, text: "Item61", cells: [{ text: "Item611" }, { text: "Item612" }, { text: "Item613" }] },
                    { id: 62, pid: 6, text: "Item62", cells: [{ text: "Item621" }, { text: "Item622" }, { text: "Item623" }] }
                ]
            },
            { id: 7, text: "Item7", cells: [{ text: "Item71" }, { text: "Item72" }, { text: "Item73" }] }
        ];

        // At first there are no selected rows
        this.selRows = [];
    }

    onComboSelectionChanged(e: any){
        // Whenever an option is selected, update the selection mode of the ListBox
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
        // Get the list of currently selected items and display it in the TreeGrid on the right
        let list: Array<any> = this.treegrid.getList('selected');

        this.selRows.length = 0;
        for (let i = 0; i < list.length; i++)
            this.selRows.push({ text: list[i].text });

        this.listbox.updateLayout();
    }
}
