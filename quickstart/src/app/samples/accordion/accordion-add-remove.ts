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
            .empty-block
            {
                width: 400px;
            }
            .acc-ar-normal
            {
                float: left;
                width: 400px;
            }
            .acc-empty
            {
                border: thin solid #cecece;
                float: left;
                width: 400px;
                height: 250px;
            }
            .acc-ar-group-content
            {
                padding: 50px 0;
                border: thin solid #bbbbbb;
                border-top-color: transparent;
                text-align: center;
            }
            .iui-header-expand-box
            {
                top: 2px;
                right: 2px;
            }
            button
            {
                margin: 5px 0;
                width: 125px;
            }
            .inline-block
            {
                display: inline-block;
                margin: 3px 0;
            }
            .inline-button
            {
                width: 85px;
                margin-right: 3px
            }
        </style>
        <h2 class="feature-title">Accordion / Add Remove</h2>
        <div class="feature-content">
            <div *ngIf="data.length==50" class="empty-block"></div>
            <iui-accordion [groups]="data" [selectedGroup]="selGroup" (groupAdded)="onGroupAdded($event)" (groupRemoved)="onGroupRemoved($event)" (clear)="onClear()" [controlStyle]="ctrlStyle" #accordion>
               <iui-groupbox *ngFor="let group of data" text="{{group.text}}" icon="{{group.icon}}" [expandBoxType]="'arrow'" #groupbox>
                    <div class="acc-ar-group-content">Content of {{group.text}}</div>
                </iui-groupbox>
            </iui-accordion>
            <div class="control-panel" align="center" style="width:150px">
                <button (click)="add()">Add</button><br />
                <button (click)="insertAfter()" [disabled]="disableButtons">Insert After</button><br />
                <button (click)="insertBefore()" [disabled]="disableButtons">Insert Before</button><br />
                <div class="inline-block">
                   <button class="inline-button" (click)="insertAt()">Insert At</button><input [(ngModel)]="insertPos" type="number" min="0" max="100" style="width:35px" />
                </div>
                <button (click)="remove()" [disabled]="disableButtons">Remove</button><br />
                <div class="inline-block">
                    <button class="inline-button" (click)="removeAt()" [disabled]="disableButtons">Remove At</button><input [(ngModel)]="removePos" type="number" min="0" max="100" style="width:35px" /><br />
                </div>
                <button (click)="clear()" [disabled]="disableButtons">Clear</button>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px;">
                <p><span class="initial-space"></span>In this sample you can create and/or modify an Accordion using several different methods:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">addGroup</span> - adds a new group</li>
                    <li><span style="color:#c60d0d">insertGroupAfter</span> - inserts a new group after specified group (in this example the selected group)</li>
                    <li><span style="color:#c60d0d">insertGroupAt</span> - inserts a new group at specified position</li>
                    <li><span style="color:#c60d0d">insertGroupBefore</span> - inserts a new group before specified group (in this example the selected group)</li>
                    <li><span style="color:#c60d0d">removeGroup</span> - removes a group (in this sample the selected group)</li>
                    <li><span style="color:#c60d0d">removeGroupAt</span> - removes a group at specified position from parent collection</li>
                    <li><span style="color:#c60d0d">clearGroups</span> - removes all groups</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>accordion/accordion-add-remove.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AccordionAddRemoveSample {
    @ViewChild('accordion') accordion: IntegralUIAccordion;

    public data: Array<any>;
    public selGroup: any = null;

    public ctrlStyle: any = {
        general: {
            normal: 'acc-ar-normal'
        }
    }

    public disableButtons: boolean = false;
    public insertPos: number = 0;
    public removePos: number = 0;

    private groupCount: number = 3;

    constructor(){
        this.data = [
            { text: 'Group 1' },
            { text: 'Group 2' },
            { text: 'Group 3' }
        ];

        this.selGroup = this.data[0];
        this.groupCount = this.data.length;
    }   
                
    createNewGroup(){
        this.groupCount++;

        return { id: this.groupCount, text: "Group " + this.groupCount };
    }

    add(){
        let group: any = this.createNewGroup();

        this.accordion.addGroup(group);
        this.accordion.selectGroup(group);
    }

    insertAfter(){
        let group: any = this.createNewGroup();
        
        this.accordion.insertGroupAfter(group, this.accordion.selectedGroup);
        this.accordion.selectGroup(group);
    }

    insertBefore(){
        let group: any = this.createNewGroup();
        
        this.accordion.insertGroupBefore(group, this.accordion.selectedGroup);
        this.accordion.selectGroup(group);
    }

    insertAt(){
        let group: any = this.createNewGroup();
        
        this.accordion.insertGroupAt(group, this.insertPos);
        this.accordion.selectGroup(group);
    }

    remove(){
        if (this.accordion.selectedGroup)
            this.accordion.removeGroup(this.accordion.selectedGroup);
    }

    removeAt(){
        this.accordion.removeGroupAt(this.removePos);
    }

    clear(){
        this.accordion.clearGroups();
    }

    onGroupAdded(e: any){
        if (this.ctrlStyle.general.normal == 'acc-empty'){
            this.ctrlStyle.general.normal = 'acc-ar-normal';

            this.accordion.refresh();
        }

        this.disableButtons = false;
    }

    onGroupRemoved(e: any){
        if (this.data.indexOf(this.accordion.selectedGroup) < 0)
            this.accordion.selectedIndex = this.data.length-1;

        this.showEmptyAccordion();
    }

    onClear(){
        this.showEmptyAccordion();
    }

    showEmptyAccordion(){
        if (this.data.length == 0){
            this.ctrlStyle.general.normal = 'acc-empty';

            this.accordion.refresh();
            this.disableButtons = true;
        }
    }
}
