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
import { IntegralUIEditorType, IntegralUIVisibility } from '../../integralui/components/integralui.core';
import { IntegralUIGridLines } from '../../integralui/components/integralui.base.grid';
import { IntegralUITreeGrid } from '../../integralui/components/integralui.treegrid';

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-rwhov-normal
            {
                width: 800px;
                height: 400px;
            }
            .treegrid-rwhov-normal .iui-treegrid-expand-box
            {
                margin: -1px 7px 0 0;
            }
            .treegrid-rwhov-normal .iui-treegrid-row-hovered
            {
                background-color: #f5f5f5;
            }
            .treegrid-rwhov-normal .iui-treegrid-row-selected
            {
                background-color: #e5e5e5;
                color: black;
            }

            .treegrid-rwhov-cell-label
            {
                display: inline-block;
                margin-top: 5px;
                padding: 1px 0;
            }
            .treegrid-rwhov-normal .iui-editor-dropdown-button, .treegrid-rwhov-normal .iui-editor-label
            {
                margin-top: 3px;
            }

            .treegrid-rwhov-cell-favorite {
                background-image: url(app/integralui/resources/icons-x24.png);
                background-repeat: no-repeat;
                background-position: -216px -72px;
                display: inline-block;
                opacity: 0.5;
                overflow: hidden;
                padding: 0 !important;
                margin: 3px 0 0 3px;
                width: 24px;
                height: 24px;
                vertical-align: top;
            }
            .treegrid-rwhov-cell-favorite-selected {
                background-position: -144px -72px;
            }

            /* Buttons */
            .treegrid-rwhov-button {
                background: transparent;
                border: 0;
                border-radius: 3px;
                cursor: pointer;
                display: inline-block;
                margin: 1px 3px 0 3px;
                padding: 5px;
                white-space: no-wrap;
            }
            .treegrid-rwhov-button:hover {
                animation-name: treegrid-rwhov-button-animate-enter;
                animation-delay: 0s;
                animation-direction: normal;
                animation-duration: 0.25s;
                animation-fill-mode: forwards;
                animation-iteration-count: 1;
                animation-play-state: running;
                animation-timing-function: linear; 
            }
            @keyframes treegrid-rwhov-button-animate-enter {
                0% { background: transparent; }
                100% { background: #d5d5d5; }
            }
            .treegrid-rwhov-button-icons {
                background-image: url(app/integralui/resources/icons-x24.png);
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0 !important;
                margin: 0;
                width: 24px;
                height: 24px;
                vertical-align: top;
            }
            .trash {
                background-position: -72px -48px;
            }
            .favorite {
                background-position: -216px -72px;
            }
            .favorite-selected {
                background-position: -144px -72px;
            }
            .statistics {
                background-position: -216px -168px;
            }
        </style>
        <h2 class="feature-title" style="margin-left:0">TreeGrid / Show Buttons while Row is Hovered</h2>
        <div class="feature-content">
            <div #application>
                <iui-treegrid [appRef]="applicationRef" [controlStyle]="treegridStyle" [columns]="columns" [rows]="rows" [rowHeight]="30" [showFooter]="false" [expandColumnID]="1" [gridLines]="gridLines" [showHoverRow]="isHoverRowAllowed" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.headerText}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span [ngSwitch]="cell.cid">
                            <span *ngSwitchCase="2">
                                <span class="treegrid-rwhov-cell-favorite" [ngClass]="{ 'treegrid-rwhov-cell-favorite-selected': isFavorite(cell) }" [ngStyle]="{ opacity: isRowHovered(cell) ? 1 : 0.5 }"></span>
                            </span>
                            <span *ngSwitchDefault style="display:inline-block">
                                <span class="treegrid-rwhov-cell-label">{{cell.text}}</span>
                            </span>
                        </span>
                    </ng-template>
                    <ng-template let-row [iuiTemplate]="{ type: 'row-hover' }">
                        <div class="treegrid-rwhov-button" *ngFor="let button of row.buttons" [iuiTooltip]="button.tooltip" [tooltipRef]="tooltipReference">
                            <span class="treegrid-rwhov-button-icons {{button.icon}}" (click)="rowButtonClicked(row, button)"></span>
                        </div>
                    </ng-template>
                </iui-treegrid>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help">
                <p><span class="initial-space"></span>An example where custom command buttons are displayed on right side when row is hovered.</p>
                <p><span class="initial-space"></span>You can add custom content to the row-hover template. When mouse is moved over the row, this content wil appear. By default the content in the row-hover template appears on the right side of the grid row. This is set in CSS as part of the <span style="color:#c60d0d">iui-treegrid-block-hover</span> class (part of the integralui.treegrid-default.css style sheet). You can modify it so that it will appear on the left side or in any other way you want. The content will always appear on top of the row cells, over the grid row.</p>
                <p><span class="initial-space"></span>For demonstration purposes, the template shows three command buttons for quick use. Each button has an icon and a <a routerLink="../../tooltip">IntegralUI Tooltip</a> attached, which appears after initial delay set to 1 sec. You can modify the template and add any custom HTML or other Angular components, that may better suite your app.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-row-hover-buttons.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridRowHoverButtonsSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid', { static: false }) treegrid: IntegralUITreeGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public dropdownItems: Array<any>;
    public gridLines: IntegralUIGridLines = IntegralUIGridLines.Horizontal;
    public isHoverRowAllowed: boolean = true;
    public tooltipReference: any = null;

    public treegridStyle: any = {
        general: {
            normal: 'treegrid-rwhov-normal'
        }
    }

    constructor(){
        // Options to choose from
        this.dropdownItems = [
            { value: "Action" },
            { value: "Adventure" },
            { value: "Animation" },
            { value: "Biography" },
            { value: "Comedy" },
            { value: "Crime" },
            { value: "Drama" },
            { value: "Fantasy" },
            { value: "Horror" },
            { value: "Mystery" },
            { value: "Sci-Fi" },
            { value: "Thriller" },
            { value: "Western" }
        ];

        // Add columns and rows for the TreeGrid
        this.columns = [
            { id: 2, width: 30, fixedWidth: true },
            { id: 1, headerText: "Title", width: 275 },
            { id: 4, headerText: "Genre", editorType: IntegralUIEditorType.DropList, editorSettings: { items: this.dropdownItems }, headerAlignment: "center", contentAlignment: "center", width: 150 },
            { id: 5, headerText: "Ratings", headerAlignment: "center", contentAlignment: "center", width: 130 },
            { id: 6, headerText: "Released", headerAlignment: "center", contentAlignment: "center", width: 140 }
        ];

        this.rows = [
            { 
                id: 1,
                text: "2010",
                cells: [{ cid: 1, text: "2010" }, { cid: 4, editorSettings: { visible: IntegralUIVisibility.None } }],
                rows: [
                    { id: 11, pid: 1, text: "Inception", cells: [{ cid: 1, text: "Inception" }, { cid: 2, value: true }, { cid: 3, text: "2010" }, { cid: 4, value: "Mystery" }, { cid: 5, text: "8.8" }, { cid: 6, text: "16 Jul 2010" }] },
                    { id: 12, pid: 1, text: "Toy Story 3", cells: [{ cid: 1, text: "Toy Story 3" }, { cid: 2, value: true }, { cid: 3, text: "2010" }, { cid: 4, value: "Animation" }, { cid: 5, text: "8.4" }, { cid: 6, text: "18 Jun 2010" } ] },
                    { id: 13, pid: 1, text: "The Town", cells: [{ cid: 1, text: "The Town" }, { cid: 2 }, { cid: 3, text: "2010" }, { cid: 4, value: "Crime" }, { cid: 5, text: "7.6" }, { cid: 6, text: "17 Sep 2010" }] },
                    { id: 14, pid: 1, text: "The Social Network", cells: [{ cid: 1, text: "The Social Network" }, { cid: 2, value: true }, { cid: 3, text: "2010" }, { cid: 4, value: "Biography" }, { cid: 5, text: "7.8" }, { cid: 6, text: "01 Oct 2010" }] },
                    { id: 15, pid: 1, text: "Black Swan", cells: [{ cid: 1, text: "Black Swan" }, { cid: 2 }, { cid: 3, text: "2010" }, { cid: 4, value: "Mystery" }, { cid: 5, text: "8.0" }, { cid: 6, text: "17 Dec 2010" }] },
                    { id: 16, pid: 1, text: "Shutter Island", cells: [{ cid: 1, text: "Shutter Island" }, { cid: 2, value: true }, { cid: 3, text: "2010" }, { cid: 4, value: "Mystery" }, { cid: 5, text: "8.1" }, { cid: 6, text: "19 Feb 2010" }] }
                ]
            },
            { 
                id: 2,
                text: "2012",
                cells: [{ cid: 1, text: "2012" }, { cid: 4, editorSettings: { visible: IntegralUIVisibility.None } }],
                rows: [
                    { id: 21, pid: 2, text: "Django Unchained", cells: [{ cid: 1, text: "Django Unchained" }, { cid: 2, value: true }, { cid: 3, text: "2012" }, { cid: 4, value: "Western" }, { cid: 5, text: "8.5" }, { cid: 6, text: "25 Dec 2012" }] },
                    { id: 22, pid: 2, text: "Prometheus", cells: [{ cid: 1, text: "Prometheus" }, { cid: 2, value: true }, { cid: 3, text: "2012" }, { cid: 4, value: "Sci-Fi" }, { cid: 5, text: "7.0" }, { cid: 6, text: "08 Jun 2012" } ] },
                    { id: 23, pid: 2, text: "The Avengers", cells: [{ cid: 1, text: "The Avengers" }, { cid: 2 }, { cid: 3, text: "2012" }, { cid: 4, value: "Action" }, { cid: 5, text: "8.2" }, { cid: 6, text: "04 May 2012" }] },
                    { id: 24, pid: 2, text: "The Dark Knight Rises", cells: [{ cid: 1, text: "The Dark Knight Rises" }, { cid: 2, value: true }, { cid: 3, text: "2012" }, { cid: 4, value: "Action" }, { cid: 5, text: "8.5" }, { cid: 6, text: "20 Jul 2012" }] }
                ]
            },
            { 
                id: 3,
                text: "2013",
                cells: [{ cid: 1, text: "2013" }, { cid: 4, editorSettings: { visible: IntegralUIVisibility.None } }],
                rows: [
                    { id: 31, pid: 3, text: "Gravity", cells: [{ cid: 1, text: "Gravity" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, value: "Sci-Fi" }, { cid: 5, text: "7.9" }, { cid: 6, text: "04 Oct 2013" }] },
                    { id: 32, pid: 3, text: "The Wolf of Wall Street", cells: [{ cid: 1, text: "The Wolf of Wall Street" }, { cid: 2, value: true }, { cid: 3, text: "2013" }, { cid: 4, value: "Comedy" }, { cid: 5, text: "8.2" }, { cid: 6, text: "25 Dec 2013" } ] },
                    { id: 33, pid: 3, text: "The Conjuring", cells: [{ cid: 1, text: "The Conjuring" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, value: "Horror" }, { cid: 5, text: "7.5" }, { cid: 6, text: "19 Jul 2013" }] },
                    { id: 34, pid: 3, text: "Blue Jasmine", cells: [{ cid: 1, text: "Blue Jasmine" }, { cid: 2, value: true }, { cid: 3, text: "2013" }, { cid: 4, value: "Drama" }, { cid: 5, text: "7.3" }, { cid: 6, text: "23 Aug 2013" }] },
                    { id: 35, pid: 3, text: "Prisoners", cells: [{ cid: 1, text: "Prisoners" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, value: "Mystery" }, { cid: 5, text: "8.1" }, { cid: 6, text: "20 Sep 2013" }] },
                    { id: 36, pid: 3, text: "American Hustle", cells: [{ cid: 1, text: "American Hustle" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, value: "Crime" }, { cid: 5, text: "7.3" }, { cid: 6, text: "20 Dec 2013" }] },
                    { id: 37, pid: 3, text: "Frozen", cells: [{ cid: 1, text: "Frozen" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, value: "Animation" }, { cid: 5, text: "7.7" }, { cid: 6, text: "27 Nov 2013" }] },
                    { id: 38, pid: 3, text: "Rush", cells: [{ cid: 1, text: "Rush" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, value: "Action" }, { cid: 5, text: "8.2" }, { cid: 6, text: "27 Sep 2013" }] },
                    { id: 39, pid: 3, text: "This Is the End", cells: [{ cid: 1, text: "This Is the End" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, value: "Comedy" }, { cid: 5, text: "6.7" }, { cid: 6, text: "12 Jun 2013" }] }
                ]
            },
            { 
                id: 4,
                text: "2014",
                cells: [{ cid: 1, text: "2014" }, { cid: 4, editorSettings: { visible: IntegralUIVisibility.None } }],
                rows: [
                    { id: 41, pid: 4, text: "Nightcrawler", cells: [{ cid: 1, text: "Nightcrawler" }, { cid: 2, value: true }, { cid: 3, text: "2014" }, { cid: 4, value: "Thriller" }, { cid: 5, text: "7.9" }, { cid: 6, text: "31 Oct 2014" }] },
                    { id: 42, pid: 4, text: "Locke", cells: [{ cid: 1, text: "Locke" }, { cid: 2 }, { cid: 3, text: "2014" }, { cid: 4, value: "Drama" }, { cid: 5, text: "7.1" }, { cid: 6, text: "29 May 2014" }] },
                    { id: 43, pid: 4, text: "Snowpiercer", cells: [{ cid: 1, text: "Snowpiercer" }, { cid: 2 }, { cid: 3, text: "2014" }, { cid: 4, value: "Mystery" }, { cid: 5, text: "7.0" }, { cid: 6, text: "11 Jul 2014" }] },
                    { id: 44, pid: 4, text: "Edge of Tomorrow", cells: [{ cid: 1, text: "Edge of Tomorrow" }, { cid: 2, value: true }, { cid: 3, text: "2014" }, { cid: 4, value: "Action" }, { cid: 5, text: "7.9" }, { cid: 6, text: "06 Jun 2014" }] },
                    { id: 45, pid: 4, text: "Interstellar", cells: [{ cid: 1, text: "Interstellar" }, { cid: 2 }, { cid: 3, text: "2014" }, { cid: 4, value: "Adventure" }, { cid: 5, text: "8.7" }, { cid: 6, text: "07 Nov 2014" }] },
                    { id: 46, pid: 4, text: "Interstellar", cells: [{ cid: 1, text: "Dawn of the Planet of the Apes" }, { cid: 2, value: true }, { cid: 3, text: "2014" }, { cid: 4, value: "Sci-Fi" }, { cid: 5, text: "7.7" }, { cid: 6, text: "11 Jul 2014" }] }
                ]
            },
        ];
    } 
    
    ngAfterViewInit(){
        let self = this;

        // Add command buttons to each child row
        let initTimeout = setTimeout(function(){
            let list = self.treegrid.getFullList();
            list.filter(row => self.treegrid.getRowParent(row))
                .map(row => row.buttons = [
                        { key: 'DELETE', icon: 'trash', tooltip: { title: "Delete", initialDelay: 1000 } },
                        { key: 'CHARTS', icon: 'statistics', tooltip: { title: "Statistics", initialDelay: 1000 } },
                        { key: 'MARK', icon: 'favorite', tooltip: { title: "Favorite", initialDelay: 1000 } }
                    ]
                );

            self.tooltipReference = self.applicationRef;

            clearTimeout(initTimeout);
        }, 100);
    }

    isFavorite(cell: any){
        let row  = this.treegrid.findRowById(cell.rid);
        return row ? row.favorite == true : false;
    }

    isRowHovered(cell: any){
        let row  = this.treegrid.findRowById(cell.rid);
        return row == this.treegrid.getHoverRow();
    }

    rowButtonClicked(row: any, button: any){
        switch (button.key){
            case 'DELETE':
                this.treegrid.removeRow(row);
                this.treegrid.updateLayout();
                break;

            case 'CHARTS':
                alert("Statistics button is clicked for row: " + row.text);
                break;

            case 'MARK':
                row.favorite = row.favorite != undefined ? !row.favorite : true;
                button.icon = row.favorite ? 'favorite-selected' : 'favorite';
                break;
        }
    }
}
