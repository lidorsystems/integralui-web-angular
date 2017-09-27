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
import { IntegralUIAccordion } from '../../integralui/components/integralui.accordion';

@Component({
    selector: '',
    template: `
        <style>
            .acc-evt-normal
            {
                float: left;
                width: 400px;
            }
            .acc-empty
            {
                border: thin solid #cecece;
                float: left;
                width: 400px;
                height: 325px;
            }
            .acc-evt-group-content
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
            .acc-evt-control-panel
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
            .acc-evt-event-block
            {
                width: 600px;
                height: 332px;
            }
            .acc-evt-event-log
            {
                height: 296px;
            }
            .acc-evt-add-remove-btns
            {
            }
            .acc-evt-add-remove-btns button
            {
                margin: 5px 0;
                width: 75px;
            }
        </style>
        <div>
            <h2 class="feature-title">Accordion / Events</h2>
            <div class="feature-content">
                <div class="acc-evt-add-remove-btns">
                    <button (click)="add()">Add</button>
                    <button (click)="remove()" [disabled]="disableButtons">Remove</button>
                    <button (click)="clear()" [disabled]="disableButtons">Clear</button>
                </div>
                <div *ngIf="data.length==50" class="empty-block"></div>
                <iui-accordion [groups]="data" [controlStyle]="ctrlStyle"
                    (afterCollapse)="onAfterCollapse($event)"
                    (afterExpand)="onAfterExpand($event)"
                    (afterSelect)="onAfterSelect($event)"
                    (beforeCollapse)="onBeforeCollapse($event)"
                    (beforeExpand)="onBeforeExpand($event)"
                    (beforeSelect)="onBeforeSelect($event)"
                    (groupAdding)="onGroupAdding($event)"
                    (groupAdded)="onGroupAdded($event)"
                    (clear)="onClear($event)"
                    (groupRemoving)="onGroupRemoving($event)"
                    (groupRemoved)="onGroupRemoved($event)"
                    (selectionChanged)="onSelectionChanged($event)"
                 #accordion >
                   <iui-groupbox *ngFor="let group of data" text="{{group.text}}" [expandBoxType]="'plus-minus'" #groupbox>
                        <div class="acc-evt-group-content">Content of {{group.name}}</div>
                    </iui-groupbox>
                </iui-accordion>
                <div class="acc-evt-control-panel">
                    <div class="event-block acc-evt-event-block">
                        <button type="button" (click)="clearEventLog()" style="float:right;margin:3px 12px; width:50px">Clear</button>
                        <p style="margin:0 10px; padding: 3px; border-bottom: thin solid #c5c5c5">Event log:</p>
                        <ul class="event-log acc-evt-event-log">
                            <li *ngFor="let ev of eventLog">
                                <span class="event-name">{{ev.name}}</span>{{ev.info}}<span class="event-value">{{ev.value}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <br style="clear:both;"/>
                <div class="feature-help" style="width:1000px;">
                    <p><span class="initial-space"></span>This sample presents all events that are fired from the Accordion. Depending on action, a specific event is fired, which you can handle by creating an event handler.</p>
                    <p><span class="initial-space"></span>The following events are supported:</p>
                    <ul class="feature-points">
                        <li><span style="color:#c60d0d">afterCollapse</span> - Occurs after group is collapsed</li>
                        <li><span style="color:#c60d0d">afterExpand</span> - Occurs after group is expanded</li>
                        <li><span style="color:#c60d0d">afterSelect</span> - Occurs after group is selected</li>
                        <li><span style="color:#c60d0d">beforeCollapse</span> - Occurs before group is collapsed</li>
                        <li><span style="color:#c60d0d">beforeExpand</span> - Occurs before group is expanded</li>
                        <li><span style="color:#c60d0d">beforeSelect</span> - Occurs before group is selected</li>
                        <li><span style="color:#c60d0d">clear</span> - Occurs when all groups are removed</li>
                        <li><span style="color:#c60d0d">groupAdding</span> - Occurs before group is added</li>
                        <li><span style="color:#c60d0d">groupAdded</span> - Occurs after group is added</li>
                        <li><span style="color:#c60d0d">groupRemoving</span> - Occurs before group is removed</li>
                        <li><span style="color:#c60d0d">groupRemoved</span> - Occurs after group is removed</li>
                        <li><span style="color:#c60d0d">selectionChanged</span> - Occurs when selected group has changed</li>
                    </ul>
                    <p><span class="initial-space"></span>Depending on some conditions, when handling some of above events you can prevent the default action to proceed, by canceling the operation. Event data has a <span style="color:#0000ff">cancel</span> field, which when set to true will cancel the process.</p>
                    <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>accordion/accordion-events.ts</i>) file.</p> 
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AccordionEventsSample {
    @ViewChild('accordion') accordion: IntegralUIAccordion;

    public data: Array<any> = [];
    public eventLog: Array<any> = [];
    private groupCount: number = 3;

    public ctrlStyle: any = {
        general: {
            normal: 'acc-evt-normal'
        }
    }

    public disableButtons: boolean = false;

    constructor(){
        this.data = [
            { name: "Group 1", text: 'Header 1' },
            { name: "Group 2", text: 'Header 2' },
            { name: "Group 3", text: 'Header 3' }
        ];
    }  
                
    createNewGroup(){
        this.groupCount++;

        return { name: "Group " + this.groupCount, text: "Header " + this.groupCount };
    }

    add(){
        let group: any = this.createNewGroup();

        this.accordion.addGroup(group);
        this.accordion.selectGroup(group);
    }

    remove(){
        if (this.accordion.selectedGroup)
            this.accordion.removeGroup(this.accordion.selectedGroup);
    }

    clear(){
        this.accordion.clearGroups();
    }

    clearEventLog(){
        this.eventLog.length = 0;
    }

    showEmptyAccordion(){
        if (this.data.length == 0){
            this.ctrlStyle.general.normal = 'acc-empty';

            this.accordion.refresh();
            this.disableButtons = true;
        }
    }

    // Events
    onAfterCollapse(e: any){
        if (e.group)
            this.eventLog.unshift({ name: "afterCollapse", info: " event was fired after group is collapsed: ", value: e.group.name }); 
    }

    onAfterExpand(e: any){
        if (e.group)
            this.eventLog.unshift({ name: "afterExpand", info: " event was fired after group is expanded: ", value: e.group.name }); 
    }

    onAfterSelect(e: any){
        if (e.group)
            this.eventLog.unshift({ name: "afterSelect", info: " event was fired after group is selected: ", value: e.group.name }); 
    }

    onBeforeCollapse(e: any){
        if (e.group)
            this.eventLog.unshift({ name: "beforeCollapse", info: " event was fired before group is collapsed: ", value: e.group.name }); 
    }

    onBeforeExpand(e: any){
        if (e.group)
            this.eventLog.unshift({ name: "beforeExpand", info: " event was fired before group is expanded: ", value: e.group.name }); 
    }

    onBeforeSelect(e: any){
        if (e.group)
            this.eventLog.unshift({ name: "beforeSelect", info: " event was fired before group is selected: ", value: e.group.name }); 
    }

    onGroupAdding(e: any){
        this.eventLog.unshift({ name: "groupAdding", info: " event was fired before group is added: ", value: e.group.name }); 
    }

    onGroupAdded(e: any){
        this.eventLog.unshift({ name: "groupAdded", info: " event was fired after group is added: ", value: e.group.name }); 
        
        if (this.ctrlStyle.general.normal == 'acc-empty'){
            this.ctrlStyle.general.normal = 'acc-evt-normal';

            this.accordion.refresh();
        }

        this.disableButtons = false;
    }

    onClear(e: any){
        this.eventLog.unshift({ name: "clear", info: " event was fired when all groups are removed at once", value: '' }); 
        
        this.groupCount = 0;
        this.showEmptyAccordion();
    }

    onGroupRemoving(e: any){
        this.eventLog.unshift({ name: "groupRemoving", info: " event was fired before group is removed: ", value: e.group.name }); 
    }

    onGroupRemoved(e: any){
        this.eventLog.unshift({ name: "groupRemoved", info: " event was fired after group is removed: ", value: e.group.name }); 
        
        if (this.data.indexOf(this.accordion.selectedGroup) < 0)
            this.accordion.selectedIndex = this.data.length-1;

        this.groupCount--;
        this.showEmptyAccordion();
    }

    onSelectionChanged(e: any){
        this.eventLog.unshift({ name: "selectionChanged", info: " event was fired when selected group has changed: ", value: e.group.name }); 
    }
}
