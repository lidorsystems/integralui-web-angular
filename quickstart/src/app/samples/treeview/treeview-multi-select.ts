/*
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';
import { IntegralUISelectionMode } from '../../integralui/components/integralui.core';
import { IntegralUIListBox } from '../../integralui/components/integralui.listbox';

@Component({
    selector: '',
    template: `
        <style>
            .trw-cmb-mst
            {
                display: inline-block;
                float: right;
                width: 200px;
            }
            .trw-mst-normal
            {
                width: 350px;
                height: 400px;
            }
            .trw-mst-item-label
            {
                padding: 5px;
            }
            .trw-mst-list
            {
                width: 350px;
                height: 400px;
            }
        </style>
        <h2 class="feature-title">TreeView / Multi Select</h2>
        <div class="feature-content">
            <div style="float:left">
                <div style="float:right">
                    <span style="display:inline-block;padding:10px 5px 5px 0;">Selection Mode: </span>
                    <iui-combobox [items]="comboItems" [controlStyle]="comboStyle" [maxDropDownItems]="4" [integralHeight]="true" [selectedIndex]="1" (selectedIndexChanged)="onComboSelectionChanged($event)">
                        <iui-item *ngFor="let item of comboItems" [text]="item.text"></iui-item>
                    </iui-combobox>
                </div>
                <iui-treeview [items]="treeItems" [controlStyle]="treeStyle" [selectionMode]="selMode" (selectionChanged)="onSelectionChanged($event)" #treeview>
                    <ng-template let-item>
                          <span class="trw-mst-item-label">{{item.text}}</span>
                    </ng-template>
                </iui-treeview>
            </div>
            <div style="float:left;margin-left:30px;">
              <div style="padding:10px 0 5px 0;">Selected Items:</div>
              <iui-listbox [items]="selItems" [controlStyle]="listStyle" #listbox>
                  <iui-listitem *ngFor="let item of selItems">  
                      <div class="trw-mst-item-label">{{item.text}}</div>
                  </iui-listitem>
              </iui-listbox>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span>A demonstration of different selection types available in TreeView component. By selecting an option from <a routerLink="../../combobox">ComboBox</a> above, you can change the current selected mode. There are four acceptable values:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">None</span> - selection is disabled</li>
                    <li><span style="color:#c60d0d">One</span> - Only one item is selectable</li>
                    <li><span style="color:#c60d0d">MultiSimple</span> - Multiple items are selectable using mouse clicks without CTRL key</li>
                    <li><span style="color:#c60d0d">MultiExtended</span> - Multiple items are selectabl using mouse clicks with CTRL and SHIFT key</li>
                </ul>
                <p><span class="initial-space"></span>In multi-selection mode, items can become selected using the CTRL key or SHIFT key. The <strong>MultiExtended</strong> mode allows selection of multiple items in wide range. While SHIFT key is pressed, all items from first to last clicked item will become selected.</p>
                <p><span class="initial-space"></span>List on the right, shows which items are currently selected. To retrieve this list, you can use the <span style="color:#c60d0d">getList</span> method with key value <span style="color:#0000ff">'selected'</span>.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-multi-select.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewMultiSelectSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeview') treeview: IntegralUITreeView;
    @ViewChild('listbox') listbox: IntegralUIListBox;

    // An array that holds all options in the comboo box
    public comboItems: Array<any>;
    
    // An array that holds a flat list of tree hierarchy
    private flatData: Array<any>;
    
    // An object that holds all items in the TreeView
    public treeItems: Array<any>;

    // An array that holds a list of all selected items
    public selItems: Array<any>;

    // Current selection mode is set to single selection
    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.One;

    public comboStyle: any = {
        general: {
            normal: 'trw-cmb-mst'
        }
    }

    public treeStyle: any = {
        general: {
            normal: 'trw-mst-normal'
        }
    }

    public listStyle: any = {
        general: {
            normal: 'trw-mst-list'
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

        // At first there are no selected items
        this.selItems = [];
    }

    ngAfterViewInit(){
        this.treeview.loadData(this.flatData);
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
    } 

    onSelectionChanged(e: any){
        // Get the list of currently selected items and display it in the TreeView on the right
        let list: Array<any> = this.treeview.getList('selected');

        this.selItems.length = 0;
        for (let i = 0; i < list.length; i++)
            this.selItems.push({ text: list[i].text });

        this.listbox.updateLayout();
    }
}
