/*
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewEncapsulation, enableProdMode } from '@angular/core';
import { IntegralUIBaseService } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .grbox-ovw-normal
            {
                width: 290px;
            }
            .grbox-ovw-group-content
            {
                background: white;
                border: thin solid #dddddd;
                padding: 10px;
                border-top-color: transparent;
                font-family: Calibri, Tahoma, Arial, Helvetica, sans-serif;
            }
            .grbox-ovw-group-content span
            {
                display: inline-block;
                margin: 2px 5px 5px 2px;
                width: 80px;
                text-align: right;
            }
            .grbox-ovw-group-content button
            {
                background: #dddddd;
                border: thin solid #aaaaaa;
                margin: 10px 0 0 185px;
                padding: 5px;
                width: 75px;
            }
            .grbox-ovw-group-content button:hover
            {
                background: #e5e5e5;
            }
            .iui-groupbox-header-expand-box
            {
                top: 6px !important;
            }
        </style>
        <h2 class="feature-title">GroupBox / Overview</h2>
        <div class="feature-content">
           <iui-groupbox [text]="'Login'" [icon]="'user'" [expandBoxType]="'arrow'" [controlStyle]="ctrlStyle" #groupbox>
                <div class="grbox-ovw-group-content">
                    <span>User name:</span><input type="text" /><br/>
                    <span>Password:</span><input type="password" /><br/>
                    <button (click)="submitClicked()">Submit</button>
                </div>
            </iui-groupbox>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> GroupBox</strong> is a native Angular 2 component that represents a collapsible panel. It consists of a header and content panel. Header displays the group title and in content panel you can place any custom HTML elements or other Angular components.</p>
                <p><span class="initial-space"></span>The demonstration above is simple, there is a group box with icon and title and content panel that by default is hidden. Whenever the group header is clicked, the content panel will expand and become visible. In this example, the content panel contains labels, input elements and a button.</p>
                <p><span class="initial-space"></span>This component is also used as part of <a routerLink="/accordion">Accordion component</a></p> 
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>groupbox/groupbox-overview.ts</i> file), or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/groupbox/groupbox-component.aspx">Overview of IntegralUI GroupBox for Angular 2</a></p>
            </div>
        </div>
    `,
    providers: [IntegralUIBaseService],
    encapsulation: ViewEncapsulation.None
})
export class GroupBoxOverviewSample {
    public ctrlStyle: any = {
        general: {
            normal: 'grbox-ovw-normal'
        }
    }

    constructor(){
    }   

    submitClicked(){
        alert("Submit button was clicked.");
    }
}
