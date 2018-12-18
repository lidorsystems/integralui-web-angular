/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

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
            .cldr-ovw
            {
                width: 250px;
                height: 200px;
            }
        </style>
        <h2 class="feature-title">Calendar / Overview</h2>
        <div class="feature-content">
            <iui-calendar [controlStyle]="ctrlStyle" [allowAnimation]="true"></iui-calendar>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Calendar</strong> is a native Angular component that enables the user to select a date using a visual monthly calendar display. This component is fully customizable via CSS.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">firstDayOfWeek</span> - Specifies the first day of the week</li>
                    <li><span style="color:#c60d0d">locales</span> - Specifies the current localization string in use</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">selectedDate</span> - The date that is selected</li>
                    <li><span style="color:#c60d0d">showToday</span> - Indicates whether the today date is visible</li>
                    <li><span style="color:#c60d0d">size</span> - Specifies the component width and height in pixels.</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <li><span style="color:#c60d0d">todayDate</span> - The current day</li>
                    <br/>
                    <li><span style="color:#c60d0d">dateChanged</span> - Occurs when selected date property changes</li>
                    <li><span style="color:#c60d0d">enabledChanged</span> - Occurs when enabled property changes</li>
                    <li><span style="color:#c60d0d">stateChanged</span> - Occurs when component state changes</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>calendar/calendar-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class CalendarOverviewSample {

    public calendarDate: Date;

    public ctrlStyle: any = {
        general: { 
            normal: 'cldr-ovw',
        }
    }

    constructor(){
        let date = new Date();
        date.setDate(31);

        //this.calendarDate = date;
    }
}
