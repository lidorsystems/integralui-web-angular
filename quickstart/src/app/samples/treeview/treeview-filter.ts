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
import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';

@Component({
    selector: '',
    template: `
        <style>
            .trw-ftr-normal
            {
                width: 350px;
                height: 400px;
            }
            .trw-ftr-item-label
            {
                padding: 5px;
            }
            .trw-ftr-cbox
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-unchecked-7.png);
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0 !important;
                margin: 0 2px 0 0;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }
            .trw-ftr-cbox-checked
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-checked-7.png);
            }
            .trw-ftr-control-panel
            {
                float: left;
                margin-left: 30px;
                width: 300px;
            }
            .trw-ftr-inline-block
            {
                display: inline-block;
                margin: 3px 0;
            }
            .trw-ftr-inline-radio
            {
                margin-right: 15px;
            }
            .trw-ftr-button
            {
                display: inline-block;
                margin: 5px;
                width: 100px;
                height: 25px;
            }
            .trw-ftr-cmb
            {
                display: inline-block;
                width: 165px;
                margin: 0 5px;
            }
            .trw-ftr-cmb .iui-combobox-header
            {
                height: 23px;
            }
        </style>
        <h2 class="feature-title">TreeView / Filter</h2>
        <div class="feature-content">
            <div style="float:left">
                <iui-treeview [items]="treeItems" [controlStyle]="treeStyle" [virtualMode]="true" #treeview>
                    <ng-template let-item>
                        <span [ngClass]="getCheckBoxClass(item)" (mousedown)="checkItem($event, item)"></span>
                        <span class="trw-ftr-item-label">{{item.text}}</span>
                    </ng-template>
                </iui-treeview>
            </div>
            <div class="trw-ftr-control-panel">
                <label>Show items where: </label>
                <div class="trw-ftr-inline-block" style="margin-top:15px">
                    <iui-combobox [items]="filterOptions" [controlStyle]="comboStyle" [selectedItem]="selOptions[0]" (selectedItemChanged)="filterOptionChanged($event, 0)">
                        <iui-item *ngFor="let option of filterOptions" [text]="option.text"></iui-item>
                    </iui-combobox>
                    <input [(ngModel)]="filterValues[0]" type="text" style="width:105px;height:23px;"/>
                </div>
                <div class="trw-ftr-inline-block" style="width:125px;margin:5px 30px">
                    <label class="trw-ftr-inline-radio"><input type="radio" [(ngModel)]="combinations[0]" value="And" (mousedown)="onCombinatorChanged(0)" />And</label>
                    <label class="trw-ftr-inline-radio"><input type="radio" [(ngModel)]="combinations[0]" value="Or" (mousedown)="onCombinatorChanged(0, true)" />Or</label>
                </div>
                <div class="trw-ftr-inline-block">
                    <iui-combobox [items]="filterOptions" [controlStyle]="comboStyle" [selectedItem]="selOptions[1]" (selectedItemChanged)="filterOptionChanged($event, 1)">
                        <iui-item *ngFor="let option of filterOptions" [text]="option.text"></iui-item>
                    </iui-combobox>
                    <input [(ngModel)]="filterValues[1]" type="text" style="width:105px;height:23px;"/>
                </div>
                <div class="trw-ftr-inline-block" style="width:125px;margin:5px 30px" align="center">
                    <label class="trw-ftr-inline-radio"><input type="radio" [(ngModel)]="combinations[1]" value="And" (mousedown)="onCombinatorChanged(1)" />And</label>
                    <label class="trw-ftr-inline-radio"><input type="radio" [(ngModel)]="combinations[1]" value="Or" (mousedown)="onCombinatorChanged(1, true)" />Or</label>
                </div>
                <div class="trw-ftr-inline-block">
                    <iui-combobox [items]="filterOptions" [controlStyle]="comboStyle" [selectedItem]="selOptions[2]" (selectedItemChanged)="filterOptionChanged($event, 2)">
                        <iui-item *ngFor="let option of filterOptions" [text]="option.text"></iui-item>
                    </iui-combobox>
                    <input [(ngModel)]="filterValues[2]" type="text" style="width:105px;height:23px;"/>
                </div>
                <div class="trw-ftr-inline-block" style="margin-top:25px;text-align:center;width:300px;">
                    <button class="trw-ftr-button" (click)="applyFilter()">Apply Filter</button>
                    <button class="trw-ftr-button" (click)="resetFilter()">Reset</button><br/><br/><br/>
                    <button class="trw-ftr-button" (click)="applyCustomFilter()" style="width:210px">Show Only Checked Items</button>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span>This sample shows how to filter the TreeView content using multiple different conditions in different combinations.</p>
                <p><span class="initial-space"></span>By selecting an option from combo boxes and specifying matching values, you can filter the TreeView so that only those items that matches the specified condition(s) are shown. In this example we can set a filter with 3 conditions using string operations. Furthermore these conditions are combined using the AND / OR operators.</p>
                <p><span class="initial-space"></span>By default, filtering is executed using the item's value field to match the specified criteria. If this field value is empty, then the value of item's text field is used. If parent item has children that passes the filter conditions, then parent item also passes the filter conditions. This is determined from <span style="color:#c60d0d">allowParent</span> field in filter parameters.</p>
                <p><span class="initial-space"></span>For filtering operations we are using the <strong>IntegralUIFilterService</strong>, which provides many ways to set string, numeric or custom filtering using multiple conditions with multiple AND / OR combinations. For more information about filtering options, check out this sample: <a href="../services/filter-service.html">Filter Service</a>.</p>
                <p style="margin:10px 50px;"><strong>NOTE</strong> In order to create a custom filtering operation, you would need to create a function in your code and apply it to the callback field of filtering parameter. To see this in action just click on the <span style="color:#c60d0d">Show Only Checked Items</span> button, the TreeView will only show checked items.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-filter.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewFilterSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeview') treeview: IntegralUITreeView;
    
    // An array that holds a flat list of tree hierarchy
    private flatData: Array<any>;
    
    // An object that holds all items in the TreeView
    public treeItems: Array<any>;

    public treeStyle: any = {
        general: {
            normal: 'trw-ftr-normal'
        }
    }

    public comboStyle: any = {
        general: {
            normal: 'trw-ftr-cmb'
        }
    }

    public combinations: Array<any> = [ 'Or', 'Or' ];
    public filterValues: Array<any> = [ '', '', '' ];
    public filterOptions: Array<any> = [];
    public selOptions: Array<any> = [];

    constructor(){
        // At first TreeView doesn't have any data
        // We will use loadData method to load a flat list into the TreeView after the view is initialized
        this.treeItems = [];

        // Create a tree hierarchy
        this.flatData = [
            { id: 1, text: "Dairy", expanded: false },
            { id: 11, pid: 1, text: "Milk" },
            { id: 12, pid: 1, text: "Butter" },
            { id: 13, pid: 1, text: "Cheese", checked: true },
            { id: 14, pid: 1, text: "Yogurt" },
            { id: 2, text: "Fruits", checked: true },
            { id: 21, pid: 2, text: "Berries", expanded:  false},
            { id: 211, pid: 21, text: "BlackBerries" },
            { id: 212, pid: 21, text: "CranBerries", checked: true },
            { id: 213, pid: 21, text: "StrawBerries" },
            { id: 22, pid: 2, text: "Pits", checked: true },
            { id: 23, pid: 2, text: "Core" },
            { id: 24, pid: 2, text: "Citrus Fruits" },
            { id: 241, pid: 24, text: "Oranges" },
            { id: 242, pid: 24, text: "Lemons", checked: true },
            { id: 25, pid: 2, text: "Melons" },
            { id: 26, pid: 2, text: "Tropical Fruits", expanded: false },
            { id: 261, pid: 26, text: "Avocados", checked: true },
            { id: 262, pid: 26, text: "Bananas", checked: true },
            { id: 263, pid: 26, text: "Dates" },
            { id: 3, text: "Grains" },
            { id: 4, text: "Meat", checked: true },
            { id: 41, pid: 4, text: "Beef" },
            { id: 42, pid: 4, text: "Lamb", expanded: false },
            { id: 421, pid: 42, text: "Lamb Breast" },
            { id: 422, pid: 42, text: "Lamb Leg", checked: true },
            { id: 423, pid: 42, text: "Lamb Ribs" },
            { id: 43, pid: 4, text: "Pork", checked: true },
            { id: 5, text: "Sweets" },
            { id: 6, text: "Vegetables", checked: true },
            { id: 7, text: "Water" }
        ];

        // Options from Author Filter to choose from
        this.filterOptions = [
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

        this.selOptions = [ this.filterOptions[0], this.filterOptions[0], this.filterOptions[0] ];
    }

    ngAfterViewInit(){
        this.treeview.loadData(this.flatData);
    }

    checkItem(e: any, item: any){
        if (item)
            item.checked = item.checked == undefined ? true : !item.checked;

        e.stopPropagation();
    }

    getCheckBoxClass(item: any){
        let cbClass: string = 'trw-ftr-cbox';

        if (item.checked == true)
            cbClass += ' trw-ftr-cbox-checked';

        return cbClass;
    }

    // Filter ----------------------------------------------------------------------------

    onCombinatorChanged(index: number, flag?: boolean){
        if (flag)
            this.combinations[index] = 'Or';
        else
            this.combinations[index] = 'And';
    }

    filterOptionChanged(e: any, index: number){
        this.selOptions[index]= e.item;
    }

    private getOperation(option: any){
        let index = this.filterOptions.indexOf(option);
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

    getFormula(conditions: Array<any>){
        let formula: string = '';

        let firstCombination = this.combinations[0];
        let secondCombination = this.combinations[1];
        if (conditions.length == 2 && this.selOptions[0].text == '')
            firstCombination = this.combinations[1];

        let firstSymbol = conditions[0].negative ? '!a' : 'a';
        let secondSymbol = conditions[1].negative ? '!b' : 'b';

        if (firstCombination == 'And')
            formula = '(' + firstSymbol + ' & ' + secondSymbol + ')';
        else
            formula = '(' + firstSymbol + ' | ' + secondSymbol + ')';
        
        if (conditions.length == 3){
            let thirdSymbol = conditions[2].negative ? '!c' : 'c';

            if (secondCombination == 'And')
                formula += ' & ' + thirdSymbol;
            else
                formula += ' | ' + thirdSymbol;
        }

        return formula;
    }

    applyFilter(){
        let filterConditions = [];
        for (let i = 0; i < 3; i++){
            if (this.selOptions[i] != '' && this.filterValues[i] != ''){
                let currentOperation = this.getOperation(this.selOptions[i]);

                filterConditions.push({ 
                    value: this.filterValues[i],
                    operation: currentOperation,
                    negative: this.filterOptions.indexOf(this.selOptions[i]) % 2 == 0
                });
            }
        }

        if (filterConditions.length > 0){
            let params: any = {
                allowParent: true,
                caseSensitive: false
            }

            if (filterConditions.length == 1){
                params.conditions = filterConditions[0];
            }
            else {
                params.conditions = filterConditions;
                params.formula = this.getFormula(filterConditions);
            }

            this.treeview.filter(params);
        }
        else
            this.resetFilter();
    }

    resetFilter(){
        this.filterValues = [ '', '', '' ];
        this.selOptions = [
            this.filterOptions[0],
            this.filterOptions[0],
            this.filterOptions[0]
        ];

        this.combinations = [ 'Or', 'Or' ];
        
        this.treeview.filter();
    }

    // Custom Filter
    applyCustomFilter(){
        let self = this;

        let params: any = {
            callback: function(value: any, item: any){
                return item.checked || self.IsThereCheckedChildren(item);
            }
        }

        this.treeview.filter(params);
    }

    private IsThereCheckedChildren(item: any) : boolean {
        let retValue: boolean = false;

        let list: Array<any> = item.items;
        if (list){
            for (let i = 0; i < list.length; i++){
                retValue = list[i].checked;

                if (retValue)
                    break;
            }
        }

        return retValue;
    }
}
