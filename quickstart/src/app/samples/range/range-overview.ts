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
import { IntegralUIVisibility, IntegralUIAnchorStyle } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .rng-ovw-container
            {
                background: #ededed;
                border: thin solid #bcbcbc;
                overflow: hidden;
                padding: 10px 10px 20px 10px;
                position: relative;
                width: 550px;
                white-space: nowrap;

                min-width: 360px;
                max-width: 700px;
                min-height: 300px;
                max-height: 450px;

                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -o-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .rng-ovw-label
            {
                display: inline-block;
                margin: 10px;
                width: 80px;
                text-align: right;
            }
            .rng-ovw-textarea
            {
                resize: none;
                width: 440px;
            }
            .rng-ovw-btn-submit
            {
                margin-left: 100px;
                padding: 5px;
                width: 75px
            }
        </style>
        <h2 class="feature-title">Range / Overview</h2>
        <div class="feature-content">
            <div class="rng-ovw-container" iuiFrame>
                <label class="rng-ovw-label">First Name:</label><input [(ngModel)]="user.firstName" [iuiRange]="rangeSettings" />
                <label class="rng-ovw-label">Last Name:</label><input [(ngModel)]="user.lastName" [iuiRange]="rangeSettings" />
                <br/>
                <label class="rng-ovw-label">E-mail:</label><input [(ngModel)]="user.email" [iuiRange]="rangeSettings" />
                <label class="rng-ovw-label">Phone:</label><input [(ngModel)]="user.phone" [iuiRange]="rangeSettings" />
                <br/>
                <label class="rng-ovw-label">Subject:</label><input [(ngModel)]="user.subject" [iuiRange]="rangeSettingsSubject" style="width:450px" />
                <br/><br/>
                <label class="rng-ovw-label" style="vertical-align: top;">Message:</label><textarea class="rng-ovw-textarea" rows="4" cols="50" [(ngModel)]="user.message" [iuiRange]="rangeSettingsMessage"></textarea>
                <br/><br/><br/>
                <button class="rng-ovw-btn-submit">Submit</button>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Range</strong> is a native Angular 2 component that allows you to set minimum and maximum width and height of HTML element or other Angular components. In addition, element size can change whenever its parent, page or window is resized. This allows you to resize automatically elements during run-time, which are related to other elements or the document in whole.</p>
                <p><span class="initial-space"></span>In above demo we have a small form with some labels and input elements. The form has a frame directive attached, which allows to change its size by simply clicking and dragging the resize marker, placed on the bottom-right of the form. Whenever the form is resized, the input elements will extend or decrease its size, while still keeping the whole structure in order.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>range/range-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/range/range-component.aspx">Overview of IntegralUI Range for Angular 2</a></p>
            </div>
        </div>
    `
})
export class RangeOverviewSample {
    public rangeSettings = {
        anchor: IntegralUIAnchorStyle.Right,
        factor: 0.5,
        minWidth: 75,
        maxWidth: 250,
        ref: 'parent'
    }

    public rangeSettingsSubject = {
        anchor: IntegralUIAnchorStyle.Right,
        factor: 1,
        minWidth: 250,
        maxWidth: 600,
        ref: 'parent'
    }

    public rangeSettingsMessage = {
        anchor: IntegralUIAnchorStyle.Right | IntegralUIAnchorStyle.Bottom,
        factor: 1,
        minHeight: 50,
        minWidth: 250,
        maxHeight: 200,
        maxWidth: 600,
        ref: 'parent'
    }


    public user: any = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: ''
    }

    constructor(){
    }  
}

