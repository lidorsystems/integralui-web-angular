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
import { IntegralUIBaseService } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .iui-groupbox
            {
                width: 400px;
            }
            .iui-contextmenu
            {
                width: 200px;
            }
            .grbox-group-content
            {
                padding: 50px 0;
                border-top-color: transparent;
                text-align: center;
            }
            .iui-header-expand-box
            {
                top: 2px;
                right: 2px;
            }
            .icons-medium
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
        </style>
        <h2 class="feature-title">GroupBox / Context Menu</h2>
        <div class="feature-content" #application>
            <iui-groupbox [text]="'Header'" [expandBoxType]="'arrow'" [iuiContextMenu]="menuSettings" (itemClick)="menuItemClick($event)">
                <div class="grbox-group-content" [ngStyle]="{ 'font-weight': fontWeight, 'font-style': fontStyle, 'text-decoration': textDecoration }">Group Content</div>
            </iui-groupbox>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px;">
                <p><span class="initial-space"></span>An example on how to add a <a routerLink="../../contextmenu">Context Menu</a> to GroupBox component. The sample also shows how to edit the group title using a simple text editor.</p>
                <p><span class="initial-space"></span>By right-clicking over GroupBox space, a context menu will popup showing options for changing font styles of the group content.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>groupbox/groupbox-context-menu.ts</i>) file.</p> 
            </div>
        </div>
    `,
    providers: [IntegralUIBaseService],
    encapsulation: ViewEncapsulation.None
})
export class GroupBoxContextMenuSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public menuSettings: any = {
        appRef: null,
        items: []
    }

    public fontWeight: string = 'bold';
    public fontStyle: string = 'normal';
    public fontSize: string = '1';
    public textDecoration: string = 'none';

    ngAfterViewInit(){
        this.menuSettings = {
            appRef: this.applicationRef,
            items: [
                { id: 2, text: "Bold", icon: 'icons-medium check-mark', checked: true },
                { id: 3, text: "Italic", icon: 'icons-medium empty' },
                { id: 4, text: "Strikethrough", icon: 'icons-medium empty' },
            ]
        }
    }

    menuItemClick(e: any){
        if (e.item){
            e.item.checked = e.item.checked != undefined ? !e.item.checked : true;

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
            }

            e.item.icon = e.item.checked != false ? 'icons-medium check-mark' : 'icons-medium empty';
        }
    }
}
