/*
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUIOrientation } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .spltc-ovw-normal
            {
                width: 700px;
                height: 400px;
            }
            .spltc-ovw-block
            {
                padding: 10px 0 20px 0;
                width: 700px;
            }
            .tab-icon
            {
                background: url(app/integralui/resources/icons-x24.png) no-repeat 0 0;
                display: inline-block;
                padding: 0 !important;
                margin: 0 1px 0 5px;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .library
            {
                background-position: 0 -72px;
            }
            .album
            {
                background-position: -144px -48px;
            }
            .spltc-ovw-panel-content
            {
                display: block;
                padding: 5px;
            }
        </style>
        <h2 class="feature-title">SplitContainer / Overview</h2>
        <div class="feature-content">
            <div #application>
                <div class="spltc-ovw-block" align="center">
                    <label><input type="radio" [checked]="scrollType == 'horizontal'" (click)="scrollType = 'horizontal'" />Horizontal</label>
                    <label><input type="radio" [checked]="scrollType == 'vertical'"  (click)="scrollType = 'vertical'" />Vertical</label>
                </div>
                <iui-splitcontainer [controlStyle]="ctrlStyle" [orientation]="getOrientation()" [splitterDistance]="180" [panel1]="panel1Data" [panel2]="panel2Data" (panelsSwapped)="onSwap()" (splitterMoving)="onSplitterMoving($event)">
                    <iui-panel1>
                        <span *ngIf="swap" class="spltc-ovw-panel-content">{{panel1Data.content}}</span>
                        <span *ngIf="!swap" class="spltc-ovw-panel-content">{{panel2Data.content}}</span>
                    </iui-panel1>
                    <iui-panel2>
                        <span *ngIf="!swap" class="spltc-ovw-panel-content">{{panel1Data.content}}</span>
                        <span *ngIf="swap" class="spltc-ovw-panel-content">{{panel2Data.content}}</span>
                    </iui-panel2>
                </iui-splitcontainer>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> SplitContainer</strong> is a native Angular 2 component that consists of two resizable panels separated by a splitter with tabs and command buttons. It allows you to place different content in two panels and change their size during run-time.</p>
                <p><span class="initial-space"></span>The demonstration above shows a SplitContainer component, with option to change its orientation to horizontal or vertical. Each panel is represented by a tab with icon and title, also there is a swap button that when clicked will swap panels on demand. By left click and hold the splitter handle, you can change the size of panels.</p>
                <p><span class="initial-space"></span>You may also notice that the top/left panel has condition set to prevent its height/width go below 100px. This is done by handling the <span style="color:#c60d0d">splitterMoving</span> event in your code and set the condition there.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>splitcontainer/splitcontainer-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/splitcontainer/splitcontainer-component.aspx">Overview of IntegralUI SplitContainer for Angular 2</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class SplitContainerOverviewSample {
    public panel1Data: any;
    public panel2Data: any;
    public swap: boolean = true;
    public scrollType = 'horizontal';  

    public ctrlStyle: any = {
        general: {
            normal: 'spltc-ovw-normal'
        }
    }

    constructor(){
        this.panel1Data = {
            icon: 'tab-icon library',
            text: 'Books',
            content: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
        }

        this.panel2Data = {
            icon: 'tab-icon album',
            text: 'Music',
            content: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
        }
    }   

    onSwap(){
        this.swap = !this.swap;
    }

    onSplitterMoving(e: any){
        if (e.value < 100)
            e.cancel = true;
    }

    getOrientation(){
        return this.scrollType == 'horizontal' ? IntegralUIOrientation.Horizontal : IntegralUIOrientation.Vertical;
    }
}
