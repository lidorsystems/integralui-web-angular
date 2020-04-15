/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, HostListener, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';
import { IntegralUIDropDown } from '../../integralui/directives/integralui.dropdown';

@Component({
    selector: '',
    template: `
        <style>
            .grid-ftr-normal
            {
                width: 800px;
                height: 400px;
            }
            .grid-ftr-column-title
            {
                display: inline-block;
                margin-left: 25px;
                vertical-align: top;
            }
            .grid-ftr-dropdown
            {
                display: inline-block;
                vertical-align: top;
            }
            .grid-ftr-column-filter-mark
            {
                background-image: url(app/resources/icons.png);
                background-position: -96px -128px;
                background-repeat: no-repeat;
                margin: 1px 0 0 0;
                position: absolute;
                left: 7px;
                padding: 0;
                width: 16px;
                height: 16px;
            }
            .grid-ftr-column-filter-mark:hover
            {
                background-position: -112px -128px;
            }

            /* Filter Templates */
            .grid-ftr-panel
            {
                cursor: default;
                padding: 7px;
                width: 300px;
            }
            .grid-ftr-inline-radio
            {
                margin-right: 15px;
            }
            .grid-ftr-button
            {
                display: inline-block;
                margin: 5px;
                width: 100px;
                height: 25px;
            }
            .grid-ftr-inline-block
            {
                display: inline-block;
                margin: 3px 0;
                white-space: nowrap;
            }
            .grid-ftr-inline-block input
            {
                display: inline-block;
                vertical-align: top;
            }
            .grid-ftr-cmb
            {
                display: inline-block;
                width: 165px;
                margin: 0 5px;
            }
            .grid-ftr-cmb .iui-combobox-header
            {
                height: 23px;
            }
        </style>
        <h2 class="feature-title">Grid / Filter</h2>
        <div class="feature-content" #application>
            <iui-grid [columns]="columns" [rows]="rows" [controlStyle]="gridStyle" [showFooter]="false" [allowFilter]="true" (beforeSelect)="onBeforeSelect($event)" #grid>
                <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                    <span [ngSwitch]="column.id">
                        <span *ngSwitchCase="3">
                            <span class="grid-ftr-dropdown" [iuiDropDown]="column.dropdown" (dropDownOpen)="onAuthorDropDownOpen($event)" #dropdown1>
                                <span class="grid-ftr-column-filter-mark"></span>
                                <ng-template let-obj [iuiTemplate]="{ type: 'dropdown' }">
                                    <div class="grid-ftr-panel" (mousedown)="panelMouseDown($event)">
                                        <label>Show rows where: </label>
                                        <div class="grid-ftr-inline-block" style="margin-top:10px;">
                                            <iui-combobox [items]="filterAuthors" [controlStyle]="comboStyle" [selectedItem]="selAuthor[0]" (selectedItemChanged)="filterAuthorChanged($event, 0)">
                                                <iui-item *ngFor="let item of filterAuthors" [text]="item.text"></iui-item>
                                            </iui-combobox>
                                            <input [(ngModel)]="authorValues[0]" type="text" style="width:105px;height:23px;"/>
                                        </div>
                                        <div class="grid-ftr-inline-block" style="width:125px;margin:5px 15px">
                                            <label class="grid-ftr-inline-radio"><input type="radio" [(ngModel)]="authorCombinator" value="And" (mousedown)="onAuthorCombinatorAnd()" />And</label>
                                            <label class="grid-ftr-inline-radio"><input type="radio" [(ngModel)]="authorCombinator" value="Or" (mousedown)="onAuthorCombinatorOr()" />Or</label>
                                        </div>
                                        <div class="grid-ftr-inline-block">
                                            <iui-combobox [items]="filterAuthors" [controlStyle]="comboStyle" [selectedItem]="selAuthor[1]" (selectedItemChanged)="filterAuthorChanged($event, 1)">
                                                <iui-item *ngFor="let item of filterAuthors" [text]="item.text"></iui-item>
                                            </iui-combobox>
                                            <input [(ngModel)]="authorValues[1]" type="text" style="width:105px;height:23px;"/>
                                        </div>
                                        <div class="grid-ftr-inline-block" style="margin-top:25px;text-align:center;width:300px;">
                                            <button class="grid-ftr-button" (mousedown)="applyAuthors()">Apply</button>
                                            <button class="grid-ftr-button" (mousedown)="cancelAuthorsFilter()">Cancel</button>
                                        </div>
                                    </div>
                                </ng-template>
                            </span>
                            <span class="grid-ftr-column-title">{{column.headerText}}</span> 
                        </span>
                        <span *ngSwitchCase="4">
                            <span class="grid-ftr-dropdown" [iuiDropDown]="column.dropdown" (dropDownOpen)="onPriceDropDownOpen($event)" #dropdown2>
                                <span class="grid-ftr-column-filter-mark"></span>
                                <ng-template let-obj [iuiTemplate]="{ type: 'dropdown' }">
                                    <div class="grid-ftr-panel" (mousedown)="panelMouseDown($event)">
                                        <label>Show rows where: </label>
                                        <div class="grid-ftr-inline-block" style="margin-top:10px">
                                            <iui-combobox [items]="filterPrices" [controlStyle]="comboStyle" [selectedItem]="selPrice[0]" (selectedItemChanged)="filterPriceChanged($event, 0)">
                                                <iui-item *ngFor="let item of filterPrices" [text]="item.text"></iui-item>
                                            </iui-combobox>
                                            <input [(ngModel)]="priceValues[0]" type="number" style="width:105px;height:23px;"/>
                                        </div>
                                        <div class="grid-ftr-inline-block" style="width:125px;margin:5px 15px">
                                            <label class="grid-ftr-inline-radio"><input type="radio" [(ngModel)]="priceCombinator" value="And" (mousedown)="onPriceCombinatorAnd()" />And</label>
                                            <label class="grid-ftr-inline-radio"><input type="radio" [(ngModel)]="priceCombinator" value="Or" (mousedown)="onPriceCombinatorOr()" />Or</label>
                                        </div>
                                        <div class="grid-ftr-inline-block">
                                            <iui-combobox [items]="filterPrices" [controlStyle]="comboStyle" [selectedItem]="selPrice[1]" (selectedItemChanged)="filterPriceChanged($event, 1)">
                                                <iui-item *ngFor="let item of filterPrices" [text]="item.text"></iui-item>
                                            </iui-combobox>
                                            <input [(ngModel)]="priceValues[1]" type="number" style="width:105px;height:23px;"/>
                                        </div>
                                        <div class="grid-ftr-inline-block" style="margin-top:25px;text-align:center;width:300px;">
                                            <button class="grid-ftr-button" (mousedown)="applyPrices()">Apply</button>
                                            <button class="grid-ftr-button" (mousedown)="cancelPriceFilter()">Cancel</button>
                                        </div>
                                    </div>
                                </ng-template>
                            </span>
                            <span class="grid-ftr-column-title">{{column.headerText}}</span> 
                        </span>
                        <span *ngSwitchDefault>
                            {{column.headerText}}
                        </span>
                    </span>
                </ng-template>
                <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                    {{cell.text}}
                </ng-template>
            </iui-grid>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span>This sample shows how to filter the Grid content using multiple different conditions in different combinations for each column separately.</p>
                <p><span class="initial-space"></span>By clicking on the filter button in column header, a pop-up window will appear with filtering options for that column. In this example, each column has a different filtering options, which are created using custom templates.</p>
                <p>The following properties and methods are presented:</p>
                <ul class="feature-points" style="padding-bottom:10px;width:800px">
                    <li><span style="color:#c60d0d">allowFilter</span> - a property which determines whether filtering is allowed</li>
                    <li><span style="color:#c60d0d">filter</span> - a method which filters the content of Grid using specified column and filtering parameters</li>
                </ul>
                <p><span class="initial-space"></span>By default, filtering is executed using the cell's value field to match the specified criteria. If this field value is empty, then the value of cell's text field is used.</p>
                <p><span class="initial-space"></span>For filtering operations we are using the <strong>IntegralUIFilterService</strong>, which provides many ways to set string, numeric or custom filtering using multiple conditions with AND / OR combinations.</p>
                <p style="margin:10px 50px;"><strong>NOTE</strong> Only built-in filtering operations are presented in this sample. In order to create a custom filtering operation, you would need to create a function in your code and apply it to the callback field of column filtering parameter.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-filter.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridFilterSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('grid', { static: false }) grid: IntegralUIGrid;
    @ViewChild('dropdown1', {read: IntegralUIDropDown, static: false}) authorDropdown: IntegralUIDropDown;
    @ViewChild('dropdown2', {read: IntegralUIDropDown, static: false}) priceDropdown: IntegralUIDropDown;

    public columns: Array<any>;
    public rows: Array<any>;

    public gridStyle: any = {
        general: {
            normal: 'grid-ftr-normal'
        }
    }

    public comboStyle: any = {
        general: {
            normal: 'grid-ftr-cmb'
        }
    }

    public authorCombinator: string = 'And';
    public authorValues: Array<any> = [ '', '' ];
    public filterAuthors: Array<any> = [];
    public selAuthor: Array<any> = [];

    public filterPrices: Array<any> = [];
    public priceCombinator: string = 'And';
    public priceValues: Array<any> = [ '', '' ];
    public selPrice: Array<any> = [];

    constructor(){
        this.columns = [
            { id: 2, headerText: "Name", width: 400 },
            { id: 3, headerText: "Author/Supplier", contentAlignment: "center", width: 225, allowFilter: true },
            { id: 4, headerText: "Price", contentAlignment: "right", width: 120, allowFilter: true }
        ];

        this.rows = [
            { 
                id: 111,
                text: "The Wright Brothers",
                cells: [{ cid: 2, text: "The Wright Brothers", value: true }, { cid: 3, text: "David McCullough" }, { cid: 4, text: "$18.00", value: 18.00 }]
            },
            { 
                id: 112,
                text: "Capital in the Twenty-First Century",
                cells: [{ cid: 2, text: "Capital in the Twenty-First Century", value: true }, { cid: 3, text: "Thomas Piketty" }, { cid: 4, text: "$22.99", value: 22.99 }]
            },
            { 
                id: 121,
                text: "Thinking, Fast and Slow",
                cells: [{ cid: 2, text: "Thinking, Fast and Slow", value: true }, { cid: 3, text: "Daniel Kahneman" }, { cid: 4, text: "$9.07", value: 9.07 }]
            },
            { 
                id: 122,
                text: "A Brief History of Time",
                cells: [{ cid: 2, text: "A Brief History of Time", value: true }, { cid: 3, text: "Stephen Hawking" }, { cid: 4, text: "$19.95", value: 19.95 }]
            },
            { 
                id: 123,
                text: "Alan Turing: The Enigma",
                cells: [{ cid: 2, text: "Alan Turing: The Enigma", value: true }, { cid: 3, text: "Andrew Hodges" }, { cid: 4, text: "$10.17", value: 10.17 }]
            },
            { 
                id: 211,
                text: "Acer Aspire E 15 ES1-512-C88M",
                cells: [{ cid: 2, text: "Acer Aspire E 15 ES1-512-C88M", value: true }, { cid: 3, text: "Acer" }, { cid: 4, text: "$229.00", value: 229.00 }]
            },
            { 
                id: 212,
                text: "Lenovo Flex 2 14 14.0-Inch",
                cells: [{ cid: 2, text: "Lenovo Flex 2 14 14.0-Inch", value: true }, { cid: 3, text: "Lenovo" }, { cid: 4, text: "$489.99", value: 489.99 }]
            },
            { 
                id: 213,
                text: "HP Stream 11",
                cells: [{ cid: 2, text: "HP Stream 11", value: true }, { cid: 3, text: "HP" }, { cid: 4, text: "$199.99", value: 199.99 }]
            },
            { 
                id: 214,
                text: "ASUS ROG GL551JW-DS74",
                cells: [{ cid: 2, text: "ASUS ROG GL551JW-DS74", value: true }, { cid: 3, text: "ASUS" }, { cid: 4, text: "$1,199.00", value: 1199.00}]
            },
            { 
                id: 221,
                text: "Canon PIXMA MX922 Wireless",
                cells: [{ cid: 2, text: "Canon PIXMA MX922 Wireless", value: true }, { cid: 3, text: "Canon" }, { cid: 4, text: "$99.99", value: 99.99 }]
            },
            { 
                id: 222,
                text: "Lexmark MX81x/MX71x 550-Sheet Tray",
                cells: [{ cid: 2, text: "Lexmark MX81x/MX71x 550-Sheet Tray", value: true }, { cid: 3, text: "Lexmark" }, { cid: 4, text: "$253.96", value: 253.96 }]
            },
            { 
                id: 311,
                text: "Mortal Kombat X",
                cells: [{ cid: 2, text: "Mortal Kombat X", value: true }, { cid: 3, text: "Warner Home Video - Games" }, { cid: 4, text: "$59.96", value: 59.96 }]
            },
            { 
                id: 312,
                text: "Bloodborne",
                cells: [{ cid: 2, text: "Bloodborne", value: true }, { cid: 3, text: "Sony Computer Entertainment" }, { cid: 4, text: "$59.96", value: 59.96 }]
            },
            { 
                id: 313,
                text: "Destiny",
                cells: [{ cid: 2, text: "Destiny", value: true }, { cid: 3, text: "Activision Inc." }, { cid: 4, text: "$35.94", value: 35.94 }]
            },
            { 
                id: 311,
                text: "Grand Theft Auto V",
                cells: [{ cid: 2, text: "Grand Theft Auto V", value: true }, { cid: 3, text: "Rockstar Games" }, { cid: 4, text: "$59.99", value: 59.99 }]
            },
            { 
                id: 312,
                text: "The Elder Scrolls V: Skyrim",
                cells: [{ cid: 2, text: "The Elder Scrolls V: Skyrim", value: true }, { cid: 3, text: "Bethesda Softworks" }, { cid: 4, text: "$39.99", value: 39.99 } ]
            }
        ];

        // Options from Author Filter to choose from
        this.filterAuthors = [
          { text: ' ' },
          { text: 'equals' },
          { text: 'does not equal' },
          { text: 'begins with' },
          { text: 'does not begin with' },
          { text: 'ends with' },
          { text: 'does not end with' },
          { text: 'contains' },
          { text: 'does not contain' }
        ];

        this.selAuthor = [ this.filterAuthors[0], this.filterAuthors[0] ];

        // Options for Price Filter to choose from
        this.filterPrices = [
          { text: ' ' },
          { text: 'equals' },
          { text: 'does not equal' },
          { text: 'greater than' },
          { text: 'greater than or equal to' },
          { text: 'less than' },
          { text: 'less than or equal to' }
        ];
        
        this.selPrice = [ this.filterPrices[0], this.filterPrices[0] ];
    } 
    
    ngAfterViewInit(){
        // Set a dropdown for columns
        this.columns[1].dropdown = {
            appRef: this.applicationRef,
            adjustment: { top: 22, left: -5 },
            autoClose: false
        }

        this.columns[2].dropdown = {
            appRef: this.applicationRef,
            adjustment: { top: 22, left: -5 },
            autoClose: false
        }
    }

    // Filter ----------------------------------------------------------------------------

    private getFormula(conditions: Array<any>, flag?: boolean){
        let formula: string = '';

        let firstSymbol = conditions[0].negative ? '!a' : 'a';
        let secondSymbol = conditions[1].negative ? '!b' : 'b';

        let combinator = !flag ? this.authorCombinator : this.priceCombinator;
        if (combinator == 'And')
            formula = '(' + firstSymbol + ' & ' + secondSymbol + ')';
        else
            formula = '(' + firstSymbol + ' | ' + secondSymbol + ')';

        return formula;
    }

    // Prevent clicks in the list scrollbar area to close the dropdown window
    panelMouseDown(e: any){
        e.stopPropagation();
    }

    // Author Filter ---------------------------------------------------------------------

    onAuthorCombinatorAnd(){
        this.authorCombinator = 'And';
    }

    onAuthorCombinatorOr(){
        this.authorCombinator = 'Or';
    }

    private getAuthorOperation(option: any){
        let index = this.filterAuthors.indexOf(option);

        switch (index){
            case 1: //equals
                return '=';

            case 2: //does not equal
                return '!=';

            case 3: //begins with
                return '->';

            case 4: //does not begin with
                return '->';

            case 5: //ends with
                return '<-';

            case 6: //does not end with
                return '<-';

            case 7: //contains
                return '[]';

            case 8: //does not contain
                return '[]';
        }

        return '';
    }

    applyAuthors(){
        this.authorDropdown.close();

        let filterConditions: Array<any> = [];
        for (let i = 0; i < 2; i++){
            if (this.selAuthor[i] != this.filterAuthors[0] && this.authorValues[i] != ''){
                let currentOperation = this.getAuthorOperation(this.selAuthor[i]);

                filterConditions.push({ 
                    value: this.authorValues[i],
                    operation: currentOperation,
                    negative: this.filterAuthors.indexOf(this.selAuthor[i]) % 2 == 0
                });
            }
        }

        if (filterConditions.length > 0){
            let params: any = {
                caseSensitive: false
            }

            if (filterConditions.length == 1){
                params.conditions = filterConditions[0];
            }
            else {
                params.conditions = filterConditions;
                params.formula = this.getFormula(filterConditions);
            }

            this.grid.filter(this.columns[1], params);
        }
        else
            this.grid.filter(this.columns[1]);
    }

    cancelAuthorsFilter(){
        this.authorDropdown.close();
        
        this.authorValues = [ '', '' ];
        this.selAuthor = [ this.filterAuthors[0], this.filterAuthors[0] ];
        this.authorCombinator = 'And';

        this.grid.filter(this.columns[1]);
    }

    filterAuthorChanged(e: any, index: number){
        this.selAuthor[index]= e.item;
    }

    onAuthorDropDownOpen(e: any){
        this.priceDropdown.close();
    }

    // Price Filter ---------------------------------------------------------------------
    
    private getPriceOperation(option: any){
        let index = this.filterPrices.indexOf(option);
        switch (index){
            case 1: //equals
                return '=';

            case 2: //does not equal
                return '!=';

            case 3: //greater than
                return '>';

            case 4: //greater than or equal to
                return '>=';

            case 5: //less than
                return '<';

            case 6: //less than or equal to
                return '<=';
        }

        return '';
    }
    
    onPriceCombinatorAnd (){
        this.priceCombinator = 'And';
    }

    onPriceCombinatorOr(){
        this.priceCombinator = 'Or';
        
    }

    applyPrices(){
        this.priceDropdown.close();

        let filterConditions: Array<any> = [];
        for (let i = 0; i < 2; i++){
            if (this.selPrice[i] != this.filterPrices[0] && this.priceValues[i] != -1){
                let currentOperation = this.getPriceOperation(this.selPrice[i]);

                filterConditions.push({ 
                    value: this.priceValues[i],
                    operation: currentOperation,
                    negative: this.filterPrices.indexOf(this.selPrice[i]) == 2
                });
            }
        }

        if (filterConditions.length > 0){
            let params: any = {}

            if (filterConditions.length == 1){
                params.conditions = filterConditions[0];
            }
            else {
                params.conditions = filterConditions;
                params.formula = this.getFormula(filterConditions, true);
            }

            this.grid.filter(this.columns[2], params);
        }
        else
            this.grid.filter(this.columns[2]);
    }

    cancelPriceFilter(){
        this.priceDropdown.close();

        this.priceValues = [ '', '' ];
        this.selPrice = [
            this.filterPrices[0],
            this.filterPrices[0]
        ];
        this.priceCombinator = 'And';

        this.grid.filter(this.columns[2]);
    }

    filterPriceChanged(e: any, index: number){
        this.selPrice[index]= e.item;
    }

    onPriceDropDownOpen(e: any){
        this.authorDropdown.close();
    }

    // Close panels if clicked outside its space

    closePanels(){
        this.authorDropdown.close();
        this.priceDropdown.close();
    }

    onBeforeSelect(e: any){
        this.closePanels();
    }

    @HostListener('mousedown', ['$event']) onMouseDown(e: any){
        this.closePanels();
    }
}
