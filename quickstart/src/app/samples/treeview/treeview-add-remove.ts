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
            .trw-add-rmv-normal
            {
                float: left;
                width: 350px;
                height: 330px;
            }
            .trw-add-rmv-control-panel button
            {
                margin: 5px 0;
                width: 125px;
            }
            .trw-add-rmv-control-panel .inline-block
            {
                display: inline-block;
                margin: 3px 0;
            }
            .trw-add-rmv-control-panel .inline-button
            {
                width: 85px;
                margin-right: 3px
            }
        </style>
        <h2 class="feature-title">TreeView / Add Remove</h2>
        <div class="feature-content">
            <iui-treeview [items]="data" (afterSelect)="onAfterSelect($event)" (itemAdded)="onItemAdded($event)" (itemRemoving)="onItemRemoving($event)" (itemRemoved)="onItemRemoved($event)" (clear)="onClear()" [controlStyle]="ctrlStyle" #treeview>
                <ng-template let-item>
                    <span>{{item.text}}</span>
                </ng-template>
            </iui-treeview>
            <div class="control-panel trw-add-rmv-control-panel" align="center" style="width:150px">
                <button (click)="addRoot()">Add Root</button><br />
                <button (click)="addChild()" [disabled]="disableButtons">Add Child</button><br />
                <button (click)="insertAfter()" [disabled]="disableButtons">Insert After</button><br />
                <button (click)="insertBefore()" [disabled]="disableButtons">Insert Before</button><br />
                <div class="inline-block">
                   <button class="inline-button" (click)="insertAt()">Insert At</button><input [(ngModel)]="insertPos" type="number" min="0" max="100" style="width:35px" />
                </div>
                <button (click)="remove()" [disabled]="disableButtons">Remove</button><br />
                <div class="inline-block">
                    <button class="inline-button" (click)="removeAt()">Remove At</button><input [(ngModel)]="removePos" type="number" min="0" max="100" style="width:35px" /><br />
                </div>
                <button (click)="clear()" [disabled]="disableButtons">Clear</button>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px;">
                <p><span class="initial-space"></span>In this sample you can create and/or modify a tree hierarchy using several different methods:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">addItem</span> - adds a new item</li>
                    <li><span style="color:#c60d0d">insertItemAfter</span> - adds a new item after specified item (in this sample the selected item)</li>
                    <li><span style="color:#c60d0d">insertItemAt</span> - adds a new item at specified position</li>
                    <li><span style="color:#c60d0d">insertItemBefore</span> - adds a new item before specified item (in this sample the selected item)</li>
                    <li><span style="color:#c60d0d">removeItem</span> - removes a item (in this sample the selected item)</li>
                    <li><span style="color:#c60d0d">removeItemAt</span> - removes a item at specified position from parent collection</li>
                    <li><span style="color:#c60d0d">clearItems</span> - removes all items</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-add-remove.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewAddRemoveSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeview') treeview: IntegralUITreeView;

    public data: Array<any>;

    public disableButtons: boolean = true;
    public insertPos: number = 0;
    public removePos: number = 0;

    private itemCount: number = 3;

    private parentItem: any = null;
    private itemIndex: number = -1;

    public ctrlStyle: any = {
        general: {
            normal: 'trw-add-rmv-normal'
        }
    }

    constructor(){
        this.data = [
            { 
                id: 1,
                text: "Item 1",
                items: [
                    { id: 2, pid: 1, text: "Item 2" }
                ]
            },
            { id: 3, text: "Item 3" }
        ];
    }   
                
    createNewItem(){
        this.itemCount++;

        return { text: "Item " + this.itemCount };
    }

    addRoot(){
        let item: any = this.createNewItem();
        this.treeview.addItem(item);
    }

    addChild(){
        let item: any = this.createNewItem();

        this.treeview.addItem(item, this.treeview.selectedItem);
    }

    insertAfter(){
        let item: any = this.createNewItem();
        
        this.treeview.insertItemAfter(item, this.treeview.selectedItem);
    }

    insertBefore(){
        let item: any = this.createNewItem();
        
        this.treeview.insertItemBefore(item, this.treeview.selectedItem);
    }

    insertAt(){
        let item: any = this.createNewItem();
        
        this.treeview.insertItemAt(item, this.insertPos, this.treeview.selectedItem);
    }

    remove(){
        if (this.treeview.selectedItem)
            this.treeview.removeItem(this.treeview.selectedItem);
    }

    removeAt(){
        this.treeview.removeItemAt(this.removePos, this.treeview.selectedItem);
    }

    clear(){
        this.treeview.clearItems();
    }

    onItemAdded(e: any){
        this.treeview.refresh();
    }

    onItemRemoving(e: any){
        this.itemIndex = -1;
        this.parentItem = this.treeview.getItemParent(e.item);
        let list: Array<any> = this.treeview.getList('', this.parentItem);
        if (list && list.length > 0)
            this.itemIndex = list.indexOf(e.item);
    }

    onItemRemoved(e: any){
        this.selectNewItem();

        if (!this.treeview.selectedItem)
            this.disableButtons = true;
    }

    onClear(){
        this.disableButtons = true;
    }

    onAfterSelect(e: any){
        this.disableButtons = this.treeview.selectedItem ? false : true;
    }

    selectNewItem(){
        let list: Array<any> = this.treeview.getList('', this.parentItem);
        if (list && list.length > 0){
            if (this.itemIndex == list.length)
                this.itemIndex = list.length - 1;

            if (this.itemIndex >= 0 && this.itemIndex < list.length){
                if (this.itemIndex < list.length)
                    this.treeview.selectedItem = list[this.itemIndex];
                else
                    this.treeview.selectedItem = list[list.length-1];
            }
        }
        else if (this.parentItem)
            this.treeview.selectedItem = this.parentItem;
        else
            this.treeview.selectedItem = null;
    }
}
