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

@Component({
    selector: '',
    template: `
        <style>
            .bdcrmb-ovw
            {
                background: #fefefe;
                border-color: #e5e5e5;
                cursor: pointer;
            }
        </style>
        <h2 class="feature-title">BreadCrumb / Overview</h2>
        <div class="feature-content" #application>
            <iui-breadcrumb [appRef]="applicationRef" [controlStyle]="ctrlStyle" [items]="items" [selectedItem]="selItem" [dropDownWidth]="150" (selectionChanged)="itemSelected($event)">
                <ng-template let-item>
                    <span>{{item.text}}</span>
                </ng-template>
            </iui-breadcrumb>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Breadcrumb</strong> is a native Angular component used for navigation, where each item can have a link that is automatically separated. The component is fully customizable via CSS.</p>
                <p><span class="initial-space"></span>In this example, there is a small tree hierarachy where only currently selected path is shown. Initialy item named 'Downloads' is selected, and the Breadcrumb shows the whole path that leads to this item. By clicking on the separator (arrow button), a dropdown list will popup where you can select a different item.</p>
                <p><span class="initial-space"></span>By default, links are not created, but you can customize the item template and add your own links either using the hyperlink tag or set navigation through code by handling  the selectionChanged event.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">appRef</span> - holds a reference to application view</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">dropDownWidth</span> - Specifies the width of the dropdown list in pixels</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">items</span> - Gets or sets a collection of items that is assigned to the component</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">selectedItem</span> - Specifies the item that is currently selected</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <br/>
                    <li><span style="color:#c60d0d">enabledChanged</span> - Occurs when enabled property changes</li>
                    <li><span style="color:#c60d0d">selectionChanged</span> - Occurs when an item is selected</li>
                    <li><span style="color:#c60d0d">stateChanged</span> - Occurs when component state changes</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>breadcrumb/breadcrumb-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class BreadCrumbOverviewSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public items: Array<any>;
    public selItem: any = null;

    public ctrlStyle: any = {
        general: { 
            normal: 'bdcrmb-ovw',
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

        this.selItem = this.items[0].items[1];
    }

    itemSelected(e: any){
        //console.log("Selection changed to: ", e.item);
    }
}
