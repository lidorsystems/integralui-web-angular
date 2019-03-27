/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, HostListener, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '',
    template: `
        <style>
            .ppo-ovw-panel
            {
                background: white;
                border: thin solid gray;
                display: inline-block;
                width: 400px;
                height: 250px;
                vertical-align: top;
            }
            .ppo-ovw-panel span
            {
                color: #808080;
                cursor: default;
                display: block;
                margin: 120px auto;
                text-align: center;
            }
            .ppo-ovw-feature-panel
            {
                display: inline-block;
                padding-left: 20px;
                width: 350px;
                vertical-align: top;
            }
            .ppo-ovw-feature-panel label
            {
                display: inline-block;
                text-align: center;
                width: 200px;
            }
            .ppo-ovw-feature-panel span
            {
                display: inline-block;
                margin-right: 5px;
                text-align: right;
                width: 120px;
            }
            .ppo-ovw-feature-panel input
            {
                margin: 7px 3px;
                width: 50px;
            }
            .ppo-ovw-feature-panel select
            {
                padding: 2px 0;
                width: 100px;
            }
            .popover-content {
                background: #ffffee;
                color: #2424cc;
                font-style: italic;
                padding: 5px;
                width: 250px;
            }
            .popover-content button {
                display: inline-block;
                margin-top: 20px;
                padding: 3px;
                width: 50px;
            }

        </style>
        <h2 class="feature-title">PopOver / Overview</h2>
        <div class="feature-content">
            <div #application>
                <div class="ppo-ovw-panel" [iuiPopOver]="popoverSettings" [popOverShow]="isPopoverActive" (click)="toggle($event)" (popOverClosed)="onClose()">
                    <span>Touch or click the left mouse button here to show a popover.</span>
                    <ng-template let-obj [iuiTemplate]="{ type: 'popover' }">
                        <div class="popover-content">
                            <div>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.</div>
                            <button (click)="btnOk()">Ok</button>
                        </div>
                    </ng-template>
                </div>
                <div class="ppo-ovw-feature-panel">
                    <label>PopOver Properties: </label><br /><br />
                    <span>Enabled</span><input type="checkbox" [checked]="popoverSettings.enabled" (click)="updateEnabled()" style="width:auto" /><br />
                    <span>Auto-Pop Delay</span><input type="number" [(ngModel)]="popoverSettings.autoPopDelay" min="0" [disabled]="!popoverSettings.enabled" /><br />
                    <span>Initial Delay</span><input type="number" [(ngModel)]="popoverSettings.initialDelay" min="0" [disabled]="!popoverSettings.enabled" /><br />
                    <span>Position</span> <select [(ngModel)]="popoverSettings.position" [disabled]="!popoverSettings.enabled"><option *ngFor="let obj of popoverPositions" [value]="obj">{{obj}}</option></select><br />
                    <span>Show Marker</span><input type="checkbox" [checked]="popoverSettings.showMarker" (click)="updateShowMarker()" style="width:auto" [disabled]="!popoverSettings.enabled" /><br />
                    <span>Title</span><input type="text" [(ngModel)]="popoverSettings.title" style="width:200px" [disabled]="!popoverSettings.enabled" />
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> PopOver</strong> is a native Angular component that displays custom HTML content over specified element. It provides functionality that allows you to add a popover that will be displayed at specified position, with initial delay and how much time will remain active. This component is inherited from <a routerLink="/tooltip">Tooltip</a> component.</p>
                <p><span class="initial-space"></span>By clicking inside the element space, the PopOver will appear at position specfied in the control panel. The example uses a simple template that contais some text and Ok button, you can modify it and add any custom HTML elements or other Angular components in it.</p>
                <p><span class="initial-space"></span>In this example, there is a control panel where you can set different properties of PopOver component. You can choose the initial delay before popover is shown, how long it will remain visible, position at which will appear and whether it is enabled or not.</p>
                <p><span class="initial-space"></span>If activation is set to 'manual', the popup will remain active until it's closed by changing the popOverShow property to false. If popOverShow property is not specified, then the popover will appear on mouse enter.</p>
                <p><span class="initial-space"></span>The following properties are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">activation</span> - specifies whether the popup is activated manually or automatically</li>
                    <li><span style="color:#c60d0d">appRef</span> - holds a reference to application view</li>
                    <li><span style="color:#c60d0d">autoPopDelay</span> - specifies the time in milliseconds for PopOver to remain visible</li>
                    <li><span style="color:#c60d0d">closeButton</span> - determines whether the close button is visible in the header</li>
                    <li><span style="color:#c60d0d">enabled</span> - determines whether the PopOver is enabled or disabled</li>
                    <li><span style="color:#c60d0d">header</span> - determines whether the popover has a header</li>
                    <li><span style="color:#c60d0d">initialDelay</span> - specifies the time in milliseconds prior PopOver is shown</li>
                    <li><span style="color:#c60d0d">position</span> - determines where the PopOver will appear: above, below, left or right side of the target element or at mouse position</li>
                    <li><span style="color:#c60d0d">showMarker</span> - when true, an arrow marker will be displayed for the PopOver window</li>
                    <li><span style="color:#c60d0d">title</span> - a text displayed in the header</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>popover/popover-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class PopOverOverviewSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
                
    public popoverPositions: any = [ 'mouse', 'above', 'below', 'left', 'right' ];

    public popoverSettings: any = {
        activation: 'manual',
        appRef: null,
        autoPopDelay: 3000,
        closeButton: true,
        enabled: true,
        header: true,
        initialDelay: 100,
        position: 'right',
        showMarker: true,
        title: 'PopOver Title'
    }

    public isPopoverActive: boolean = false;

    constructor(){} 

    ngAfterViewInit(){
        this.popoverSettings.appRef = this.applicationRef;
    }

    updateEnabled(){
        this.popoverSettings.enabled = !this.popoverSettings.enabled;
    }

    updateShowMarker(){
        this.popoverSettings.showMarker = !this.popoverSettings.showMarker;
    }

    toggle(e: any){
        this.isPopoverActive = !this.isPopoverActive;
        e.stopPropagation();
    }

    @HostListener('click', ['$event']) onWindowClick(e: any){
        this.isPopoverActive = false;
    }

    btnOk(){
        this.isPopoverActive = false;

        alert("Ok button is clicked!");
    }

    onClose(){
        this.isPopoverActive = false;
    }
}

