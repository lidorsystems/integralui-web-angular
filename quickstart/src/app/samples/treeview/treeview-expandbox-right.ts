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
            .trw-expbox-right
            {
                width: 350px;
                height: 300px;
            }
            .trw-expbox-right .iui-treeitem-animate
            {
                margin: 1px 0;
            }
            .trw-expbox-right .iui-treeitem
            {
                cursor: pointer;
            }
            .trw-expbox-right .iui-treeitem-expand-box
            {
                margin-top: 4px !important;
            }
            .trw-expbox-right .iui-treeitem-content
            {
                padding: 5px !important;
            }
            .computer-icons
            {
                background-image: url(app/resources/computer.png);
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
            .trw-expbox-toolbar
            {
                display: inline-block;
                position: absolute;
                right: 0;
                top: 7px;
                padding-left: 5px;
            }
            .trw-expbox-item-button
            {
                background: url(app/resources/expandbox-icons.png) no-repeat;
                display: inline-block;
                float: right;
                opacity: 0.5;
                overflow: hidden;
                padding: 0;
                margin: 1px 5px 0 0;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }
            .trw-expbox-right .iui-treeitem-content:hover .trw-expbox-item-button, .trw-expbox-right .iui-treeitem-content-selected .trw-expbox-item-button
            {
                opacity: 1;
            }
            .trw-expbox-item-button-expand
            {
                background-position: 0 -16px;
            }
            .trw-expbox-item-button-expand-animate
            {
                background-position: 0 0;
             
                animation-name: trw-expbox-expand;
                animation-delay: 0s;
                animation-direction: normal;
                animation-duration: 0.25s;
                animation-fill-mode: forwards;
                animation-iteration-count: 1;
                animation-play-state: running;
                animation-timing-function: linear; 
            }
            @keyframes trw-expbox-expand
            {
                0% { 
                    -ms-transform: rotate(0deg); /* IE 9 */
                    -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */
                    transform: rotate(0deg);
                }
                100% { 
                    -ms-transform: rotate(90deg); /* IE 9 */
                    -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
                    transform: rotate(90deg);
                }
            }
            .trw-expbox-item-button-collapse
            {
                background-position: 0 0;
            }
            .trw-expbox-item-button-collapse-animate
            {
                background-position: 0 0;

                animation-name: trw-expbox-collapse;
                animation-delay: 0s;
                animation-direction: normal;
                animation-duration: 0.25s;
                animation-fill-mode: forwards;
                animation-iteration-count: 1;
                animation-play-state: running;
                animation-timing-function: linear; 
            }
            @keyframes trw-expbox-collapse
            {
                0% { 
                    -ms-transform: rotate(90deg); /* IE 9 */
                    -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
                    transform: rotate(90deg);
                }
                100% { 
                    -ms-transform: rotate(0deg); /* IE 9 */
                    -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */
                    transform: rotate(0deg);
                }
            }
            .trw-expbox-item-content
            {
                background: red;
                display: inline-block;
            }
        </style>
        <h2 class="feature-title">TreeView / ExpandBox on Right</h2>
        <div class="feature-content">
            <div style="width:400px" #application>
                <iui-treeview [items]="items" [appRef]="applicationRef" [allowDrag]="true" [controlStyle]="ctrlStyle" [showExpandBox]="false" [allowAnimation]="true" #treeview>
                    <ng-template let-item>
                        <div (click)="toggle(item)" (mouseenter)="hoverItem=item" (mouseleave)="hoverItem=null">
                            <span [ngClass]="item.icon"></span>
                            <span>{{item.text}}</span>
                            <div class="trw-expbox-toolbar" *ngIf="isExpandBoxAllowed(item)">
                                <span class="trw-expbox-item-button" [ngClass]="{ 'trw-expbox-item-button-expand trw-expbox-item-button-expand-animate': item.expanded==true || item.expanded==undefined, 'trw-expbox-item-button-collapse trw-expbox-item-button-collapse-animate': item.expanded==false }"></span>
                            </div>
                        </div>
                    </ng-template>
                </iui-treeview>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>A TreeView where expand box appears on item right side. It looks similar to the navigation panel in Angular documents page.</p>
                <p><span class="initial-space"></span>This sample is created by following settings:</p>
                <ul>
                    <li>The built-in expand box is hidden, by settiing the <span style="color:#0064aa">showExpandBox</span> property to false.</li>
                    <li>The item template is modified so that it contains an icon, text and a custom expand box on right side</li>
                    <li>When item is hovered, the cursor changes to pointer and the expand box icon appears with full opacity</li>
                    <li>When item is clicked, it expands or collapses</li>
                    <li>Expand box is animated using CSS</li>
                </ul>
                <p><span class="initial-space"></span>In addition, you can reorder items by click and drag over specific item. A dragging window will appear, stating the target item and position at which item can be dropped. During drag drop operations, you can also create a copy of an item by holding the SHIFT key. The dragging window will change its icon, showing a + sign next to the position marker.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-expandbox-right.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewExpandBoxRightSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treeview', { static: false }) treeview: IntegralUITreeView;

    public items: Array<any>;

    private isEditActive: boolean = false;
    public editItem: any = null;
    private originalText: string = '';
    public editorFocused: boolean = false;
    public hoverItem: any = null;

    public ctrlStyle: any = {
        general: {
            normal: 'trw-expbox-right'
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

    ngAfterViewInit(){
        this.treeview.selectedItem = this.items[0];
    }

    isExpandBoxAllowed(item: any){
        return item && item.items && item.items.length > 0 ? true : false;
    }

    toggle(item: any){
        this.treeview.toggle(item);
    }
}
