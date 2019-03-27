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
import { IntegralUIAccordion } from '../../integralui/components/integralui.accordion';

@Component({
    selector: '',
    template: `
        <style>
            .acc-ttp-normal
            {
                width: 400px;
            }
            .acc-ttp-group-content
            {
                padding: 50px 0;
                border: thin solid #bbbbbb;
                border-top-color: transparent;
                text-align: center;
            }
            .acc-ttp-group-header
            {
                display: inline-block;
                padding: 3px 0;
            }
            .iui-header-expand-box
            {
                top: 2px;
                right: 2px;
            }
        </style>
        <h2 class="feature-title">Accordion / Groups with Tooltip</h2>
        <div class="feature-content" #application>
            <iui-accordion [groups]="data" [controlStyle]="ctrlStyle" #accordion>
               <iui-groupbox *ngFor="let group of data" [expandBoxType]="'arrow'" #groupbox>
                    <iui-group-header>
                        <div class="acc-ttp-group-header" [iuiTooltip]="group.tooltip">
                            {{group.text}}
                        </div>
                    </iui-group-header>
                    <div class="acc-ttp-group-content">Content of {{group.text}}</div>
                </iui-groupbox>
            </iui-accordion>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px;">
                <p><span class="initial-space"></span>This sample shows Accordion groups with a tooltip over their title.</p>
                <p><span class="initial-space"></span>Whenever a mouse cursor enters the group header title space, a tooltip will appear. To simplify this example, the default tooltip settings are used and only the tooltip text is set.</p>
                <p><span class="initial-space"></span>We are using the <a routerLink="../../tooltip">IntegralUI Tooltip</a> directive to apply a tooltip to each group. This directive accepts an object with all options that determines the appearance and behavior of the tooltip.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>accordion/accordion-tooltip.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AccordionTooltipSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public data: Array<any>;

    public ctrlStyle: any = {
        general: {
            normal: 'acc-ttp-normal'
        }
    }

    constructor(){
        this.data = [
            { text: 'Group 1', tooltip: { title: 'Tooltip for Group 1' } },
            { text: 'Group 2', tooltip: { title: 'Tooltip for Group 2' } },
            { text: 'Group 3', tooltip: { title: 'Tooltip for Group 3' } }
        ];
    }   

    ngAfterViewInit(){
        // Set the refernce component by which the position of tooltip is calculated
        // Usually, the appRef should point to the root component, to avoid position adjustment
        for (let i = 0; i < this.data.length; i++)
            this.data[i].tooltip.appRef = this.applicationRef;
    }
}