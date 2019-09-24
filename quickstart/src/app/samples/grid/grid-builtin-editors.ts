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
import { IntegralUIDateFormat, IntegralUIEditorType, IntegralUIVisibility } from '../../integralui/components/integralui.core';
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            .grid-btinedit-normal
            {
                width: 900px;
                height: 400px;
            }
            .grid-btinedit-rating
            {
                background: transparent;
                border: 0;
            }
        </style>
        <h2 class="feature-title">Grid / Built-In Editors</h2>
        <div class="feature-content">
            <div #application>
                <iui-grid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [showFooter]="false" [rowHeight]="23" (cellValueChanging)="gridCellValueBefore($event)" (cellValueChanged)="gridCellValueAfter($event)" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        {{column.title}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <button style="display:inline-block;float:right">Button</button>
                        <span style="display:inline-block;margin-right:5px;padding-top:3px;">{{cell.text}}</span>
                    </ng-template>
                </iui-grid>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>This sample shows how to apply built-in editors to the Grid component. There are 9 editors to choose from:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">CheckBox</span> - a checkbox</li>
                    <li><span style="color:#c60d0d">Date</span> - a dropdown calendar</li>
                    <li><span style="color:#c60d0d">DropList</span> - a dropdown list</li>
                    <li><span style="color:#c60d0d">Image</span> - a set of images</li>
                    <li><span style="color:#c60d0d">Label</span> - a label</li>
                    <li><span style="color:#c60d0d">Numeric</span> - a numeric text box</li>
                    <li><span style="color:#c60d0d">Progress</span> - a progress bar</li>
                    <li><span style="color:#c60d0d">Rating</span> - a rating component</li>
                    <li><span style="color:#c60d0d">TextBox</span> - a text box</li>
                </ul>
                <p><span class="initial-space"></span>Each cell has a value field that is used to edit the cell. Any changes to the cell value are reflected back to the editor value and vice-versa. During this process the <strong>cellValueChanging</strong> and <strong>cellValueChanged</strong> events are fired, which you can handle in your code. In current sample, the console window will display the event data whenever cell value changes.</p>
                <p><span class="initial-space"></span>Each editor has its own settings, which are customizable on client side. For example, for CheckBox editor you can set whether the checkbox has two or three state values, for the Numeric editor you can set min/max values, for Date editor you can set the date display format etc. In addition, you can also customize the appearance of each editor with custom CSS styles.
                <p><span class="initial-space"></span>If editor type is not specified, the content of grid cell is determined by the cell template. You can add any custom Angular compoinents of HTML elements in the cell template. In this example, the last column shows a label and button at right side. More information about custom cell templates, is available here: <a routerLink="../cell-templates">Grid Cell Templates</a></p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-builtin-editors.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridBuiltinEditorsSample {

    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('grid', { static: false }) grid: IntegralUIGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public gridStyle: any = {
        general: {
            normal: 'grid-btinedit-normal'
        }
    }

    private dropListItems: Array<any> = [
        { value: "Action" },
        { value: "Adventure" },
        { value: "Comedy " },
        { value: "Drama " },
        { value: "Horror " },
        { value: "Mystery " },
        { value: "Romance " },
        { value: "Sci-Fi" }
    ];

    constructor(){
        this.columns = [];
        this.rows = [];
    } 
    
    ngAfterViewInit(){
        this.add();
    }
    
    addColumns(){
        for (let j = 1; j <= 10; j++){
            let column: any = { 
                id: j, 
                title: "Header " + j,
                footerText: "Footer " + j
            }

            switch (j){
                case 1:
                    column.editorType = IntegralUIEditorType.Label;
                    column.editorSettings = {
                        threeState: true
                    }
                    column.title = "Label";
                    column.width = 80;
                    break;

                case 2:
                    column.editorType = IntegralUIEditorType.CheckBox;
                    column.editorSettings = {
                        threeState: true
                    }
                    column.title = "CheckBox";
                    column.width = 60;
                    column.fixedWidth = true;
                    break;

                case 3:
                    column.editorType = IntegralUIEditorType.Date;
                    column.editorSettings = {
                        locales: 'en-GB',
                        format: IntegralUIDateFormat.Custom,
                        formatOptions: {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }
                    }
                    column.title = "Date";
                    column.width = 130;
                    break;

                case 4:
                    column.editorType = IntegralUIEditorType.Rating;
                    column.editorSettings = {
                        style: {
                            general: {
                                normal: 'grid-btinedit-rating'
                            }
                        }
                    }
                    column.title = "Rating";
                    break;

                case 5:
                    column.editorType = IntegralUIEditorType.DropList;
                    column.editorSettings = {
                        items: this.dropListItems,
                        minWidth: 150,
                        maxVisibleItems: 4
                    }
                    column.title = "DropList";
                    column.width = 120;
                    break;

                case 6:
                    column.editorType = IntegralUIEditorType.Progress;
                    column.title = "Progress";
                    break;

                case 7:
                    column.editorType = IntegralUIEditorType.Numeric;
                    column.editorSettings = {
                        min: 0,
                        max: 100
                    }
                    column.title = "Numeric";
                    column.width = 50;
                    break;

                case 8:
                    column.editorType = IntegralUIEditorType.TextBox;
                    column.title = "TextBox";
                    column.width = 80;
                    break;

                case 9:
                    column.editorType = IntegralUIEditorType.Image;
                    column.title = "Image";
                    break;

                case 10:
                    // Custom, editorType is not required
                    // The cell content is determined by specified HTML template
                    column.title = "Custom";
                    column.width = 150;
                    break;
            }

            this.columns.push(column);
        }
    }

    addRows(){
        for (let i = 1; i <= 100; i++){
            let row: any = {
                text : 'Row ' + i.toString(),
                id: i,
                cells: [],
                rows: []
            };
            
            for (let j = 1; j <= this.columns.length; j++){
                let cell: any = {
                    cid: j, 
                    text: "Item" + i + j
                }

                // For cell editors, the value field is used to specify the cell value
                // In case of Label and TextBox, instead of value, the text field is in use.

                switch (j){
                    case 2: //CheckBox
                        if (this.getRandomNumber() % 3 == 1)
                            cell.value = 'checked';
                        else if (this.getRandomNumber() % 3 == 2)
                            cell.value = 'indeterminate';
                        else
                            cell.value = 'unchecked';
                        break;

                    case 3: // Date
                        cell.value = new Date(2018, 8, (i+j) * 3);
                        break;

                    case 4: // Rating
                        cell.value = this.getRandomNumber();
                        break;

                    case 5: // DropList
                        cell.value = this.dropListItems[i % this.dropListItems.length].value;
                        break;

                    case 6: // Progress
                        cell.value = this.getRandomNumber() * 5;
                        break;

                    case 7: // Numeric
                        cell.value = this.getRandomNumber();
                        break;

                    case 9: // Image
                        cell.value = [];

                        switch (i % 4){
                            case 1:
                                cell.value.push({ src: 'app/integralui/resources/checkbox/checkbox-checked-5.png' });
                                cell.value.push({ src: 'app/integralui/resources/checkbox/checkbox-checked-4.png' });
                                break;
                            case 2:
                                cell.value.push({ src: 'app/integralui/resources/radiobutton/radio-checked.png' });
                                cell.value.push({ src: 'app/integralui/resources/checkbox/checkbox-indeterminate-7.png' });
                                cell.value.push({ src: 'app/integralui/resources/expandbox/expand-red.png' });
                                break;
                            case 3:
                                cell.value.push({ src: 'app/integralui/resources/expandbox/expand-green.png' });
                                cell.value.push({ src: 'app/integralui/resources/radiobutton/radio-checked-2.png' });
                                break;
                            default:
                                cell.value.push({ src: 'http://www.lidorsystems.com/favicon.ico' });
                                break;
                        }
                        break;
                }

                row.cells.push(cell);
            }

            this.rows.push(row);
        }
    }

    add(){
        this.clear();

        this.addColumns();
        this.addRows();

        this.grid.updateLayout();
    }

    clear(){
        this.grid.clearColumns();
        this.grid.clearRows();

        this.grid.updateLayout();
    }
            
    getRandomNumber(){
        return 1 + Math.floor(Math.random() * 10);
    }

    gridCellValueBefore(e: any){
        console.log("cellValueChanging: ", e);
    }

    gridCellValueAfter(e: any){
        console.log("cellValueChanged: ", e);
    }
}
