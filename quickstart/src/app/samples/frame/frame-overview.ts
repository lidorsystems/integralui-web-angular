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
import { IntegralUIVisibility } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .frm-ovw-container
            {
                width: 1200px;

                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -o-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .frm-ovw-text-block
            {
                border: thin solid #bcbcbc;
                overflow: hidden;
                padding: 5px;
                position: relative;
                width: 200px;
                height: 125px;
            }
            .frm-ovw-text-block p
            {
                margin: 0;
                padding: 0;
            }
            .frm-ovw-text-block:hover
            {
                background: white;
            }
            .frm-ovw-small
            {
                float: left;
                width: 300px;
            }
            .frm-ovw-large
            {
                clear: both;
                width: 600px;
            }
        </style>
        <h2 class="feature-title">Frame / Overview</h2>
        <div class="feature-content">
            <div class="frm-ovw-container">
                <div class="frm-ovw-text-block frm-ovw-small" [iuiFrame]="frameSettings" (sizeChanged)="frameSizeChanged($event)">
                    <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.</p>
                </div>
                <div class="frm-ovw-text-block frm-ovw-small" [iuiFrame]="frameSettings">
                    <p>Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.</p>
                </div>
                <div class="frm-ovw-text-block frm-ovw-large" [iuiFrame]="frameSettings">
                    <p>Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.</p>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Frame</strong> is a native Angular component that can be attached to any component or HTML element. It provides functionality that allows you to resize elements during run-time. The element to which this directive is attached, will display a frame and a marker on bottom-right corner that when clicked and dragged will resize the element.</p>
                <p><span class="initial-space"></span>In above demo we have three paragraphs with some text in it. Each paragraph has the IntegralUI Frame directive attached, which by default is hidden. Whenever the mouse cursor is moved over the paragraph space, the frame will appear. If you click and drag the edge of the frame, you can resize the paragraph. This allows you to change the element width and height on demand, during run-time.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>frame/frame-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/frame/frame-component.aspx">Overview of IntegralUI Frame for Angular</a></p>
            </div>
        </div>
    `
})
export class FrameOverviewSample {
    public frameSettings: any = {
        visible: IntegralUIVisibility.Hover
    }

    constructor(){
    }  

    frameSizeChanged(e: any){
        console.log("New element size: { " + e.width + "px, " + e.height + "px }");
    }
}

