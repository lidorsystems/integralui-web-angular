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
import { IntegralUINumericDisplayMode } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
           .num-ovw
            {
                width: 100px;
            }

            /* Control Panel */
            .num-ovw-container
            {
                float: left;
                width: 200px;
            }
            .num-ovw-control-panel
            {
                float: left;
                margin-left: 150px;
                padding-left: 20px;
                width: 250px;
            }
        </style>
        <h2 class="feature-title">NumericUpDown / Overview</h2>
        <div class="feature-content">
            <div class="num-ovw-container">
                <iui-numeric-updown
                    [controlStyle]="ctrlStyle" 
                    [(ngModel)]="ctrlValue" 
                    [displayMode]="ctrlDisplayMode"
                ></iui-numeric-updown>
            </div>
            <div class="num-ovw-control-panel">
                <span>Display Mode:</span>
                <iui-combobox [items]="comboDisplay" [integralHeight]="true" [selectedIndex]="0" (selectedIndexChanged)="onComboDisplaySelectionChanged($event)">
                    <iui-item *ngFor="let item of comboDisplay" [text]="item.text"></iui-item>
                </iui-combobox><br/>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> NumericUpDown</strong> is a native Angular component that displays a numeric value and allows you to change it within a range of defined minimum and maximum values. This component supports <strong>ngModel</strong> directive and can be used within Angular Forms.</p>
                <p><span class="initial-space"></span>The component appearance changes depending on current display mode: inBound, LeftRight and UpDown. In addition, you can customize the component appearance using different colors or shapes via CSS.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">accelerator</span> - Specifies the factor by which the value changes when up/down buttons are pressed, default is 0</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">min</span> - Specifies the minimum value</li>
                    <li><span style="color:#c60d0d">max</span> - Specifies the maximum value</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">displayMode</span> - Determines the layout of the component</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <li><span style="color:#c60d0d">step</span> - Specifies the number by which numeric value increases or decreases</li>
                    <li><span style="color:#c60d0d">value</span> - Holds the current numeric value</li>
                    <br/>
                    <li><span style="color:#c60d0d">displayModeChanged</span> - Occurs when displayMode property changes</li>
                    <li><span style="color:#c60d0d">valueChanged</span> - Occurs when value property changes</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>numeric-updown/numeric-updown-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class NumericUpDownOverviewSample {

    public ctrlStyle: any = {
        general: { normal: 'num-ovw' }
    }

    public ctrlDisplayMode: IntegralUINumericDisplayMode = IntegralUINumericDisplayMode.InBound;
    public ctrlValue: number = 30;

    // An array that holds all options in the comboo box for display options in NumericUpDown component
    public comboDisplay: Array<any>;

    constructor(){
        this.comboDisplay = [
          { text: "InBound" },
          { text: "LeftRight" },
          { text: "UpDown" }
        ];
    }
   
    onComboDisplaySelectionChanged(e: any){
        switch (e.index){
          case 1:
            this.ctrlDisplayMode = IntegralUINumericDisplayMode.LeftRight;
            break;

          case 2:
            this.ctrlDisplayMode = IntegralUINumericDisplayMode.UpDown;
            break;

          default:
            this.ctrlDisplayMode = IntegralUINumericDisplayMode.InBound;
            break;
        }
    } 
}
