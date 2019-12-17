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
import { IntegralUITabScrollMode, IntegralUITabStripPlacement } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .tbs-ovw-normal
            {
                width: 375px;
                height: 250px;
            }
            .tbs-ovw-tab-content
            {
                padding: 10px;
                font-family: Calibri, Tahoma, Arial, Helvetica, sans-serif;
                font-size: 1.1em;
            }
            .iui-tab-header
            {
                padding: 5px 10px 3px 5px !important;
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
            .star-empty
            {
                background-position: -216px -72px;
            }
            .notes
            {
                background-position: -192px -72px;
            }
            .sports
            {
                background-position: -96px -72px;
            }
        </style>
        <h2 class="feature-title">TabStrip / Overview</h2>
        <div class="feature-content">
            <div style="float:left;width:400px;" #application>
                <iui-tabstrip [controlStyle]="ctrlStyle" [tabs]="data" [tabSpacing]="2" [tabStripPlacement]="tabPlacement" [allowDrag]="true" [scrollMode]="tabScrollMode" (scrollPosChanged)="tabScrollPosChanged($event)">
                   <iui-tab *ngFor="let tab of data" text="{{tab.text}}" icon="{{tab.icon}}" [allowDrag]="true">
                        <div class="tbs-ovw-tab-content">{{tab.body}}</div>
                    </iui-tab>
                </iui-tabstrip>
            </div>
            <div class="control-panel" style="float:left;margin-left:30px;width:300px">
                <label><strong>Tab Placement:</strong> </label><br />
                <label><input type="radio" [checked]="checkTabPlacement()" (click)="setTabPlacement()" />Top</label><br/>
                <label><input type="radio" [checked]="checkTabPlacement(1)" (click)="setTabPlacement(1)" />Right</label><br/>
                <label><input type="radio" [checked]="checkTabPlacement(2)" (click)="setTabPlacement(2)" />Bottom</label><br/>
                <label><input type="radio" [checked]="checkTabPlacement(3)" (click)="setTabPlacement(3)" />Left</label>
                <br /><br />
                <label><strong>Scroll Mode:</strong> </label><br />
                <label><input type="radio" [checked]="checkScrollMode()" (click)="setScrollMode()" />None</label><br/>
                <label><input type="radio" [checked]="checkScrollMode(1)" (click)="setScrollMode(1)" />InBound</label><br/>
                <label><input type="radio" [checked]="checkScrollMode(2)" (click)="setScrollMode(2)" />OutBound</label>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> TabStrip</strong> is a native Angular component that allows you to create tabbed content using tabs placed in different orientations.</p>
                <p><span class="initial-space"></span>The demo above shows few tabs each with a header and a content panel. You can choose where tabs are placed: top, right, bottom or left side</p>
                <p><span class="initial-space"></span>You can also choose whether scrolling is enabled or not. There are three modes:</p>
                <ul>
                    <li><span style="color:#0064aa">None</span> - scrolling disabled, scroll buttons will not appear</li>
                    <li><span style="color:#0064aa">InBound</span> - scrolling enabled, scroll buttons appear next to each other</li>
                    <li><span style="color:#0064aa">OutBound</span> - scrolling enabled, scroll buttons appear on left/right or up/down side</li>
                </ul>
                <p><span class="initial-space"></span>When you have many tabs that cannot appear in the TabStrip space all at the same time, it is best to enable scrolling. By default, scrolling is disabled.</p>
                <p><span class="initial-space"></span>To reorder tabs, you can use drag drop. Just select a tab and drag it over other tabs. An empty space will appear showing the target position.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>tabstrip/tabstrip-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/tabstrip/tabstrip-component.aspx">Overview of IntegralUI TabStrip for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TabStripOverviewSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;

    public data: Array<any>;

    public tabPlacement: IntegralUITabStripPlacement = IntegralUITabStripPlacement.Top;
    public tabScrollMode: IntegralUITabScrollMode = IntegralUITabScrollMode.InBound;

    public ctrlStyle: any = {
        general: {
            normal: 'tbs-ovw-normal'
        }
    }

    constructor(){
        this.data = [
            { 
                icon: 'tab-icon library',
                text: 'Books',
                body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            },
            { 
                icon: 'tab-icon album',
                text: 'Music',
                body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            { 
                icon: 'tab-icon star-empty',
                text: 'Favorites',
                body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
            },
            { 
                icon: 'tab-icon notes',
                text: 'Notes',
                body: 'Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.'
            },
            { 
                icon: 'tab-icon sports',
                text: 'Sports',
                body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            }
        ];
    }   

    checkTabPlacement(key?: number): boolean {
        switch (key){
            case 1:
                return this.tabPlacement == IntegralUITabStripPlacement.Right ? true : false;

            case 2:
                return this.tabPlacement == IntegralUITabStripPlacement.Bottom ? true : false;

            case 3:
                return this.tabPlacement == IntegralUITabStripPlacement.Left ? true : false;
        }

        return this.tabPlacement == IntegralUITabStripPlacement.Top ? true : false;
    }

    setTabPlacement(key?: number){
        switch (key){
            case 1:
                this.tabPlacement = IntegralUITabStripPlacement.Right;
                break;

            case 2:
                this.tabPlacement = IntegralUITabStripPlacement.Bottom;
                break;

            case 3:
                this.tabPlacement = IntegralUITabStripPlacement.Left;
                break;

            default:
                this.tabPlacement = IntegralUITabStripPlacement.Top;
                break;
        }
    }

    checkScrollMode(key?: number): boolean {
        switch (key){
            case 1:
                return this.tabScrollMode == IntegralUITabScrollMode.InBound ? true : false;

            case 2:
                return this.tabScrollMode == IntegralUITabScrollMode.OutBound ? true : false;
        }

        return this.tabScrollMode == IntegralUITabScrollMode.None ? true : false;
    }

    setScrollMode(key?: number){
        switch (key){
            case 1:
                this.tabScrollMode = IntegralUITabScrollMode.InBound;
                break;

            case 2:
                this.tabScrollMode = IntegralUITabScrollMode.OutBound;
                break;

            default:
                this.tabScrollMode = IntegralUITabScrollMode.None;
                break;
        }
    }

    tabScrollPosChanged(e: any){
        console.log("Tab scroll position is: ", e.value);
    }
}
