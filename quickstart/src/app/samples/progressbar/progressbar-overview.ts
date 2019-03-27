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
import { IntegralUIOrientation } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .prb-ovw
            {
                background: #efefef;
                border: 0;
                border-radius: 15px;
                margin: 5px 0;
                padding: 0;
                width: 300px;
            }
            .prb-ovw-content
            {
                border-radius: 15px;
                height: 12px;
            }
            .prb-ovw-content-red
            {
                background: #c60d0d;
            }
            .prb-ovw-content-green
            {
                background: #009900;
            }
            .prb-ovw-content-blue
            {
                background: #000099;
            }

            .prb-ovw-block
            {
                margin: 5px 0;
                padding: 1px;
                width: 300px;
            }
            .prb-ovw-block-content
            {
                background-size: contain;
                border-radius: 0;
                height: 16px;
            }
            .prb-ovw-block-content-red
            {
                background: url('app/integralui/resources/progressbar/progress-block-red.png');
            }
            .prb-ovw-block-content-green
            {
                background: url('app/integralui/resources/progressbar/progress-block-green.png');
            }
            .prb-ovw-block-content-blue
            {
                background: url('app/integralui/resources/progressbar/progress-block-blue.png');
            }

            /* Vertical Orientation */
            .prb-ovw-vertical .prb-ovw
            {
                display: inline-block;
                height: 300px;
                margin: 0 3px;
                width: 12px;
            }
            .prb-ovw-vertical .prb-ovw-content
            {
                width: 12px;
            }

            .prb-ovw-block-vertical .prb-ovw-block
            {
                display: inline-block;
                height: 300px;
                margin: 0 3px;
                width: 16px;
            }
            .prb-ovw-block-vertical .prb-ovw-block-content
            {
                transform: rotate(180deg);
                width: 16px;
            }
            .prb-ovw-block-vertical .prb-ovw-block-content-red
            {
                background: url('app/integralui/resources/progressbar/progress-block-vertical-red.png');
            }
            .prb-ovw-block-vertical .prb-ovw-block-content-green
            {
                background: url('app/integralui/resources/progressbar/progress-block-vertical-green.png');
            }
            .prb-ovw-block-vertical .prb-ovw-block-content-blue
            {
                background: url('app/integralui/resources/progressbar/progress-block-vertical-blue.png');
            }

            /* Control Panel */
            .prb-ovw-container
            {
                float: left;
                width: 200px;
            }
            .prb-ovw-control-panel
            {
                float: left;
                margin-left: 150px;
                padding-left: 20px;
                width: 250px;
            }
            .prb-ovw-input-numeric
            {
                margin: 5px 0;
                width: 50px;
            }
            .prb-ovw-block-space
            {
                height: 20px;
                margin: 0;
                padding: 0;
            }
            .prb-ovw-block-space-vertical
            {
                display: inline-block;
                width: 20px;
            }
        </style>
        <h2 class="feature-title">ProgressBar / Overview</h2>
        <div class="feature-content">
            <div class="prb-ovw-container">
                <iui-progressbar
                    [allowAnimation]="true"
                    [controlStyle]="ctrlStyleRed" 
                    [value]="ctrlValue" 
                    [orientation]="ctrlOrientation" 
                    [ngClass]="{ 'prb-ovw-vertical': ctrlOrientation == 1 }"
                ></iui-progressbar>
                <iui-progressbar
                    [allowAnimation]="true"
                    [controlStyle]="ctrlStyleGreen" 
                    [value]="ctrlValue" 
                    [orientation]="ctrlOrientation" 
                    [ngClass]="{ 'prb-ovw-vertical': ctrlOrientation == 1 }"
                ></iui-progressbar>
                <iui-progressbar 
                    [allowAnimation]="true"
                    [controlStyle]="ctrlStyleBlue" 
                    [value]="ctrlValue" 
                    [orientation]="ctrlOrientation" 
                    [ngClass]="{ 'prb-ovw-vertical': ctrlOrientation == 1 }"
                ></iui-progressbar>
                <p class="prb-ovw-block-space" [ngClass]="{ 'prb-ovw-block-space-vertical': ctrlOrientation == 1 }"></p>
                <iui-progressbar
                    [allowAnimation]="true"
                    [controlStyle]="ctrlStyleBlockRed" 
                    [value]="ctrlValue" 
                    [orientation]="ctrlOrientation" 
                    [ngClass]="{ 'prb-ovw-block-vertical': ctrlOrientation == 1 }"
                ></iui-progressbar>
                <iui-progressbar
                    [allowAnimation]="true"
                    [controlStyle]="ctrlStyleBlockGreen"
                    [value]="ctrlValue" 
                    [orientation]="ctrlOrientation" 
                    [ngClass]="{ 'prb-ovw-block-vertical': ctrlOrientation == 1 }"
                ></iui-progressbar>
                <iui-progressbar 
                    [allowAnimation]="true"
                    [controlStyle]="ctrlStyleBlockBlue" 
                    [value]="ctrlValue" 
                    [orientation]="ctrlOrientation" 
                    [ngClass]="{ 'prb-ovw-block-vertical': ctrlOrientation == 1 }"
                ></iui-progressbar>
            </div>
            <div class="prb-ovw-control-panel">
                <span>Orientation:</span><br/><br/>
                <label><input type="radio" [checked]="ctrlOrientation == 0" (click)="orientationClicked()" />Horizontal</label>
                <label><input type="radio" [checked]="ctrlOrientation == 1"  (click)="orientationClicked(true)" />Vertical</label><br/><br/>
                <span>Progress value:</span> <input class="prb-ovw-input-numeric" type="number" [(ngModel)]="ctrlValue" min="0" max="100" />
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> ProgressBar</strong> is a native Angular component that visualize the progression of an operation. You can customize the progress indicator using different color or image via CSS.</p>
                <p><span class="initial-space"></span>You can also change orientation of the ProgressBar to: horizontal or vertical. The appearance of progresss value is based on different set of CSS styles, based on orientation.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">allowAnimation</span> - Determines whether changes to the progress value are animated or not</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">orientation</span> - Determines whether the progressbar appears horizontally or vertically</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <li><span style="color:#c60d0d">value</span> - Holds the current progress value</li>
                    <br/>
                    <li><span style="color:#c60d0d">orientationChanged</span> - Occurs when orientation property changes</li>
                    <li><span style="color:#c60d0d">valueChanged</span> - Occurs when value property changes</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>progressbar/progressbar-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ProgressBarOverviewSample {
    public ctrlStyleRed: any = {
        general: { normal: 'prb-ovw' },
        content: { normal: 'prb-ovw-content prb-ovw-content-red' }
    }

    public ctrlStyleGreen: any = {
        general: { normal: 'prb-ovw' },
        content: { normal: 'prb-ovw-content prb-ovw-content-green' }
    }

    public ctrlStyleBlue: any = {
        general: { normal: 'prb-ovw' },
        content: { normal: 'prb-ovw-content prb-ovw-content-blue' }
    }

    public ctrlStyleBlockRed: any = {
        general: { normal: 'prb-ovw-block' },
        content: { normal: 'prb-ovw-block-content prb-ovw-block-content-red' }
    }

    public ctrlStyleBlockGreen: any = {
        general: { normal: 'prb-ovw-block' },
        content: { normal: 'prb-ovw-block-content prb-ovw-block-content-green' }
    }

    public ctrlStyleBlockBlue: any = {
        general: { normal: 'prb-ovw-block' },
        content: { normal: 'prb-ovw-block-content prb-ovw-block-content-blue' }
    }

    public ctrlValue: number = 30;
    public ctrlOrientation: IntegralUIOrientation = IntegralUIOrientation.Horizontal;


    orientationClicked(flag?: boolean){
        if (flag)
            this.ctrlOrientation = IntegralUIOrientation.Vertical;
        else
            this.ctrlOrientation = IntegralUIOrientation.Horizontal;
    }
}
