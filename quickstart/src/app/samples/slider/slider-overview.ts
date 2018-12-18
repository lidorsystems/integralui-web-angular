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
import { IntegralUIOrientation } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
           .sld-ovw
            {
                width: 300px;
                height: 20px;
            }
            .sld-ovw-slider-round
            {
                border-radius: 9px;
                width: 16px !important;
                height: 16px !important;
            }

            /* Vertical Orientation */
           .sld-ovw-vertical .sld-ovw
            {
                display: inline-block;
                width: 20px;
                height: 300px;
            }

            /* Control Panel */
            .sld-ovw-container
            {
                float: left;
                width: 200px;
            }
            .sld-ovw-control-panel
            {
                float: left;
                margin-left: 150px;
                padding-left: 20px;
                width: 250px;
            }
            .sld-ovw-input-numeric
            {
                margin: 5px 0;
                width: 50px;
            }
            .sld-ovw-block-space
            {
                height: 20px;
                margin: 0;
                padding: 0;
            }
            .sld-ovw-block-space-vertical
            {
                display: inline-block;
                width: 20px;
            }
        </style>
        <h2 class="feature-title">Slider / Overview</h2>
        <div class="feature-content">
            <div class="sld-ovw-container">
                <iui-slider
                    [allowAnimation]="true"
                    [controlStyle]="ctrlStyle" 
                    [(ngModel)]="ctrlValue" 
                    [orientation]="ctrlOrientation"
                    [ngClass]="{ 'sld-ovw-vertical': ctrlOrientation == 1 }"
                ></iui-slider>
                <p class="sld-ovw-block-space" [ngClass]="{ 'sld-ovw-block-space-vertical': ctrlOrientation == 1 }"></p>
                <iui-slider
                    [allowAnimation]="true"
                    [controlStyle]="ctrlStyleRound" 
                    [(ngModel)]="ctrlValue2" 
                    [orientation]="ctrlOrientation"
                    [ngClass]="{ 'sld-ovw-vertical': ctrlOrientation == 1 }"
                ></iui-slider>
            </div>
            <div class="sld-ovw-control-panel">
                <span>Orientation:</span><br/><br/>
                <label><input type="radio" [checked]="ctrlOrientation == 0" (click)="orientationClicked()" />Horizontal</label>
                <label><input type="radio" [checked]="ctrlOrientation == 1"  (click)="orientationClicked(true)" />Vertical</label><br/><br/>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Slider</strong> is a native Angular component that allows you to change a numeric value within a range of defined minimum and maximum values. This component supports <strong>ngModel</strong> directive and can be used within Angular Forms.</p>
                <p><span class="initial-space"></span>You can move the slider by dragging it or by clicking the mouse to either side. In addition, you can customize its appearance using different colors or shapes via CSS.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">min</span> - Specifies the minimum value</li>
                    <li><span style="color:#c60d0d">max</span> - Specifies the maximum value</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">orientation</span> - Determines whether the slider appears horizontally or vertically</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <li><span style="color:#c60d0d">value</span> - Holds the current slider value</li>
                    <br/>
                    <li><span style="color:#c60d0d">orientationChanged</span> - Occurs when orientation property changes</li>
                    <li><span style="color:#c60d0d">valueChanged</span> - Occurs when value property changes</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>slider/slider-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class SliderOverviewSample {

    public ctrlStyle: any = {
        general: { normal: 'sld-ovw' }
    }

    public ctrlStyleRound: any = {
        general: { normal: 'sld-ovw' },
        slider: { 
            button: { normal: 'sld-ovw-slider-round' }
        }
    }

    public ctrlValue: number = 30;
    public ctrlValue2: number = 75;

    public ctrlOrientation: IntegralUIOrientation = IntegralUIOrientation.Horizontal;

    orientationClicked(flag?: boolean){
        if (flag)
            this.ctrlOrientation = IntegralUIOrientation.Vertical;
        else
            this.ctrlOrientation = IntegralUIOrientation.Horizontal;
    }
}
