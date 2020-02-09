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

@Component({
    selector: '',
    template: `
        <style>
            .menu-tpl-style
            {
                width: 700px;
            }
            .menu-tpl-style .iui-menuitem-root
            {
                margin-right: 10px !important;
                width: 55px;
            }
            .menu-tpl-style .iui-menuitem
            {
                width: 225px;
            }
            .menu-tpl-icons-medium
            {
                background: url(app/resources/icons-x24.png) no-repeat 0 0;
                display: inline-block;
                overflow: hidden;
                padding: 0;
                margin: 0 3px 0 0;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .empty-doc
            {
                background-position: -24px -48px;
            }
            .new-document
            {
                background-position: 0 -96px;
            }
            .delete-document
            {
                background-position: -24px -96px;
            }
            .copy
            {
                background-position: -48px -96px;
            }
            .save
            {
                background-position: -72px -96px;
            }
            .print
            {
                background-position: -96px -96px;
            }
            .menu-tpl-zoom-in
            {
                background-position: -144px -96px;
            }
            .menu-tpl-zoom-out
            {
                background-position: -168px -96px;
            }

            /* Edit Menu Item */
            .menu-tpl-item-edit
            {
                display: block;
                margin: 0;
                padding: 0;
                white-space: nowrap;
            }
            .menu-tpl-item-edit button
            {
                background: transparent;
                border: 0;
                border-left: thin solid #cecece;
                height: 26px;
                margin-right: -4px !important;
                padding: 3px 0;
                width: 33%;
            }
            .menu-tpl-item-edit button:hover
            {
                background: #cecece;
            }
            .menu-tpl-item-edit button:first-child
            {
                border-left: 0;
            }

            /* Zoom Menu Item */
            .menu-tpl-zoom-out
            {
                background-position: -24px -120px;
                margin: 0;
            }
            .menu-tpl-zoom-in
            {
                background-position: 0 -120px;
                margin: 0;
            }
            .menu-tpl-item-zoom
            {
                display: inline-block;
                float: right;
                margin: -1px 0 0 0;
            }
            .menu-tpl-item-zoom > div
            {
                border: thin solid transparent;
                display: inline-block;
            }
            .menu-tpl-item-zoom > div:hover
            {
                border: thin solid transparent;
                background: #cecece;
            }
            .menu-tpl-item-zoom > span
            {
                display: inline-block;
                margin: 0 5px;
            }
        </style>
        <h2 class="feature-title">Menu / Templates</h2>
        <div class="feature-content">
            <div #application style="margin-bottom:150px;">
                <iui-menu [appRef]="applicationRef" [controlStyle]="ctrlStyle" [items]="items" (itemClick)="menuItemClick($event)">
                    <ng-template let-item [iuiTemplate]="{ type: 'menu-item' }">
                        <span [ngSwitch]="item.id">
                            <span *ngSwitchCase="24"> <!-- EDIT MENU ITEM -->
                                <div class="menu-tpl-item-edit">
                                    <button (mousedown)="onEditButtonClicked($event, 0)">{{item.buttons[0].text}}</button>
                                    <button (mousedown)="onEditButtonClicked($event, 1)">{{item.buttons[1].text}}</button>
                                    <button (mousedown)="onEditButtonClicked($event, 2)">{{item.buttons[2].text}}</button>
                                </div>
                            </span>
                            <span *ngSwitchCase="33"> <!-- ZOOM MENU ITEM -->
                                <span [ngClass]="item.icon"></span> 
                                <span>{{item.text}}</span>
                                <div class="menu-tpl-item-zoom">
                                    <div><span [ngClass]="item.buttons[0].icon" (mousedown)="onZoomOut($event, item)"></span></div>
                                    <span>{{zoomValue}}</span>
                                    <div><span [ngClass]="item.buttons[1].icon" (mousedown)="onZoomIn($event, item)"></span></div>
                                </div>
                            </span>
                            <span *ngSwitchDefault>
                                <span [ngClass]="item.icon"></span> 
                                <span>{{item.text}}</span>
                            </span>
                        </span>
                    </ng-template>
                </iui-menu>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>This example shows how to create menu items with custom content in Menu component.</p>
                <p><span class="initial-space"></span>For this purpose, you can use templates and based on menu item, add different HTML elements or other Angular components. In this case, the Menu has two custom menu items:</p>
                <ul>
                    <li><span style="color:#000080">Edit</span> - menu item has three buttons arranged inline for Cut, Copy and Paste operations.</li>
                    <li><span style="color:#000080">Zoom</span> - increases or decreases the zoom level</li>
                </ul>
                <p><span class="initial-space"></span>To simplify the example, when edit button is clicked, a popup message will appear stating the button that is clicked. You can replace this by adding real edit operations.</p>
                <p><span class="initial-space"></span>When you need to change a value while keeping the menu open, you need to call the <span style="color:#c60d0d">stopPropagation</span> method from within fired event of the menu item element. If the menu item label is clicked, the menu will also close. For example, click on +/- buttons to change the zoom level, when finished, just click on the 'Zoom' label.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>menu/menu-templates.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class MenuTemplateSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;

    public items: Array<any>;
    public ctrlStyle: any = {
        general: {
            normal: 'menu-tpl-style'
        }
    }

    public zoomValue: number = 100;

    constructor(){}   

    ngAfterViewInit(){
        this.items = [
            { 
                id: 1, 
                text: "File", 
                icon: "",
                items: [
                    {
                        id: 11, 
                        pid: 1,
                        text: "New", 
                        icon: "menu-tpl-icons-medium new-document",
                        items: [
                            { id: 111, pid: 11, text: "Project", icon: "menu-tpl-icons-medium empty" },
                            { id: 112, pid: 11, text: "Window", icon: "menu-tpl-icons-medium empty" }
                        ]
                    },
                    { id: 12, pid: 1, text: "Open", icon: "menu-tpl-icons-medium empty" },
                    { id: 13, pid: 1, text: "Save As...", icon: "menu-tpl-icons-medium save" },
                    { id: 14, pid: 1, text: "Save All", icon: "menu-tpl-icons-medium empty" },
                    { id: 15, pid: 1, type: "separator" },
                    { id: 16, pid: 1, text: "Page Setup", icon: "menu-tpl-icons-medium empty" },
                    { id: 17, pid: 1, text: "Print", icon: "menu-tpl-icons-medium print" },
                    { id: 18, pid: 1, type: "separator" },
                    { id: 19, pid: 1, text: "Exit", icon: "menu-tpl-icons-medium empty" },
                ]

            },
            { 
                id: 2, 
                text: "Edit", 
                icon: "",
                items: [
                    { id: 21, pid: 2, text: "Undo", icon: "menu-tpl-icons-medium empty" },
                    { id: 22, pid: 2, text: "Redo", icon: "menu-tpl-icons-medium empty" },
                    { id: 23, pid: 2, type: "separator" },
                    { 
                        id: 24, pid: 2, text: "Edit", icon: "menu-tpl-icons-medium empty",
                        buttons: [
                            { text: 'Cut' },
                            { text: 'Copy' },
                            { text: 'Paste' }
                        ]
                    },
                    { id: 25, pid: 2, type: "separator" },
                    { id: 26, pid: 2, text: "Delete", icon: "menu-tpl-icons-medium delete-document" },
                ]
            },
            { 
                id: 3, 
                text: "View", 
                icon: "",
                items: [
                    { id: 31, pid: 3, text: "Print Layout", icon: "menu-tpl-icons-medium empty" },
                    { id: 32, pid: 3, type: "separator" },
                    { 
                        id: 33, pid: 3, text: "Zoom", icon: "menu-tpl-icons-medium empty", value: 100,
                        buttons: [
                            { icon: 'menu-tpl-icons-medium menu-tpl-zoom-out' },
                            { icon: 'menu-tpl-icons-medium menu-tpl-zoom-in' }
                        ]
                    },
                    { id: 34, pid: 3, type: "separator" },
                    { id: 35, pid: 3, text: "Restore", icon: "menu-tpl-icons-medium empty" },
                    { id: 36, pid: 3, text: "Full Screen", icon: "menu-tpl-icons-medium empty" },
                ]

            },
            { 
                id: 4, 
                text: "Help", 
                icon: "",
                items: [
                    { id: 41, pid: 4, text: "Search", icon: "menu-tpl-icons-medium empty" },
                    { id: 42, pid: 4, text: "Documents", icon: "menu-tpl-icons-medium empty" },
                    { id: 43, pid: 4, type: "separator" },
                    { id: 44, pid: 4, text: "About", icon: "menu-tpl-icons-medium empty" },
                ]
            }
        ];
    }

    menuItemClick(e: any){
        if (e.item.pid){
            if (e.item.id == 35) // Restore Menu Item
                this.zoomValue = 100;
            else
                alert("Menu item: " + e.item.text + " is clicked.");
        }
    }

     onEditButtonClicked(e: any, index: number){
        switch (index){
            case 0:
                alert("Cut button clicked!");
                break;
            case 1:
                alert("Copy button clicked!");
                break;
            case 2:
                alert("Paste button clicked!");
                break;
        }

        e.stopPropagation();
    }

     onZoomOut(e: any, item: any){
        if (e.which == 1)
            this.zoomValue = this.zoomValue > 10 ? this.zoomValue - 10 : 0;

        e.stopPropagation();
     }

     onZoomIn(e: any, item: any){
        if (e.which == 1)
            this.zoomValue += 10;

        e.stopPropagation();
     }
}
