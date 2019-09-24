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
            .lbox-dd-lblv-block {
                width: 800px;
                height: 400px;
            }

            .lbox-dd-lblv-panel {
                margin-top: 20px;
                width: 800px;
                
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -o-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .lbox-dd-lblv-panel div {
                display: inline-block;
                width: 60%;
            }
            .lbox-dd-lblv-panel div:first-of-type {
                width: 40%;
            }

            /* ListBox */
            .lbox-dd-lblv-normal
            {
                float: left;
                width: 40%;
                height: 100%;
            }
            .lbox-dd-lblv-item-content
            {
                padding: 3px;
                margin: 1px 0;
            }
            .lbox-dd-lblv-item-normal .iui-item-hovered
            {
                background: #f5f5f5 !important;
                border-color: #e5e5e5 !important;
            }
            .lbox-dd-lblv-item-normal .iui-item-selected
            {
                background-color: #e9e9e9 !important;
                border-color: #d9d9d9 !important;
                color: black !important;
            }
            .lbox-dd-lblv-title
            {
                display: inline-block;
                margin-left: 5px;
                overflow: hidden;
                text-overflow: ellipsis;
                vertical-align: middle;
                white-space: nowrap;
                width: 50%;
            }
            .lbox-dd-lblv-year
            {
                display: inline-block;
                float: right;
                margin: 7px 5px 0 0;
                text-align: center;
            }
            .lbox-dd-lblv-normal img
            {
                display: inline-block;
                text-align: center;
                vertical-align: middle;
            }     
            .lbox-dd-lblv-rating
            {
                background: transparent;
                border: 0;
                cursor: pointer;
                display: inline-block;
                float: right;
                margin: 5px auto;
                vertical-align: middle;
            }
            .lbox-dd-lblv-rating-stars-content
            {
                background-image: url(app/integralui/resources/rating/star-empty-white.png);
            }

            /* ListView */
            .lview-dd-lblv-normal {
                float: left;
                margin: 0 0 0 32px;
                width: calc(60% - 40px);
                height: 100%;
            }
            .lview-dd-lblv-normal .iui-listitem-animate
            {
                margin: 2px;
            }
            .lview-dd-lblv-custom-item
            {
                margin: 0;
                overflow: hidden;
                padding: 5px;
                text-overflow: ellipsis;
                width: 200px;
                white-space: nowrap;
            }
            .lview-dd-lblv-star
            {
                display: inline-block;
                float: right;
                vertical-align: middle;
            }
            .lview-dd-lblv-rating
            {
                display: inline-block;
                font-weight: bold;
                font-size: 0.75em;
                position: absolute;
                top: 18px;
                right: 21px;
                vertical-align: middle;
            }
            .lview-dd-lblv-item
            {
                border: thin solid #e9e9e9;
            }
            .lview-dd-lblv-title
            {
                color: black;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                vertical-align: middle;
                width: 60%;
            }

            /* Icons */
            .lbox-dd-lblv-icons, .lview-dd-lblv-icons
            {
                background: url(app/integralui/resources/movie-genres.png) no-repeat 0 0;
                display: inline-block;
                padding: 0;
                margin: 3px;
                width: 24px;
                height: 24px;
                vertical-align: middle;
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
        </style>
        <h2 class="feature-title">ListBox / Drag Drop to ListView</h2>
        <div class="feature-content">
            <div class="lbox-dd-lblv-block" #application>
                <iui-listbox [appRef]="applicationRef" [items]="lBoxItems" [controlStyle]="lBoxStyle" [allowDrag]="lBoxAllowDrag" [allowDrop]="lBoxAllowDrop" #listbox>
                    <iui-listitem *ngFor="let item of lBoxItems" [controlStyle]="lboxItemStyle" [allowAnimation]="true">  
                        <div class="lbox-dd-lblv-item-content">
                            <iui-rating [controlStyle]="lboxRatingStyle" [(ngModel)]="item.rating" [max]="5" [division]="2"></iui-rating>
                            <span class="lbox-dd-lblv-icons {{item.icon}}"></span>
                            <span class="lbox-dd-lblv-title">{{item.text}}</span>
                        </div>
                    </iui-listitem>
                </iui-listbox>
                <iui-listview [name]="'ListView'" [items]="lViewItems" [appRef]="applicationRef" [controlStyle]="lViewStyle" [allowDrag]="lViewAllowDrag" [allowDrop]="lViewAllowDrop" #listview>
                    <iui-listitem *ngFor="let item of lViewItems; let i = index" [controlStyle]="lViewItemStyle" [allowAnimation]="true">
                        <div class="lview-dd-lblv-custom-item">
                            <img class="lview-dd-lblv-star" src="{{getRating(item.rating)}}" />
                            <span class="lview-dd-lblv-rating">{{getRatingValue(item.rating)}}</span>
                            <span class="lview-dd-lblv-icons {{item.icon}}"></span>
                            <span class="lview-dd-lblv-title">{{item.text}}</span>
                        </div>
                    </iui-listitem>
                </iui-listview>
            </div>
            <div class="lbox-dd-lblv-panel">
                <div align="center">
                    <label style="margin-right:30px"><input type="checkbox" [(ngModel)]="lBoxAllowDrag" checked="checked" /> Allow Drag</label>
                    <label><input type="checkbox" [(ngModel)]="lBoxAllowDrop" checked="checked" /> Allow Drop</label>
                </div>
                <div align="center">
                    <label style="margin-right:30px"><input type="checkbox" [(ngModel)]="lViewAllowDrag" checked="checked" /> Allow Drag</label>
                    <label><input type="checkbox" [(ngModel)]="lViewAllowDrop" checked="checked" /> Allow Drop</label>
                </div>
                <br style="clear:both;"/>
            </div>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>In this example, you can drag and drop items between ListBox and ListView components. By selecting one or multiple items and using drag drop, you can reorder items in both components during run-time.</p>
                <p><span class="initial-space"></span>To select multiple items click on one item and while holding the CTRL or SHIFT key, click on another item. While item(s) is selected start dragging it by moving the mouse cursor in any direction. A small drop marker will appear showing the target item and the drop location, up/down arrow states on drop dragged item(s) will place above or below the target item.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>listbox/listbox-drag-drop-listview.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ListBoxDragDropListViewSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;

    // ListBox settings
    public lBoxItems: Array<any>;
    public lBoxAllowDrag: boolean = true;
    public lBoxAllowDrop: boolean = true;

    public lBoxStyle: any = {
        general: {
            normal: 'lbox-dd-lblv-normal'
        }
    }

    public lboxItemStyle: any = {
        general: {
            normal: 'lbox-dd-lblv-item-normal'
        }
    }

    public lboxRatingStyle: any = {
        general: { normal: 'lbox-dd-lblv-rating' },
        content: { normal: 'lbox-dd-lblv-rating-stars-content'}
    }

    // ListView settings
    public lViewItems: Array<any>;
    public lViewAllowDrag: boolean = true;
    public lViewAllowDrop: boolean = true;

    public lViewStyle: any = {
        general: {
            normal: 'lview-dd-lblv-normal'
        }
    }

    public lViewItemStyle: any = {
        general: {
            normal: 'lview-dd-lblv-item'
        }
    } 

    public lboxOverviewRatingStyleStars: any = {
        general: { normal: 'lbox-dd-lblv-rating' },
        content: { normal: 'lbox-dd-lblv-rating-stars-content'}
    }

    constructor(){
        this.lBoxItems = [
            { id: 1, icon: "sci-fi", text: "Star Trek", year: "2009", rating: 8.1 },
            { id: 2, icon: "adventure", text: "Cast Away", year: "2000", rating: 7.7  },
            { id: 3, icon: "action", text: "Gladiator ", year: "2000", rating: 8.5 },
            { id: 4, icon: "drama", text: "Malèna", year: "2000", rating: 7.5 },
            { id: 5, icon: "music", text: "Moulin Rouge", year: "2001", rating: 7.6 },
            { id: 6, icon: "comedy", text: "Snatch", year: "2000", rating: 8.3  },
            { id: 7, icon: "biography", text: "A Beautiful Mind", year: "2001", rating: 8.2  },
            { id: 8, icon: "crime", text: "Black Hawk Down", year: "2001", rating: 7.7 }
        ];

        this.lViewItems = [
            { id: 9, icon: "western", text: "Django Unchained", year: "2012", rating: 8.5  },
            { id: 10, icon: "sci-fi", text: "Man of Steel", year: "2013", rating: 7.2 },
            { id: 11, icon: "horror", allowDrag: false, text: "The Ring", year: "2002", rating: 7.1 },
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

    getRating(value: any){
        return "app/integralui/resources/star.png";
    }

    getRatingValue(value: any){
        return Math.floor((value + 1) / 2);
    }
}
