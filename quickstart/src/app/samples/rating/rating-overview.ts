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
            /* Rating Showing Bricks */
            .rtg-ovw-content
            {
                background-image: url(app/integralui/resources/rating/brick-empty.png);
            }
            .rtg-ovw-value
            {
                background-image: url(app/integralui/resources/rating/brick-full.png);
            }
        </style>
        <h2 class="feature-title">Rating / Overview</h2>
        <div class="feature-content">
            <div class="rtg-ovw-container">
                <iui-rating
                    [(ngModel)]="ctrlValue"
                    [max]="5" 
                ></iui-rating>
                <br/>
                <iui-rating
                    [controlStyle]="ctrlStyle" 
                    [(ngModel)]="ctrlValue2" 
                    [increment]="brickIncrementMode"
                    [max]="20" 
                    [stepSize]="8"
                ></iui-rating>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Rating</strong> is a native Angular component that visualizes ratings. It supports <strong>ngModel</strong> directive and can be used within Angular Forms.</p>
                <p><span class="initial-space"></span>You can change the rating by dragging it or by clicking the mouse. In addition, you can customize its appearance using different images via CSS.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">increment</span> - Determines how the rating value changes: Free, Partial or Full</li>
                    <li><span style="color:#c60d0d">max</span> - Specifies the maximum value</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">stepSize</span> - Determines the width of one rating image in pixels</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <li><span style="color:#c60d0d">value</span> - Holds the current rating value</li>
                    <br/>
                    <li><span style="color:#c60d0d">valueChanged</span> - Occurs when value property changes</li>
                </ul>
                <p><span class="initial-space"></span>In this example, the Rating component with stars uses Free increment mode, which allows smooth changes to the rating value (in decimals). As comparision, the Rating component with bricks uses Full increment mode, and the rating changes in integer values.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>rating/rating-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class RatingOverviewSample {

    public ctrlStyle: any = {
        content: { normal: 'rtg-ovw-content' },
        rating: { normal: 'rtg-ovw-value' }
    }

    // Rating with stars
    public ctrlValue: number = 3.5;

    // Rating with bricks
    public ctrlValue2: number = 12;
    public brickIncrementMode: IntegralUIIncrementMode = IntegralUIIncrementMode.Full;
}
