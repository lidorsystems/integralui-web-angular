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
            .acc-ovw-normal
            {
                width: 400px;
            }
            .iui-contextmenu
            {
                width: 200px;
            }
            .acc-ovw-group-content
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
            .acc-ovw-group-header
            {
                display: inline-block;
                padding: 3px 0;
            }
        </style>
        <h2 class="feature-title">Accordion / Groups with Context Menu</h2>
        <div class="feature-content" #application>
            <iui-accordion [groups]="data" [selectedGroup]="selGroup" [controlStyle]="ctrlStyle" [iuiContextMenu]="menuSettings" (itemClick)="menuItemClick($event)" (afterExpand)="onAfterExpand($event)" #accordion>
                <iui-groupbox *ngFor="let group of data" [expandBoxType]="'arrow'">
                    <iui-group-header>
                        <div class="acc-ovw-group-header" (click)="showEditor(group)">
                            <span *ngIf="group!=editGroup">{{group.text}}</span>
                            <input *ngIf="group==editGroup" type="text" [(ngModel)]="group.text" (keydown)="editorKeyDown($event)" [iuiFocus]="editorFocused" (focus)="selectContent($event)" (blur)="editorLostFocus()" />
                        </div>
                    </iui-group-header>
                    <div class="acc-ovw-group-content">Content of {{group.text}}</div>
                </iui-groupbox>
            </iui-accordion>
            <div class="feature-help" style="width:800px;">
                <p><span class="initial-space"></span>An example on how to add a <a routerLink="../../contextmenu">Context Menu</a> to Accordion component. The sample also shows how to edit the group title using a simple text editor.</p>
                <p><span class="initial-space"></span>By right-clicking over Accordion, a context menu will popup showing options where to add a new group. When an option is selected, a group is created and placed at specified position. Then, a text editor appears where you can enter the group title.</p>
                <p style="margin:1em 2em"><strong>Note</strong> You can set up a different context menu to each group. In this sample, all groups share the same context menu.</p>
                <p><span class="initial-space"></span>When group title is clicked, a text editor will appear where you can enter a new title for the group.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>accordion/accordion-add-group-with-context-menu.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/accordion/accordion-add-group-with-context-menu.aspx">Add Group Dynamically with Context Menu in Angular Accordion</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AccordionAddGroupContextMenuSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('accordion') accordion: IntegralUIAccordion;

    public data: Array<any>;
    public selGroup: any = null;
    private isNewGroupAdded: boolean = false;

    private isEditActive: boolean = false;
    public editGroup: any = null;
    private originalText: string = '';
    public editorFocused: boolean = false; 

    public menuSettings: any = {
        appRef: null,
        items: []
    }

    public ctrlStyle: any = {
        general: {
            normal: 'acc-ovw-normal'
        }
    }

    constructor(){
        this.data = [
            { text: 'Group 1' },
            { text: 'Group 2' },
            { text: 'Group 3' }
        ];

        this.selGroup = this.data[0];
    }   

    ngAfterViewInit(){
        this.menuSettings = {
            appRef: this.applicationRef,
            items: [
                { id: 1, text: "Add Group" },
                { id: 2, text: "Insert Group Above" },
                { id: 3, text: "Insert Group Below" }
            ]
        }
    }

    menuItemClick(e: any){
        if (e.item){
            // Create a new group 
            let newGroup: any = {
                text: "Group " + (this.data.length+1).toString()
            }

            // Depending on selected option add the group at specified position
            switch (e.item.id){
                case 2: 
                    this.accordion.insertGroupBefore(newGroup, this.accordion.selectedGroup);
                    break;

                case 3: 
                    this.accordion.insertGroupAfter(newGroup, this.accordion.selectedGroup);
                    break;

                default: 
                    this.accordion.addGroup(newGroup);
                    break;
            }

            this.isNewGroupAdded = true;

            // Select the new group 
            this.accordion.selectGroup(newGroup);
       }
    }

    showEditor(group: any){
        this.originalText = group.text;
        this.isEditActive = true;
        this.editGroup = group;
        this.editorFocused = true;

        group.allowDrag = false;
    }

    // Selects the whole text in the text editor
    selectContent(e: any){
        if (e.target){
            setTimeout(function(){
                e.target.setSelectionRange(0, e.target.value.length);
            }, 1);
        }
    }

    closeEditor(){
        this.editGroup = null;
        this.originalText = '';
        this.editorFocused = false;
    }

    editorKeyDown(e: any){
        if (this.editGroup){
            switch (e.keyCode){
                case 13: // ENTER
                    this.closeEditor();
                    break;
                    
                case 27: // ESCAPE
                    this.editGroup.text = this.originalText;
                    this.closeEditor();
                    break;
            }
        }
    }

    editorLostFocus(){
        if (this.editGroup)
            this.editGroup.text = this.originalText;

        this.closeEditor();
    }

    onAfterExpand(e: any){
        // Display the text editor only when a new group is added
        if (this.isNewGroupAdded){
            this.showEditor(e.group);
            this.isNewGroupAdded = false;
        }
    }
}
