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
import { IntegralUICheckState } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .btn-ovw
            {
                border-radius: 0;
                display: inline-block;
                padding: 10px;
                margin-right: -5px;
            }
            .btn2-ovw
            {
                border-top-left-radius: 7px;
                border-bottom-left-radius: 7px;
            }
            .btn3-ovw
            {
                border-top-right-radius: 7px;
                border-bottom-right-radius: 7px;
            }
            .btn-ovw-container
            {
                white-space: nowrap;
            }


            .btn-vertical
            {
                cursor: pointer;
                margin: 5px 0;
                padding: 10px;
                text-align: center;
                width: 75px;
            }
        </style>
        <h2 class="feature-title">Button / Overview</h2>
        <div class="feature-content">
            <div class="btn-ovw-container">
                <iui-button [allowAnimation]="true" [controlStyle]="ctrlStyle2" [pressed]="isButtonPressed[0]" (click)="onButtonClicked(0)">Button 1</iui-button>
                <iui-button [allowAnimation]="true" [controlStyle]="ctrlStyle" [pressed]="isButtonPressed[1]" (click)="onButtonClicked(1)">Button 2</iui-button>
                <iui-button [allowAnimation]="true" [controlStyle]="ctrlStyle3" [pressed]="isButtonPressed[2]" (click)="onButtonClicked(2)">Button 3</iui-button>
                <br/><br/>
                <iui-button [allowAnimation]="true" [controlStyle]="ctrlStyleVertical">Button 4</iui-button>
                <iui-button [allowAnimation]="true" [controlStyle]="ctrlStyleVertical">Button 5</iui-button>
                <iui-button [allowAnimation]="true" [controlStyle]="ctrlStyleVertical">Button 6</iui-button>
            </div>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Button</strong> is a native Angular component that represents a button. It is fully customizable via CSS.</p>
                <p><span class="initial-space"></span>In this example, there are buttons aligned close to each other to form a button group. Each button when clicked changes its <span style="color:#c60d0d">pressed</span> property value, to true or false.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">pressed</span> - Specifies whether Button is pressed or not: true or false</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <br/>
                    <li><span style="color:#c60d0d">pressedChanged</span> - Occurs when pressed property changes</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>button/button-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ButtonOverviewSample {

    public ctrlStyle: any = {
        general: { 
            normal: 'btn-ovw',
        }
    }

    public ctrlStyle2: any = {
        general: { 
            normal: 'btn-ovw btn2-ovw',
        }
    }

    public ctrlStyle3: any = {
        general: { 
            normal: 'btn-ovw btn3-ovw',
        }
    }

    public ctrlStyleVertical: any = {
        general: { 
            normal: 'btn-vertical',
        }
    }

    public isButtonPressed: Array<boolean> = [ false, false, false ];

    onButtonClicked(index: number){
        if (index >= 0 && index < this.isButtonPressed.length)
            this.isButtonPressed[index] = !this.isButtonPressed[index];
    }
}
