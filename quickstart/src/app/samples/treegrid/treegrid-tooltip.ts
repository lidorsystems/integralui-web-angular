/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-tltp
            {
                width: 600px;
                height: 300px;
            }
        </style>
        <h2 class="feature-title">TreeGrid / Tooltip</h2>
        <div class="feature-content">
            <div style="width:400px"  #application>
                <iui-treegrid [columns]="columns" [rows]="rows" [controlStyle]="treegridStyle" [showFooter]="false" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span [iuiTooltip]="column.headerTooltip" [tooltipRef]="tooltipReference">{{column.headerText}}</span>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span [iuiTooltip]="cell.tooltip" [tooltipRef]="tooltipReference">{{cell.text}}</span>
                    </ng-template>
                </iui-treegrid>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In this sample you can see how to add a tooltip to each column and row in the TreeGrid component.</p>
                <p><span class="initial-space"></span>Whenever a mouse cursor enters the space of column or row cell, a tooltip will appear. To simplify this example, the default tooltip settings are used and only the tooltip title is set.</p>
                <p><span class="initial-space"></span>We are using the <a routerLink="../../tooltip">IntegralUI Tooltip</a> directive to apply a tooltip to TreeGrid items. Each item has a <span style="color:#c60d0d">tooltip</span> field that accepts an object with all options that determines the appearance and behavior of the tooltip.</p>
                <p><span class="initial-space"></span>In our example, all tooltips are set after the initial data is created. You can attach/detach a tooltip or change its settings at any time, changes are applied automatically.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-tooltip.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridTooltipSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid') treegrid: IntegralUITreeGrid;

    // An array that holds treegrid columns
    public columns: Array<any>;
   
    // An array that holds treegrid rows
    public rows: Array<any>;

    // Custom CSS styles for the TreeGrid
    public treegridStyle: any = {
        general: {
            normal: 'treegrid-tltp'
        }
    }

    public tooltipReference: any = null;

    constructor(){
        // TreeGrid columns
        this.columns = [
            { headerText: "Header1", footerText: "Footer1", width: 180 },
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
    }

    ngAfterViewInit(){
        // Set the reference component by which the position of tooltip is calculated
        // Usually, the appRef should point to the root component, to avoid position adjustment
        this.tooltipReference = this.applicationRef;

        // Set a tooltip for columns
        for (let j = 0; j < this.columns.length; j++)
            this.columns[j].headerTooltip = { 
                title: this.columns[j].headerText
            }

        // Set a tooltip for row cells
        let list = this.treegrid.getFullList();
        for (let i = 0; i < list.length; i++)
            for (let j = 0; j < list[i].cells.length; j++)
                list[i].cells[j].tooltip = {
                    title: list[i].cells[j].text
                }
    }
}
