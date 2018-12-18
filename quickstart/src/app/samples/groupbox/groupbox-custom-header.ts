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
import { IntegralUIBaseService } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .iui-groupbox
            {
                width: 400px;
            }
            .grpbox-cuh-group-header
            {
                background-color: #6791e1;
                border: solid thin #5f8bde;
            }
            .grpbox-cuh-group-header-hovered
            {
                background-color: #83a6e7;
            }
            .grpbox-cuh-group-header-selected
            {
                background-color: #2455b0;
                border-color: #1e4691;
                color: white;
            }

            .grpbox-cuh-group-content
            {
                padding: 50px 0;
                padding: 10px;
                border-top-color: transparent;
            }
            .iui-header-expand-box
            {
                top: 2px;
                right: 2px;
            }
            .grpbox-custom-group-header
            {
                display: inline-block;
                padding: 7px 0;
            }
            .grpbox-title-block
            {
                margin-left: 5px;
                display: inline-block;
                vertical-align: middle;
            }
            .grpbox-title
            {
            }
            .grpbox-subtitle
            {
                font-size: 0.875em;
                font-style: italic;
                opacity: 0.6;
            }
            .grpbox-cuh-icons
            {
                background: url(app/integralui/resources/icons-x24.png) no-repeat 0 0;
                display: inline-block;
                padding: 0 !important;
                margin: 0 1px 0 5px;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .sports
            {
                background-position: -96px -72px;
            }
            .grpbox-command-buttons
            {
                display: inline-block;
                position: absolute;
                right: 5px;
                top: 7px;
                padding-left: 5px;
            }
            .grpbox-command-buttons > div
            {
                border: thin solid transparent;
                display: inline-block;
                opacity: 0.5;
                padding: 2px;
            }
            .grpbox-command-buttons > div:hover
            {
                border-color: gray;
                background: white;
                opacity: 1;
            }
            .grpbox-cmd-btn
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
            .grpbox-btn-edit
            {
                background-position: -128px -81px;
            }
        </style>
        <div>
            <h2 class="feature-title">GroupBox / Custom Header</h2>
            <div class="feature-content">
               <iui-groupbox [controlStyle]="groupStyle" [allowAnimation]="true">
                    <iui-group-header>
                        <div class="grpbox-custom-group-header">
                            <span class="icons {{groupObj.icon}}"></span>
                            <div class="grpbox-title-block">
                                <input *ngIf="isEditActive" type="text" [(ngModel)]="groupObj.title" (keydown)="editorKeyDown($event)" (blur)="editorLostFocus()" [iuiFocus]="editorFocused" onFocus="this.setSelectionRange(0, this.value.length)" />
                                <span *ngIf="!isEditActive" class="grpbox-title">{{groupObj.title}}</span><br/>
                                <span *ngIf="!isEditActive" class="grpbox-subtitle">{{groupObj.subtitle}}</span>
                            </div>
                            <div class="grpbox-command-buttons" (mousedown)="onMouseDownCommandButtons($event)">
                                <div (click)="showEditor()"><span class="grpbox-cmd-btn grpbox-btn-edit"></span></div>
                            </div>
                        </div>
                    </iui-group-header>
                    <div class="grpbox-cuh-group-content">{{groupObj.body}}</div>
                </iui-groupbox>
                <br style="clear:both;"/>
                <div class="feature-help" style="width:700px;">
                    <p><span class="initial-space"></span>This example presents a GroupBox with custom header. Group header contains an icon, title, subtitle and command button. In addition, colors for header is changed for normal, hovered and selected state.</p>
                    <p><span class="initial-space"></span>When you click on edit button, you can edit the group title. By creating your own template for group header, you can customize its appearance in whole.</p>
                    <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>groupbox/groupbox-custom-header.ts</i>) file.</p> 
                </div>
            </div>
        </div>
    `,
    providers: [IntegralUIBaseService],
    encapsulation: ViewEncapsulation.None
})
export class GroupBoxCustomHeaderSample {
    public groupObj: any = {
        icon: 'grpbox-cuh-icons sports',
        title: 'Sport',
        subtitle: 'Contains a list of topics about different sports',
        body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
    }

    public isEditActive: boolean = false;
    private originalText: string = '';
    public editorFocused: boolean = false; 

    public groupStyle: any = {
        header: {
            general: {
                normal: 'grpbox-cuh-group-header',
                hovered: 'grpbox-cuh-group-header-hovered',
                selected: 'grpbox-cuh-group-header-selected'
            }
        }
    }

    onMouseDownCommandButtons(e: any){
        e.stopPropagation();
    }

    showEditor(){
        this.originalText = this.groupObj.title;
        this.isEditActive = true;
        this.editorFocused = true;
    }

    closeEditor(){
        this.editorFocused = false;
        this.isEditActive = false;
    }

    editorKeyDown(e: any){
        switch (e.keyCode){
            case 13: // ENTER
                this.originalText = this.groupObj.title;
                this.closeEditor();
                break;
                
            case 27: // ESCAPE
                this.groupObj.title = this.originalText;
                this.closeEditor();
                break;
        }
    }

    editorLostFocus(){
        this.groupObj.title = this.originalText;

        this.closeEditor();
    }
}
