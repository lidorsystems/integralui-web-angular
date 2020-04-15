/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';

@Component({
    selector: '',
    template: `
        <style>
            .trw-mst-normal
            {
                width: 350px;
                height: 300px;
            }
            .trw-mst-normal .iui-treeitem-content
            {
                padding: 5px;
            }
        </style>
        <h2 class="feature-title">TreeView / Context Menu</h2>
        <div class="feature-content">
            <div style="width:400px" #application>
                <iui-treeview [items]="data" [controlStyle]="treeStyle" [iuiContextMenu]="menuSettings" [contextMenuRef]="contextMenuReference" (itemClick)="menuItemClick($event)" #treeview>
                    <ng-template let-item>
                        <span *ngIf="item!=editItem" [ngStyle]="{ opacity: item == moveItem ? 0.5 : 1 }">{{item.text}}</span>
                        <input *ngIf="item==editItem" type="text" [(ngModel)]="item.text" (keydown)="editorKeyDown($event)" [iuiFocus]="editorFocused" (focus)="selectContent($event)" (blur)="editorLostFocus()" />
                    </ng-template>
                </iui-treeview>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In this sample you can see how to add a <a routerLink="../../contextmenu">ContextMenu</a> to the TreeView. To open the context menu, right-click anywhere inside the TreeView space.</p>
                <p><span class="initial-space"></span>The Context Menu consists of 4 options:</p>
                <ul class="feature-points">
                    <li><span style="color:#000080">Edit</span> - for editing the currently selected item</li>
                    <li><span style="color:#000080">Cut</span> - marks the selected item, for moving</li>
                    <li><span style="color:#000080">Copy</span> - creates an exact deep clone of selected item</li>
                    <li><span style="color:#000080">Paste</span> - places the marked or cloned item below the selected item</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-context-menu.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewContextMenuSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treeview', { static: false }) treeview: IntegralUITreeView;

    public data: Array<any>;

    // Editing
    private isEditActive: boolean = false;
    public editItem: any = null;
    private originalText: string = '';
    public editorFocused: boolean = false; 

    // Cut
    public moveItem: any = null;

    // Copy/Paste
    private clone: any = null;

    // Context Menu settings
    public menuSettings: any = {
        appRef: null,
        items: [
            { id: 1, text: "Edit" },
            { id: 2, type: "separator" },
            { id: 3, text: "Cut" },
            { id: 4, text: "Copy" },
            { id: 5, text: "Paste" }
        ]
    }

    public contextMenuReference: any = null;

    public treeStyle: any = {
        general: {
            normal: 'trw-mst-normal'
        }
    }

    constructor(){
        this.data = [
            { 
                id: 1,
                text: "PC",
                items: [
                    { id: 11, pid: 1, text: "Driving/Racing", expanded: false,
                        items: [
                            { id: 111, pid: 11, text: "DiRT 3" },
                            { id: 112, pid: 11, text: "Ridge Racer Unbounded" },
                            { id: 113, pid: 11, text: "TrackMania 2" }
                        ]
                    },
                    { id: 12, pid: 1, text: "Role-Playing",
                        items: [
                            { id: 121, pid: 12, text: "Dark Souls 2" },
                            { id: 122, pid: 12, text: "Mass Effect 3" },
                            { id: 123, pid: 12, text: "The Elder Scrolls V: Skyrim" },
                            { id: 124, pid: 12, text: "Divinity: Original Sin" },
                            { id: 125, pid: 12, text: "Fallout: New Vegas" }
                        ]
                    },
                    { id: 13, pid: 1, text: "Action", expanded: false,
                        items: [
                            { id: 131, pid: 13, text: "Diablo 3" },
                            { id: 132, pid: 13, text: "Gears of War" },
                            { id: 133, pid: 13, text: "F.E.A.R." },
                            { id: 134, pid: 13, text: "Path of Exile" },
                            { id: 135, pid: 13, text: "Grand Theft Auto IV" },
                            { id: 136, pid: 13, text: "Divine Divinity" },
                            { id: 137, pid: 13, text: "The Witcher 2" }
                        ]
                    },
                    { id: 14, pid: 1, text: "Shooter", expanded: false,
                        items: [
                            { id: 141, pid: 14, text: "Battlefield: Bad Company 2" },
                            { id: 142, pid: 14, text: "Call of Duty: Black Ops" },
                            { id: 143, pid: 14, text: "BioShock Infinite" },
                            { id: 143, pid: 14, text: "Crysis 2" }
                        ]
                    }
                ]
            },
            { 
                id: 2,
                text: "Xbox One",
                items: [
                    { id: 21, pid: 2, text: "Sports", expanded: false,
                        items: [
                            { id: 211, pid: 21, text: "FIFA 14" },
                            { id: 212, pid: 21, text: "Madden NFL 25" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Adventure",
                        items: [
                            { id: 221, pid: 22, text: "Assassin's Creed IV" },
                            { id: 222, pid: 22, text: "Tomb Raider" },
                            { id: 223, pid: 22, text: "Metal Gear Solid V" }
                        ]
                    },
                    { id: 23, pid: 2, text: "Miscellaneous", expanded: false,
                        items: [
                            { id: 231, pid: 23, text: "Peggle 2" }
                        ]
                    }
                ]
            },
            { 
                id: 3,
                text: "PlayStation", 
                items: [
                    { id: 31, pid: 3, text: "First-Person",
                        items: [
                            { id: 311, pid: 31, text: "Battlefield 4" },
                            { id: 312, pid: 31, text: "Call of Duty: Ghosts" },
                            { id: 313, pid: 31, text: "Killzone: Shadow Fall" }
                        ]
                    },
                    { id: 32, pid: 3, text: "Platformer", expanded: false,
                        items: [
                            { id: 321, pid: 32, text: "Rayman Legends" },
                            { id: 322, pid: 32, text: "Rogue Legacy" },
                            { id: 323, pid: 32, text: "1001 Spikes" }
                        ]
                    },
                    { id: 33, pid: 3, text: "MMO", expanded: false,
                        items: [
                            { id: 333, pid: 33, text: "Final Fantasy XIV Online" }
                        ]
                    }
                ]
            }
        ];
    }

    ngAfterViewInit(){
        // This is required in order for Context Menu component to appear
        // The menu is added as a child of specified app component
        this.menuSettings.appRef = this.applicationRef;
    }

    // ContextMenu events ----------------------------------------------------------------

    menuItemClick(e: any){
        if (e.item){
            // Action depends on selected menu option
            switch (e.item.id){
                case 1: // Edit
                    this.showEditor(this.treeview.selectedItem);
                    break;

                case 3: // Cut
                    // Mark the currently selected item for moving
                    this.moveItem = this.treeview.selectedItem;
                    break;

                case 4: // Copy
                    // Create a clone of currently selected item
                    this.clone = this.treeview.cloneItem(this.treeview.selectedItem);
                    break;

                case 5:  // Paste
                    let pasteItem: any = null;

                    // Get the item to be pasted
                    // From CUT
                    if (this.moveItem){
                        pasteItem = this.moveItem;
                        this.treeview.removeItem(pasteItem);
                    }
                    // From COPY
                    else if (this.clone)
                        pasteItem = this.clone;

                    // Paste the item at position below the selected item
                    if (pasteItem){
                        let parent: any = this.treeview.getItemParent(this.treeview.selectedItem);
                        let list: Array<any> = parent && parent.items ? parent.items : this.data;

                        if (list){
                            let index: number = list.indexOf(this.treeview.selectedItem);
                            if (index >= 0)
                                this.treeview.insertItemAt(pasteItem, index+1, parent);
                        }
                    }

                    this.moveItem = null;
                    break;
            }
       }
    }

    // Editing ---------------------------------------------------------------------------

    showEditor(item: any){
        // A timeout is required in this case, because when edit option from context menu is selected
        // there is a small delay prior context menu closes and focus is transfered from context menu to the item
        // In other cases (when context menu is not used), the timout is not needed
        
        let self = this;

        let editTimeout = setTimeout(function(){
            self.originalText = item.text;
            self.isEditActive = true;
            self.editItem = item;
            self.editorFocused = true;

            clearTimeout(editTimeout);
        }, 1);
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
