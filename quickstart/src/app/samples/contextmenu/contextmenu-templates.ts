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
            .cmnu-tpl-app .iui-contextmenu
            {
                width: 225px !important;
            }
            .cmnu-tpl-app .iui-menuitem-root
            {
                padding-right: 0 !important;
            }
            .cmnu-tpl-block
            {
                background: white;
                border: thin solid gray;
                width: 800px;
                height: 300px;
            }
            .cmnu-tpl-block span
            {
                color: #808080;
                cursor: default;
                display: block;
                margin: 140px auto;
                text-align: center;
            }
            .cmnu-tpl-icons-medium
            {
                background: url(app/integralui/resources/icons-x24.png) no-repeat 0 0;
                display: inline-block;
                overflow: hidden;
                padding: 0;
                margin: 0 7px 0 1px;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .cmnu-tpl-font-decrease
            {
                background-position: -24px -120px;
                margin: 0;
            }
            .cmnu-tpl-font-increase
            {
                background-position: 0 -120px;
                margin: 0;
            }
            .check-mark
            {
                background-position: -192px -120px;
            }

            /* Font Menu Item */
            .cmnu-tpl-item-font
            {
                display: inline-block;
                float: right;
                margin: -4px 0 0 0;
            }
            .cmnu-tpl-item-font > div
            {
                border: thin solid transparent;
                display: inline-block;
            }
            .cmnu-tpl-item-font > div:hover
            {
                border: thin solid transparent;
                background: #cecece;
            }
            .cmnu-tpl-item-font > span
            {
                display: inline-block;
                margin: 0 5px;
            }

            /* Edit Menu Item */
            .cmnu-tpl-item-edit
            {
                display: block;
                margin: 0;
                padding: 0;
                white-space: nowrap;
            }
            .cmnu-tpl-item-edit button
            {
                background: transparent;
                border: 0;
                border-left: thin solid #cecece;
                height: 26px;
                margin-right: -4px !important;
                padding: 3px 0;
                width: 33%;
            }
            .cmnu-tpl-item-edit button:hover
            {
                background: #cecece;
            }
            .cmnu-tpl-item-edit button:first-child
            {
                border-left: 0;
            }
        </style>
        <h2 class="feature-title">ContextMenu / Templates</h2>
        <div class="feature-content">
            <div class="cmnu-tpl-app">
                <div #application class="cmnu-tpl-block" [iuiContextMenu]="menuSettings" (menuClick)="menuItemClick($event)" [ngStyle]="{ 'font-weight': fontWeight, 'font-style': fontStyle, 'font-size': fontSize + 'px', 'text-decoration': textDecoration }">
                    <ng-template let-item [iuiTemplate]="{ type: 'menu-item' }">
                        <span [ngSwitch]="item.id">
                            <span *ngSwitchCase="5"> <!-- FONT MENU ITEM -->
                                <span>{{item.text}}</span>
                                <div class="cmnu-tpl-item-font">
                                    <div><span [ngClass]="item.buttons[0].icon" (mousedown)="onFontDecrease($event, item)"></span></div>
                                    <span>{{item.value}}</span>
                                    <div><span [ngClass]="item.buttons[1].icon" (mousedown)="onFontIncrease($event, item)"></span></div>
                                </div>
                            </span>
                            <span *ngSwitchCase="7"> <!-- EDIT MENU ITEM -->
                                <div class="cmnu-tpl-item-edit">
                                    <button (mousedown)="onEditButtonClicked($event, 0)">{{item.buttons[0].text}}</button>
                                    <button (mousedown)="onEditButtonClicked($event, 1)">{{item.buttons[1].text}}</button>
                                    <button (mousedown)="onEditButtonClicked($event, 2)">{{item.buttons[2].text}}</button>
                                </div>
                            </span>
                            <span *ngSwitchDefault>
                                <span [ngClass]="item.icon"></span> 
                                <span>{{item.text}}</span>
                            </span>
                        </span>
                    </ng-template>
                    <span>Right click to open the context menu</span>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span>This example shows how to create menu items with custom content in ContextMenu directive.</p>
                <p><span class="initial-space"></span>For this purpose, you can use templates and based on menu item, add different HTML elements or other Angular components. In this case, the ContextMenu has two custom menu items:</p>
                <ul>
                    <li><span style="color:#000080">Font Size</span> - increase or decrease the font of the block element without closing the menu</li>
                    <li><span style="color:#000080">Edit</span> - menu item has three buttons arranged inline for Cut, Copy and Paste operations.</li>
                </ul>
                <p><span class="initial-space"></span>To simplify the example, when edit button is clicked, a popup message will appear stating the button that is clicked.</p>
                <p><span class="initial-space"></span>When you need to change a value while keeping the menu open, you need to set the <span style="color:#c60d0d">autoClose</span> field in menu settings to <strong>false</strong>. This makes sure the menu stays open during operation. If the menu item label is clicked, the menu will also close. For example, click on +/- buttons to change the font size, when finished, just click on the 'Font Size' label.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>contextmenu/contextmenu-templates.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ContextMenuTemplateSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public menuSettings: any = {
        appRef: null,
        items: []
    }

    public fontWeight: string = 'bold';
    public fontStyle: string = 'normal';
    public fontSize: number = 18;
    public textDecoration: string = 'none';

    constructor(){}   

    ngAfterViewInit(){
        this.menuSettings = {
            appRef: this.applicationRef,
            autoClose: false,
            items: [
                { id: 1, text: "Bold", icon: 'cmnu-tpl-icons-medium check-mark', checked: true },
                { id: 2, text: "Italic", icon: 'cmnu-tpl-icons-medium empty' },
                { id: 3, text: "Strikethrough", icon: 'cmnu-tpl-icons-medium empty' },
                { id: 4, type: "separator" },
                { 
                    id: 5, text: "Font Size", value: 18,
                    buttons: [
                        { icon: 'cmnu-tpl-icons-medium cmnu-tpl-font-decrease' },
                        { icon: 'cmnu-tpl-icons-medium cmnu-tpl-font-increase' }
                    ]
                },
                { id: 6, type: "separator" },
                { 
                    id: 7, text: "Edit",
                    buttons: [
                        { text: 'Cut' },
                        { text: 'Copy' },
                        { text: 'Paste' }
                    ]
                },
                { id: 8, type: "separator" },
                { id: 9, text: "Exit" }
            ]
        }
    }

    menuItemClick(e: any){
        if (e.item){
            if (e.item.id < 5)
                e.item.checked = e.item.checked != undefined ? !e.item.checked : true;
            else
                e.item.checked = true;

            switch (e.item.id){
                case 1: 
                    this.fontWeight = e.item.checked != false ? 'bold' : 'normal';
                    break;
                case 2: 
                    this.fontStyle = e.item.checked != false ? 'italic' : 'normal';
                    break;
                case 3: 
                    this.textDecoration = e.item.checked != false ? 'line-through' : 'none';
                    break;
            }

            if (e.item.id < 4)
                e.item.icon = e.item.checked != false ? 'cmnu-tpl-icons-medium check-mark' : 'cmnu-tpl-icons-medium empty';
        }
    }

     onFontDecrease(e: any, item: any){
        if (e.which == 1){
            item.value--;
            this.fontSize = item.value;
        }

        e.stopPropagation();
     }

     onFontIncrease(e: any, item: any){
        if (e.which == 1){
            item.value++;
            this.fontSize = item.value;
        }

        e.stopPropagation();
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
}
