/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUIOrientation } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .spt-ovw-panel-split
            {
                background: white;
                border: thin solid #c5c5c5;
                display: block;
                overflow: hidden;

                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -o-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .spt-ovw-panel-inline
            {
                display: inline-block;
                height: 100%;
            }
            .spt-ovw-panel-content
            {
                display: block;
                padding: 5px;
            }
            .spt-ovw-bottom-container
            {
                border-bottom: thin solid #c5c5c5;
                display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
                display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
                display: -ms-flexbox;      /* TWEENER - IE 10 */
                display: -webkit-flex;     /* NEW - Chrome */
                display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
                overflow: hidden;

                height: 300px;
            }
        </style>
        <h2 class="feature-title">Splitter / Overview</h2>
        <div class="feature-content">
            <div style="width:600px;height:400px;">
                <div class="spt-ovw-panel-split" #panel1>
                    <span class="spt-ovw-panel-content">{{content1.body}}</span>
                </div>
                <iui-splitter [panel1]="panel1Elem" [panel2]="containerElem" [orientation]="splitterOrientation"></iui-splitter>
                <div class="spt-ovw-bottom-container" #container>
                    <div class="spt-ovw-panel-split spt-ovw-panel-inline" #panel2>
                        <span class="spt-ovw-panel-content">{{content2.body}}</span>
                    </div>
                    <iui-splitter [panel1]="panel2Elem" [panel2]="panel3Elem" [splitterDistance]="200"></iui-splitter>
                    <div class="spt-ovw-panel-split spt-ovw-panel-inline" #panel3>
                        <span class="spt-ovw-panel-content">{{content3.body}}</span>
                    </div>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:600px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Splitter</strong> is a native Angular component that allows you to resize two different blocks or elements during run-time.</p>
                <p><span class="initial-space"></span>The demonstration above shows two Splitter components, the first one is horizontal and second one is vertical. By click and hold of the left mouse button you can move the splitter and the panels will resize based on moving direction. The splitter cannot move past the end of each panel.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>splitter/splitter-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/splitter/splitter-component.aspx">Overview of IntegralUI Splitter for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class SplitterOverviewSample {
    @ViewChild('container', { static: false }) containerElem: ElementRef;
    @ViewChild('panel1', { static: false }) panel1Elem: ElementRef;
    @ViewChild('panel2', { static: false }) panel2Elem: ElementRef;
    @ViewChild('panel3', { static: false }) panel3Elem: ElementRef;

    public content1: any;
    public content2: any;
    public content3: any;

    public splitterOrientation: IntegralUIOrientation = IntegralUIOrientation.Horizontal;

    constructor(){
        this.content1 = { 
            body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
        }

        this.content2 = { 
            body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
        }

        this.content3 = { 
            body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
        }
    }   
}
