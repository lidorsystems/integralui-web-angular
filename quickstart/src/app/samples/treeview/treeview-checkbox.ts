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
import { IntegralUIListBox } from '../../integralui/components/integralui.listbox';

@Component({
    selector: '',
    template: `
        <style>
            .trw-cbox-normal
            {
                float: left;
                width: 350px;
                height: 400px;
            }
            .trw-cbox-normal .iui-treeitem-content
            {
                padding: 5px;
            }
            .trw-cbox-normal .iui-treeitem-expand-box
            {
                margin-top: 4px !important;
            }
            .trw-cbox-icons-medium
            {
                background-image: url(app/integralui/resources/icons-x24.png);
                background-position: 0 0;
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0 !important;
                margin: 0 1px 0 5px;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .trw-cbox-icons-empty
            {
                display: inline-block;
                padding: 0 !important;
                height: 24px;
                vertical-align: middle;
            }
            .library
            {
                background-position: 0 -72px;
            }
            .economics
            {
                background-position: -24px -72px;
            }
            .people
            {
                background-position: -120px -72px;
            }
            .heart
            {
                background-position: -168px -72px;
            }
            .album
            {
                background-position: -144px -48px;
            }
            .camera
            {
                background-position: -168px -48px;
            }
            .software
            {
                background-position: -48px -72px;
            }
            .clock
            {
                background-position: -72px -72px;
            }
            .sports
            {
                background-position: -96px -72px;
            }
            .trw-item-cbox
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-unchecked.png);
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0 !important;
                margin: 0 2px 0 0;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }
            .trw-item-cbox-checked
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-checked.png);
            }
            .trw-item-cbox-indeterminate
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-indeterminate.png);
            }
            .trw-cbox-item-label
            {
                display: inline-block;
                padding: 3px 0;
                vertical-align: middle;
            }
            .trw-cbox-cmb
            {
                display: inline-block;
                vertical-align: top;
                width: 200px;
            }
            .trw-cbox-cmb-button
            {
                display: inline-block;
                margin-left: 3px;
                padding: 5px;
                vertical-align: top;
                width: 100px;
            }
            .trw-cbox-cmb-label
            {
                display: inline-block;
                margin-top: 10px;
                vertical-align: top;
            }
            .trw-cbox-list
            {
                width: 350px;
                height: 340px;
            }
        </style>
        <h2 class="feature-title">TreeView / Items with CheckBox</h2>
        <div class="feature-content">
            <iui-treeview [items]="data" [controlStyle]="treeStyle" #treeview>
                <ng-template let-item>
                    <span [ngClass]="getCheckBoxClass(item)" (mousedown)="checkItem($event, item)"></span>
                    <span [ngClass]="getItemIcon(item)"></span>
                    <span class="trw-cbox-item-label">{{item.text}}</span>
                </ng-template>
            </iui-treeview>
            <div style="float:left;margin-left:30px;">
                <label>List of items depending on their check state: </label><br /><br />
                <label class="trw-cbox-cmb-label">State: </label>
                <iui-combobox [items]="checkStates" [controlStyle]="comboStyle" [maxDropDownItems]="3" [integralHeight]="true" [selectedIndex]="2" (selectedIndexChanged)="onComboSelectionChanged($event)">
                    <iui-item *ngFor="let item of checkStates" [text]="item.text"></iui-item>
                </iui-combobox>
                <button class="trw-cbox-cmb-button"(click)="showCheckList()">Show</button><br />
                <iui-listbox [items]="checkedItems" [controlStyle]="listStyle" #listbox>
                    <iui-listitem *ngFor="let item of checkedItems" [data]="item">  
                        <div class="trw-cbox-item-label">{{item.text}}</div>
                    </iui-listitem>
                </iui-listbox>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In this example each TreeView item has a check box, shown before its label. Check boxes are added to the TreeView using the &lt;span&gt; element with custom check box image as background.</p>
                <p><span class="initial-space"></span>The demo simulates cascading changes to the checkbox. Whenever item's check box value changes, all parent and child items updates their check box value.</p>
                <p><span class="initial-space"></span>In addition, from <a routerLink="../../combobox">ComboBox</a> on the right, you can select which items are displayed in the right list: unchecked, indeterminated or checked.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-checkbox.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewCheckBoxSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeview') treeview: IntegralUITreeView;
    @ViewChild('listbox') listbox: IntegralUIListBox;

    // An object that holds all items in the TreeView
    public data: Array<any>;

    // An array that holds all options in the comboo box
    public checkStates: Array<any>;

    // An array that holds a list of all checked items
    public checkedItems: Array<any>;

    public treeStyle: any = {
        general: {
            normal: 'trw-cbox-normal'
        }
    }

    public comboStyle: any = {
        general: {
            normal: 'trw-cbox-cmb'
        }
    }

    public listStyle: any = {
        general: {
            normal: 'trw-cbox-list'
        }
    }

    private selOption: string = 'checked';

    constructor(){
        this.data = [
            { 
                id: 1,
                text: "Books",
                icon: "trw-cbox-icons-medium library",
                items: [
                    { id: 11, pid: 1, text: "Art"  },
                    { 
                        id: 12,
                        pid: 1,
                        text: "Business",
                        icon: "trw-cbox-icons-medium people",
                        items: [
                            { id: 121, pid: 12, text: "Economics" },
                            { 
                                id: 122,
                                pid: 12,
                                checkState: 'checked',
                                text: "Investing", 
                                expanded: false,
                                icon: "trw-cbox-icons-medium economics",
                                items: [
                                    { id: 1221, pid: 122, text: "Bonds", checkState: 'checked' },
                                    { id: 1222, pid: 122, text: "Options", checkState: 'checked' },
                                    { id: 1223, pid: 122, text: "Stocks", checkState: 'checked' }
                                ]
                            },
                            { id: 123, pid: 12, text: "Management" },
                            { id: 124, pid: 12, text: "Small Business" }
                        ]
                    },
                    { id: 13, pid: 1, text: "Health", icon: "trw-cbox-icons-medium heart", checkState: 'checked' },
                    { id: 14, pid: 1, text: "Literature" },
                    { 
                        id: 15,
                        pid: 1,
                        text: "Science",
                        expanded: false,
                        items: [
                            { id: 151, pid: 15, text: "Astronomy" },
                            { id: 152, pid: 15, text: "Mathematics" },
                            { id: 153, pid: 15, text: "Evolution" },
                            { id: 154, pid: 15, text: "Nature" }
                        ]
                    }
                ]
            },
            { id: 2, text: "Computers" },
            {
                id: 3,
                checkState: 'checked',
                text: "Electronics",
                items: [
                    { id: 31, pid: 3, text: "Camera", icon: "trw-cbox-icons-medium camera", checkState: 'checked' },
                    { id: 32, pid: 3, text: "Cell Phones", checkState: 'checked' },
                    { id: 33, pid: 3, text: "Video Game Consoles", checkState: 'checked' }
                ]
            },
            { 
                id: 4,
                text: "Music", 
                expanded: false,
                icon: "trw-cbox-icons-medium album",
                items: [
                    { id: 41, pid: 4, text: "Blues" },
                    { id: 42, pid: 4, text: "Classic Rock" },
                    { id: 43, pid: 4, text: "Pop" },
                    { id: 44, pid: 4, text: "Jazz" }
                ]
            },
            { 
                id: 5,
                text: "Software",
                icon: "trw-cbox-icons-medium software",
                items: [
                    { id: 51, pid: 5, text: "Games", checkState: 'checked' },
                    { id: 52, pid: 5, text: "Operating Systems" },
                    { id: 53, pid: 5, text: "Network & Servers" },
                    { id: 54, pid: 5, text: "Security" }
                ]
            },
            { 
                id: 6,
                text: "Sports",
                expanded: false,
                icon: "trw-cbox-icons-medium sports",
                items: [
                    { id: 61, pid: 6, text: "Baseball" },
                    { id: 62, pid: 6, text: "Martial Arts", checkState: 'checked' },
                    { id: 63, pid: 6, text: "Running" },
                    { 
                        id: 64,
                        pid: 6,
                        text: "Tennis",
                        expanded: false,
                        items: [
                            { id: 641, pid: 64, text: "Accessories" },
                            { id: 642, pid: 64, text: "Balls" },
                            { id: 643, pid: 64, text: "Racquets" }
                        ]
                    }
                ]
            },
            { id: 7, text: "Video Games" },
            { id: 8, text: "Watches", icon: "trw-cbox-icons-medium clock" }
        ];

        // Options to choose from
        this.checkStates = [
          { text: "Unchecked" },
          { text: "Indeterminate" },
          { text: "Checked" }
        ];

        this.checkedItems = [];
    }

    ngAfterViewInit(){
        let list = this.treeview.getFullList();
        for (let i = 0; i < list.length; i++)
            this.updateParentItemCheckValue(list[i]);

        this.showCheckList();
    }

    checkItem(e: any, item: any){
        if (item){
            let checkValue = this.getItemCheckValue(item);
            switch (checkValue){
                case 'unchecked':
                    checkValue = 'checked';
                    break;

                case 'indeterminate':
                    checkValue = 'checked';
                    break;

                case 'checked':
                    checkValue = 'unchecked';
                    break;
            }

            this.updateCheckValue(item, checkValue);

            this.updateChildItemCheckValue(item);
            this.updateParentItemCheckValue(item);
        }

        e.stopPropagation();
    }

    getItemCheckValue(item: any){
        if (item)
            return item.checkState == undefined ? 'unchecked' : item.checkState;

        return 'unchecked';
    }

    updateCheckValue(item: any, value: string){
        if (item){
            switch (value){
                case 'unchecked':
                    item.checkState = 'unchecked';
                    break;

                case 'indeterminate':
                    item.checkState = 'indeterminate';
                    break;

                case 'checked':
                    item.checkState = 'checked';
                    break;
            }
        }
    }

    // Update the checkbox of parent items
    updateParentItemCheckValue(item: any){
        let parent = this.treeview.getItemParent(item);
        while (parent){
            let list = parent.items;

            if (list){
                let checkCount = 0;
                let indeterminateCount = 0;
                for (let i = 0; i < list.length; i++){
                    let checkValue = this.getItemCheckValue(list[i]);
                    if (checkValue == 'checked')
                        checkCount++;
                    else if (checkValue == 'indeterminate')
                        indeterminateCount++;
                }
                
                let parentCheckValue = 'unchecked';
                if (checkCount == list.length)
                    parentCheckValue = 'checked';
                else if (checkCount > 0 || indeterminateCount > 0)
                    parentCheckValue = 'indeterminate';

                this.updateCheckValue(parent, parentCheckValue);
            }   
            
            parent = this.treeview.getItemParent(parent);
        }
    }
    
    // Update the checkbox of child items
    updateChildItemCheckValue(parent: any){
        if (parent && parent.items){
            for (let i = 0; i < parent.items.length; i++){
                let checkValue = this.getItemCheckValue(parent);
                if (checkValue == 'checked')
                    this.updateCheckValue(parent.items[i], 'checked');
                else
                    this.updateCheckValue(parent.items[i], 'unchecked');

                this.updateChildItemCheckValue(parent.items[i]);
            }
        }
    }

    getCheckBoxClass(item: any){
        let cbClass: string = 'trw-item-cbox';

        switch (item.checkState){
            case 'indeterminate':
                cbClass += ' trw-item-cbox-indeterminate';
                break;

            case 'checked':
                cbClass += ' trw-item-cbox-checked';
                break;
        }

        return cbClass;
    }

    getItemIcon(item: any){
        return item.icon ? item.icon : 'trw-cbox-icons-empty';
    }

    showCheckList(){
        this.checkedItems.length = 0;

        let list = this.treeview.getFullList();
        for (let i = 0; i < list.length; i++){
            let checkValue: string = this.getItemCheckValue(list[i]);
            if (checkValue == this.selOption)
                this.checkedItems.push({ text: list[i].text });
        }

        this.listbox.updateLayout();
    }

    onComboSelectionChanged(e: any){
        switch (e.index){
          case 1:
            this.selOption = 'indeterminate';
            break;

          case 2:
            this.selOption = 'checked';
            break;

          default:
            this.selOption = 'unchecked';
            break;
        }
    } 
}
