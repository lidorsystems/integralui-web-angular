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
            .trw-lbl-edit
            {
                width: 350px;
                height: 300px;
            }
            .trw-lbl-edit .iui-treeitem-expand-box
            {
                margin-top: 4px;
            }
            .trw-lbl-item-content
            {
                display: inline-block;
                padding: 3px 0;
            }
            .trw-lbl-editor
            {
                padding: 3px 0;
            }
        </style>
        <h2 class="feature-title">TreeView / Label Edit</h2>
        <div class="feature-content">
            <iui-treeview [items]="items" [controlStyle]="ctrlStyle" #treeview>
                <ng-template let-item>
                    <span class="trw-lbl-item-content" *ngIf="item!=editItem" (mousedown)="showEditor($event, item)" (mouseup)="cancelEditor()">{{item.text}}</span>
                    <input class="trw-lbl-editor" *ngIf="item==editItem" type="text" [(ngModel)]="item.text" (keydown)="editorKeyDown($event)" [iuiFocus]="editorFocused" (focus)="selectContent($event)" (blur)="editorLostFocus()" />
                </ng-template>
            </iui-treeview>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In this sample you can edit item label in TreeView component, by left-click on its label.</p>
                <p><span class="initial-space"></span>When item is clicked, the text editor will not appear immediately. You need to press and hold the left-mouse button for a short amount of time (250ms) and then release it, after which the text editor will appear.</p>
                <p><span class="initial-space"></span>To confirm any changes in the editor, press the ENTER key. If you press the ESCAPE key or click anywhere outside of the editor, editing is cancelled.</p>
                <p><span class="initial-space"></span>Furthermore, some items have <span style="color:#0000ff">allowEdit</span> field set to false. This prevents the text editor to appear for these items. For example, the <i>'Favorites'</i> and <i>'Documents'</i> items are non editable.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-editing.ts</i>) file, or read the following article:</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewEditingSample {
    public items: Array<any>;

    private isEditActive: boolean = false;
    public editItem: any = null;
    private originalText: string = '';
    public editorFocused: boolean = false;
    private editTimeout: any = null;
    
    public ctrlStyle: any = {
        general: {
            normal: 'trw-lbl-edit'
        }
    }

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Favorites",
                allowEdit: false,
                items: [
                    { id: 11, pid: 1, text: "Desktop" },
                    { id: 12, pid: 1, text: "Downloads" }
                ]
            },
            { 
                id: 2,
                text: "Libraries",
                items: [
                    { 
                        id: 21, 
                        pid: 2, 
                        text: "Documents", 
                        allowEdit: false,
                        expanded: false,
                        items: [
                            { id: 211, pid: 21, text: "My Documents" },
                            { id: 212, pid: 21, text: "Public Documents" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Music" },
                    { id: 23, pid: 2, text: "Pictures" },
                    { id: 24, pid: 2, text: "Videos" }
                ]
            },
            { 
                id: 3,
                text: "Computer",
                expanded: false,
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)" },
                    { id: 32, pid: 3, text: "Storage (D:)" }
                ]
            },
            { id: 4, text: "Network" },
            { id: 5, text: "Recycle Bin" }
        ];

    } 

    ngOnDestroy(){
        this.cancelEditor();
    }

    // Selects the whole text in the text editor
    selectContent(e: any){
        if (e.target){
            setTimeout(function(){
                e.target.setSelectionRange(0, e.target.value.length);
            }, 1);
        }
    }

    showEditor(e: any, item: any){
        if (e.buttons == 1 && item.allowEdit != false){
            let self = this;

            self.editTimeout = setTimeout(function(){
                if (self.editTimeout){
                    self.originalText = item.text;
                    self.isEditActive = true;
                    self.editItem = item;
                    self.editorFocused = true;
                }

                clearTimeout(self.editTimeout);
            }, 250);

        }
    }

    cancelEditor(){
        if (this.editTimeout)
            clearTimeout(this.editTimeout);

        this.editTimeout = null;
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
