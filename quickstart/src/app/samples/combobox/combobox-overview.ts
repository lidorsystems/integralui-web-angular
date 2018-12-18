/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '',
    template: `
        <style>
            .cmb-ovw-block
            {
                float: left;
                width: 200px;
            }
            .cmb-ovw-control-panel
            {
                float: left;
                margin-left: 75px;
                padding-left: 20px;
                width: 250px;
            }
            .cmb-ovw-control-panel span
            {
                display: inline-block;
                text-align: right;
                width: 180px;
            }
            .cmb-ovw-input-numeric
            {
                margin: 5px 0;
                width: 50px;
            }
        </style>
        <h2 class="feature-title">ComboBox / Overview</h2>
        <div class="feature-content">
            <div class="cmb-ovw-block">
                <iui-combobox #combobox
                    [items]="items"
                    [allowAnimation]="true"
                    [dropDownWidth]="comboOptions.dropDownWidth"
                    [dropDownHeight]="comboOptions.dropDownHeight"
                    [integralHeight]="comboOptions.integralHeight"
                    [maxDropDownItems]="comboOptions.maxDropDownItems"
                    [selectedIndex]="comboOptions.selectedIndex"
                    (selectedIndexChanged)="onSelectionChanged($event)">
                        <iui-item *ngFor="let item of items" [icon]="item.icon" [text]="item.text"></iui-item>
                </iui-combobox>
            </div>
            <div class="cmb-ovw-control-panel">
                <label><strong>ComboBox Properties:</strong> </label><br /><br />
                <label style="margin-left:80px"><input type="checkbox" [(ngModel)]="comboOptions.integralHeight" /> Integral Height</label><br /><br />
                <span>DropDown Width:</span> <input class="cmb-ovw-input-numeric" type="number" [(ngModel)]="comboOptions.dropDownWidth" min="0" />
                <span>DropDown Height:</span> <input class="cmb-ovw-input-numeric" type="number" [(ngModel)]="comboOptions.dropDownHeight" min="0" />
                <span>Max DropDown Items:</span> <input class="cmb-ovw-input-numeric" type="number" [(ngModel)]="comboOptions.maxDropDownItems" min="1" max="8" />
                <span>Selected Index:</span> <input class="cmb-ovw-input-numeric" type="number" [(ngModel)]="comboOptions.selectedIndex" min="0" max="7" />
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> ComboBox</strong> is a native Angular component that replaces the standard &lt;select&gt; HTML element. It has advanced features like options to set the maximum number of visible items in dropdown window, the width and height of dropdown window and choosing item that is currently selected in the combo box.</p>
                <p><span class="initial-space"></span>The demonstration above shows only the basic features available in ComboBox component. There are several items present in the combo box. Opening or closing of dropdown list is animated.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>combobox/combobox-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/combobox/combobox-component.aspx">Overview of IntegralUI ComboBox for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ComboBoxOverviewSample {
    public items: Array<any>;
    public comboOptions: any;

    constructor(){
        this.items = [
            { id: 1, icon: "library", text: "Books" },
            { id: 2, icon: "empty", text: "Computers" },
            { id: 3, icon: "empty", text: "Electronics" },
            { id: 4, icon: "album", text: "Music" },
            { id: 5, icon: "software", text: "Software" },
            { id: 6, icon: "sports", text: "Sports" },
            { id: 7, icon: "empty", text: "Video Games" },
            { id: 8, icon: "clock", text: "Watches" }
        ];

        this.comboOptions = {
            dropDownWidth: 250,
            dropDownHeight: 0,
            integralHeight: true,
            maxDropDownItems: 5,
            selectedIndex: 3
        }
    }  

    onSelectionChanged(e: any){
        this.comboOptions.selectedIndex = e.index;
    } 
}
