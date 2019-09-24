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

@Component({
    selector: '',
    template: `
        <style>
            .treegrid-ccmb-adv-normal
            {
                width: 900px;
                height: 325px;
            }
            .treegrid-ccmb-adv-normal .iui-treegrid-expand-box
            {
                margin-top: -3px;
            }
            .treegrid-ccmb-adv-item-label
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
                margin: 5px 7px 0 7px;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }

            /* DropDown Cell */
            .dropdown-list
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
            .dropdown-list li
            {
                padding: 5px;
            }
            .dropdown-list li:hover
            {
                background: #e5e5e5;
            }
            .treegrid-ccmb-adv-item-drop-mark
            {
                float: right;
            }
            .treegrid-ccmb-adv-item-drop-mark span
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
       </style>
        <h2 class="feature-title">TreeGrid / Cell with DropDown Checked List</h2>
        <div class="feature-content">
            <div #application>
                <iui-treegrid [appRef]="applicationRef" [controlStyle]="treegridStyle" [columns]="columns" [rows]="rows" [showFooter]="false" [rowHeight]="25" #treegrid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span *ngIf="column.id==2" class="cell-checkbox" [ngStyle]="{ 'background-image': getCheckValue(column) }" (mousedown)="columnCheckClicked(column)"></span>
                        {{column.headerText}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span [ngSwitch]="cell.cid">
                            <div *ngSwitchCase="2">
                                <span class="cell-checkbox" [ngStyle]="{ 'background-image': getCheckValue(cell) }" (mousedown)="checkBoxClicked(cell)"></span>
                            </div>
                            <div *ngSwitchCase="4">
                                <div [iuiDropDown]="cell.dropdown" (dropDownOpen)="onDropDownOpen($event, cell)" #dropdown>
                                    <div class="treegrid-ccmb-adv-item-drop-mark"><span></span></div>
                                    <span class="treegrid-ccmb-adv-item-label">{{cell.text}}</span> 
                                    <ng-template let-obj [iuiTemplate]="{ type: 'dropdown' }">
                                        <ul class="dropdown-list" [ngStyle]="{ width: dropDownWidth + 'px'}" (mousedown)="listMouseDown($event)">
                                            <li *ngFor="let item of dropdownItems" (mousedown)="itemSelected(cell, item)">
                                                <span class="cell-checkbox" [ngStyle]="{ 'background-image': getItemValue(item) }" style="margin-top:-1px" (mousedown)="itemChecked($event, cell, item)"></span>
                                                <span>{{item.text}}</span>
                                            </li>
                                        </ul>
                                    </ng-template>
                                </div>
                            </div>
                            <div *ngSwitchDefault style="display:inline-block">
                                <span class="treegrid-ccmb-adv-item-label">{{cell.text}}</span>
                            </div>
                        </span>
                    </ng-template>
                </iui-treegrid>
            </div>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>An example of a TreeGrid cell with a dropdown component. This is a advanced version of <a routerLink="../cell-dropdown">TreeGrid Cell with DropDown List</a> sample.</p>
                <p><span class="initial-space"></span>Each cell in the fourth column displays a dropdowm icon, and when clicked a list of available options will appear. By selecting multiple options from the list, you can change the cell value.</p>
                <p><span class="initial-space"></span>If you click on the item checkbox, the dropdown window will remain visible. This allows you to select multiple options. To close the window, click on item label.</p>
                <p><span class="initial-space"></span>The list displays all options, with previously selected ones at top. This is useful when you quickly want to uncheck previous options. All functionality of the dropdown window is customizable, check out the sample source code.</p>
                <p><span class="initial-space"></span>For a dropdown, we are using the <strong>iuiDropDown</strong> directive, which is attachable to any HTML element or Angular component. You can add custom content in dropdown window.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treegrid/treegrid-cell-dropdown-checked-list.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeGridCellDropDownCheckedListSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treegrid', { static: false }) treegrid: IntegralUITreeGrid;

    // An array that holds all options in the comboo box
    public dropdownItems: Array<any>;
    public dropDownWidth: number = 150;

    // TreeGrid  settings
    public columns: Array<any>;
    public rows: Array<any>;

    // Control Style
    public treegridStyle: any = {
        general: {
            normal : 'treegrid-ccmb-adv-normal'
        }
    }

    private imageChecked: string = 'url(app/integralui/resources/checkbox/checkbox-checked-1.png)';
    private imageUnchecked: string = 'url(app/integralui/resources/checkbox/checkbox-unchecked-1.png)';

    constructor(){
        // Options to choose from
        this.dropdownItems = [
            { text: "Action", checked: false },
            { text: "Adventure", checked: false },
            { text: "Animation", checked: false },
            { text: "Biography", checked: false },
            { text: "Comedy", checked: false },
            { text: "Crime", checked: false },
            { text: "Drama", checked: false },
            { text: "Fantasy", checked: false },
            { text: "Horror", checked: false },
            { text: "Mystery", checked: false },
            { text: "Sci-Fi", checked: false },
            { text: "Thriller", checked: false },
            { text: "Western", checked: false }
        ];

        // Add columns and rows for the TreeGrid
        this.columns = [
            { id: 1, headerText: "Title", width: 300 },
            { id: 2, width: 30, fixedWidth: true },
            { id: 4, headerText: "Genre", headerAlignment: "center", contentAlignment: "center", width: 270 },
            { id: 5, headerText: "Ratings", headerAlignment: "center", contentAlignment: "center", width: 70 },
            { id: 6, headerText: "Released", headerAlignment: "center", contentAlignment: "center", width: 120 }
        ];

        this.rows = [
            { 
                id: 1,
                text: "2010",
                cells: [{ cid: 1, text: "2010" }],
                rows: [
                    { id: 11, pid: 1, text: "Inception", cells: [{ cid: 1, text: "Inception" }, { cid: 2, value: true }, { cid: 3, text: "2010" }, { cid: 4, text: "Action, Mystery, Sci-Fi" }, { cid: 5, text: "8.8" }, { cid: 6, text: "16 Jul 2010" }] },
                    { id: 12, pid: 1, text: "Toy Story 3", cells: [{ cid: 1, text: "Toy Story 3" }, { cid: 2, value: true }, { cid: 3, text: "2010" }, { cid: 4, text: "Animation, Adventure, Comedy" }, { cid: 5, text: "8.4" }, { cid: 6, text: "18 Jun 2010" } ] },
                    { id: 13, pid: 1, text: "The Town", cells: [{ cid: 1, text: "The Town" }, { cid: 2 }, { cid: 3, text: "2010" }, { cid: 4, text: "Crime, Drama, Thriller" }, { cid: 5, text: "7.6" }, { cid: 6, text: "17 Sep 2010" }] },
                    { id: 14, pid: 1, text: "The Social Network", cells: [{ cid: 1, text: "The Social Network" }, { cid: 2, value: true }, { cid: 3, text: "2010" }, { cid: 4, text: "Biography, Drama" }, { cid: 5, text: "7.8" }, { cid: 6, text: "01 Oct 2010" }] },
                    { id: 15, pid: 1, text: "Black Swan", cells: [{ cid: 1, text: "Black Swan" }, { cid: 2 }, { cid: 3, text: "2010" }, { cid: 4, text: "Drama, Mystery, Thriller" }, { cid: 5, text: "8.0" }, { cid: 6, text: "17 Dec 2010" }] },
                    { id: 16, pid: 1, text: "Shutter Island", cells: [{ cid: 1, text: "Shutter Island" }, { cid: 2, value: true }, { cid: 3, text: "2010" }, { cid: 4, text: "Mystery, Thriller" }, { cid: 5, text: "8.1" }, { cid: 6, text: "19 Feb 2010" }] }
                ]
            },
            { 
                id: 2,
                text: "2012",
                cells: [{ cid: 1, text: "2012" }],
                rows: [
                    { id: 21, pid: 2, text: "Django Unchained", cells: [{ cid: 1, text: "Django Unchained" }, { cid: 2, value: true }, { cid: 3, text: "2012" }, { cid: 4, text: "Western" }, { cid: 5, text: "8.5" }, { cid: 6, text: "25 Dec 2012" }] },
                    { id: 22, pid: 2, text: "Prometheus", cells: [{ cid: 1, text: "Prometheus" }, { cid: 2, value: true }, { cid: 3, text: "2012" }, { cid: 4, text: "Adventure, Mystery, Sci-Fi" }, { cid: 5, text: "7.0" }, { cid: 6, text: "08 Jun 2012" } ] },
                    { id: 23, pid: 2, text: "The Avengers", cells: [{ cid: 1, text: "The Avengers" }, { cid: 2 }, { cid: 3, text: "2012" }, { cid: 4, text: "Action, Adventure, Sci-Fi" }, { cid: 5, text: "8.2" }, { cid: 6, text: "04 May 2012" }] },
                    { id: 24, pid: 2, text: "The Dark Knight Rises", cells: [{ cid: 1, text: "The Dark Knight Rises" }, { cid: 2, value: true }, { cid: 3, text: "2012" }, { cid: 4, text: "Action, Thriller" }, { cid: 5, text: "8.5" }, { cid: 6, text: "20 Jul 2012" }] }
                ]
            },
            { 
                id: 3,
                text: "2013",
                cells: [{ cid: 1, text: "2013" }],
                rows: [
                    { id: 31, pid: 3, text: "Gravity", cells: [{ cid: 1, text: "Gravity" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, text: "Sci-Fi, Thriller" }, { cid: 5, text: "7.9" }, { cid: 6, text: "04 Oct 2013" }] },
                    { id: 32, pid: 3, text: "The Wolf of Wall Street", cells: [{ cid: 1, text: "The Wolf of Wall Street" }, { cid: 2, value: true }, { cid: 3, text: "2013" }, { cid: 4, text: "Biography, Comedy, Crime" }, { cid: 5, text: "8.2" }, { cid: 6, text: "25 Dec 2013" } ] },
                    { id: 33, pid: 3, text: "The Conjuring", cells: [{ cid: 1, text: "The Conjuring" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, text: "Horror" }, { cid: 5, text: "7.5" }, { cid: 6, text: "19 Jul 2013" }] },
                    { id: 34, pid: 3, text: "Blue Jasmine", cells: [{ cid: 1, text: "Blue Jasmine" }, { cid: 2, value: true }, { cid: 3, text: "2013" }, { cid: 4, text: "Drama" }, { cid: 5, text: "7.3" }, { cid: 6, text: "23 Aug 2013" }] },
                    { id: 35, pid: 3, text: "Prisoners", cells: [{ cid: 1, text: "Prisoners" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, text: "Crime, Drama, Mystery" }, { cid: 5, text: "8.1" }, { cid: 6, text: "20 Sep 2013" }] },
                    { id: 36, pid: 3, text: "American Hustle", cells: [{ cid: 1, text: "American Hustle" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, text: "Crime, Drama" }, { cid: 5, text: "7.3" }, { cid: 6, text: "20 Dec 2013" }] },
                    { id: 37, pid: 3, text: "Frozen", cells: [{ cid: 1, text: "Frozen" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, text: "Animation, Adventure, Comedy" }, { cid: 5, text: "7.7" }, { cid: 6, text: "27 Nov 2013" }] },
                    { id: 38, pid: 3, text: "Rush", cells: [{ cid: 1, text: "Rush" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, text: "Action, Biography, Drama" }, { cid: 5, text: "8.2" }, { cid: 6, text: "27 Sep 2013" }] },
                    { id: 39, pid: 3, text: "This Is the End", cells: [{ cid: 1, text: "This Is the End" }, { cid: 2 }, { cid: 3, text: "2013" }, { cid: 4, text: "Comedy, Fantasy" }, { cid: 5, text: "6.7" }, { cid: 6, text: "12 Jun 2013" }] }
                ]
            },
            { 
                id: 4,
                text: "2014",
                cells: [{ cid: 1, text: "2014" }],
                rows: [
                    { id: 41, pid: 4, text: "Nightcrawler", cells: [{ cid: 1, text: "Nightcrawler" }, { cid: 2, value: true }, { cid: 3, text: "2014" }, { cid: 4, text: "Crime, Thriller" }, { cid: 5, text: "7.9" }, { cid: 6, text: "31 Oct 2014" }] },
                    { id: 42, pid: 4, text: "Locke", cells: [{ cid: 1, text: "Locke" }, { cid: 2 }, { cid: 3, text: "2014" }, { cid: 4, text: "Drama" }, { cid: 5, text: "7.1" }, { cid: 6, text: "29 May 2014" }] },
                    { id: 43, pid: 4, text: "Snowpiercer", cells: [{ cid: 1, text: "Snowpiercer" }, { cid: 2 }, { cid: 3, text: "2014" }, { cid: 4, text: "Action, Mystery, Sci-Fi" }, { cid: 5, text: "7.0" }, { cid: 6, text: "11 Jul 2014" }] },
                    { id: 44, pid: 4, text: "Edge of Tomorrow", cells: [{ cid: 1, text: "Edge of Tomorrow" }, { cid: 2, value: true }, { cid: 3, text: "2014" }, { cid: 4, text: "Action, Adventure, Mystery" }, { cid: 5, text: "7.9" }, { cid: 6, text: "06 Jun 2014" }] },
                    { id: 45, pid: 4, text: "Interstellar", cells: [{ cid: 1, text: "Interstellar" }, { cid: 2 }, { cid: 3, text: "2014" }, { cid: 4, text: "Adventure, Drama, Sci-Fi" }, { cid: 5, text: "8.7" }, { cid: 6, text: "07 Nov 2014" }] },
                    { id: 46, pid: 4, text: "Interstellar", cells: [{ cid: 1, text: "Dawn of the Planet of the Apes" }, { cid: 2, value: true }, { cid: 3, text: "2014" }, { cid: 4, text: "Action, Drama, Sci-Fi" }, { cid: 5, text: "7.7" }, { cid: 6, text: "11 Jul 2014" }] }
                ]
            },
        ];
    }

    ngAfterViewInit(){
        let self = this;

        let initTimeout = setTimeout(function(){
            // Set a dropdown for row cells
            let list = self.treegrid.getFullList();
            for (let i = 0; i < list.length; i++)
                for (let j = 0; j < list[i].cells.length; j++){
                    let cell: any = list[i].cells[j];

                    if (cell.cid == 4){
                        cell.dropdown = {
                            appRef: self.applicationRef,
                            adjustment: { top: 0, left: -3 },
                            data: cell
                        }

                        cell.value = [];
                        let selGenres = cell.text.split(', ');
                        for (let j = 0; j < selGenres.length; j++){
                            let foundItem = self.findGenre(selGenres[j]);
                            if (foundItem)
                                cell.value.push(foundItem);
                        }
                    }
                }

            clearTimeout(initTimeout);
        }, 100);
    }

    findGenre(text: string){
        let found: any = null;
        for (var i = 0; i < this.dropdownItems.length; i++){
            if (this.dropdownItems[i].text == text){
                found = this.dropdownItems[i];
                break;
            }
        }

        return found;
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

            let list = this.treegrid.getFullList();
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
            if (row.cells[j].cid == 2){
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

    private getItemValue(item: any){
        return item && item.checked == true ? this.imageChecked : this.imageUnchecked;
    }

    itemChecked(e: any, cell: any, item: any){
        let currentValue = item.checked == true ? true : false;
        item.checked = !currentValue;

        e.stopPropagation();
    }

    itemSelected(cell: any, item: any){
        if (cell){
            let list: Array<any> = [];
            for (let i = 0; i < this.dropdownItems.length; i++){
                if (this.dropdownItems[i].checked)
                    list.push(this.dropdownItems[i]);
            }

            cell.text = '';
            for (let i = 0; i < list.length; i++)
                cell.text += list[i].text + ", ";

            if (cell.text != '')
                cell.text = cell.text.substring(0, cell.text.length - 2);

            cell.value = list;

            this.isItemSelected = true;
        }
    }

    // Calculates the width of treegrid cell
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

        if (cell){
            this.dropDownWidth = this.getCellWidth(cell);

            let cellItems = cell.value;
            if (cellItems){
                this.resetList();

                for (let i = 0; i < cellItems.length; i++)
                    cellItems[i].checked = true;
            }

            this.showCheckedFirst();
        }
    }

    onDropDownClose(e: any){
    }

    resetList(){
        for (let i = 0; i < this.dropdownItems.length; i++)
            this.dropdownItems[i].checked = false;
    }
        
    sortComparer(firstItem: any, secondItem: any){
        let x = firstItem.text != undefined ? firstItem.text : null;
        let y = secondItem.text != undefined ? secondItem.text : null;

        if (x < y)
            return -1;
        else if (x > y)
            return 1;

        return 0;
    }

    showCheckedFirst(){
        let checkedList: Array<any> = [];
        let uncheckedList: Array<any> = [];

        for (let i = 0; i < this.dropdownItems.length; i++){
            if (this.dropdownItems[i].checked)
                checkedList.push(this.dropdownItems[i]);
            else
                uncheckedList.push(this.dropdownItems[i]);
        }

        checkedList.sort(this.sortComparer);
        uncheckedList.sort(this.sortComparer);

        this.dropdownItems.length = 0;
        for (let i = 0; i < checkedList.length; i++)
            this.dropdownItems.push(checkedList[i]);
        for (let i = 0; i < uncheckedList.length; i++)
           this.dropdownItems.push(uncheckedList[i]);
    }
}
