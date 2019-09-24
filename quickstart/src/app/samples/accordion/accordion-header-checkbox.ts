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
            .acc-hcb-normal
            {
                float: left;
                width: 400px;
            }
            .acc-hcb-group-content
            {
                padding: 100px 0;
                border: thin solid #bbbbbb;
                border-top-color: transparent;
                text-align: center;
            }
            .iui-header-expand-box
            {
                top: 2px;
                right: 2px;
            }
            .acc-hcb-group-header
            {
                display: inline-block;
                padding: 3px 0;
            }
            .acc-hcb-group-header span
            {
                display: inline-block;
                margin-top: 1px;
                vertical-align: top;
            }
            .acc-checkbox
            {
                background: url("app/integralui/resources/checkbox/checkbox-checked-5.png");
                border: thin solid red;
                display: inline-block;
                margin: 2px 1px 0 2px;
                width: 16px;
                height: 16px;
                vertical-align: top;
            }
        </style>
        <div>
            <h2 class="feature-title">Accordion / Header with CheckBox</h2>
            <div class="feature-content">
                <iui-accordion [groups]="data" [controlStyle]="ctrlStyle" (beforeSelect)="onBeforeSelect($event)" [allowAnimation]="true" #accordion>
                   <iui-groupbox *ngFor="let group of data" [data]="group" [expandBoxType]="'plus-minus'" [allowAnimation]="true" #groupbox>
                        <iui-group-header>
                            <div class="acc-hcb-group-header">
                                <input class="acc-checkbox" type="checkbox" [(ngModel)]="group.checked" (mousedown)="onMouseDownCheckBox($event, group)" />
                                <span>{{group.text}}</span>
                            </div>
                        </iui-group-header>
                        <div class="acc-hcb-group-content">Content of {{group.name}}</div>
                    </iui-groupbox>
                </iui-accordion>
                <br style="clear:both;"/>
                <div class="feature-help" style="width:700px;">
                    <p><span class="initial-space"></span>A demonstration on how to lock specific group using a CheckBox in group header. When check box is checked, the group is locked, and cannot become selected. It will remain collapsed, unless it is already expanded.</p>
                    <p><span class="initial-space"></span>To prevent group from expanding, the <span style="color:#c60d0d">beforeSelect</span> events is handled. This event is fired just before the <span style="color:#c60d0d">beforeExpand</span> event and it is better for this case. If the group is checked, the cancel field (from event data) is set to false. This cancels any further actions for specified group.</p>
                    <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>accordion/accordion-header-checkbox.ts</i>) file.</p> 
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AccordionHeaderCheckBoxSample {
    @ViewChild('accordion', { static: false }) accordion: IntegralUIAccordion;

    public data: Array<any> = [];

    public ctrlStyle: any = {
        general: {
            normal: 'acc-hcb-normal'
        }
    }

    constructor(){
        this.data = [
            { name: "Group 1", text: 'Header 1', checked: false },
            { name: "Group 2", text: 'Header 2', checked: false },
            { name: "Group 3", text: 'Header 3', checked: false }
        ];
    }  

    onMouseDownCheckBox(e: any, group: any){
        if (!group.checked && group == this.accordion.selectedGroup){
            this.accordion.collapse(group);
            this.accordion.clearSelection();
        }

        e.stopPropagation();
    }

    onBeforeSelect(e: any){
        if (e.group && e.group.checked)
            e.cancel = true;
    }
}
