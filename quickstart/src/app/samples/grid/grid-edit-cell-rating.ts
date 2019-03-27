/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUIEditorType, IntegralUIIncrementMode } from '../../integralui/components/integralui.core';
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            /* Grid */
            .grid-cellrtg-normal {
                width: 600px;
                height: 400px;
            }
            .grid-cellrtg-normal .iui-grid-lines-both {
                border-bottom: thin solid #d9d9d9;
            }
            .grid-cellrtg-normal .iui-grid-row-cell:last-child {
                border-right: thin solid #d9d9d9;
            }
            .grid-cellrtg-label {
                display: block;
                padding: 7px 0;
            }

            .grid-cellrtg-rating {
                background: transparent;
                border: 0;
                height: 22px;
            }
            .grid-cellrtg-rating-content {
                background-image: url(app/integralui/resources/rating/star-2-empty.png);
                height: 22px;
            }
            .grid-cellrtg-rating-value {
                background-image: url(app/integralui/resources/rating/star-2-full.png);
                height: 22px;
            }
       </style>
        <h2 class="feature-title">Grid / Edit Cell with Rating</h2>
        <div class="feature-content">
            <div #application>
                <iui-grid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [showFooter]="false" (cellValueChanged)="ratingChanged($event)" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span class="grid-cellrtg-label">{{column.headerText}}</span>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span class="grid-cellrtg-label">{{cell.text}}</span>
                    </ng-template>
                </iui-grid>
            </div>
            <div class="feature-help">
                <p><span class="initial-space"></span>An example of a Grid cell with a built-in rating component as editor. The Rating Editor is fully customizable, you can use your own images for rating values, all done through CSS.</p>
                <p><span class="initial-space"></span>In this example, the gold stars as ratings are replaced by white star on gray and red background. By clicking inside the rating space and move the cursor while you hold the left mouse button, you can change the rating value for each grid cell individually. You can also change the rating by single click or with mouse scroll. Whenever rating changes, the console log displays a message from the event fired when cell value is changed.</p>
                <p><span class="initial-space"></span>To enable the Rating editor, in <strong>column object</strong> you need to set the following fields:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">editorType</span> - determines the editor type in use, in this case <span style="color:#2424dd">IntegralUIEditorType.<strong>Rating</strong></span></li>
                    <li><span style="color:#c60d0d">editorSettings</span> - specifies whether two or three state values are in use and the editor style</li>
                </ul>
                <p><span class="initial-space"></span>When editor is set in this way, all cells that belong to specified column will display a rating. You can modify this by changing the editor visibility in the cell object using the editorSettings field. In addition, you can also set whether the editor is enabled or disabled. The <strong>cell object</strong> has the following editorSettings fields:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">enabled</span> - determines whether the editor is enabled or disabled, by default is set to true</li>
                    <li><span style="color:#c60d0d">visible</span> - determines whether the editor is visible or hidden, by default is set to <span style="color:#2424dd">IntegralUIVisibility</span>.None</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-edit-cell-rating.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridEditCellRatingSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('grid') grid: IntegralUIGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public gridStyle: any = {
        general: {
            normal: 'grid-cellrtg-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 2, headerText: "Title", width: 300},
            { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
            { 
                id: 4, 
                contentAlignment: "center", 
                headerText: "Ratings", 
                headerAlignment: "center", 
                editorType: IntegralUIEditorType.Rating,
                editorSettings: {
                    //increment: IntegralUIIncrementMode.Partial,
                    //division: 5,
                    //max: 10,
                    stepSize: 22,
                    style: {
                        general: {
                            normal: 'grid-cellrtg-rating'
                        },
                        content: {
                            normal: 'grid-cellrtg-rating-content'
                        },
                        rating: {
                            normal: 'grid-cellrtg-rating-value'
                        }
                    }
                },
                width: 150

            }
        ];

        this.rows = [
            { 
                id: 11,
                pid: 1,
                text: "Inception",
                cells: [ { cid: 2, text: "Inception" }, { cid: 3, text: "2010" }, { cid: 4, value: 4 } ]
            },
            { 
                id: 12,
                pid: 1,
                text: "Snowpiercer",
                cells: [ { cid: 2, text: "Snowpiercer" }, { cid: 3, text: "2014" }, { cid: 4, value: 3 } ]
            },
            { 
                id: 13,
                pid: 1,
                text: "Shutter Island",
                cells: [ { cid: 2, text: "Shutter Island" },  { cid: 3, text: "2010" }, { cid: 4, value: 4 } ]
            },
            { 
                id: 21,
                pid: 2,
                text: "Gravity",
                cells: [ { cid: 2, text: "Gravity" }, { cid: 3, text: "2013" }, { cid: 4, value: 4 } ]
            },
            { 
                id: 22,
                pid: 2,
                text: "Prometheus",
                cells: [ { cid: 2, text: "Prometheus" }, { cid: 3, text: "2012" }, { cid: 4, value: 3 } ]
            },
            { 
                id: 23,
                pid: 2,
                text: "The Avengers",
                cells: [ { cid: 2, text: "The Avengers" }, { cid: 3, text: "2012" }, { cid: 4, value: 4 } ]
            },
            { 
                id: 24,
                pid: 2,
                text: "Dawn of the Planet of the Apes",
                cells: [ { cid: 2, text: "Dawn of the Planet of the Apes" }, { cid: 3, text: "2014" }, { cid: 4, value: 3 } ]
            },
            { 
                id: 25,
                pid: 2,
                text: "Interstellar",
                cells: [ { cid: 2, text: "Interstellar" }, { cid: 3, text: "2014" }, { cid: 4, value: 5 } ]
            },
            { 
                id: 31,
                pid: 3,
                text: "Edge of Tomorrow",
                cells: [ { cid: 2, text: "Edge of Tomorrow" }, { cid: 3, text: "2014" }, { cid: 4, value: 4 } ]
            },
            { 
                id: 32,
                pid: 3,
                text: "The Dark Knight Rises",
                cells: [ { cid: 2, text: "The Dark Knight Rises" }, { cid: 3, text: "2012" }, { cid: 4, value: 5 } ]
            },
            { 
                id: 41,
                pid: 4,
                text: "Locke",
                cells: [ { cid: 2, text: "Locke" }, { cid: 3, text: "2014" }, { cid: 4, value: 3 } ]
            },
            { 
                id: 42,
                pid: 4,
                text: "Blue Jasmine",
                cells: [ { cid: 2, text: "Blue Jasmine" }, { cid: 3, text: "2013" }, { cid: 4, value: 2 } ]
            },
            { 
                id: 43,
                pid: 4,
                text: "Black Swan",
                cells: [ { cid: 2, text: "Black Swan" }, { cid: 3, text: "2010" }, { cid: 4, value: 4 } ]
            },
            { 
                id: 44,
                pid: 4,
                text: "American Hustle",
                cells: [ { cid: 2, text: "American Hustle" }, { cid: 3, text: "2013" }, { cid: 4, value: 3 } ]
            },
            { 
                id: 51,
                pid: 5,
                text: "The Conjuring",
                cells: [ { cid: 2, text: "The Conjuring" }, { cid: 3, text: "2013" }, { cid: 4, value: 3 } ]
            },
            { 
                id: 61,
                pid: 6,
                text: "Nightcrawler",
                cells: [ { cid: 2, text: "Nightcrawler" }, { cid: 3, text: "2014" }, { cid: 4, value: 4 } ]
            },
            { 
                id: 62,
                pid: 6,
                text: "Prisoners",
                cells: [ { cid: 2, text: "Prisoners" }, { cid: 3, text: "2013" }, { cid: 4, value: 4 } ]
            },
            { 
                id: 63,
                pid: 6,
                text: "The Town",
                cells: [ { cid: 2, text: "The Town" }, { cid: 3, text: "2010" }, { cid: 4, value: 3 } ]
            },
            { 
                id: 71,
                pid: 7,
                text: "The Social Network",
                cells: [ { cid: 2, text: "The Social Network" }, { cid: 3, text: "2010" }, { cid: 4, value: 4 } ]
            },
            { 
                id: 72,
                pid: 7,
                text: "The Wolf of Wall Street",
                cells: [ { cid: 2, text: "The Wolf of Wall Street" }, { cid: 3, text: "2013" }, { cid: 4, value: 4 } ]
            },
            { 
                id: 73,
                pid: 7,
                text: "Rush",
                cells: [ { cid: 2, text: "Rush" }, { cid: 3, text: "2013" }, { cid: 4, value: 2 } ]
            },
            { 
                id: 81,
                pid: 8,
                text: "Frozen",
                cells: [ { cid: 2, text: "Frozen" }, { cid: 3, text: "2013" }, { cid: 4, value: 3 } ]
            },
            { 
                id: 82,
                pid: 8,
                text: "Toy Story 3",
                cells: [ { cid: 2, text: "Toy Story 3" }, { cid: 3, text: "2010" }, { cid: 4, value: 4 } ]
            }
        ];
    }   

    ngAfterViewInit(){
        this.grid.selectedColumn = this.columns[0];
    }

    ratingChanged(e: any){
        console.log("Cell value changed to: ", e.value);
    }
}
