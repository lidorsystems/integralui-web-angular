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
import { IntegralUIDateFormat, IntegralUIEditorType, IntegralUIWeekDays } from '../../integralui/components/integralui.core';
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

@Component({
    selector: '',
    template: `
        <style>
            /* Grid */
            .grid-celldt-normal {
                width: 800px;
                height: 400px;
            }
            .grid-celldt-normal .iui-grid-lines-both {
                border-bottom: thin solid #d9d9d9;
            }
            .grid-celldt-normal .iui-grid-row-cell:last-child {
                border-right: thin solid #d9d9d9;
            }
            .grid-celldt-label {
                display: block;
                padding: 7px 0;
            }
            /*.calendar-cell {
                background: #f5fff4;
                border: thin solid #e0f2de;
            }
            .calendar-cell-grayed {
                background: #fcfcfc;
                border: thin solid #e9e9e9;
                color: red;
                opacity: 0.5;
            }
            .calendar-cell-selected {
                background: #a4c6a1;
                border: thin solid #88aa85;
                color: white;
            }
            .calendar-cell-hovered {
                background: #cae5c7;
                border: thin solid #e9e9e9;
            }
            @keyframes calendar-cell-enter
            {
                0% {       
                    background: #f5fff4;
                    border-color: #e0f2de;
                }
                100% { 
                    background: #cae5c7;
                    border-color: #e9e9e9;
                }
            }
            @keyframes calendar-cell-leave
            {
                0% {       
                    background: #cae5c7;
                    border-color: #e9e9e9;
                }
                100% { 
                    background: #f5fff4;
                    border-color: #e0f2de;
                }
            }*/
       </style>
        <h2 class="feature-title">Grid / Edit Cell with DatePicker</h2>
        <div class="feature-content">
            <div #application>
                <iui-grid [appRef]="applicationRef" [controlStyle]="gridStyle" [columns]="columns" [rows]="rows" [showFooter]="false" (cellValueChanging)="isDateInRange($event)" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span class="grid-celldt-label">{{column.headerText}}</span>
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span [ngSwitch]="cell.cid">
                            <div *ngSwitchCase="4">
                                <span class="grid-celldt-country">{{cell.text}}</span>
                            </div>
                            <span *ngSwitchDefault>
                                <span class="grid-celldt-label">{{cell.text}}</span>
                            </span>
                        </span>
                    </ng-template>
                </iui-grid>
            </div>
            <div class="feature-help">
                <p><span class="initial-space"></span>An example with Grid component where you can edit cells using a DatePicker. You can enable the built-in Date editor for all cells in specific column. In addition, see how to customize the date editor with custom CSS styles</p>
                <p><span class="initial-space"></span>To enable the checkbox editor, in <strong>column object</strong> you need to set the following fields:</p>
                <p><span class="initial-space"></span>When cell is clicked, a dropdown window will popup showing a calendar that allows you to navigate among dates from different months or years and select a new date. Once a date is selected, the grid cell value is updated accordingly</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">editorType</span> - determines the editor type in use, in this case <span style="color:#2424dd">IntegralUIEditorType.<strong>Date</strong></span></li>
                    <li><span style="color:#c60d0d">editorSettings</span> - specifies the appearance and beahvior of the editor. It has the following fields:
                        <ul class="feature-points">
                            <li>calendarSize - specifies the size of dropdown window that contains the calendar
                            <li>firstDayOfWeek - specifies which day is the first day displayed in the calendar
                            <li>format - determines how the date is displayed: Short, Long or in Custom format
                            <li>formatOptions - additional options that determines how date year, month and day are displayed. Used only if the format field is set to Custom.
                            <li>locales - a string that specifies the language used for dates
                            <li>style - an object that holds the names of CSS classes for different parts of the calendar
                        </ul>
                    </li>
                </ul>
                <p><span class="initial-space"></span>When editor is set in this way, all cells that belong to specified column will display a Date in specified format. You can modify this by changing the editor visibility in the cell object using the editorSettings field. In addition, you can also set whether the editor is enabled or disabled. The <strong>cell object</strong> has the following editorSettings fields:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">enabled</span> - determines whether the editor is enabled or disabled, by default is set to true</li>
                    <li><span style="color:#c60d0d">visible</span> - determines whether the editor is visible or hidden, by default is set to <span style="color:#2424dd">IntegralUIVisibility</span>.None</li>
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-edit-cell-datepicker.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridEditCellDatePickerSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('grid', { static: false }) grid: IntegralUIGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public gridStyle: any = {
        general: {
            normal: 'grid-celldt-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 1, headerText: "Company", width: 300 },
            { id: 2, headerText: "Price", headerAlignment: "center", contentAlignment: "right" },
            { 
                id: 3, 
                contentAlignment: "center", 
                headerText: "Date", 
                headerAlignment: "center", 
                editorType: IntegralUIEditorType.Date,
                editorSettings: {
                    calendarSize: { width: 300, height: 250 },
                    locales: 'en-GB',
                    firstDayOfWeek: IntegralUIWeekDays.Monday,
                    format: IntegralUIDateFormat.Custom,
                    formatOptions: {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }/*,
                    style: {
                        calendar: {
                            cell: {
                                grayed: 'calendar-cell-grayed',
                                hovered: 'calendar-cell-hovered',
                                normal: 'calendar-cell',
                                selected: 'calendar-cell-selected'
                            }
                        }
                    }*/
                },
                width: 150
            },
            { id: 4, headerText: "Country", headerAlignment: "center", width: 180 }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Lacus Aliquam Consulting",
                cells: [{ cid: 1, text: "Lacus Aliquam Consulting" }, { cid: 2, text: "$326.42" }, { cid: 3, value: new Date(2018, 0, 13) }, { cid: 4, icon: 'brazil', text: "Brazil" } ]
            },
            { 
                id: 2,
                text: "Magna Sed Limited",
                cells: [{ cid: 1, text: "Magna Sed Limited" }, { cid: 2, text: "$780.60" }, { cid: 3, value: new Date(2017, 3, 10) }, { cid: 4, icon: 'germany', text: "Germany" } ]
            },
            { 
                id: 3,
                text: "Nulla Foundation",
                cells: [{ cid: 1, text: "Nulla Foundation" }, { cid: 2, text: "$706.75" }, { cid: 3, value: new Date(2015, 4, 19) }, { cid: 4, icon: 'poland', text: "Poland" } ]
            },
            { 
                id: 4,
                text: "Augue LLC",
                cells: [{ cid: 1, text: "Augue LLC" }, { cid: 2, text: "$743.29" }, { cid: 3, value: new Date(2018, 5, 1) }, { cid: 4, icon: 'austria', text: "Austria" } ]
            },
            { 
                id: 5,
                text: "Porttitor Corp.",
                cells: [{ cid: 1, text: "Porttitor Corp." }, { cid: 2, text: "$196.53" }, { cid: 3, value: new Date(2017, 10, 29) }, { cid: 4, icon: 'italy', text: "Italy" } ]
            },
            { 
                id: 6,
                text: "Odio Sagittis Semper Industries",
                cells: [{ cid: 1, text: "Odio Sagittis Semper Industries" }, { cid: 2, text: "$476.05" }, { cid: 3, value: new Date(2017, 4, 3) }, { cid: 4, icon: 'spain', text: "Spain" } ]
            },
            { 
                id: 7,
                text: "Varius Orci In PC",
                cells: [{ cid: 1, text: "Varius Orci In PC" }, { cid: 2, text: "$592.57" }, { cid: 3, value: new Date(2015, 5, 23) }, { cid: 4, icon: 'india', text: "India" } ]
            },
            { 
                id: 8,
                text: "Neque Sed Sem Foundation",
                cells: [{ cid: 1, text: "Neque Sed Sem Foundation" }, { cid: 2, text: "$951.02" }, { cid: 3, value: new Date(2013, 4, 24) }, { cid: 4, icon: 'uk', text: "United Kingdom" } ]
            },
            { 
                id: 9,
                text: "Semper Erat In Company",
                cells: [{ cid: 1, text: "Semper Erat In Company" }, { cid: 2, text: "$977.49" }, { cid: 3, value: new Date(2014, 11, 24) }, { cid: 4, icon: 'turkey', text: "Turkey" } ]
            },
            { 
                id: 10,
                text: "Mi Pede Associates",
                cells: [{ cid: 1, text: "Mi Pede Associates" }, { cid: 2, text: "$875.76" }, { cid: 3, value: new Date(2015, 5, 26) }, { cid: 4, icon: 'netherlands', text: "Netherlands" } ]
            },
            { 
                id: 11,
                text: "Aliquet Incorporated",
                cells: [{ cid: 1, text: "Aliquet Incorporated" }, { cid: 2, text: "$100.27" }, { cid: 3, value: new Date(2014, 4, 12) }, { cid: 4, icon: 'netherlands', text: "Netherlands" } ]
            },
            { 
                id: 12,
                text: "Viverra LLC",
                cells: [{ cid: 1, text: "Viverra LLC" }, { cid: 2, text: "$864.68" }, { cid: 3, value: new Date(2018, 2, 26) }, { cid: 4, icon: 'brazil', text: "Brazil" } ]
            },
            { 
                id: 13,
                text: "Hymenaeos Corporation",
                cells: [{ cid: 1, text: "Hymenaeos Corporation" }, { cid: 2, text: "$444.67" }, { cid: 3, value: new Date(2017, 8, 29) }, { cid: 4, icon: 'canada', text: "Canada" } ]
            },
            { 
                id: 14,
                text: "Consectetuer Euismod Est PC",
                cells: [{ cid: 1, text: "Consectetuer Euismod Est PC" }, { cid: 2, text: "$965.14" }, { cid: 3, value: new Date(2012, 7, 26) }, { cid: 4, icon: 'sweden', text: "Sweden" } ]
            },
            { 
                id: 15,
                text: "Ultricies Sem Magna Corp.",
                cells: [{ cid: 1, text: "Ultricies Sem Magna Corp." }, { cid: 2, text: "$797.74" }, { cid: 3, value: new Date(2012, 8, 28) }, { cid: 4, icon: 'ireland', text: "Ireland" } ]
            },
            { 
                id: 16,
                text: "Proin Industries",
                cells: [{ cid: 1, text: "Proin Industries" }, { cid: 2, text: "$233.66" }, { cid: 3, value: new Date(2015, 9, 31) }, { cid: 4, icon: 'usa', text: "United States" } ]
            },
            { 
                id: 17,
                text: "Sociis Consulting",
                cells: [{ cid: 1, text: "Sociis Consulting" }, { cid: 2, text: "$333.94" }, { cid: 3, value: new Date(2015, 10, 26) }, { cid: 4, icon: 'uk', text: "United Kingdom" } ]
            },
            { 
                id: 18,
                text: "Metus Urna Convallis Corp.",
                cells: [{ cid: 1, text: "Metus Urna Convallis Corp." }, { cid: 2, text: "$772.77" }, { cid: 3, value: new Date(2012, 10, 9) }, { cid: 4, icon: 'germany', text: "Germany" } ]
            },
            { 
                id: 19,
                text: "Augue Scelerisque PC",
                cells: [{ cid: 1, text: "Augue Scelerisque PC" }, { cid: 2, text: "$676.69" }, { cid: 3, value: new Date(2017, 0, 10) }, { cid: 4, icon: 'belgium', text: "Belgium" } ]
            },
            { 
                id: 20,
                text: "Ornare Facilisis Eget LLP",
                cells: [{ cid: 1, text: "Ornare Facilisis Eget LLP" }, { cid: 2, text: "$97.52" }, { cid: 3, value: new Date(2014, 6, 25) }, { cid: 4, icon: 'turkey', text: "Turkey" } ]
            },
            { 
                id: 21,
                text: "Id Risus",
                cells: [{ cid: 1, text: "Id Risus" }, { cid: 2, text: "$692.36" }, { cid: 3, value: new Date(2015, 10, 29) }, { cid: 4, icon: 'france', text: "France" } ]
            }
        ];
    }   

    ngAfterViewInit(){
        this.grid.selectedColumn = this.columns[0];
    }

    isDateInRange(e: any){
        // Check whether the event value is a Date object
        if (Object.prototype.toString.call(e.value) === '[object Date]'){
            let year = e.value.getFullYear();

            // Cancel the event if year is outside this range
            if (year < 2010 || year > 2019)
                e.cancel = true;
        }
    }
}
