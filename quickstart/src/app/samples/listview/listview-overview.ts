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
import { IntegralUIScrollMode } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .lview-ovw-block
            {
                padding: 10px 0 20px 0;
                width: 600px;
            }
            .lview-ovw-normal
            {
                width: 600px;
                height: 400px;
            }
            .lview-ovw-normal .iui-listitem-animate
            {
                margin: 2px;
            }
            .lview-ovw-num
            {
                display: inline-block;
                vertical-align: middle;
            }
            .lview-ovw-num-corner
            {
                display: inline-block;
                font-size: 0.875em;
                margin: -3px 0 0 -3px;
                position: relative;
                vertical-align: middle;
                z-index: 1;
            }
            .lview-ovw-item-selected .lview-ovw-num-corner
            {
                color: white;
            }
            .lview-ovw-corner
            {
                content: "";
                border: 20px solid #808080;
                border-color: #808080 transparent transparent #808080;
                position: absolute;
                top: -5px;
                left: -5px;
                width: 0;
                height: 0;
                z-index: 0;
            }
            .lview-ovw-icons
            {
                background: url(app/resources/movie-genres.png) no-repeat 0 0;
                display: inline-block;
                padding: 0;
                margin: 3px;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .action
            {
                background-position: 0 0;
            }
            .adventure
            {
                background-position: -24px 0;
            }
            .comedy
            {
                background-position: -48px 0;
            }
            .action
            {
                background-position: -72px 0;
            }
            .sci-fi
            {
                background-position: -120px 0;
            }
            .biography
            {
                background-position: 0 -24px;
            }
            .horror
            {
                background-position: -24px -24px;
            }
            .drama
            {
                background-position: -48px -24px;
            }
            .music
            {
                background-position: -72px -24px;
            }
            .romance
            {
                background-position: -96px -24px;
            }
            .western
            {
                background-position: -120px -24px;
            }
            .lview-ovw-star
            {
                display: inline-block;
                float: right;
                vertical-align: middle;
            }
            .lview-ovw-rating
            {
                display: inline-block;
                font-weight: bold;
                font-size: 0.75em;
                position: absolute;
                top: 18px;
                right: 21px;
                vertical-align: middle;
            }
            .lview-ovw-item
            {
                border: thin solid #e9e9e9;
            }
            .lview-ovw-custom-item
            {
                margin: 0;
                overflow: hidden;
                padding: 5px;
                text-overflow: ellipsis;
                width: 250px;
                white-space: nowrap;
            }
            .lview-ovw-custom-item .title
            {
                color: black;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                vertical-align: middle;
                width: 50%;
            }
            .lview-ovw-custom-item-large
            {
                margin: 0;
                overflow: hidden;
                padding: 5px;
                position: relative;
                width: 125px;
                white-space: nowrap;
                z-index: 0;

                display: inline-block;
            }
            .lview-ovw-title-large
            {
                color: black;
                display: inline-block;
                overflow: hidden;
                padding: 3px 0;
                text-overflow: ellipsis;
                width: 100%;
                vertical-align: middle;
            }
            .lview-ovw-star-inline
            {
                display: inline-block;
                vertical-align: middle;
            }
            .lview-ovw-icon-large
            {
                padding: 10px;
                margin: 0 auto;
                width: 24px;
            }
            .lview-ovw-item-selected
            {
                background-color: transparent;
                border-color: #808080 !important;
                color: white;
            }
            .lview-ovw-rating-ctrl
            {
                background: transparent;
                border: 0;
                cursor: pointer;
                display: inline-block;
                margin: auto;
                vertical-align: middle;
            }
            .lview-ovw-rating-ctrl-stars-content
            {
                background-image: url(app/resources/rating/star-empty-white.png);
            }
        </style>
        <h2 class="feature-title">ListView / Overview</h2>
        <div class="feature-content">
            <div #application>
                <div class="lview-ovw-block" align="center">
                    <label><input type="radio" [checked]="isScrollHorizontal()" (click)="scrollTypeClicked()" />Horizontal</label>
                    <label><input type="radio" [checked]="isScrollVertical()"  (click)="scrollTypeClicked(true)" />Vertical</label>
                </div>
                <iui-listview [name]="'ListView'" [items]="items" [appRef]="applicationRef" [controlStyle]="ctrlStyle" [scrollMode]="scrollType" [allowDrag]="true" (selectionChanged)="itemSelectionChanged($event)" #listview>
                    <div *ngIf="isScrollHorizontal()">
                        <iui-listitem *ngFor="let item of items; let i = index" [controlStyle]="horItemStyle" [allowAnimation]="true">
                            <div class="lview-ovw-custom-item">
                                <img class="lview-ovw-star" src="{{getRating(item.rating)}}" />
                                <span class="lview-ovw-rating">{{getRatingValue(item.rating)}}</span>
                                <span class="lview-ovw-num">{{i+1}}.</span>
                                <span class="lview-ovw-icons {{item.icon}}"></span>
                                <span class="lview-ovw-title">{{item.text}}</span>
                            </div>
                        </iui-listitem>
                    </div>
                    <div *ngIf="isScrollVertical()">
                        <iui-listitem *ngFor="let item of items; let i = index" [controlStyle]="verItemStyle" [allowAnimation]="true" [spacing]="2" [size]="{ width: 143, height: 151 }">
                            <div class="lview-ovw-custom-item-large">
                                <span *ngIf="item == currentSelection" class="lview-ovw-corner"></span>
                                <span class="lview-ovw-num-corner">{{i+1}}</span><br />
                                <div class="lview-ovw-icon-large">
                                    <span class="lview-ovw-icons {{item.icon}}"></span>
                                </div><br />
                                <span class="lview-ovw-title-large">{{item.text}}</span><br />
                                <iui-rating [controlStyle]="lviewOverviewRatingStyleStars" [(ngModel)]="item.rating" [max]="5" [division]="2"></iui-rating>
                            </div>
                        </iui-listitem>
                    </div>
                </iui-listview>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> ListView</strong> is a native Angular component that displays list of items either in horizontal or vertical layout. Items can be reordered using advanced drag drop operations. You can load data on demand during run-time from local or remote data sources, and add custom HTML content in each item.</p>
                <p><span class="initial-space"></span>Above demonstration shows two different views:</p>
                    <ul class="feature-points">
                        <li>Horizontal layout where items are arranged from top to bottom with horizontal scrolling</li>
                        <li>Vertical layout where items are arranged from left to right with vertical scrolling</li>
                    </ul>           
                <p><span class="initial-space"></span>In addition, item content is arranged differently: horizontal layout shows item content in single line, while vertical layout shows item content in a box. Rating is displayed using the <a routerLink="/rating">IntegralUI Rating</a> component.</p>
                <p><span class="initial-space"></span>You can reorder items by click and drag over specific item. A dragging window will appear, stating the target item and position at which item can be dropped. During drag drop operations, you can also create a copy of an item by holding the SHIFT key. The dragging window will change its icon, showing a + sign next to position marker.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>listview/listview-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/listview/listview-component.aspx">Overview of IntegralUI ListView for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ListViewOverviewSample {
    public items: Array<any>;

    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;

    public scrollType: IntegralUIScrollMode = IntegralUIScrollMode.Horizontal;  
    public currentSelection: any = null;

    public ctrlStyle: any = {
        general: {
            normal: 'lview-ovw-normal'
        }
    }

    public horItemStyle: any = {
        general: {
            normal: 'lview-ovw-item'
        }
    } 

    public verItemStyle: any = {
        general: {
            normal: 'lview-ovw-item',
            selected: 'lview-ovw-item-selected'
        }
    } 

    public lviewOverviewRatingStyleStars: any = {
        general: { normal: 'lview-ovw-rating-ctrl' },
        content: { normal: 'lview-ovw-rating-ctrl-stars-content'}
    }

    constructor(){
        this.items = [
            { id: 1, icon: "sci-fi", text: "Star Trek", year: "2009", rating: 8.1 },
            { id: 2, icon: "adventure", text: "Cast Away", year: "2000", rating: 7.7  },
            { id: 3, icon: "action", text: "Gladiator ", year: "2000", rating: 8.5 },
            { id: 4, icon: "drama", text: "Malèna", year: "2000", rating: 7.5 },
            { id: 5, icon: "music", text: "Moulin Rouge", year: "2001", rating: 7.6 },
            { id: 6, icon: "comedy", text: "Snatch", year: "2000", rating: 8.3  },
            { id: 7, icon: "biography", text: "A Beautiful Mind", year: "2001", rating: 8.2  },
            { id: 8, icon: "crime", text: "Black Hawk Down", year: "2001", rating: 7.7 },
            { id: 9, icon: "western", text: "Django Unchained", year: "2012", rating: 8.5  },
            { id: 10, icon: "sci-fi", text: "Man of Steel", year: "2013", rating: 7.2 },
            { id: 11, icon: "horror", text: "The Ring", year: "2002", rating: 7.1 },
            { id: 12, icon: "romance", text: "40 Days and 40 Nights", year: "2002", rating: 5.6 },
            { id: 13, icon: "sci-fi", text: "Minority Report", year: "2002", rating: 7.7 },
            { id: 14, icon: "comedy", text: "Scary Movie 3", year: "2003", rating: 5.5 },
            { id: 15, icon: "music", text: "Walk the Line", year: "2005", rating: 7.9  },
            { id: 16, icon: "romance", text: "How to Lose a Guy in 10 Days", year: "2003", rating: 6.4 },
            { id: 17, icon: "crime", text: "The Dark Knight", year: "2008", rating: 9.1  },
            { id: 18, icon: "horror", text: "American Psycho", year: "2000", rating: 7.6 },
            { id: 19, icon: "drama", text: "The Grand Budapest Hotel", year: "2014", rating: 8.1 },
            { id: 20, icon: "comedy", text: "The Wolf of Wall Street", year: "2013", rating: 8.2 }
        ];
    } 

    isScrollHorizontal(){
        return this.scrollType == IntegralUIScrollMode.Horizontal ? true : false;
    }

    isScrollVertical(){
        return this.scrollType == IntegralUIScrollMode.Vertical ? true : false;
    }

    scrollTypeClicked(flag?: boolean){
        if (flag)
            this.scrollType = IntegralUIScrollMode.Vertical;
        else
            this.scrollType = IntegralUIScrollMode.Horizontal;
    }

    getRating(value: any){
        return "app/resources/star.png";
    }

    getRatingValue(value: any){
        return Math.floor((value + 1) / 2);
    }

    itemSelectionChanged(e: any){
        this.currentSelection = e.item;
    }
}
