/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
    selector: '',
    template: `
        <style>
            .slbar-ovw-slide-block
            {
            	width: 700px;
                height: 300px;
            }
            .slbar-ovw-slide-block span
            {
                display: block;
                font-size: 2em;
                padding-top: 140px;
                text-align: center;
            }
        </style>
        <h2 class="feature-title">SlideBar / Overview</h2>
        <div class="feature-content">
            <div #application>
                <iui-slidebar #slidebar>
                    <iui-slide *ngFor="let slide of slides">
                        <div class="slbar-ovw-slide-block">
                            <span>{{slide.text}}</span>
                        </div>
                    </iui-slide>
                </iui-slidebar>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> SlideBar</strong> is a native Angular component that allows you to animate slides created using images or custom content.</p>
                <p><span class="initial-space"></span>The demonstration above shows only the basic features available in SlideBar component. There are few slides each showing a title. Slide changes are automatic and animated from right to left. Whenever a slide is selected, an animation runs showing the slide content in current view of the SlideBar component. Using navigation buttons, you can quickly switch to specific slide.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>slidebar/slidebar-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/slidebar/slidebar-component.aspx">Overview of IntegralUI SlideBar for Angular</a></p>
            </div>
        </div>
  `
})
export class SlideBarOverviewSample {
	public slides: Array<any>;

	constructor(){
		this.slides = [
			{ text: "Slide 1" },
			{ text: "Slide 2" },
			{ text: "Slide 3" }
		];
	}
}
