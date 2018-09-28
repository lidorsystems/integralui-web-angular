/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewEncapsulation, enableProdMode } from '@angular/core';
import { IntegralUIBaseService } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .grbox-tt-normal
            {
                width: 400px;
            }
            .grbox-tt-group-content
            {
                padding: 50px 0;
                border-top-color: transparent;
                text-align: center;
            }
            .grbox-tt-group-header
            {
                display: inline-block;
                padding: 3px 0;
            }
            .groupbox-header-expand-box
            {
                top: 2px;
                right: 2px;
            }
        </style>
        <h2 class="feature-title">GroupBox / Tooltip</h2>
        <div class="feature-content" #application>
           <iui-groupbox [expandBoxType]="'arrow'" [controlStyle]="ctrlStyle" #groupbox>
                <iui-group-header>
                    <div class="grbox-tt-group-header" [iuiTooltip]="tooltipSettings">
                        {{groupObj.text}}
                    </div>
                </iui-group-header>
                <div class="grbox-tt-group-content">{{groupObj.text}} Content</div>
            </iui-groupbox>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:600px">
                <p><span class="initial-space"></span>This sample shows GroupBox with a tooltip over its title.</p>
                <p><span class="initial-space"></span>Whenever a mouse cursor enters the group header title space, a tooltip will appear. To simplify this example, the default tooltip settings are used and only the tooltip text is set.</p>
                <p><span class="initial-space"></span>We are using the <a routerLink="../../tooltip">IntegralUI Tooltip</a> directive to apply a tooltip to the group. This directive accepts an object with all options that determines the appearance and behavior of the tooltip.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>groupbox/groupbox-tooltip.ts</i>) file.</p> 
            </div>
            <div class="home" style="width:600px"><a routerLink="">Back to Main</a></div>
        </div>
    `,
    providers: [IntegralUIBaseService],
    encapsulation: ViewEncapsulation.None
})
export class GroupBoxTooltipSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public groupObj: any = { text: 'Group' }

    public tooltipSettings: any = {
        appRef: null,
        title: 'Sample Tooltip'
    }

    public ctrlStyle: any = {
        general: {
            normal: 'grbox-tt-normal'
        }
    }

    ngAfterViewInit(){
        // Set the refernce component by which the position of tooltip is calculated
        // Usually, the appRef should point to the root component, to avoid position adjustment
        this.tooltipSettings.appRef = this.applicationRef;
    }
}
