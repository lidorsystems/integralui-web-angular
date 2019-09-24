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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: '',
    template: `
        <style>
            .atcmplt-ovw
            {   
                width: 300px;
            }
        </style>
        <h2 class="feature-title">AutoComplete / Overview</h2>
        <div class="feature-content" #application>
            <iui-autocomplete 
                [appRef]="applicationRef" 
                [controlStyle]="ctrlStyle" 
                [dataFields]="dataFields"
                [list]="sampleList" 
                [placeHolder]="'Search text ...'" 
                [text]="textValue" 
                (valueChanged)="onValueChanged($event)"
            ></iui-autocomplete>
            <div class="feature-help" style="margin-top:50px;width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> AutoComplete</strong> is a native Angular component that represents a text box with a dropdown list where you can choose among suggested options. You can modify the component appearance via CSS.</p>
                <p><span class="initial-space"></span>In this example, whenever you enter a text a list will popup showing city names that match the entered text. You can navigate through the list using keyboard and choose an option either by pressing the ENTER key, mouse button or touch. The list is loaded from a JSON file and sorted in ascending order.</p>
                <p><span class="initial-space"></span>The following properties and events are supported:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">appRef</span> - holds a reference to application view</li>
                    <li><span style="color:#c60d0d">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                    <li><span style="color:#c60d0d">data</span> - Specifies an object that holds data related to the component</li>
                    <li><span style="color:#c60d0d">dataFields</span> - Specifies an object that map the fields names of list items from your data source to the ones used by the component</li>
                    <li><span style="color:#c60d0d">dropDownWidth</span> - Specifies the width of the dropdown list in pixels</li>
                    <li><span style="color:#c60d0d">enabled</span> - Determines whether the component is enabled or disabled</li>
                    <li><span style="color:#c60d0d">list</span> - Gets or sets a list of items that is assigned to the component</li>
                    <li><span style="color:#c60d0d">maxVisibleItems</span> - Specifies the maximum number of items displayed in the dropdown list</li>
                    <li><span style="color:#c60d0d">name</span> - Uniquely identifies the component</li>
                    <li><span style="color:#c60d0d">placeHolder</span> - A string that appears in text box as place holder</li>
                    <li><span style="color:#c60d0d">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                    <li><span style="color:#c60d0d">text</span> - Specifies the input text value</li>
                    <br/>
                    <li><span style="color:#c60d0d">valueChanged</span> - Occurs when a input text changes or an option is selected from a dropdown list</li>
                    <li><span style="color:#c60d0d">enabledChanged</span> - Occurs when enabled property changes</li>
                    <li><span style="color:#c60d0d">stateChanged</span> - Occurs when component state changes</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>autocomplete/autocomplete-overview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AutoCompleteOverviewSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    
    public ctrlStyle: any = {
        general: { 
            normal: 'atcmplt-ovw',
        }
    }

    public dataFields: any = {
        text: 'name'
    }

    public sampleList: Array<any> = [];
    public textValue: string = '';

    constructor(private http: HttpClient){}   

    ngAfterViewInit(){
        // Load data into the ListBox from a JSON file
        this.loadFromJSON();
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/cities.json").subscribe((data: Array<any>) => self.sampleList = data);
    }

    onValueChanged(e: any){
        console.log("Text value changes to: ", e.value);
    }
}
