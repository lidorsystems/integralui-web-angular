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
import { IntegralUIContextMenu } from '../../integralui/directives/integralui.contextmenu';

@Component({
    selector: '',
    template: `
        <style>
            .cmnu-mlev-block
            {
                background: white;
                border: thin solid gray;
                width: 800px;
                height: 300px;
            }
            .cmnu-mlev-block span
            {
                color: #808080;
                cursor: default;
                display: block;
                margin: 140px auto;
                text-align: center;
            }
            .cmnu-mlev-icons-medium
            {
                background: url(app/resources/icons-x24.png) no-repeat 0 0;
                display: inline-block;
                overflow: hidden;
                padding: 0;
                margin: 0 7px 0 1px;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .facebook
            {
                background-position: -216px 0;
            }
            .google-plus
            {
                background-position: -216px -48px;
            }
            .new-document
            {
                background-position: 0 -96px;
            }
            .people
            {
                background-position: -120px -72px;
            }
            .print
            {
                background-position: -96px -96px;
            }
            .solution
            {
                background-position: 0 -24px;
            }
            .save
            {
                background-position: -72px -96px;
            }
            .twitter
            {
                background-position: -216px -24px;
            }
        </style>
        <h2 class="feature-title">ContextMenu / Multi Level</h2>
        <div class="feature-content">
            <div #application class="cmnu-mlev-block" [iuiContextMenu]="menuSettings" (menuClick)="menuItemClick($event)">
                <span>Right click to open a Multi-Level ContextMenu</span>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span>This example demonstrates a multi-level ContextMenu.</p>
                <p><span class="initial-space"></span>To add menu items in multiple levels is simple, just add an array of sub items to each menu item. When mouse cursor hovers over a menu item that has children, a new block of menu options will appear on right.</p>
                <p><span class="initial-space"></span>There is no limit on number of levels. To simplify, this example only shows two levels.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>contextmenu/contextmenu-multi-level.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ContextMenuMultiLevelSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;

    public menuSettings: any = {
        appRef: null,
        items: []
    }

    constructor(){}   

    ngAfterViewInit(){
        this.menuSettings = {
            appRef: this.applicationRef,
            items: [
                { 
                    id: 2,
                    text: "New",
                    icon: "cmnu-mlev-icons-medium new-document",
                    items: [
                        { id: 21, pid: 1, text: "Project", icon: "cmnu-mlev-icons-medium solution" },
                        { id: 22, pid: 1, text: "Window", icon: "cmnu-mlev-icons-medium" }
                    ]
                },
                { id: 3, text: "Open", icon: "cmnu-mlev-icons-medium" },
                { id: 4, text: "Save As...", icon: "cmnu-mlev-icons-medium save" },
                { id: 5, text: "Save All", icon: "cmnu-mlev-icons-medium" },
                { id: 6, type: "separator" },
                { 
                    id: 7, 
                    text: "Social", 
                    icon: "cmnu-mlev-icons-medium people",
                    items: [
                        { id: 71, pid: 1, text: "Facebook", icon: "cmnu-mlev-icons-medium facebook" },
                        { id: 72, pid: 1, text: "Google Plus", icon: "cmnu-mlev-icons-medium google-plus" },
                        { id: 73, pid: 1, text: "Twitter", icon: "cmnu-mlev-icons-medium twitter" }
                    ]
                },
                { id: 8, text: "Favorites", icon: "cmnu-mlev-icons-medium" },
                { id: 9, type: "separator" },
                { id: 10, text: "Page Setup", icon: "cmnu-mlev-icons-medium" },
                { id: 11, text: "Print", icon: "cmnu-mlev-icons-medium print" }
            ]
        }
    }

    menuItemClick(e: any){
        if (e.item)
            alert(e.item.text + " is clicked!");
    }
}
