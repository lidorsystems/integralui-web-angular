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

@Component({
    selector: '',
    template: `
        <style>
            .grid-tltp
            {
                width: 600px;
                height: 300px;
            }
        </style>
        <h2 class="feature-title">Grid / Tooltip</h2>
        <div class="feature-content">
            <div style="width:400px"  #application>
                <iui-grid [columns]="columns" [rows]="rows" [controlStyle]="gridStyle" [showFooter]="false" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span [iuiTooltip]="column.headerTooltip" [tooltipRef]="tooltipReference">{{column.headerText}}</span>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span [iuiTooltip]="cell.tooltip" [tooltipRef]="tooltipReference">{{cell.text}}</span>
                    </ng-template>
                </iui-grid>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In this sample you can see how to add a tooltip to each column and row in the Grid component.</p>
                <p><span class="initial-space"></span>Whenever a mouse cursor enters the space of column or row cell, a tooltip will appear. To simplify this example, the default tooltip settings are used and only the tooltip title is set.</p>
                <p><span class="initial-space"></span>We are using the <a routerLink="../../tooltip">IntegralUI Tooltip</a> directive to apply a tooltip to Grid items. Each item has a <span style="color:#c60d0d">tooltip</span> field that accepts an object with all options that determines the appearance and behavior of the tooltip.</p>
                <p><span class="initial-space"></span>In our example, all tooltips are set after the initial data is created. You can attach/detach a tooltip or change its settings at any time, changes are applied automatically.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-tooltip.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridTooltipSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('grid') grid: IntegralUIGrid;

    // An array that holds grid columns
    public columns: Array<any>;
   
    // An array that holds grid rows
    public rows: Array<any>;

    // Custom CSS styles for the Grid
    public gridStyle: any = {
        general: {
            normal: 'grid-tltp'
        }
    }

    public tooltipReference: any = null;

    constructor(){
        // Grid columns
        this.columns = [
            { headerText: "Header1", footerText: "Footer1", width: 180 },
            { headerText: "Header2", footerText: "Footer2", width: 250 },
            { headerText: "Header3", footerText: "Footer3", width: 120 }
        ];

        // Grid rows
        this.rows = [
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
        let list = this.grid.getList();
        for (let i = 0; i < list.length; i++)
            for (let j = 0; j < list[i].cells.length; j++)
                list[i].cells[j].tooltip = {
                    title: list[i].cells[j].text
                }
    }
}
