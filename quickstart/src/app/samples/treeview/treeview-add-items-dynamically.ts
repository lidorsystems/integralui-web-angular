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
import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';

@Component({
    selector: '',
    template: `
        <style>
            .trw-add-dynamic
            {
                width: 350px;
                height: 300px;
            }
            .trw-add-dynamic .iui-treeitem-content
            {
                margin: 1px 0 !important;
                padding: 5px !important;
            }
            .trw-add-dynamic-toolbar
            {
                display: inline-block;
                position: absolute;
                right: 0;
                top: 7px;
                padding-left: 5px;
            }
            .trw-add-dynamic-item-button
            {
                background-image: url(app/integralui/resources/icons.png);
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0;
                margin: -1px 3px 0 3px;
                width: 16px;
                height: 16px;
                float: right;
                opacity: 0.5;
            }
            .trw-add-dynamic-item-button:hover
            {
                opacity: 1;
            }
            .trw-add-dynamic-item-button-add-root
            {
                background-position: -80px 0;
            }
            .trw-add-dynamic-item-button-add-child
            {
                background-position: -32px -112px;
            }
            .trw-add-dynamic-item-button-delete
            {
                background-position: -160px -96px;
            }
            .trw-add-dynamic-item-content
            {
                background: red;
                display: inline-block;
            }
        </style>
        <h2 class="feature-title">TreeView / Add Items Dynamically</h2>
        <div class="feature-content">
            <div style="width:400px" #application>
                <iui-treeview [items]="items" [appRef]="applicationRef" [controlStyle]="ctrlStyle" #treeview>
                    <ng-template let-item>
                        <div (mouseenter)="hoverItem=item" (mouseleave)="hoverItem=null">
                            <span *ngIf="item!=editItem" (mouseup)="showEditor(item)">{{item.text}}</span>
                            <input *ngIf="item==editItem" type="text" [(ngModel)]="item.text" (keydown)="editorKeyDown($event)" [iuiFocus]="editorFocused" (focus)="selectContent($event)" (blur)="editorLostFocus()" />
                            <div class="trw-add-dynamic-toolbar" *ngIf="item==hoverItem">
                                <span class="trw-add-dynamic-item-button trw-add-dynamic-item-button-delete" (click)="deleteItem(item)" [iuiTooltip]="{ appRef: applicationRef, title: 'Delete' }"></span>
                                <span class="trw-add-dynamic-item-button trw-add-dynamic-item-button-add-child" (click)="addChild(item)" [iuiTooltip]="{ appRef: applicationRef, title: 'Add Child' }"></span>
                                <span class="trw-add-dynamic-item-button trw-add-dynamic-item-button-add-root" (click)="addRoot()" [iuiTooltip]="{ appRef: applicationRef, title: 'Add Root' }"></span>
                            </div>
                        </div>
                    </ng-template>
                </iui-treeview>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>To populate the TreeView component with data, you can either load data on demand from local or remote data source or add new items dynamically when required. In order to create a new item manually, you can use some of public methods available that allows you to insert a item at specific position in the tree view. This sample demonstrates how to add new items on demand.</p>
                <p><span class="initial-space"></span>To add a new item use the buttons at the right side of each item. These buttons appear when you move the mouse cursor over the item space. There are three buttons:</p>
                <ul>
                    <li><span style="color:#c60d0d">Add Root</span> - adds a new item as root and place it at the end of the tree hierarchy</li>
                    <li><span style="color:#c60d0d">Add Child</span> - adds a new item as a child of clicked item</li>
                    <li><span style="color:#c60d0d">Delete</span> - removes the item fro the the tree hierarchy</li>
                </ul>
                <p><span class="initial-space"></span>Buttons are represented by icons, and when mouse cursor is positioned over them a tooltip will appear stating the button functionality.</p>
                <p><span class="initial-space"></span>After item is created, you can easily edit it by clicking on its label. A text editor will appear where you can enter a new label.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-add-items-dynamically.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewAddItemsDynamicallySample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeview') treeview: IntegralUITreeView;

    public items: Array<any>;

    private isEditActive: boolean = false;
    public editItem: any = null;
    private originalText: string = '';
    public editorFocused: boolean = false;
    public hoverItem: any = null;
    
    public ctrlStyle: any = {
        general: {
            normal: 'trw-add-dynamic'
        }
    }

    private itemCount: number = 1;

    constructor(){
        this.items = [
            { text: "Item 1" }
        ];

    } 

    // Add/Remove ------------------------------------------------------------------------
                
    createNewItem(){
        this.itemCount++;

        return { text: "Item " + this.itemCount };
    }

    addRoot(){
        let item: any = this.createNewItem();
        
        this.treeview.addItem(item);
        this.showEditor(item);
    }

    addChild(parent: any){
        let item: any = this.createNewItem();
        
        this.treeview.addItem(item, parent);
        this.showEditor(item);
    }

    deleteItem(item: any){
        if (item)
            this.treeview.removeItem(item);
    }

    // Edit ------------------------------------------------------------------------------

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
