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
import { IntegralUIDirection, IntegralUIPlacement } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>

            /* Control Panel */
            .ddbtn-ovw-container
            {
                float: left;
                width: 200px;
            }
            .ddbtn-ovw-control-panel
            {
                float: left;
                margin-left: 150px;
                padding-left: 20px;
                width: 250px;
            }
        </style>
        <h2 class="feature-title">DropDownButton / Overview</h2>
        <div class="feature-content">
            <div class="ddbtn-ovw-container" #application>
                <iui-dropdown-button
                    [placement]="buttonPlacement"
                    [direction]="openDirection"
                    [settings]="dropDownSettings"
                    (itemClick)="onDropDownItemClicked($event)"
                > 
                    DropDown 1
                </iui-dropdown-button>
            </div>
            <div class="ddbtn-ovw-control-panel">
                <span>Button Placement:</span>
                <iui-combobox [items]="comboPlacement" [integralHeight]="true" [selectedIndex]="1" (selectedIndexChanged)="onComboPlacementSelectionChanged($event)">
                    <iui-item *ngFor="let item of comboPlacement" [text]="item.text"></iui-item>
                </iui-combobox><br/>
                <span>Open Direction:</span>
                <iui-combobox [items]="comboDirection" [integralHeight]="true" [selectedIndex]="3" (selectedIndexChanged)="onComboDirectionSelectionChanged($event)">
                    <iui-item *ngFor="let item of comboDirection" [text]="item.text"></iui-item>
                </iui-combobox>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> DropDownButton</strong> is a native Angular component that represents a button with option to show a dropdown list. Using different properties you can change the direction at which the dropdown list will open.</p>
                <p><span class="initial-space"></span>To modify the button content, you can add other HTML elements or Angular components. For example, the button label can also have an image before it. In addition, you can customize the appearance of dropdown button and list using different CSS styles.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">direction</span> - Specifies the direction at which the dropdown list will open</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">placement</span> - Determines whether the dropdown arrow is placed on left or right side</li>
                    <li><span style="color:#c60d0d">settings</span> - Specifies the appearance and behavior of the dropdown window</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <br/>
                    <li><span style="color:#c60d0d">dropDownClosed</span> - Occurs after the dropdown list closes</li>
                    <li><span style="color:#c60d0d">dropDownOpened</span> - Occurs after the dropdown list is opened</li>
                    <li><span style="color:#c60d0d">dropDownOpening</span> - Occurs before the dropdown list opens</li>
                    <li><span style="color:#c60d0d">itemClick</span> - Occurs when an item from dropdown list is clicked</li>
                </ul>
                <p><span class="initial-space"></span>The dropdown list is actually a <a routerLink="/contextmenu">Context Menu</a>, and with it you can create multi-level lists, like it is presented in this sample for 'Item 2'.</p>
                <p><span class="initial-space"></span>More information is available as part of the source code of this sample, located at (<i>dropdownbutton/dropdownbutton-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class DropDownButtonOverviewSample {
    @ViewChild('application', {read: ViewContainerRef, static: true}) applicationRef: ViewContainerRef;

    public dropDownSettings: any;
    public buttonPlacement: IntegralUIPlacement = IntegralUIPlacement.Right;
    public openDirection: IntegralUIDirection = IntegralUIDirection.Below;

    // Control Panel

    // An array that holds all options in the comboo box for dropdown button placement
    public comboPlacement: Array<any>;

    // Determines the direction at which the dropdown list will open
    public comboDirection: Array<any>;

    constructor(){
        this.comboPlacement = [
          { text: "Left" },
          { text: "Right" }
        ];

        this.comboDirection = [
          { text: "Above" },
          { text: "Left and Above" },
          { text: "Left and Below" },
          { text: "Below" },
          { text: "Right and Above" },
          { text: "Right and Below" }
        ];
    }

    ngAfterContentInit(){
        this.dropDownSettings = {
            adjustment: { top: -6 },
            appRef: this.applicationRef,
            items: [
                { id: 1, text: "Item 1" },
                { 
                    id: 2,
                    text: "Item 2",
                    items: [
                        { id: 21, pid: 2, text: "Item 21" },
                        { id: 22, pid: 2, text: "Item 22" }
                    ]
                },
                { id: 3, type: "separator" },
                { id: 4, text: "Item 3" }
            ]
        }
    }

    onDropDownItemClicked(e: any){
        if (e.item)
            alert(e.item.text + ' is clicked!');
    }

    // Control Panel ---------------------------------------------------------------------
   
    onComboPlacementSelectionChanged(e: any){
        switch (e.index){
          case 0:
            this.buttonPlacement = IntegralUIPlacement.Left;
            break;

          default:
            this.buttonPlacement = IntegralUIPlacement.Right;
            break;
        }
    } 
   
    onComboDirectionSelectionChanged(e: any){
        switch (e.index){
          case 0:
            this.openDirection = IntegralUIDirection.Above;
            break;

          case 1:
            this.openDirection = IntegralUIDirection.Left | IntegralUIDirection.Above;
            break;

          case 2:
            this.openDirection = IntegralUIDirection.Left | IntegralUIDirection.Below;
            break;

          case 4:
            this.openDirection = IntegralUIDirection.Right | IntegralUIDirection.Above;
            break;

          case 5:
            this.openDirection = IntegralUIDirection.Right | IntegralUIDirection.Below;
            break;

          default:
            this.openDirection = IntegralUIDirection.Below;
            break;
        }
    } 

}