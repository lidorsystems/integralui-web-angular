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
            .menu-style
            {
                width: 700px;
            }
            .menu-style .iui-menuitem-root
            {
                margin-right: 10px !important;
                width: 55px;
            }
            .menu-style .iui-menuitem
            {
                width: 150px;
            }
            .icons-medium
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
            .zoom
            {
                background-position: -120px -96px;
            }
            .zoom-in
            {
                background-position: -144px -96px;
            }
            .zoom-out
            {
                background-position: -168px -96px;
            }
        </style>
        <h2 class="feature-title">Menu / Overview</h2>
        <div class="feature-content">
            <div #application style="margin-bottom:100px;">
                <iui-menu [appRef]="applicationRef" [controlStyle]="ctrlStyle" [items]="items" (menuClick)="menuItemClick($event)"></iui-menu>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Menu</strong> is a native Angular component that allows you to create static and dynamic menus. You can populate the menu directly in your HTML or using a custom data source, either locally or remotely.</p>
                <p><span class="initial-space"></span>In this example, we have a menu with four root menu items. Each menu has an icon, label and expand mark if there are child items. Whenever mouse cursor hovers over a menu item, an animation will start showing a window with child items. By clicking on menu item, a message box will appear, stating the menu item that was clicked.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>menu/menu-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/menu/menu-component.aspx">Overview of IntegralUI Menu for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class MenuOverviewSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;

    public items: Array<any>;
    public ctrlStyle: any = {
        general: {
            normal: 'menu-style'
        }
    }

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
                        icon: "icons-medium new-document",
                        items: [
                            { id: 111, pid: 11, text: "Project", icon: "icons-medium empty" },
                            { id: 112, pid: 11, text: "Window", icon: "icons-medium empty" }
                        ]
                    },
                    { id: 12, pid: 1, text: "Open", icon: "icons-medium empty" },
                    { id: 13, pid: 1, text: "Save As...", icon: "icons-medium save" },
                    { id: 14, pid: 1, text: "Save All", icon: "icons-medium empty" },
                    { id: 15, pid: 1, type: "separator" },
                    { id: 16, pid: 1, text: "Page Setup", icon: "icons-medium empty" },
                    { id: 17, pid: 1, text: "Print", icon: "icons-medium print" },
                    { id: 18, pid: 1, type: "separator" },
                    { id: 19, pid: 1, text: "Exit", icon: "icons-medium empty" },
                ]

            },
            { 
                id: 2, 
                text: "Edit", 
                icon: "",
                items: [
                    { id: 21, pid: 2, text: "Undo", icon: "icons-medium empty" },
                    { id: 22, pid: 2, text: "Redo", icon: "icons-medium empty" },
                    { id: 23, pid: 2, type: "separator" },
                    { id: 24, pid: 2, text: "Cut", icon: "icons-medium empty" },
                    { id: 25, pid: 2, text: "Copy", icon: "icons-medium copy" },
                    { id: 26, pid: 2, text: "Paste", icon: "icons-medium empty" },
                    { id: 27, pid: 2, text: "Delete", icon: "icons-medium delete-document" },
                ]
            },
            { 
                id: 3, 
                text: "View", 
                icon: "",
                items: [
                    { id: 31, pid: 3, text: "Print Layout", icon: "icons-medium empty" },
                    {
                        id: 32, 
                        pid: 3,
                        text: "Zoom", 
                        icon: "icons-medium zoom",
                        items: [
                            { id: 321, pid: 32, text: "Zoom In", icon: "icons-medium zoom-in" },
                            { id: 322, pid: 32, text: "Zoom Out", icon: "icons-medium zoom-out" },
                            { id: 323, pid: 32, type: "separator" },
                            { id: 324, pid: 32, text: "Restore", icon: "icons-medium empty" }
                        ]
                    },
                    { id: 33, pid: 3, type: "separator" },
                    { id: 34, pid: 3, text: "Full Screen", icon: "icons-medium empty" },
                ]

            },
            { 
                id: 4, 
                text: "Help", 
                icon: "",
                items: [
                    { id: 41, pid: 4, text: "Search", icon: "icons-medium empty" },
                    { id: 42, pid: 4, text: "Documents", icon: "icons-medium empty" },
                    { id: 43, pid: 4, type: "separator" },
                    { id: 44, pid: 4, text: "About", icon: "icons-medium empty" },
                ]
            }
        ];
    }

    menuItemClick(e: any){
        if (e.item.pid)
            alert("Menu item: " + e.item.text + " is clicked.");
    }
}
