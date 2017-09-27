/*
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseService } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .grbox-evt-normal
            {
                float: left;
                width: 400px;
            }
            .iui-header-expand-box
            {
                top: 2px;
                right: 2px;
            }
            .grbox-evt-group-content
            {
                padding: 100px 0;
                border: thin solid #bbbbbb;
                border-top-color: transparent;
                text-align: center;
            }
            .grbox-evt-control-panel
            {
                float: left;
                padding-left: 20px;
                width: 200px;
            }
            .panel
            {
                width: 300px;
                height: 100px;
            }
            .grbox-evt-event-block
            {
                width: 600px;
                height: 250px;
            }
            .grbox-evt-event-log
            {
                height: 214px;
            }
        </style>
        <div>
            <h2 class="feature-title">GroupBox / Events</h2>
            <div class="feature-content">
                <iui-groupbox [text]="groupObj.text" [data]="groupObj" [expandBoxType]="'plus-minus'" [controlStyle]="ctrlStyle"
                    (afterCollapse)="onAfterCollapse($event)"
                    (afterExpand)="onAfterExpand($event)"
                    (afterSelect)="onAfterSelect($event)"
                    (beforeCollapse)="onBeforeCollapse($event)"
                    (beforeExpand)="onBeforeExpand($event)"
                    (beforeSelect)="onBeforeSelect($event)"
                    (selectedChanged)="onSelectedChanged($event)"
                #groupbox>
                    <div class="grbox-evt-group-content">{{groupObj.text}} Content</div>
                </iui-groupbox>
                <div class="grbox-evt-control-panel">
                    <div class="event-block grbox-evt-event-block">
                        <button type="button" (click)="clearEventLog()" style="float:right;margin:3px 12px; width:50px">Clear</button>
                        <p style="margin:0 10px; padding: 3px; border-bottom: thin solid #c5c5c5">Event log:</p>
                        <ul class="event-log grbox-evt-event-log">
                            <li *ngFor="let ev of eventLog">
                                <span class="event-name">{{ev.name}}</span>{{ev.info}}
                            </li>
                        </ul>
                    </div>
                </div>
                <br style="clear:both;"/>
                <div class="feature-help" style="width:1000px;">
                    <p><span class="initial-space"></span>This sample presents all events that are fired from the GroupBox. Depending on action, a specific event is fired, which you can handle by creating an event handler.</p>
                    <p><span class="initial-space"></span>The following events are supported:</p>
                    <ul class="feature-points">
                        <li><span style="color:#c60d0d">afterCollapse</span> - Occurs after group is collapsed</li>
                        <li><span style="color:#c60d0d">afterExpand</span> - Occurs after group is expanded</li>
                        <li><span style="color:#c60d0d">afterSelect</span> - Occurs after group is selected</li>
                        <li><span style="color:#c60d0d">beforeCollapse</span> - Occurs before group is collapsed</li>
                        <li><span style="color:#c60d0d">beforeExpand</span> - Occurs before group is expanded</li>
                        <li><span style="color:#c60d0d">beforeSelect</span> - Occurs before group is selected</li>
                        <li><span style="color:#c60d0d">selectionChanged</span> - Occurs when selected property has changed</li>
                    </ul>
                    <p><span class="initial-space"></span>Depending on some conditions, when handling some of above events you can prevent the default action to proceed, by canceling the operation. Event data has a <span style="color:#0000ff">cancel</span> field, which when set to true will cancel the process.</p>
                    <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>groupbox/groupbox-events.ts</i>) file.</p> 
                </div>
            </div>
        </div>
    `,
    providers: [IntegralUIBaseService],
    encapsulation: ViewEncapsulation.None
})
export class GroupBoxEventsSample {
    public groupObj: any = { text: 'Group' }
    public eventLog: Array<any> = [];

    public ctrlStyle: any = {
        general: {
            normal: 'grbox-evt-normal'
        }
    }
                
    clearEventLog(){
        this.eventLog.length = 0;
    }

    // Events
    onAfterCollapse(e: any){
        this.eventLog.unshift({ name: "afterCollapse", info: " event was fired after group is collapsed." }); 
    }

    onAfterExpand(e: any){
        this.eventLog.unshift({ name: "afterExpand", info: " event was fired after group is expanded." }); 
    }

    onAfterSelect(e: any){
        this.eventLog.unshift({ name: "afterSelect", info: " event was fired after group is selected." }); 
    }

    onBeforeCollapse(e: any){
        this.eventLog.unshift({ name: "beforeCollapse", info: " event was fired before group is collapsed." }); 
    }

    onBeforeExpand(e: any){
        this.eventLog.unshift({ name: "beforeExpand", info: " event was fired before group is expanded." }); 
    }

    onBeforeSelect(e: any){
        this.eventLog.unshift({ name: "beforeSelect", info: " event was fired before group is selected." }); 
    }

    onSelectedChanged(e: any){
        this.eventLog.unshift({ name: "selectedChanged", info: " event was fired when selected property value has changed." }); 
    }
}
