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
            .acc-cuh-normal
            {
                float: left;
                width: 400px;
            }
            .acc-cuh-group-header
            {
                background-color: #6791e1;
                border: solid thin #5f8bde;
            }
            .acc-cuh-group-header-hovered
            {
                background-color: #83a6e7;
            }
            .acc-cuh-group-header-selected
            {
                background-color: #2455b0;
                border-color: #1e4691;
                color: white;
            }

            .acc-cuh-group-content
            {
                padding: 50px 0;
                border: thin solid #bbbbbb;
                padding: 10px;
                border-top-color: transparent;
            }
            .iui-header-expand-box
            {
                top: 2px;
                right: 2px;
            }
            .custom-group-header
            {
                display: inline-block;
                padding: 7px 0;
            }
            .acc-title-block
            {
                margin-left: 5px;
                display: inline-block;
                vertical-align: middle;
            }
            .acc-group-title
            {
            }
            .acc-group-subtitle
            {
                font-size: 0.875em;
                font-style: italic;
                opacity: 0.6;
            }
            .acc-cuh-icons
            {
                background: url(app/integralui/resources/icons-x24.png) no-repeat 0 0;
                display: inline-block;
                padding: 0 !important;
                margin: 0 1px 0 5px;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .economics
            {
                background-position: -24px -72px;
            }
            .heart
            {
                background-position: -168px -72px;
            }
            .sports
            {
                background-position: -96px -72px;
            }
            .acc-command-buttons
            {
                display: inline-block;
                position: absolute;
                right: 5px;
                top: 7px;
                padding-left: 5px;
            }
            .acc-command-buttons > div
            {
                border: thin solid transparent;
                display: inline-block;
                opacity: 0.5;
                padding: 2px;
            }
            .acc-command-buttons > div:hover
            {
                border-color: gray;
                background: white;
                opacity: 1;
            }
            .acc-cmd-btn
            {
                background-image: url(../app/integralui/resources/icons.png);
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0;
                margin: 0;
                width: 16px;
                height: 16px;
                float: right;
            }
            .acc-btn-edit
            {
                background-position: -128px -81px;
            }
            .acc-btn-delete
            {
                background-position: -160px -96px;
            }
        </style>
        <div>
            <h2 class="feature-title">Accordion / Custom Header</h2>
            <div class="feature-content">
                <iui-accordion [groups]="data" [controlStyle]="ctrlStyle" #accordion>
                   <iui-groupbox *ngFor="let group of data" [controlStyle]="groupStyle">
                        <iui-group-header>
                            <div class="custom-group-header">
                                <span class="icons {{group.icon}}"></span>
                                <div class="acc-title-block">
                                    <input *ngIf="group==editGroup" type="text" [(ngModel)]="group.title" (keydown)="editorKeyDown($event)" [iuiFocus]="editorFocused" (focus)="selectContent($event)" (blur)="editorLostFocus()" />
                                    <span *ngIf="group!=editGroup" class="acc-group-title">{{group.title}}</span><br/>
                                    <span *ngIf="group!=editGroup" class="acc-group-subtitle">{{group.subtitle}}</span>
                                </div>
                                <div class="acc-command-buttons" (mousedown)="onMouseDownCommandButtons($event)">
                                    <div (click)="showEditor(group)"><span class="acc-cmd-btn acc-btn-edit"></span></div>
                                    <div (click)="deleteGroup(group)"><span class="acc-cmd-btn acc-btn-delete"></span></div>
                                </div>
                            </div>
                        </iui-group-header>
                        <div class="acc-cuh-group-content">{{group.body}}</div>
                    </iui-groupbox>
                </iui-accordion>
                <br style="clear:both;"/>
                <div class="feature-help" style="width:700px;">
                    <p><span class="initial-space"></span>This example presents an Accordion with custom header. Each group header contains an icon, title, subtitle and command buttons. In addition, colors for headers are changed for normal, hovered and selected state.</p>
                    <p><span class="initial-space"></span>When you click on edit button, you can edit the group title. The delete button allows you to remove the group from the list.</p>
                    <p><span class="initial-space"></span>By creating your own template for group header, you can customize its appearance in whole.</p>
                    <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>accordion/accordion-custom-header.ts</i>) file.</p> 
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AccordionCustomHeaderSample {
    @ViewChild('accordion') accordion: IntegralUIAccordion;

    public data: Array<any> = [];

    private isEditActive: boolean = false;
    public editGroup: any = null;
    private originalText: string = '';
    public editorFocused: boolean = false; 

    public ctrlStyle: any = {
        general: {
            normal: 'acc-cuh-normal'
        }
    }

    public groupStyle: any = {
        header: {
            general: {
                normal: 'acc-cuh-group-header',
                hovered: 'acc-cuh-group-header-hovered',
                selected: 'acc-cuh-group-header-selected'
            }
        }
    }

    constructor(){
        this.data = [
            { 
                id: 1,
                icon: 'acc-cuh-icons economics',
                title: 'Economics',
                subtitle: 'Contains a list of topics about economics',
                body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            { 
                id: 2,
                icon: 'acc-cuh-icons heart',
                title: 'Health',
                subtitle: 'Contains a list of topics about medicine',
                body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst. Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
            },
            { 
                id: 3,
                icon: 'acc-cuh-icons sports',
                title: 'Sport',
                subtitle: 'Contains a list of topics about different sports',
                body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            }
        ];
    }  

    onMouseDownCommandButtons(e: any){
        e.stopPropagation();
    }

    showEditor(group: any){
        this.originalText = group.text;
        this.isEditActive = true;
        this.editGroup = group;
        this.editorFocused = true;
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

    deleteGroup(group: any){
        this.accordion.removeGroup(group);
    }
}
