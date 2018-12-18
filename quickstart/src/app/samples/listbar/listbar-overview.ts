/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation, enableProdMode } from '@angular/core';
import { IntegralUIListBar } from '../../integralui/components/integralui.listbar';

enableProdMode();

@Component({
    selector: '',
    template: `
        <style>
            .lbar-ovw-normal
            {
                padding: 1px !important;
                width: 350px;
                height: 400px;
            }
            /* Item General */
            .lbar-ovw-item
            {
                margin: 1px;
                padding: 3px;
            }
            /* Item Hover State */
            .lbar-ovw-item-hovered
            {
                background-color: #f9f9f9;
                border: thin solid #f5f5f5;
            }
            /* Item Selected State */
            .lbar-ovw-item-selected
            {
                background-color: #efefef;
                border: thin solid #e5e5e5;
            } 
        </style>
        <h2 class="feature-title">ListBar / Overview</h2>
        <div class="feature-content">
            <div style="width:400px;height:400px;">
                <iui-listbar #listbar [groups]="groups" [selectedIndex]="selIndex" [controlStyle]="ctrlStyle" [mouseWheelSpeed]="1">
                   <iui-listgroup *ngFor="let group of groups" [text]="group.text" [items]="group.items" [expandBoxType]="'arrow'" [allowAnimation]="true">
                        <iui-item *ngFor="let item of group.items" [controlStyle]="itemStyle">
                            <span>{{item.text}}</span>
                        </iui-item>
                    </iui-listgroup>
                </iui-listbar>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> ListBar</strong> is a native Angular component that displays a list of expandable groups, in vertical layout. Each group contains a list of items created using custom HTML elements or Angular components. When the current view cannot display all groups in whole, scroll buttons will appear on each side that will allow you to navigate among groups.</p>
                <p><span class="initial-space"></span>Above demonstration shows several groups with different number of items. Each group can expand/collapse, but only one group can become selected. Whenever more groups are expanded and they overflow the current view, a set of scroll buttons will appear on top and bottom side. By pressing these buttons, you can scroll the current view and navigate among presented groups.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>listbar/listbar-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/listbar/listbar-component.aspx">Overview of IntegralUI ListBar for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ListBarOverviewSample {
    public groups: Array<any>;
    public selIndex: number = 1;

    public ctrlStyle: any = {
        general: {
            normal: 'lbar-ovw-normal'
        }
    }

    public itemStyle = {
        general: {
            normal: 'lbar-ovw-item',
            hovered: 'lbar-ovw-item-hovered',
            selected: 'lbar-ovw-item-selected'
        }
    } 

    constructor(){
        this.groups = [
            { 
                id: 1, 
                text: "Common Controls",
                expanded: false,
                items: [
                    { id: 11, pid: 1, text: "Button" },
                    { id: 12, pid: 1, text: "CheckBox" },
                    { id: 13, pid: 1, text: "ComboBox" },
                    { id: 14, pid: 1, text: "DateTime Picker" },
                    { id: 15, pid: 1, text: "Label" },
                    { id: 16, pid: 1, text: "ProgressBar" },
                    { id: 17, pid: 1, text: "TextBox" }
                ]
            },
            { 
                id: 2, 
                text: "Containers",
                items: [
                    { id: 21, pid: 2, text: "GroupBox" },
                    { id: 22, pid: 2, text: "Panel" },
                    { id: 23, pid: 2, text: "SplitContainer" },
                    { id: 24, pid: 2, text: "TabControl" }
                ]
            },
            { 
                id: 3, 
                text: "Menus & Toolbars",
                items: [
                    { id: 31, pid: 3, text: "ContextMenu" },
                    { id: 32, pid: 3, text: "Menu" },
                    { id: 33, pid: 3, text: "ToolStrip" }
                ]
            },
            { 
                id: 4, 
                text: "Data",
                expanded: false,
                items: [
                    { id: 41, pid: 4, text: "DataGrid" },
                    { id: 42, pid: 4, text: "DataSet" },
                    { id: 43, pid: 4, text: "ReportViewer" }
                ]
            },
            { 
                id: 5, 
                text: "Dialogs",
                expanded: false,
                items: [
                    { id: 51, pid: 5, text: "ColorDialog" },
                    { id: 52, pid: 5, text: "FontDialog" }
                ]
            },
            { 
                id: 6, 
                text: "Printing",
                expanded: false,
                items: [
                    { id: 61, pid: 6, text: "PrintDialog" },
                    { id: 62, pid: 6, text: "PrintDocument" }
                ]
            },
            { 
                id: 7, 
                text: "IntegralUI",
                items: [
                    { id: 71, pid: 7, text: "Accordion" },
                    { id: 72, pid: 7, text: "CheckBox" },
                    { id: 73, pid: 7, text: "ComboBox" },
                    { id: 74, pid: 7, text: "ContextMenu" },
                    { id: 77, pid: 7, text: "Grid" },
                    { id: 77, pid: 7, text: "ListView" },
                    { id: 75, pid: 7, text: "Menu" },
                    { id: 76, pid: 7, text: "SlideBar" },
                    { id: 77, pid: 7, text: "TabStrip" },
                    { id: 78, pid: 7, text: "TreeGrid" },
                    { id: 79, pid: 7, text: "TreeView" }
                ]
            }
        ];
    }  
}
