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
            .acc-ovw-normal
            {
                width: 400px;
            }
            .acc-ovw-group-content
            {
                border-top-color: transparent;
                padding: 10px;
            }
            .icons
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
            .iui-header-expand-box
            {
                top: 2px;
                right: 2px;
            }
        </style>
        <h2 class="feature-title">Accordion / Overview</h2>
        <div class="feature-content">
             <iui-accordion [groups]="data" [selectedGroup]="selGroup" [controlStyle]="ctrlStyle" [allowAnimation]="true" #accordion>
               <iui-groupbox *ngFor="let group of data" text="{{group.text}}" icon="{{group.icon}}" [expandBoxType]="'arrow'" [allowAnimation]="true" #groupbox>
                    <div class="acc-ovw-group-content">{{group.body}}</div>
                </iui-groupbox>
            </iui-accordion>
            <!-- <br style="clear:both;"/> -->
            <div class="feature-help" style="width:600px;">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Accordion</strong> is a native Angular component that represents a list of expandable panels arranged vertically.</p>
                <p><span class="initial-space"></span>The demonstration above shows only the basic features available in Accordion component. There are few <a routerLink="/groupbox">group boxes</a> each with a header and a content panel.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>accordion/accordion-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/accordion/accordion-component.aspx">Overview of IntegralUI Accordion for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AccordionOverviewSample {
    public data: Array<any>;
    public selGroup: any = null;

    public ctrlStyle: any = {
        general: {
            normal: 'acc-ovw-normal'
        }
    }

    constructor(){
        this.data = [
            { 
                icon: 'icons library',
                text: 'Books',
                body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            },
            { 
                icon: 'icons album',
                text: 'Music',
                body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            { 
                icon: 'icons star-empty',
                text: 'Favorites',
                body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst. Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst. Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
            }
        ];

        this.selGroup = this.data[0];
    }   
}
