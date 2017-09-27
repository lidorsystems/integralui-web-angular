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

@Component({
    selector: '',
    template: `
        <style>
            .pgr-ovw-container
            {
                position: relative;
                width: 500px;
            }
            .pgr-ovw-page-container
            {
                height: 302px;
            }
            .pgr-ovw-page-block
            {
                background: white;
                border: thin solid gray;
                position: absolute;
                top: 0;
                left: 0;
                width: 500px;
                height: 300px;
            }
            .pgr-ovw-page-block span
            {
                display: block;
                font-size: 1.5em;
                text-align: center;
                margin-top: 140px;
            }
        </style>
        <h2 class="feature-title">Paginator / Overview</h2>
        <div class="feature-content">
            <div class="pgr-ovw-container">
                <div class="pgr-ovw-page-container">
                    <div class="pgr-ovw-page-block" *ngFor="let page of pages; let i = index" [ngStyle]="{ 'z-index': i == selectedPage-1 ? 2 : 1 }">
                        <span *ngIf="i==selectedPage-1">
                            {{page.text}}
                        </span>
                    </div>
                </div>
                <div align="center">
                    <iui-paginator [maxPages]="maxLimit" [currentPage]="selectedPage" (pageChanged)="pageChanged($event)"></iui-paginator>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> Paginator</strong> is a native Angular 2 component that allows you to add pagination to your application. You can divide your content in multiple pages, by using Paginator you can select a page number and corresponding content will appear in current view.</p>
                <p><span class="initial-space"></span>The demonstration above shows five pages showing single text line. By using buttons from Paginator you can navigate between pages, or you can set a number in the input box to go directly to specified page.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>paginator/paginator-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/paginator/paginator-component.aspx">Overview of IntegralUI Paginator for Angular 2</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class PaginatorOverviewSample {
    public pages: Array<any>;
    public maxLimit: number = 10;
    public selectedPage: number = 0;

    constructor(){
        this.pages = [
            { text: "Page 1" },
            { text: "Page 2" },
            { text: "Page 3" },
            { text: "Page 4" },
            { text: "Page 5" }
        ];

        this.selectedPage = 1;
        this.maxLimit = this.pages.length;
    }

    pageChanged(e: any){
        this.selectedPage = e.value;
    }
}

