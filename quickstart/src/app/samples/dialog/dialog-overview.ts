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
            .dlg-ovw-container
            {
                float: left;
                width: 200px;
            }
            .dlg-ovw-content
            {
                margin-top: 200px;
                text-align: center;
            }

            /* Control Panel */
            .dlg-ovw-control-panel
            {
                float: left;
                margin-left: 150px;
                padding-left: 20px;
                width: 250px;
            }
        </style>
        <h2 class="feature-title">Dialog / Overview</h2>
        <div class="feature-content">
            <div class="dlg-ovw-container">
                <button (click)="showDialog()">Show Dialog</button>
                <iui-dialog [closeButton]="showCloseButton" [visible]="isDialogVisible" (closed)="onDialogClosed()">
                    <div class="dlg-ovw-content">Add your content here</div>
                </iui-dialog><br/>
            </div>
            <div class="dlg-ovw-control-panel">
                <label><input class="prb-ovw-input-numeric" type="checkbox" [(ngModel)]="showCloseButton" /> Close Button</label> 
           </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Dialog</strong> is a native Angular component that displays a modal window. When dialog is visible, user interaction with all other elements on the page is suspended, except for the dialog content.</p>
                <p><span class="initial-space"></span>You can add custom content to the dialog consisting of HTML elements or other Angular components. If you click on the gray area outside of the dialog, the dialog will close firing events.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">closeButton</span> - Determines whether the close button inside the dialog is visible or not</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <li><span style="color:#c60d0d">visible</span> - Determines whether dialog is visible or hidden</li>
                    <br/>
                    <li><span style="color:#c60d0d">closed</span> - Occurs after dialog is closed</li>
                    <li><span style="color:#c60d0d">closing</span> - Occurs when dialog starts to close</li>
                    <li><span style="color:#c60d0d">opened</span> - Occurs after dialog is opened</li>
                    <li><span style="color:#c60d0d">opening</span> - Occurs when dialog starts to open</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>dialog/dialog-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class DialogOverviewSample {

    public isDialogVisible: boolean = false;
    public showCloseButton: boolean = true;

    constructor(){
    }

    showDialog(){
        this.isDialogVisible = true;

        //this.dialog.open();
    }

    onDialogClosed(){
        this.isDialogVisible = false;
    }
}
