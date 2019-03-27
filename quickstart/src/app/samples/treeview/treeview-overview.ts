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
import { IntegralUISelectionMode } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .trw-overview
            {
                width: 350px;
                height: 300px;
            }
            .trw-overview .iui-treeitem-animate
            {
                margin: 1px 0;
            }
            .trw-overview .iui-treeitem-expand-box
            {
                margin-top: 4px !important;
            }
            .trw-overview .iui-treeitem-content
            {
                padding: 5px !important;
            }
            .computer-icons
            {
                background-image: url(app/integralui/resources/computer.png);
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0 !important;
                margin: 0 2px 0 0;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .empty
            {
                background-position: 0px 0px;
            }
            .folder
            {
                background-position: -24px 0px;
            }
            .downloads
            {
                background-position: -48px 0px;
            }
            .favorites
            {
                background-position: -72px 0px;
            }
            .documents
            {
                background-position: -96px 0px;
            }
            .pc
            {
                background-position: -120px 0px;
            }
            .videos
            {
                background-position: -144px 0px;
            }
            .music
            {
                background-position: -168px 0px;
            }
            .network
            {
                background-position: -192px 0px !important;
            }
            .recycle
            {
                background-position: -216px 0px !important;
            }
            .pictures
            {
                background-position: -240px 0px;
            }
            .empty-doc
            {
                background-position: -264px 0px !important;
            }
            .disk
            {
                background-position: -288px 0px !important;
            }
            .toolbar
            {
                display: inline-block;
                position: absolute;
                right: 0;
                top: 7px;
                padding-left: 5px;
            }
            .item-button
            {
                background-image: url(app/integralui/resources/icons.png);
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0;
                margin: 1px 4px 0 4px;
                width: 16px;
                height: 16px;
                float: right;
                opacity: 0.5;
            }
            .item-button:hover
            {
                opacity: 1;
            }
            .item-button-edit
            {
                background-position: -128px -81px;
            }
            .item-content
            {
                background: red;
                display: inline-block;
            }
        </style>
        <h2 class="feature-title">TreeView / Overview</h2>
        <div class="feature-content">
            <div style="width:400px" #application>
                <iui-treeview [items]="items" [appRef]="applicationRef" [allowDrag]="true" [controlStyle]="ctrlStyle" [selectionMode]="selMode" [allowAnimation]="true" #treeview>
                    <ng-template let-item>
                        <div (mouseenter)="hoverItem=item" (mouseleave)="hoverItem=null">
                            <span [ngClass]="item.icon"></span>
                            <span *ngIf="item!=editItem">{{item.text}}</span>
                            <input *ngIf="item==editItem" type="text" [(ngModel)]="item.text" (keydown)="editorKeyDown($event)" [iuiFocus]="editorFocused" (focus)="selectContent($event)" (blur)="editorLostFocus()" />
                            <div class="toolbar" *ngIf="item==hoverItem">
                                <span class="item-button item-button-edit" (click)="showEditor(item)"></span>
                            </div>
                        </div>
                    </ng-template>
                </iui-treeview>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> TreeView</strong> is a native Angular component that displays tree hierarchy of items that can be reordered using advanced drag drop operations. You can load data on demand during run-time from local or remote data sources, and add custom HTML content in each tree item.</p>
                <p><span class="initial-space"></span>Above demonstration shows a simple tree hierarchy, each item has an icon and an editable label. When item is hovered, a command button will appear on right side, which when clicked will open a text editor, where you can change the item label.</p>
                <p><span class="initial-space"></span>You can reorder items by click and drag over specific item. A dragging window will appear, stating the target item and position at which item can be dropped. During drag drop operations, you can also create a copy of an item by holding the SHIFT key. The dragging window will change its icon, showing a + sign next to the position marker.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/treeview/treeview-component.aspx">Overview of IntegralUI TreeView for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewOverviewSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public items: Array<any>;

    private isEditActive: boolean = false;
    public editItem: any = null;
    private originalText: string = '';
    public editorFocused: boolean = false;
    public hoverItem: any = null;
    
    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;

    public ctrlStyle: any = {
        general: {
            normal: 'trw-overview'
        }
    }

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Favorites",
                icon: "computer-icons favorites",
                items: [
                    { id: 11, pid: 1, text: "Desktop", icon: "computer-icons empty-doc" },
                    { id: 12, pid: 1, text: "Downloads", icon: "computer-icons downloads" }
                ]
            },
            { 
                id: 2,
                text: "Libraries",
                icon: "computer-icons folder",
                items: [
                    { 
                        id: 21, 
                        pid: 2, 
                        text: "Documents", 
                        icon: "computer-icons documents",
                        expanded: false,
                        items: [
                            { id: 211, pid: 21, text: "My Documents", icon: "computer-icons empty-doc" },
                            { id: 212, pid: 21, text: "Public Documents", icon: "computer-icons empty-doc" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Music", icon: "computer-icons music" },
                    { id: 23, pid: 2, text: "Pictures", icon: "computer-icons pictures" },
                    { id: 24, pid: 2, text: "Videos", icon: "computer-icons videos" }
                ]
            },
            { 
                id: 3,
                text: "Computer",
                icon: "computer-icons pc",
                expanded: false,
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)", icon: "computer-icons disk" },
                    { id: 32, pid: 3, text: "Storage (D:)", icon: "computer-icons disk" }
                ]
            },
            { id: 4, text: "Network", icon: "computer-icons network" },
            { id: 5, text: "Recycle Bin", icon: "computer-icons recycle" }
        ];

    } 

    // Selects the whole text in the text editor
    selectContent(e: any){
        if (e.target){
            setTimeout(function(){
                e.target.setSelectionRange(0, e.target.value.length);
            }, 1);
        }
    }

    showEditor(item: any){
        this.originalText = item.text;
        this.isEditActive = true;
        this.editItem = item;
        this.editorFocused = true;

        item.allowDrag = false;
    }

    closeEditor(){
        if (this.editItem)
            this.editItem.allowDrag = true;
            
        this.editItem = null;
        this.originalText = '';
        this.editorFocused = false;
    }

    editorKeyDown(e: any){
        if (this.editItem){
            switch (e.keyCode){
                case 13: // ENTER
                    this.closeEditor();
                    break;
                    
                case 27: // ESCAPE
                    this.editItem.text = this.originalText;
                    this.closeEditor();
                    break;
            }
        }
    }

    editorLostFocus(){
        if (this.editItem)
            this.editItem.text = this.originalText;

        this.closeEditor();
    }
}
