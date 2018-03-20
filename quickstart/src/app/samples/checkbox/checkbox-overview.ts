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
import { IntegralUICheckState } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            /* CheckBox 2 */
            .chb2-ovw-btn-checked span
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-checked.png);
            }
            .chb2-ovw-btn-indeterminate span
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-indeterminate.png);
            }
            .chb2-ovw-btn-unchecked span
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-unchecked.png);
            }

            /* CheckBox 3 */
            .chb3-ovw-btn span
            {
                width: 39px;
                height: 14px;
            }
            .chb3-ovw-btn-checked span
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-checked-5.png);
            }
            .chb3-ovw-btn-unchecked span
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-unchecked-5.png);
            }

            /* CheckBox 4 */
            .chb4-ovw-btn-checked span
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-checked-4.png);
            }
            .chb4-ovw-btn-unchecked span
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-unchecked-4.png);
            }

            /* CheckBox 5 */
            .chb5-ovw-btn span
            {
                width: 32px;
                height: 14px;
            }
            .chb5-ovw-btn-checked span
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-checked-3.png);
            }
            .chb5-ovw-btn-unchecked span
            {
                background-image: url(app/integralui/resources/checkbox/checkbox-unchecked-3.png);
            }
        </style>
        <h2 class="feature-title">CheckBox / Overview</h2>
        <div class="feature-content">
            <div class="rtg-ovw-container">
                <iui-checkbox [threeState]="true" [(ngModel)]="checkValue">CheckBox 1</iui-checkbox><br/>
                <iui-checkbox [controlStyle]="ctrlStyle2" [threeState]="true" [(ngModel)]="checkValue2">CheckBox 2</iui-checkbox><br/>
                <iui-checkbox [controlStyle]="ctrlStyle3" [(ngModel)]="checkValue3">CheckBox 3</iui-checkbox><br/>
                <iui-checkbox [controlStyle]="ctrlStyle4" [(ngModel)]="checkValue4">CheckBox 4</iui-checkbox><br/>
                <iui-checkbox [controlStyle]="ctrlStyle5" [(ngModel)]="checkValue5">CheckBox 5</iui-checkbox>
            </div>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> CheckBox</strong> is a native Angular component that represents a check box. It is fully customizable via CSS, supports <strong>ngModel</strong> directive and can be used within Angular Forms.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">checked</span> - Specifies whether CheckBox is checked or not: true or false</li>
                    <li><span style="color:#c60d0d">checkState</span> - Specifies one of the three state values: unchecked, indeterminate or checked</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <li><span style="color:#c60d0d">threeState</span> - Determines whether the CheckBox uses three or two state values</li>
                    <li><span style="color:#c60d0d">value</span> - Holds the current checkbox value</li>
                    <br/>
                    <li><span style="color:#c60d0d">checkedChanged</span> - Occurs when checked property changes</li>
                    <li><span style="color:#c60d0d">checkStateChanged</span> - Occurs when checkState property changes</li>
                    <li><span style="color:#c60d0d">valueChanged</span> - Occurs when value property changes</li>
                </ul>
                <p><span class="initial-space"></span>In this example, the CheckBox component with stars uses Free increment mode, which allows smooth changes to the checkbox value (in decimals). As comparision, the CheckBox component with bricks uses Full increment mode, and the checkbox changes in integer values.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>checkbox/checkbox-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class CheckBoxOverviewSample {

    public ctrlStyle2: any = {
        button: { 
            checked: 'chb2-ovw-btn-checked',
            indeterminate: 'chb2-ovw-btn-indeterminate',
            unchecked: 'chb2-ovw-btn-unchecked'
        }
    }

    public ctrlStyle3: any = {
        button: {
            general: 'chb3-ovw-btn',
            checked: 'chb3-ovw-btn-checked',
            unchecked: 'chb3-ovw-btn-unchecked'
        }
    }

    public ctrlStyle4: any = {
        button: { 
            checked: 'chb4-ovw-btn-checked',
            unchecked: 'chb4-ovw-btn-unchecked'
        }
    }

    public ctrlStyle5: any = {
        button: { 
            general: 'chb5-ovw-btn',
            checked: 'chb5-ovw-btn-checked',
            unchecked: 'chb5-ovw-btn-unchecked'
        }
    }

    public checkValue: IntegralUICheckState = IntegralUICheckState.Checked;
    public checkValue2: IntegralUICheckState = IntegralUICheckState.Indeterminate;
    public checkValue3: boolean = true;
    public checkValue4: boolean = true;
    public checkValue5: boolean = true;
}
