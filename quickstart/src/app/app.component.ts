/*
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, enableProdMode, ViewContainerRef, ViewChild } from '@angular/core';

enableProdMode();

@Component({
    selector: 'quick-start',
    template: `
        <style>
        </style>
        <div #application>
            <div class="header">
                <div class="header-block">
                    <div class="header-content">
                        <h1><span style="color:#c60d0d">IntegralUI</span> Web <span style="font-size:0.75em;font-weight:normal;font-style:italic;margin:0 5px">for Angular</span></h1>
                    </div>
                </div>
                <hr class="head-separator" />
            </div>
            <router-outlet></router-outlet>
        </div>
  `
})
export class AppComponent {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    constructor(){
    }

    ngAfterViewInit(){
    }
}
