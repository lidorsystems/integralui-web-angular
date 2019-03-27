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
            .ttp-ovw-panel
            {
                background: white;
                border: thin solid gray;
                display: inline-block;
                width: 400px;
                height: 250px;
                vertical-align: top;
            }
            .ttp-ovw-panel span
            {
                color: #808080;
                cursor: default;
                display: block;
                margin: 120px auto;
                text-align: center;
            }
            .ttp-ovw-feature-panel
            {
                display: inline-block;
                padding-left: 20px;
                width: 350px;
                vertical-align: top;
            }
            .ttp-ovw-feature-panel label
            {
                display: inline-block;
                text-align: center;
                width: 200px;
            }
            .ttp-ovw-feature-panel span
            {
                display: inline-block;
                margin-right: 5px;
                text-align: right;
                width: 120px;
            }
            .ttp-ovw-feature-panel input
            {
                margin: 7px 3px;
                width: 50px;
            }
            .ttp-ovw-feature-panel select
            {
                padding: 2px 0;
                width: 100px;
            }
        </style>
        <h2 class="feature-title">Tooltip / Overview</h2>
        <div class="feature-content">
            <div #application>
                <div class="ttp-ovw-panel" [iuiTooltip]="tooltipSettings">
                    <span>Move mouse cursor here to show a tooltip.</span>
                </div>
                <div class="ttp-ovw-feature-panel">
                    <label>Tooltip Properties: </label><br /><br />
                    <span>Enabled</span><input type="checkbox" [checked]="tooltipSettings.enabled" (click)="updateEnabled()" style="width:auto" /><br />
                    <span>Auto-Pop Delay</span><input type="number" [(ngModel)]="tooltipSettings.autoPopDelay" min="0" [disabled]="!tooltipSettings.enabled" /><br />
                    <span>Initial Delay</span><input type="number" [(ngModel)]="tooltipSettings.initialDelay" min="0" [disabled]="!tooltipSettings.enabled" /><br />
                    <span>Position</span> <select [(ngModel)]="tooltipSettings.position" [disabled]="!tooltipSettings.enabled"><option *ngFor="let obj of tooltipPositions" [value]="obj">{{obj}}</option></select><br />
                    <span>Show Marker</span><input type="checkbox" [checked]="tooltipSettings.showMarker" (click)="updateShowMarker()" style="width:auto" [disabled]="!tooltipSettings.enabled" /><br />
                    <span>Title</span><input type="text" [(ngModel)]="tooltipSettings.title" style="width:200px" [disabled]="!tooltipSettings.enabled" />
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Tooltip</strong> is a native Angular component that can be attached to any component or HTML element. It provides functionality that allows you to add a tooltip that will be displayed at specified position, with initial delay and will remain visible by specified amount of time.</p>
                <p><span class="initial-space"></span>In this example, there is a control panel where you can set different properties of Tooltip component. You can choose the initial delay before tooltip is shown, how long it will remain visible, position at which will appear and whether it is enabled or not.</p>
                <p><span class="initial-space"></span>The following properties are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">appRef</span> - holds a reference to application view</li>
                    <li><span style="color:#c60d0d">autoPopDelay</span> - specifies the time in milliseconds for Tooltip to remain visible</li>
                    <li><span style="color:#c60d0d">enabled</span> - determines whether the Tooltip is enabled or disabled</li>
                    <li><span style="color:#c60d0d">initialDelay</span> - specifies the time in milliseconds prior Tooltip is shown</li>
                    <li><span style="color:#c60d0d">position</span> - determines where the Tooltip will appear: above, below, left or right side of the target element or at mouse position</li>
                    <li><span style="color:#c60d0d">showMarker</span> - when true, an arrow marker will be displayed for the Tooltip window</li>
                    <li><span style="color:#c60d0d">title</span> - specifies the content of the Tooltip</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>tooltip/tooltip-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/tooltip/tooltip-component.aspx">Overview of IntegralUI Tooltip for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TooltipOverviewSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
                
    public tooltipPositions: any = [ 'mouse', 'above', 'below', 'left', 'right' ];

    public tooltipSettings: any = {
        appRef: null,
        autoPopDelay: 3000,
        enabled: true,
        initialDelay: 1000,
        position: 'mouse',
        showMarker: true,
        title: 'Tooltip Title'
    }

    constructor(){} 

    ngAfterViewInit(){
        this.tooltipSettings.appRef = this.applicationRef;
    }

    updateEnabled(){
        this.tooltipSettings.enabled = !this.tooltipSettings.enabled;
    }

    updateShowMarker(){
        this.tooltipSettings.showMarker = !this.tooltipSettings.showMarker;
    }
}

