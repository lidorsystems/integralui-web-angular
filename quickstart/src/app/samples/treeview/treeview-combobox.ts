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
import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';

@Component({
    selector: '',
    template: `
        <style>
            .trw-combo-normal
            {
                float: left;
                width: 450px;
                height: 400px;
            }
            .trw-combo-normal .iui-treeitem-expand-box
            {
                margin-top: 4px !important;
            }
            .trw-combo-item-label
            {
                display: inline-block;
                padding: 3px 0;
                vertical-align: top;
            }
            .trw-combo-item-value
            {
                text-decoration: underline;
            }
            .trw-combo-cmb
            {
                display: inline-block;
                margin: 0;
                vertical-align: top;
            }
            .trw-combo-cmb-header, .trw-combo-cmb-header-hovered
            {
                border: thin solid #cecece;
                padding: 0;
            }
            .trw-combo-cmb-header .iui-header-expand-box-arrow
            {
                margin: 2px;
            }
            .trw-combo-icons-medium
            {
                background-image: url(app/resources/icons-x24.png);
                background-position: 0 0;
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0 !important;
                margin: 0 1px 0 0;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .trw-combo-icon-empty
            {
                display: inline-block;
                padding: 0 !important;
                height: 24px;
                vertical-align: middle;
            }
            .trw-combo-icon-paper
            {
                background-position: -24px -48px;
            }
            .trw-combo-icon-graphics
            {
                background-position: -24px -72px;
            }
            .trw-combo-icon-tools
            {
                background-position: -96px -24px;
            }
            .trw-combo-icon-features
            {
                background-position: -96px -196px;
            }
            .trw-combo-num
            {
                display: inline-block;
                padding: 0;
                vertical-align: top;
                width: 50px;
            }
        </style>
        <h2 class="feature-title">TreeView / Items with ComboBox</h2>
        <div class="feature-content">
            <iui-treeview [items]="data" [controlStyle]="treeStyle" [virtualMode]="true" #treeview>
                <ng-template let-item>
                    <div (mousedown)="itemClicked($event, item)">
                        <span [ngClass]="getItemIcon(item)"></span>
                        <span class="trw-combo-item-label">{{item.text}}</span>
                        <span *ngIf="item!=activeItem" [ngSwitch]="item.id">
                            <span *ngSwitchCase="12">
                                <span class="trw-combo-item-value">
                                    {{item.value}} 
                                    <span *ngIf="item.value == 1">Copy</span>
                                    <span *ngIf="item.value > 1">Copies</span>
                                </span>
                            </span>
                            <span *ngSwitchDefault>
                                <span class="trw-combo-item-value" >{{item.value}}</span>
                            </span>
                        </span>
                        <span *ngIf="item==activeItem" [ngSwitch]="item.id">
                            <span *ngSwitchCase="12">
                                <iui-numeric-updown [controlStyle]="numUpDownStyle" [(ngModel)]="item.value"></iui-numeric-updown>
                            </span>
                            <span *ngSwitchDefault>
                                <iui-combobox [items]="item.combo" [controlStyle]="comboStyle" [allowAnimation]="true" [size]="{ width: item.comboWidth }" [maxDropDownItems]="5" [integralHeight]="true" [selectedItem]="getComboSelection(item)" (selectedItemChanged)="onComboSelectionChanged($event, item)" (dropDownClosed)="onComboClosed($event)">
                                    <iui-item *ngFor="let item of item.combo" [text]="item.text"></iui-item>
                                </iui-combobox>
                            </span>
                        </span>
                    </div>
                </ng-template>
            </iui-treeview>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In this example each TreeView item has a <a routerLink="../../combobox">ComboBox</a>, shown after its label.</p>
                <p><span class="initial-space"></span>The underlined label represents a value that can be changed. When item is clicked, an editor (in this case a ComboBox) replaces the label. By selecting different options from the combo list, you can change the item value. After value is changed, the combo box becomes hidden, and again the underlined label is shown.</p>
                <p><span class="initial-space"></span>All items have a combo box, except for the item labeled 'Copy Count' which uses a <a routerLink="../../numeric-updown">NumericUpDown</a> component as editor.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-combobox.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewComboBoxSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treeview', { static: false }) treeview: IntegralUITreeView;

    // An object that holds all items in the TreeView
    public data: Array<any>;

    public treeStyle: any = {
        general: {
            normal: 'trw-combo-normal'
        }
    }

    public comboStyle: any = {
        general: {
            normal: 'trw-combo-cmb'
        },
        header: {
            general: {
                normal: 'trw-combo-cmb-header',
                hovered: 'trw-combo-cmb-header-hovered'
            }
        }
    }

    public numUpDownStyle: any = {
        general: { normal: 'trw-combo-num' }
    }

    public activeItem: any = null;

    constructor(){
        this.data = [
            { 
                id: 1,
                text: "Paper/Output",
                icon: "trw-combo-icons-medium trw-combo-icon-paper",
                items: [
                    { 
                        id: 11, 
                        pid: 1, 
                        text: "Paper Size: ", 
                        value: "Letter",
                        combo: [
                            { text: "16K" },
                            { text: "A4" },
                            { text: "A5" },
                            { text: "A6" },
                            { text: "B5" },
                            { text: "Envelope #10" },
                            { text: "Envelope B5" },
                            { text: "Envelope C5" },
                            { text: "Envelope DL" },
                            { text: "Envelope Monarch" },
                            { text: "Executive" },
                            { text: "Folio" },
                            { text: "Legal" },
                            { text: "Letter" }
                        ],
                        comboWidth: 180
                    },
                    { id: 12, pid: 1, text: "Copy Count: ", value: 1, tag: "Copy" }
                ]
            },
            { 
                id: 2,
                text: "Graphics",
                expanded: false,
                icon: "trw-combo-icons-medium trw-combo-icon-graphics",
                items: [
                    { 
                        id: 21, 
                        pid: 2, 
                        text: "Print Quality: ", 
                        value: "600x600 dots per inch",
                        combo: [
                            { text: "600x600 dots per inch" },
                            { text: "300x300 dots per inch" }
                        ],
                        comboWidth: 200
                    },
                    { 
                        id: 22, 
                        pid: 2, 
                        text: "True Type Font: ", 
                        value: "Substitute with Device Font",
                        combo: [
                            { text: "Substitute with Device Font" },
                            { text: "Download as Soft Font" }
                        ],
                        comboWidth: 230
                    },
                ]
            },
            { 
                id: 3,
                text: "Documents Options",
                icon: "trw-combo-icons-medium trw-combo-icon-tools",
                items: [
                    { 
                        id: 31, 
                        pid: 3, 
                        text: "Advanced Printing Features: ", 
                        value: "Enabled",
                        combo: [
                            { text: "Enabled" },
                            { text: "Disabled" }
                        ],
                        comboWidth: 100
                    },
                    { 
                        id: 32, 
                        pid: 3, 
                        text: "Halftoning: ", 
                        value: "AutoSelect",
                        combo: [
                            { text: "AutoSelect" },
                            { text: "Dither 6x6" },
                            { text: "Dither 8x8" }
                        ],
                        comboWidth: 125
                    },
                    { 
                        id: 33, 
                        pid: 3, 
                        text: "Print Optimizations: ", 
                        value: "Enabled",
                        combo: [
                            { text: "Enabled" },
                            { text: "Disabled" }
                        ],
                        comboWidth: 100
                    },
                    { 
                        id: 34, 
                        pid: 3, 
                        text: "Printer Features: ", 
                        icon: "trw-combo-icons-medium trw-combo-icon-features",
                        items: [
                            { 
                                id: 341, 
                                pid: 34, 
                                text: "Optimize for: ", 
                                value: "Plain",
                                combo: [
                                    { text: "Bond" },
                                    { text: "Cardstock" },
                                    { text: "Envelope" },
                                    { text: "Heavy" },
                                    { text: "Labels" },
                                    { text: "Plain" },
                                    { text: "Rough" },
                                    { text: "Thin" },
                                    { text: "Transparency" }
                                ],
                                comboWidth: 150
                            },
                            { 
                                id: 342, 
                                pid: 34, 
                                text: "Economode: ", 
                                value: "Off",
                                combo: [
                                    { text: "Off" },
                                    { text: "On" }
                                ],
                                comboWidth: 60
                            }
                        ]
                    }
                ]
            }
         ];
    }

    getItemIcon(item: any){
        return item.icon ? item.icon : 'trw-combo-icons-medium trw-combo-icon-empty';
    }

    onComboSelectionChanged(e: any, item: any){
        if (e.item)
            item.value = e.item.text;
    } 

    onComboClosed(e: any){
        this.activeItem = null;
    }

    getComboSelection(item: any){
        let found: any = null;

        if (item.combo)
            for (let i = 0; i < item.combo.length; i++){
                if (item.combo[i].text == item.value){
                    found = item.combo[i];
                    break;
                }
            }

        return found;
    }

    itemClicked(e: any, item: any){
        if (item.items)
            this.activeItem = null;
        else
            this.activeItem = item;
    }
}
