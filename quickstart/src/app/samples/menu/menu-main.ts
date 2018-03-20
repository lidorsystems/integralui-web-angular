/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '',
    template: `
        <style>
            .sidebar
            {
                cursor: pointer;
                position: absolute;
                top: 61px;
                left: 0;
                width: 251px;
                overflow: hidden;
            }
            .sidebar ul
            {
                color: #ababab;
                list-style-type: none;
                margin: 15px 0 15px 15px;
                padding: 0;
            }
            .sidebar li
            {
                margin: 7px 0;
                padding: 5px;
                position: relative;
            }
            .sel-mark
            {
                border: 12px solid #ffffff;
                border-color: transparent #ffffff transparent transparent;
                display: block;
                position: absolute;
                top: 2px;
                right: 0;
            }
        </style>
        <div style="background:url('app/sidebar.png') repeat-y 0 0;margin:0;" [ngStyle]="{ height: blockHeight }">
            <div class="sidebar">
                <ul>
                    <li *ngFor="let sideItem of sideList" routerLink="{{sideItem.link}}" (mousedown)="selectFeature(sideItem)" (mouseenter)="itemMouseEnter(sideItem)" (mouseleave)="itemMouseLeave()" [ngStyle]="{ 'margin-top': sideItem.margin + 'px' }">
                        <span [ngStyle]="getItemStyle(sideItem)">{{sideItem.text}}</span>
                        <span class="sel-mark" *ngIf="sideItem==selectedItem"></span>
                    </li>
                </ul>
            </div>
            <div style="display:inline-block;margin-left:275px" #featureContent>
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class MenuSample {
    @ViewChild('featureContent', {read: ElementRef}) featureContentElem: ElementRef;

    public blockHeight: any = "auto";

    // List of features
    public sideList: Array<any>;
    public selectedItem: any = null;
    private hoverItem: any = null;

    constructor(){
        this.sideList = [
            { text: "Overview", link: './overview' },
            { text: "Templates", link: './templates' },
            { text: "Back to Main", link: '', margin: 50 }
        ];

        this.selectedItem = this.sideList[0];
    }   

    ngAfterContentChecked(){
        let self = this;

        if (self.featureContentElem && self.featureContentElem.nativeElement.offsetHeight < window.innerHeight - 61)
            self.blockHeight = window.innerHeight - 61 + 'px';
        else
            self.blockHeight = "auto";
    }

    selectFeature(item: any){
        this.selectedItem = item;
    }

    itemMouseEnter(item: any){
        this.hoverItem = item;
    }

    itemMouseLeave(){
        this.hoverItem = null;
    }

    getItemStyle(item: any){
        let style: any = {
            color: '#ababab',
            'font-weight': 'normal'
        }

        if (item == this.selectedItem){
            style.color = 'white';
            style['font-weight'] = 'bold';
        }
        else if (item == this.hoverItem)
            style.color = '#f5f5f5';

        return style;
    }
}
