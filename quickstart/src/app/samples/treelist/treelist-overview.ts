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
            .iui-treelist
            {
                width: 300px !important;
                height: 350px !important;
            }
            .expand-icons-right
            {
                background: url(app/integralui/resources/expandbox-icons.png) no-repeat 0 0;
                display: inline-block;
                float: right;
                overflow: hidden;
                padding: 0;
                margin: 3px 0 0 0;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }
            .next
            {
                background-position: 0 0;
                opacity: 0.25;
            }
            .iui-treelistitem:hover .next
            {
                opacity: 1;
            }
            .icons-medium
            {
                background: url(app/integralui/resources/icons-x24.png) no-repeat 0 0;
                display: inline-block;
                overflow: hidden;
                padding: 0;
                margin: 0;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .empty-doc
            {
                background-position: -24px -48px;
            }
            .album
            {
                background-position: -144px -48px;
            }
            .camera
            {
                background-position: -168px -48px;
            }
            .library
            {
                background-position: 0 -72px;
            }
            .economics
            {
                background-position: -24px -72px;
            }
            .software
            {
                background-position: -48px -72px;
            }
            .clock
            {
                background-position: -72px -72px;
            }
            .sports
            {
                background-position: -96px -72px;
            }
            .people
            {
                background-position: -120px -72px;
            }
            .heart
            {
                background-position: -168px -72px;
            }
            .treelist-item-text
            {
                margin: 0 0 0 5px;
            }
        </style>
        <h2 class="feature-title">TreeList / Overview</h2>
        <div class="feature-content">
            <iui-treelist [title]="treeTitle" [items]="items" [allowAnimation]="true">
                <ng-template let-item>
                    <span [ngClass]="item.icon"></span>
                    <span class="treelist-item-text">{{item.text}}</span>
                    <span *ngIf="item.items" class="expand-icons-right next"></span>
                </ng-template>
            </iui-treelist>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> TreeList</strong> is a native Angular component that displays one list of items from a tree hierarchy. By changing the currently selected item, the TreeList will display only the child items that belong to the selIn following sections of this article, you will find information about general features that are included in the TreeList component.</p>
                <p><span class="initial-space"></span>In above demo there are different categories. By selecting a category, currently displayed list will slide to the left and a new list will show with sub-categories. The category name will appear in component header, from where you can move back to the previous selection.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treelist/treelist-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/treelist/treelist-component.aspx">Overview of IntegralUI TreeList for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeListOverviewSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public items: Array<any>;
    public treeTitle = "Categories";

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Books",
                icon: "icons-medium library",
                items: [
                    { id: 11, pid: 1, text: "Art", icon: "icons-medium empty-doc"  },
                    { 
                        id: 12,
                        pid: 1,
                        text: "Business",
                        icon: "icons-medium people",
                        items: [
                            { id: 121, pid: 12, text: "Economics", icon: "icons-medium empty" },
                            { 
                                id: 122,
                                pid: 12,
                                text: "Investing", 
                                icon: "icons-medium economics",
                                items: [
                                    { id: 1221, pid: 122, text: "Bonds" },
                                    { id: 1222, pid: 122, text: "Options" },
                                    { id: 1223, pid: 122, text: "Stocks" }
                                ]
                            },
                            { id: 123, pid: 12, text: "Management", icon: "icons-medium empty" },
                            { id: 124, pid: 12, text: "Small Business", icon: "icons-medium empty" }
                        ]
                    },
                    { id: 13, pid: 1, text: "Health", icon: "icons-medium heart" },
                    { id: 14, pid: 1, text: "Literature", icon: "icons-medium empty" },
                    { 
                        id: 15,
                        pid: 1,
                        text: "Science",
                        icon: "icons-medium empty",
                        items: [
                            { id: 151, pid: 15, text: "Astronomy" },
                            { id: 152, pid: 15, text: "Mathematics" },
                            { id: 153, pid: 15, text: "Evolution" },
                            { id: 154, pid: 15, text: "Nature" }
                        ]
                    }
                ]
            },
            { id: 2, text: "Computers", icon: "icons-medium empty" },
            {
                id: 3,
                text: "Electronics",
                icon: "icons-medium empty",
                items: [
                    { id: 31, pid: 3, text: "Camera", icon: "icons-medium camera" },
                    { id: 32, pid: 3, text: "Cell Phones", icon: "icons-medium empty" },
                    { id: 33, pid: 3, text: "Video Game Consoles", icon: "icons-medium empty" }
                ]
            },
            { 
                id: 4,
                text: "Music", 
                icon: "icons-medium album",
                items: [
                    { id: 41, pid: 4, text: "Blues" },
                    { id: 42, pid: 4, text: "Classic Rock" },
                    { id: 43, pid: 4, text: "Pop" },
                    { id: 44, pid: 4, text: "Jazz" }
                ]
            },
            { 
                id: 5,
                text: "Software",
                icon: "icons-medium software",
                items: [
                    { id: 51, pid: 5, text: "Games" },
                    { id: 52, pid: 5, text: "Operating Systems" },
                    { id: 53, pid: 5, text: "Network & Servers" },
                    { id: 54, pid: 5, text: "Security" }
                ]
            },
            { 
                id: 6,
                text: "Sports",
                icon: "icons-medium sports",
                items: [
                    { id: 61, pid: 6, text: "Baseball" },
                    { id: 62, pid: 6, text: "Martial Arts" },
                    { id: 63, pid: 6, text: "Running" },
                    { 
                        id: 64,
                        pid: 6,
                        text: "Tennis",
                        items: [
                            { id: 641, pid: 64, text: "Accessories" },
                            { id: 642, pid: 64, text: "Balls" },
                            { id: 643, pid: 64, text: "Racquets" }
                        ]
                    }
                ]
            },
            { id: 7, text: "Video Games", icon: "icons-medium empty" },
            { id: 8, text: "Watches", icon: "icons-medium clock" }
        ];
    }   
}
