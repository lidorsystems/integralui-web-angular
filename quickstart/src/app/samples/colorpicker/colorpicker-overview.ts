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
import { IntegralUIColorFormat } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .clrpckr-ovw
            {
                width: 200px;
            }
        </style>
        <h2 class="feature-title">ColorPicker / Overview</h2>
        <div class="feature-content" #application>
            <iui-colorpicker [appRef]="applicationRef" [allowAnimation]="true" [controlStyle]="ctrlStyle" [colorFormat]="clrFormat" [selectedValue]="selColor"></iui-colorpicker>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> ColorPicker</strong> is a native Angular component that allows the user to select a color by using a drop-down panel with color palette and slider.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                    <li><span style="color:#c60d0d">appRef</span> - holds a reference to application view</li>
                    <li><span style="color:#c60d0d">colorFormat</span> - Determines the color format in use: RGB or HEX</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">selectedValue</span> - The color that is selected</li>
                    <li><span style="color:#c60d0d">size</span> - Specifies the component width and height in pixels.</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <br/>
                    <li><span style="color:#c60d0d">enabledChanged</span> - Occurs when enabled property changes</li>
                    <li><span style="color:#c60d0d">stateChanged</span> - Occurs when component state changes</li>
                    <li><span style="color:#c60d0d">valueChanged</span> - Occurs when selected value property changes</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>datepicker/colorpicker-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ColorPickerOverviewSample {
    @ViewChild('application', {read: ViewContainerRef, static: true}) applicationRef: ViewContainerRef;

    public clrFormat: IntegralUIColorFormat = IntegralUIColorFormat.HEX;
    public selColor: string = '#4899e5';

    public ctrlStyle: any = {
        general: { 
            normal: 'clrpckr-ovw',
        }
    }
}
