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
import { IntegralUICheckState, IntegralUIDateFormat, IntegralUIIncrementMode, IntegralUIToolItemType, IntegralUIWeekDays } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            /* Toolbar */
            .tlbr-ovw
            {
                display: inline-block;
                margin: 10px 0;
            }

            .tlbr-ovw .iui-toolitem-dropdown-button {
                margin-top: 3px;
            }

            /* Buttons */
            .tlbr-ovw .iui-toolitem-button {
                background: transparent;
                border: 0;
                margin: 0;
                padding: 5px;
            }
            .tlbr-ovw .iui-toolitem-hovered .iui-toolitem-button {
                animation-name: tlbr-ovw-button-animate-enter;
            }
            @keyframes tlbr-ovw-button-animate-enter {
                0% { background: transparent; }
                100% { background: #e5e5e5; }
            }
            .tlbr-ovw .iui-toolitem-button-leave {
                animation-name: tlbr-ovw-button-animate-leave;
            }
            @keyframes tlbr-ovw-button-animate-leave {
                0% { background: #e5e5e5; }
                100% { background: transparent; }
            }
            .tlbr-ovw-tool-icons {
                background-image: url(app/resources/icons-x24.png);
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0 !important;
                margin: 0;
                width: 24px;
                height: 24px;
                vertical-align: top;
            }
            .new-file {
                background-position: 0 -96px;
            }
            .transfer {
                background-position: -48px -96px;
            }
            .save {
                background-position: -72px -96px;
            }
            .print {
                background-position: -96px -96px;
            }
            .notes {
                background-position: -192px -72px;
            }

            /* CheckBox */
            .tlbr-ovw-tool-checked span
            {
                background-image: url(app/resources/checkbox/checkbox-checked.png);
            }
            .tlbr-ovw-tool-indeterminate span
            {
                background-image: url(app/resources/checkbox/checkbox-indeterminate.png);
            }
            .tlbr-ovw-tool-unchecked span
            {
                background-image: url(app/resources/checkbox/checkbox-unchecked.png);
            }

            /* Slider */
            .tlbr-ovw-item-slider {
                width: 100px;
                height: 20px;
            }

            /* Rating */
            .tlbr-ovw-tool-rating {
                background: transparent;
                border: 0;
                height: 22px;
            }
            .tlbr-ovw-tool-rating-content {
                background-image: url(app/resources/rating/star-2-empty.png);
                height: 22px;
            }
            .tlbr-ovw-tool-rating-value {
                background-image: url(app/resources/rating/star-2-full.png);
                height: 22px;
            }
        </style>
        <h2 class="feature-title">Toolbar / Overview</h2>
        <div class="feature-content" #application>
            <iui-toolbar [appRef]="applicationRef" [controlStyle]="ctrlStyle">
                <iui-toolitem 
                    *ngFor="let item of toolbar" 
                    [data]="item" 
                    [type]="item.type" 
                    [settings]="item.settings" 
                    [size]="{ width: item.width || 0 }" 
                    (itemClick)="toolItemClicked($event)" 
                    (valueChanging)="itemValueWillChange($event)" 
                    (valueChanged)="itemValueChanged($event)"
                > 
                </iui-toolitem>
            </iui-toolbar>
            <iui-toolbar [appRef]="applicationRef" [controlStyle]="ctrlStyle">
                <iui-toolitem 
                    *ngFor="let item of toolbar2" 
                    [data]="item" 
                    [type]="item.type" 
                    [settings]="item.settings" 
                    [size]="{ width: item.width || 0 }" 
                    (itemClick)="toolItemClicked($event)" 
                    (valueChanging)="itemValueWillChange($event)" 
                    (valueChanged)="itemValueChanged($event)"
                > 
                </iui-toolitem>
            </iui-toolbar>
            <div class="feature-help" style="margin-top:50px;">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Toolbar</strong> is a native Angular component that displays a collection of different editor types in one line. Each editor is fully customizable via CSS. It allows you to quickly arrange multiple editors horizontally.</p>
                <p><span class="initial-space"></span>The following tool item types are available:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">Button</span> - button, represented by an icon and/or text</li>
                    <li><span style="color:#c60d0d">CheckBox</span> - checkbox, can have two or thee state values and label</li>
                    <li><span style="color:#c60d0d">Date</span> - date picker, supports standard date formatting</li>
                    <li><span style="color:#c60d0d">DropList</span> - dropdown list, displays a set of items in a dropdown window</li>
                    <li><span style="color:#c60d0d">Image</span> - displays a set of images</li>
                    <li><span style="color:#c60d0d">Label</span> - non-clickable text</li>
                    <li><span style="color:#c60d0d">ListScroller</span> - a horizontal scrollable list where only one item appears at time</li>
                    <li><span style="color:#c60d0d">Numeric</span> - a numeric up down component, can have min/max values set</li>
                    <li><span style="color:#c60d0d">Progress</span> - visual representation of process progress</li>
                    <li><span style="color:#c60d0d">Rating</span> - visual representation of rates</li>
                    <li><span style="color:#c60d0d">Separator</span> - used to separate tool items</li>
                    <li><span style="color:#c60d0d">Slider</span> - used to change numeric values within a range</li>
                    <li><span style="color:#c60d0d">TextBox</span> - standard text editor</li>
                </ul>
                <p><span class="initial-space"></span>In this example, there are two toolbars, with different set of tool items. Some of these editors have custom settings, which override the default behavior and appearance. The toolbar size is automatically adjusted, based on the tool items that it contains. Currently only horizontal toolbar is available.</p>
                <p><span class="initial-space"></span>Whenever an action takes place (editor changes its value or is clicked), a correspoinding event is fired which you can handle in your code.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>toolbar/toolbar-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ToolbarOverviewSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;

    public toolbar: Array<any>;
    public toolbar2: Array<any>;
    public toolbar3: Array<any>;

    public ctrlStyle: any = {
        general: { 
            normal: 'tlbr-ovw',
        }
    }

    constructor(){
        this.toolbar = [
            { id: 1, icon: 'tlbr-ovw-tool-icons new-file', type: IntegralUIToolItemType.Button },
            { id: 2, icon: 'tlbr-ovw-tool-icons transfer', type: IntegralUIToolItemType.Button },
            { id: 3, type: IntegralUIToolItemType.Separator },
            { id: 4, icon: 'tlbr-ovw-tool-icons save', type: IntegralUIToolItemType.Button },
            { id: 5, type: IntegralUIToolItemType.Progress, value: 25, width: 100 },
            { id: 6, type: IntegralUIToolItemType.Separator },
            { id: 7, icon: 'tlbr-ovw-tool-icons notes', type: IntegralUIToolItemType.Button },
            { id: 8, type: IntegralUIToolItemType.Label, text: "Settings" },
            { 
                id: 9, 
                type: IntegralUIToolItemType.DropList,
                settings: {
                    placeHolder: 'Print what ...',
                    items: [
                        { text: "Document ", value: 0 },
                        { text: "Document properties ", value: 1 },
                        { text: "Document showing markup ", value: 2 },
                        { text: "List of markup ", value: 3 },
                        { text: "Styles", value: 4 },
                        { text: "Building block entries", value: 5 },
                        { text: "Key assignments", value: 6 }
                    ]
                },
                width: 225
            },
            { id: 10, type: IntegralUIToolItemType.Label, text: "Copies" },
            { 
                id: 11, 
                type: IntegralUIToolItemType.Numeric, 
                settings: {
                    min: 1,
                    max: 25
                },
                value: 1
            },
            { id: 12, icon: 'tlbr-ovw-tool-icons print', type: IntegralUIToolItemType.Button }
        ];

        this.toolbar2 = [
            { id: 1, type: IntegralUIToolItemType.Label, text: "Name" },
            { id: 2, type: IntegralUIToolItemType.TextBox, text: "", width: 75 },
            { 
                id: 2, 
                type: IntegralUIToolItemType.CheckBox, 
                settings: {
                    threeState: true,
                    style: {
                        button: { 
                            checked: 'tlbr-ovw-tool-checked',
                            indeterminate: 'tlbr-ovw-tool-indeterminate',
                            unchecked: 'tlbr-ovw-tool-unchecked'
                        }
                    }
                },
                value: IntegralUICheckState.Checked
            },
            { id: 3, type: IntegralUIToolItemType.Separator },
            { id: 1, icon: "", text: "Button", type: IntegralUIToolItemType.Button },
            { 
                id: 11, 
                type: IntegralUIToolItemType.Slider, 
                settings: {
                    style: {
                        general: { normal: 'tlbr-ovw-item-slider' }
                    }
                },
                value: 33
            },
            { id: 3, type: IntegralUIToolItemType.Separator },
            { id: 1, type: IntegralUIToolItemType.Label, text: "Select Date" },
            { 
                id: 3, 
                type: IntegralUIToolItemType.Date,
                settings: {
                    calendarSize: { width: 250, height: 200 },
                    locales: 'en-GB',
                    firstDayOfWeek: IntegralUIWeekDays.Monday,
                    format: IntegralUIDateFormat.Custom,
                    formatOptions: {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }
                },
                value: new Date(),
                width: 125
            },
            { id: 6, type: IntegralUIToolItemType.Label, text: "Rate" },
            { 
                id: 10, 
                type: IntegralUIToolItemType.Rating, 
                settings: {
                    increment: IntegralUIIncrementMode.Partial,
                    stepSize: 22,
                    style: {
                        general: {
                            normal: 'tlbr-ovw-tool-rating'
                        },
                        content: {
                            normal: 'tlbr-ovw-tool-rating-content'
                        },
                        rating: {
                            normal: 'tlbr-ovw-tool-rating-value'
                        }
                    }
                },
                value: 3.5
            },
        ];
    }

    toolItemClicked(e: any){
        //console.log(e.data, " is clicked");
    }

    itemValueWillChange(e: any){
        //console.log(e.data.value, " value will change: " + e.value);
    }

    itemValueChanged(e: any){
        //console.log(e.data, " value has changed: " + e.value);
    }
}
