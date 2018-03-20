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
import { IntegralUIIncrementMode } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            /* RadioButton 2 */
            .rbtn2-ovw-btn-checked span
            {
                background-image: url(app/integralui/resources/radiobutton/radio-checked-1.png);
            }
            .rbtn2-ovw-btn-unchecked span
            {
                background-image: url(app/integralui/resources/radiobutton/radio-unchecked-1.png);
            }

            /* RadioButton 3 */
            .rbtn3-ovw-btn-checked span
            {
                background-image: url(app/integralui/resources/radiobutton/radio-checked-2.png);
            }
            .rbtn3-ovw-btn-unchecked span
            {
                background-image: url(app/integralui/resources/radiobutton/radio-unchecked-2.png);
            }
        </style>
        <h2 class="feature-title">RadioButton / Overview</h2>
        <div class="feature-content">
            <div class="rbtn-ovw-container">
                <iui-radio-group [(ngModel)]="groupVal">
                    <iui-radio-button [value]="'btn1'">Radio 1</iui-radio-button>
                    <iui-radio-button [value]="'btn2'">Radio 2</iui-radio-button>
                    <iui-radio-button [value]="'btn3'">Radio 3</iui-radio-button>
                </iui-radio-group><br/>
                <iui-radio-group [(ngModel)]="groupVal2">
                    <iui-radio-button [controlStyle]="ctrlStyle2" [value]="'btn4'">Radio 4</iui-radio-button>
                    <iui-radio-button [controlStyle]="ctrlStyle2" [value]="'btn5'">Radio 5</iui-radio-button>
                    <iui-radio-button [controlStyle]="ctrlStyle2" [value]="'btn6'">Radio 6</iui-radio-button>
                </iui-radio-group><br/>
                <iui-radio-group [(ngModel)]="groupVal3">
                    <iui-radio-button [controlStyle]="ctrlStyle3" [value]="'btn7'">Radio 7</iui-radio-button>
                    <iui-radio-button [controlStyle]="ctrlStyle3" [value]="'btn8'">Radio 8</iui-radio-button>
                    <iui-radio-button [controlStyle]="ctrlStyle3" [value]="'btn9'">Radio 9</iui-radio-button>
                </iui-radio-group><br/>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> RadioButton</strong> is a native Angular component that represents a radio button. It works in relation with <strong><span style="color:#c60d0d">IntegralUI</span> RadioGroup</strong> for creating different sets of radio buttons. The <strong>ngModel</strong> directive is supported and both components can be used within Angular Forms.</p>
                <p><span class="initial-space"></span>You can customize the appearance of radio buttons using different images via CSS.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">checked</span> - Specifies whether Radio Button is checked or not: true or false</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <li><span style="color:#c60d0d">value</span> - Holds the current radio button value</li>
                    <br/>
                    <li><span style="color:#c60d0d">checkedChanged</span> - Occurs when checked property changes</li>
                    <li><span style="color:#c60d0d">valueChanged</span> - Occurs when value property changes</li>
                </ul>
                <p><span class="initial-space"></span>In this example, there are three groups of radio buttons, where each group has different style for its buttons. You can change the button appearance via CSS. Whenever button is clicked within a group, the checked property of all buttons in the same group is updated so only one radio button is currently checked. By handling the valueChanged event from the RadioGroup component, you can see which button is currently checked.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>radiobutton/radiobutton-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class RadioButtonOverviewSample {

    public ctrlStyle2: any = {
        button: { 
            checked: 'rbtn2-ovw-btn-checked',
            unchecked: 'rbtn2-ovw-btn-unchecked'
        }
    }

    public ctrlStyle3: any = {
        button: { 
            checked: 'rbtn3-ovw-btn-checked',
            unchecked: 'rbtn3-ovw-btn-unchecked'
        }
    }

    groupVal: string;
    groupVal2: string;
    groupVal3: string;

    ngOnInit(){
        this.groupVal = 'btn2';
        this.groupVal2 = 'btn4';
        this.groupVal3 = 'btn9';
    }
}
