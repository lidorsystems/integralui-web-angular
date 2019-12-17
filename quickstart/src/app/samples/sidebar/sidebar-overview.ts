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
import { IntegralUIPlacement, IntegralUISpeedMode } from '../../integralui/components/integralui.core';
import { IntegralUISideBar } from '../../integralui/components/integralui.sidebar';

@Component({
    selector: '',
    template: `
        <style>
            .sidebar-ovw-panel {
                border: thin dashed #efefef;
                float:left;
                overflow: hidden;
                position: relative;
                width: 602px;
                height: 402px;
            }
            .sidebar-ovw-page-content {
                border: thin dotted gray;
                padding: 75px 50px;
                text-align: center;
                width: 150px;
            }

            /* Bar Header and Content */
            .sidebar-ovw-header {
                padding: 0;
            }
            .sidebar-ovw-header-title {
                display: inline-block;
                margin: 3px 0 0 2px;
            }
            .sidebar-ovw-content {
                padding: 10px;
                font-family: Calibri, Tahoma, Arial, Helvetica, sans-serif;
                font-size: 1.1em;
            }
            .sidebar-ovw-content-buttons {
                position: absolute;
                bottom: 10px;
                right: 5px;
            }
            .sidebar-ovw-content-buttons button {
                margin: 0 5px;
                padding: 3px;
                width: 75px;
            }

            /* Control Panel */
            .sidebar-ovw-control-panel
            {
                display: inline-block;
                float:left;
                padding-left: 20px;
                width: 175px;
                vertical-align: top;
            }
            .sidebar-ovw-control-panel label
            {
                display: block;
            }
            .sidebar-ovw-control-panel input
            {
                border: thin solid #d9d9d9;
                padding: 5px;
            }
        </style>
        <h2 class="feature-title">SideBar / Overview</h2>
        <div class="feature-content">
            <div class="sidebar-ovw-panel" #application>
                <div [ngStyle]="getElementStyle('bar')">
                    <iui-sidebar [appRef]="applicationRef" [data]="data" [allowAnimation]="barAllowAnimation" [animationSpeed]="currentBarSpeed.value" [size]="barSize" [title]="barTitle" [popup]="barPopup" [placement]="currentBarPlacement.value" #bar>
                        <ng-template let-obj [iuiTemplate]="{ type: 'header' }">
                            <div class="sidebar-ovw-header">
                                <span class="sidebar-ovw-header-title">{{barTitle}}</span>
                            </div>
                        </ng-template>
                        <ng-template let-obj [iuiTemplate]="{ type: 'content' }">
                            <div class="sidebar-ovw-content">
                                <span>{{data.body}}</span><br/>
                                <div class="sidebar-ovw-content-buttons">
                                    <button (click)="btnOk()">Ok</button>
                                    <button (click)="btnCancel()">Cancel</button>
                                </div>
                            </div>
                        </ng-template>
                    </iui-sidebar>
                </div>
                <div class="sidebar-ovw-page-content" [ngStyle]="getElementStyle('content')">
                    Page content
                </div>
            </div>
            <div class="sidebar-ovw-control-panel">
                <div style="margin:0 0 3px 0"><input type="checkbox" [checked]="barAllowAnimation" (click)="changeAllowAnimation()" style="width:auto" /><span>Allow Animation</span></div>
                <label style="margin:12px 0 3px 0">Animation Speed</label>
                <iui-combobox [enabled]="barAllowAnimation" [size]="{ width: 185 }" [items]="barSpeedOptions" [allowAnimation]="true" [integralHeight]="true" [selectedItem]="currentBarSpeed" (selectedItemChanged)="onSpeedChanged($event)">
                    <iui-item *ngFor="let item of barSpeedOptions" [text]="item.text"></iui-item>
                </iui-combobox>
                <label style="margin:12px 0 3px 0">Placement</label>
                <iui-combobox [size]="{ width: 185 }" [items]="barPlacementOptions" [allowAnimation]="true" [maxDropDownItems]="4" [integralHeight]="true" [selectedItem]="currentBarPlacement" (selectedItemChanged)="onPlacementChanged($event)">
                    <iui-item *ngFor="let item of barPlacementOptions" [text]="item.text"></iui-item>
                </iui-combobox>
                <label style="margin:12px 0 3px 0">Title</label><input type="text" [(ngModel)]="barTitle" style="width:100%" />
                <div style="margin:12px 0 3px 0"><input type="checkbox" [checked]="barPopup" (click)="changePopup()" style="width:auto" /><span>Popup</span></div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> SideBar</strong> is a native Angular component that allows you to add a custom content panel that appears by sliding from page side over main content.</p>
                <p><span class="initial-space"></span>Using different properties from control panel, you can choose the side at which the SideBar is placed, whether animations are active or disabled, the animation speed and whether the bar content will appear over main content or before it.</p>
                <p><span class="initial-space"></span>Popup property determines whether the bar content appears over page content or it is placed before it. If the SideBar is placed on right or bottom side, the bar content will always appear over the page content.</p>
                <p><span class="initial-space"></span>The Header is created from a template and it is fully customizable. You can place text, command buttons or other components like a Menu to it.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>sidebar/sidebar-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class SideBarOverviewSample {
    @ViewChild('application', {read: ViewContainerRef, static: true}) applicationRef: ViewContainerRef;
    @ViewChild('bar', { static: false }) bar: IntegralUISideBar;

    public data: any;
    public barAllowAnimation: boolean = true;
    public barSize: any = { width: 300, height: 400 }
    public barTitle: string = "SideBar Header";
    public barPopup: boolean = false;

    public barPlacementOptions: any = [
        { text: 'Top', value: IntegralUIPlacement.Top },
        { text: 'Right', value: IntegralUIPlacement.Right },
        { text: 'Bottom', value: IntegralUIPlacement.Bottom },
        { text: 'Left', value: IntegralUIPlacement.Left }
    ];

    public barSpeedOptions: any = [
        { text: 'Very Slow', value: IntegralUISpeedMode.VerySlow },
        { text: 'Slow', value: IntegralUISpeedMode.Slow },
        { text: 'Normal', value: IntegralUISpeedMode.Normal },
        { text: 'Fast', value: IntegralUISpeedMode.Fast },
        { text: 'Very Fast', value: IntegralUISpeedMode.VeryFast }
    ];

    public currentBarPlacement: any;
    public currentBarSpeed: any;

    constructor(){
        this.data = { 
            icon: 'sidebar-icon library',
            text: 'Books',
            body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
        }

        this.currentBarPlacement = this.barPlacementOptions[3];
        this.currentBarSpeed = this.barSpeedOptions[2];
    }   

    changeAllowAnimation(){
        this.barAllowAnimation = !this.barAllowAnimation;
    }

    changePopup(){
        this.bar.close();
        this.barPopup = !this.barPopup;
    }

    onPlacementChanged(e: any){
        this.currentBarPlacement = e.item;

        switch (e.item.value){
            case IntegralUIPlacement.Top:
                this.barSize = { width: 600, height: 200 }
                break;

            case IntegralUIPlacement.Right:
                this.barSize = { width: 300, height: 400 }
                break;

            case IntegralUIPlacement.Bottom:
                this.barSize = { width: 600, height: 200 }
                break;

            default:
                this.barSize = { width: 300, height: 400 }
                break;
        }
    }

    onSpeedChanged(e: any){
        this.currentBarSpeed = e.item;
    }

    getElementStyle(type: string){
        let style: any = { positon: 'relative' }

        switch (this.currentBarPlacement.value){
            case IntegralUIPlacement.Right:
                style.float = 'right';
                break;

            case IntegralUIPlacement.Bottom:
                style.position = 'absolute';

                if (type == 'bar')
                    style.bottom = 0;
                else
                    style.bottom = this.bar.getMinSize().height + 2 + 'px';
                break;

            case IntegralUIPlacement.Left:
                style.float = 'left';
                break;
        }

        return style;
    }

    btnOk(){
        this.bar.close();
    }

    btnCancel(){
        this.bar.close();
    }
}
