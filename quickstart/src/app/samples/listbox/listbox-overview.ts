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
import { IntegralUISelectionMode } from '../../integralui/components/integralui.core';

@Component({
    selector: '',
    template: `
        <style>
            .lbox-ovw-normal
            {
                width: 500px;
                height: 400px;
            }
            .lbox-ovw-item-content
            {
                border2: thin solid #f5f5f5;
                padding: 3px;
                margin: 1px 0;
            }
            .lbox-ovw-item-normal .iui-item-hovered
            {
                background: #f5f5f5 !important;
                border-color: #e5e5e5 !important;
            }
            .lbox-ovw-item-normal .iui-item-selected
            {
                background-color: #e9e9e9 !important;
                border-color: #d9d9d9 !important;
                color: black !important;
            }
            .lbox-ovw-title
            {
                display: inline-block;
                margin-left: 5px;
                overflow: hidden;
                text-overflow: ellipsis;
                vertical-align: middle;
                white-space: nowrap;
                width: 40%;
            }
            .lbox-ovw-year
            {
                display: inline-block;
                text-align: center;
                width: 30%;
            }
            .lbox-ovw-normal img
            {
                display: inline-block;
                text-align: center;
                vertical-align: middle;
            }     
            .lbox-ovw-icons
            {
                background: url(app/resources/movie-genres.png) no-repeat 0 0;
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
            .lbox-ovw-rating
            {
                background: transparent;
                border: 0;
                cursor: pointer;
                display: inline-block;
                margin: auto;
            }
            .lbox-ovw-rating
            {
                display: inline-block;
                vertical-align: middle;
            }
            .lbox-ovw-rating-stars-content
            {
                background-image: url(app/resources/rating/star-empty-white.png);
            }
        </style>
        <h2 class="feature-title">ListBox / Overview</h2>
        <div class="feature-content">
            <div #application>
                <iui-listbox [appRef]="applicationRef" [items]="items" [allowDrag]="true" [controlStyle]="listStyle" [selectionMode]="selMode" #listbox>
                    <iui-listitem *ngFor="let item of items" [controlStyle]="itemStyle" [allowAnimation]="true">  
                        <div class="lbox-ovw-item-content">
                            <span class="lbox-ovw-icons {{item.icon}}"></span>
                            <span class="lbox-ovw-title">{{item.text}}</span>
                            <span class="lbox-ovw-year">{{item.year}}</span>
                            <iui-rating [controlStyle]="lboxOverviewRatingStyleStars" [value]="getRating(item.rating)" [max]="5"></iui-rating>
                        </div>
                    </iui-listitem>
                </iui-listbox>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span><strong><span style="color:#c60d0d">IntegralUI</span> ListBox</strong> is a native Angular component that represents a list of custom HTML elements that you can reorder dynamically during run-time using drag drop operations.</p>
                <p><span class="initial-space"></span>This example displays a list of movies represented by some general info about each movie: genre, title, rating and year when it is released. By click and hold of the left mouse button, you can drag and drop each item from the list over other items. Rating is displayed using the <a routerLink="/rating">IntegralUI Rating</a> component.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>listbox/listbox-overview.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/listbox/listbox-component.aspx">Overview of IntegralUI ListBox for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ListBoxOverviewSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;

    public items: Array<any>;
    public listStyle: any = {
        general: {
            normal: 'lbox-ovw-normal'
        }
    }

    public itemStyle: any = {
        general: {
            normal: 'lbox-ovw-item-normal'
        }
    }

    public lboxOverviewRatingStyleStars: any = {
        general: { normal: 'lbox-ovw-rating' },
        content: { normal: 'lbox-ovw-rating-stars-content'}
    }

    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;

    constructor(){
        this.items = [
            { id: 1, icon: "sci-fi", text: "Star Trek", year: "2009", rating: 8.0 },
            { id: 2, icon: "adventure", text: "Cast Away", year: "2000", rating: 7.7, style: { color: 'red' }  },
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
            { id: 17, icon: "crime", text: "The Dark Knight", year: "2008", rating: 9.0  },
            { id: 18, icon: "horror", text: "American Psycho", year: "2000", rating: 7.6 },
            { id: 19, icon: "drama", text: "The Grand Budapest Hotel", year: "2014", rating: 8.1 },
            { id: 20, icon: "comedy", text: "The Wolf of Wall Street", year: "2013", rating: 8.2 }
        ];
    }   

    getRating(value: any){
        return Math.floor(value / 2);
    }
}
