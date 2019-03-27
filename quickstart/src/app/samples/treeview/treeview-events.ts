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
import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';

@Component({
    selector: '',
    template: `
        <style>
            .iui-treeview
            {
                float: left;
                width: 350px;
                height: 330px;
            }
            .control-panel
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
            .event-block
            {
                width: 600px;
                height: 332px;
            }
            .event-log
            {
                height: 296px;
            }
            .add-remove-btns
            {
            }
            .add-remove-btns button
            {
                margin: 5px;
                width: 75px;
            }
        </style>
        <div>
            <h2 class="feature-title">TreeView / Events</h2>
            <div class="feature-content" #application>
                <div class="add-remove-btns">
                    <button (click)="addRoot()">Add Root</button>
                    <button (click)="addChild()">Add Child</button>
                    <button (click)="remove()" [disabled]="disableButtons">Remove</button>
                    <button (click)="clear()" [disabled]="disableButtons">Clear</button>
                </div>
                <iui-treeview [items]="data" [appRef]="applicationRef" [allowDrag]="true" [allowFocus]="true" [virtualMode]="true"
                    (afterCollapse)="onAfterCollapse($event)"
                    (afterExpand)="onAfterExpand($event)"
                    (afterSelect)="onAfterSelect($event)"
                    (beforeCollapse)="onBeforeCollapse($event)"
                    (beforeExpand)="onBeforeExpand($event)"
                    (beforeSelect)="onBeforeSelect($event)"
                    (clear)="onClear($event)"
                    (dragOver)="onDragOver($event)"
                    (dragDrop)="onDragDrop($event)"
                    (itemAdding)="onItemAdding($event)"
                    (itemAdded)="onItemAdded($event)"
                    (itemRemoving)="onItemRemoving($event)"
                    (itemRemoved)="onItemRemoved($event)"
                    (keyDown)="onKeyDown($event)"
                    (keyPress)="onKeyPress($event)"
                    (keyUp)="onKeyUp($event)"
                    (scrollPosChanged)="onScrollPosChanged($event)"
                    (selectionChanged)="onSelectionChanged($event)"
                 #treeview>
                    <ng-template let-item>
                        <span>{{item.text}}</span>
                    </ng-template>
                </iui-treeview>
                <div class="control-panel">
                    <div class="event-block">
                        <button type="button" (click)="clearEventLog()" style="float:right;margin:3px 12px; width:50px">Clear</button>
                        <p style="margin:0 10px; padding: 3px; border-bottom: thin solid #c5c5c5">Event log:</p>
                        <ul class="event-log">
                            <li *ngFor="let ev of eventLog">
                                <span class="event-name">{{ev.name}}</span>{{ev.info}}<span class="event-value">{{ev.value}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <br style="clear:both;"/>
                <div class="feature-help" style="width:1000px;">
                    <p><span class="initial-space"></span>This sample presents all events that are fired from the TreeView. Depending on action, a specific event is fired, which you can handle by creating an event handler.</p>
                    <p><span class="initial-space"></span>The following events are supported:</p>
                    <ul class="feature-points">
                        <li><span style="color:#c60d0d">afterCollapse</span> - Occurs after item is collapsed</li>
                        <li><span style="color:#c60d0d">afterExpand</span> - Occurs after item is expanded</li>
                        <li><span style="color:#c60d0d">afterSelect</span> - Occurs after item is selected</li>
                        <li><span style="color:#c60d0d">beforeCollapse</span> - Occurs before item is collapsed</li>
                        <li><span style="color:#c60d0d">beforeExpand</span> - Occurs before item is expanded</li>
                        <li><span style="color:#c60d0d">beforeSelect</span> - Occurs before item is selected</li>
                        <li><span style="color:#c60d0d">clear</span> - Occurs when all items are removed</li>
                        <li><span style="color:#c60d0d">dragOver</span> - Occurs when item is dragged over TreeView space</li>
                        <li><span style="color:#c60d0d">dragDrop</span> - Occurs when drag-drop operation is completed</li>
                        <li><span style="color:#c60d0d">itemAdding</span> - Occurs before item is added</li>
                        <li><span style="color:#c60d0d">itemAdded</span> - Occurs after item is added</li>
                        <li><span style="color:#c60d0d">itemRemoving</span> - Occurs before item is removed</li>
                        <li><span style="color:#c60d0d">itemRemoved</span> - Occurs after item is removed</li>
                        <li><span style="color:#c60d0d">keyDown</span> - Occurs when key is hold down while the item has focus</li>
                        <li><span style="color:#c60d0d">keyPress</span> - Occurs when key is pressed while the item has focus</li>
                        <li><span style="color:#c60d0d">keyUp</span> - Occurs when key is released while the item has focus</li>
                        <li><span style="color:#c60d0d">loadComplete</span> - Occurs when data is loaded into the TreeView using loadData method</li>
                        <li><span style="color:#c60d0d">scrollPosChanged</span> - Occurs when scroll position changes</li>
                        <li><span style="color:#c60d0d">selectionChanged</span> - Occurs when selected item has changed</li>
                        <li><span style="color:#c60d0d">updateComplete</span> - Occurs when TreeView layout is updated</li>
                    </ul>
                    <p><span class="initial-space"></span>Depending on some conditions, when handling some of above events you can prevent the default action to proceed, by canceling the operation. Event data has a <span style="color:#0000ff">cancel</span> field, which when set to true will cancel the process.</p>
                    <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-events.ts</i>) file.</p> 
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewEventsSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeview') treeview: IntegralUITreeView;

    public data: Array<any> = [];
    public eventLog: Array<any> = [];
    private itemCount: number = 3;

    public disableButtons: boolean = false;

    private parentItem: any = null;
    private itemIndex: number = -1;

    constructor(){
        this.data = [
            { 
                id: 1,
                text: "Item1",
                items: [
                    { id: 11, pid: 1, text: "Item11" },
                    { 
                        id: 12,
                        pid: 1,
                        text: "Item12",
                        items: [
                            { id: 121, pid: 12, text: "Item121" },
                            { 
                                id: 122,
                                pid: 12,
                                text: "Item122", 
                                expanded: false,
                                items: [
                                    { id: 1221, pid: 122, text: "Item1221" },
                                    { id: 1222, pid: 122, text: "Item1222" }
                                ]
                            },
                            { id: 123, pid: 12, text: "Item123" }
                        ]
                    }
                ]
            },
            {
                id: 2,
                text: "Item2",
                expanded: false,
                items: [
                    { id: 21, pid: 2, text: "Item21" },
                    {
                        id: 22,
                        pid: 2,
                        text: "Item22", 
                        expanded: false,
                        items: [
                            { id: 221, pid: 22, text: "Item221" }
                        ]
                    }
                ]
            },
            { id: 3, text: "Item3" }
        ];
    }  
                
    createNewItem(){
        this.itemCount++;

        return { text: "Item " + this.itemCount };
    }

    addRoot(){
        let item: any = this.createNewItem();

        this.treeview.addItem(item);
        this.treeview.selectedItem = item;
        this.treeview.updateLayout();

        this.disableButtons = false;
    }

    addChild(){
        let item: any = this.createNewItem();

        this.treeview.addItem(item, this.treeview.selectedItem);
        this.treeview.updateLayout();

        this.disableButtons = false;
    }

    remove(){
        if (this.treeview.selectedItem){
            this.treeview.removeItem(this.treeview.selectedItem);
            this.treeview.updateLayout();
        }
    }

    clear(){
        this.treeview.clearItems();
        this.treeview.updateLayout();
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

    clearEventLog(){
        this.eventLog.length = 0;
    }

    // Events
    onAfterCollapse(e: any){
        if (e.item)
            this.eventLog.unshift({ name: "afterCollapse", info: " event was fired after item is collapsed: ", value: e.item.text }); 
    }

    onAfterExpand(e: any){
        if (e.item)
            this.eventLog.unshift({ name: "afterExpand", info: " event was fired after item is expanded: ", value: e.item.text }); 
    }

    onAfterSelect(e: any){
        if (e.item)
            this.eventLog.unshift({ name: "afterSelect", info: " event was fired after item is selected: ", value: e.item.text }); 
    }

    onBeforeCollapse(e: any){
        if (e.item)
            this.eventLog.unshift({ name: "beforeCollapse", info: " event was fired before item is collapsed: ", value: e.item.text }); 
    }

    onBeforeExpand(e: any){
        if (e.item)
            this.eventLog.unshift({ name: "beforeExpand", info: " event was fired before item is expanded: ", value: e.item.text }); 
    }

    onBeforeSelect(e: any){
        if (e.item)
            this.eventLog.unshift({ name: "beforeSelect", info: " event was fired before item is selected: ", value: e.item.text }); 
    }
    
    onDragOver(e: any){
        this.eventLog.unshift({ name: "dragover", info: " event was fired when item is dragged over TreeView space" }); 
    }
    
    onDragDrop(e: any){
        this.eventLog.unshift({ name: "dragdrop", info: " event was fired when drag-drop operation is completed" }); 

        let self = this;
        setTimeout(function(){
            self.treeview.selectedItem = e.dragItem;

        }, 100);
    }

    onItemAdding(e: any){
        this.eventLog.unshift({ name: "itemAdding", info: " event was fired before item is added: ", value: e.item.text }); 
    }

    onItemAdded(e: any){
        this.eventLog.unshift({ name: "itemAdded", info: " event was fired after item is added: ", value: e.item.text }); 

        this.disableButtons = false;
    }

    onClear(e: any){
        this.eventLog.unshift({ name: "clear", info: " event was fired when all items are removed at once", value: '' }); 
        
        this.itemCount = 0;
        this.disableButtons = true;
    }

    onItemRemoving(e: any){
        this.eventLog.unshift({ name: "itemRemoving", info: " event was fired before item is removed: ", value: e.item.text }); 

        this.itemIndex = -1;
        this.parentItem = this.treeview.getItemParent(e.item);
        let list: Array<any> = this.treeview.getList('', this.parentItem);
        if (list && list.length > 0)
            this.itemIndex = list.indexOf(e.item);
    }

    onItemRemoved(e: any){
        this.eventLog.unshift({ name: "itemRemoved", info: " event was fired after item is removed: ", value: e.item.text }); 

        this.itemCount = this.itemCount > 0 ? this.itemCount - 1 : 0;
        this.selectNewItem();

        if (this.itemCount == 0)
            this.disableButtons = true;
    }

    onKeyDown(e: any){
        this.eventLog.unshift({ name: "keyDown", info: " event was fired when key is hold down while the item has focus: ", value: e.item.text }); 
    }

    onKeyPress(e: any){
        this.eventLog.unshift({ name: "keyPress", info: " event was fired when key is pressed while the item has focus: ", value: e.item.text }); 
    }

    onKeyUp(e: any){
        this.eventLog.unshift({ name: "keyUp", info: " event was fired when key is released while the item has focus: ", value: e.item.text }); 
    }

    onScrollPosChanged(e: any){
        this.eventLog.unshift({ name: "scrollPosChanged", info: " event was fired when scroll position changes: ", value: "{ x: " + e.value.x + ", y: " + e.value.y + " }" }); 
    }

    onSelectionChanged(e: any){
        this.eventLog.unshift({ name: "selectionChanged", info: " event was fired when selected item has changed: ", value: e.item.text }); 
    }
}
