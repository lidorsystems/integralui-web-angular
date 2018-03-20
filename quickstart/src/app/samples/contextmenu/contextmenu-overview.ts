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
import { IntegralUIContextMenu } from '../../integralui/directives/integralui.contextmenu';

@Component({
    selector: '',
    template: `
        <style>
            .cmnu-ovw-block
            {
                background: white;
                border: thin solid gray;
                width: 800px;
                height: 300px;
            }
            .cmnu-ovw-block span
            {
                color: #808080;
                cursor: default;
                display: block;
                margin: 140px auto;
                text-align: center;
            }
            .cmnu-icons-medium
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
            .check-mark
            {
                background-position: -192px -120px;
            }
            .radio-mark-empty
            {
                background-position: -192px -144px;
            }
            .radio-mark-filled
            {
                background-position: -216px -144px;
            }
        </style>
        <h2 class="feature-title">ContextMenu / Overview</h2>
        <div class="feature-content">
            <div #application class="cmnu-ovw-block" [iuiContextMenu]="menuSettings" (menuClick)="menuItemClick($event)" [ngStyle]="{ 'font-weight': fontWeight, 'font-style': fontStyle, 'font-size': fontSize + 'em', 'text-decoration': textDecoration }">
                <span>Right click to open the context menu</span>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> ContextMenu</strong> is a native Angular component that allows you to attach a custom context menu to any HTML element or Angular component. Whenever element is right-clicked, a context menu will popup showing data provided on your side.</p>
                <p><span class="initial-space"></span>In this example, whenever the block is right-clicked, a context menu will appear with options from where you can change the font style of the block content. These options are divided in two groups using a separator. Options in the first group have a checkbox, while in the second have a radio button. Depending on which option is active, the font style of the block content changes accordingly.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>contextmenu/contextmenu-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/contextmenu/contextmenu-component.aspx">Overview of IntegralUI ContextMenu for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ContextMenuOverviewSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public menuSettings: any = {
        appRef: null,
        items: []
    }

    public fontWeight: string = 'bold';
    public fontStyle: string = 'normal';
    public fontSize: string = '1';
    public textDecoration: string = 'none';

    constructor(){}   

    ngAfterViewInit(){
        this.menuSettings = {
            appRef: this.applicationRef,
            items: [
                //{ id: 1, text: "Font Menu", type: "header" },
                { id: 2, text: "Bold", icon: 'cmnu-icons-medium check-mark', checked: true },
                { id: 3, text: "Italic", icon: 'cmnu-icons-medium empty' },
                { id: 4, text: "Strikethrough", icon: 'cmnu-icons-medium empty' },
                { id: 5, type: "separator" },
                { id: 6, text: "x1", icon: 'cmnu-icons-medium radio-mark-filled' },
                { id: 7, text: "x1.5", icon: 'cmnu-icons-medium radio-mark-empty' },
                { id: 8, text: "x2", icon: 'cmnu-icons-medium radio-mark-empty' }
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
                case 2: 
                    this.fontWeight = e.item.checked != false ? 'bold' : 'normal';
                    break;
                case 3: 
                    this.fontStyle = e.item.checked != false ? 'italic' : 'normal';
                    break;
                case 4: 
                    this.textDecoration = e.item.checked != false ? 'line-through' : 'none';
                    break;
                case 6: 
                    this.fontSize = e.item.checked != false ? '1' : '1';
                    break;
                case 7: 
                    this.fontSize = e.item.checked != false ? '1.5' : '1';
                    break;
                case 8: 
                    this.fontSize = e.item.checked != false ? '2' : '1';
                    break;
            }

            if (e.item.id < 5)
                e.item.icon = e.item.checked != false ? 'cmnu-icons-medium check-mark' : 'cmnu-icons-medium empty';
            else {
                for (var i = 4; i < this.menuSettings.items.length; i++){
                    if (this.menuSettings.items[i] != e.item)
                        this.menuSettings.items[i].checked = false;

                   this.menuSettings.items[i].icon = this.menuSettings.items[i].checked != false ? 'cmnu-icons-medium radio-mark-filled' : 'cmnu-icons-medium radio-mark-empty';
                }
            }
        }
    }
}
