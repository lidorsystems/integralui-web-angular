import { Component, enableProdMode, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUIGrid } from '../../integralui/components/integralui.grid';

enableProdMode();

@Component({
    selector: 'iui-app',
    template: `
        <style>
            .grid-atsc-app .iui-grid-grouping-panel-dropdown-list
            {
                width: 150px;
            }
            .grid-atsc-normal
            {
                width: 800px;
                height: 460px;
            }
            .grid-atsc-normal .iui-grid-expand-box
            {
                margin-top: 5px;
            }
            .grid-atsc-icons
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
            .mystery
            {
                background-position: -96px 0;
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

            /* CheckBox Cell */
            .grid-atsc-cell-checkbox
            {
                background: url(app/resources/checkbox/checkbox-unchecked-1.png) no-repeat 0 0;
                display: inline-block;
                padding: 0;
                margin: 5px 7px 0 7px;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }
            .grid-atsc-cell-checkbox-true
            {
                background: url(app/resources/checkbox/checkbox-checked-1.png) no-repeat 0 0;
            }

            /* Rating Cell */
            .grid-atsc-cell-rating
            {
                margin: 5px 0 0 0;
                vertical-align: middle;
            }

            /* Label Cell */
            .grid-atsc-cell-label
            {
                display: inline-block;
                margin-top: 5px;
            }
        </style>
        <h2 class="feature-title">Grid / Auto-Size Columns</h2>
        <div class="feature-content">
            <div #application>
                <iui-grid [autoSizeColumns]="true" [columns]="columns" [rows]="rows" [controlStyle]="gridStyle" [showFooter]="false" [rowHeight]="26" #grid>
                    <ng-template let-column [iuiTemplate]="{ type: 'header' }">
                        <span *ngIf="column.id==1" class="grid-atsc-cell-checkbox" [ngClass]="{ 'grid-atsc-cell-checkbox-true': column.value }" (mousedown)="columnCheckClicked($event, column)"></span>
                        {{column.headerText}}
                    </ng-template>
                    <ng-template let-cell [iuiTemplate]="{ type: 'cell' }">
                        <span [ngSwitch]="cell.cid">
                            <span *ngSwitchCase="2"> <!-- TITLE -->
                                <span class="grid-atsc-cell-label">{{cell.text}}</span>
                            </span>
                            <div *ngSwitchCase="1">
                                <span class="grid-atsc-cell-checkbox" [ngClass]="{ 'grid-atsc-cell-checkbox-true': cell.value }" (mousedown)="checkBoxClicked(cell)"></span>
                            </div>
                            <span *ngSwitchCase="4"> <!-- GENRE -->
                                <span class="grid-atsc-icons {{cell.icon}}"></span>
                            </span>
                            <span *ngSwitchCase="5"> <!-- RATING -->
                                <img class="grid-atsc-cell-rating" src="{{getCellRating(cell)}}" />
                            </span>
                            <span *ngSwitchDefault>
                                <span class="grid-atsc-cell-label">{{cell.text}}</span>
                            </span>
                        </span>
                    </ng-template>
                </iui-grid>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:900px">
                <p><span class="initial-space"></span>This demo shows columns where they occupy the width of Angular Grid component in whole. Whenever column width changes, other columns automatically change their size to fill the available grid space. Each column can auto size within its minimum and maximum width set.</p>
                <p><span class="initial-space"></span>Some columns are better to have a fixed width, or to resize only in specific range. For this purpose, you can use the following fields of column object:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">allowResize</span> - (true or false) determines whether column can resize during run-time
                    <li><span style="color:#c60d0d">fixedWidth</span> - (true or false) determines whether the column width is fixed or not
                    <li><span style="color:#c60d0d">minWidth</span> - (number) specifies the lowest width the column can have
                    <li><span style="color:#c60d0d">maxWidth</span> - (number) specifies the highest width the column can have
                </ul>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>grid/grid-auto-size-columns.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class GridAutoSizeColumnsSample {
    @ViewChild('grid', { static: false }) grid: IntegralUIGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public gridStyle: any = {
        general: {
            normal: 'grid-atsc-normal'
        }
    }

    constructor(){
        this.columns = [
            { id: 2, headerText: "Title", width: 350 },
            { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
            { id: 1, contentAlignment: 'center', width: 30, fixedWidth: true },
            { id: 4, headerText: "Genre", headerAlignment: "center", contentAlignment: "center", width: 50, visible: false },
            { id: 5, headerText: "Ratings", headerAlignment: "center", contentAlignment: "center", width: 120, minWidth: 90 },
            { id: 6, headerText: "Released", allowGrouping: false, headerAlignment: "center", contentAlignment: "center", width: 130 }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Inception",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Inception" }, { cid: 3, text: "2010" }, { cid: 4, text: "Adventure", icon: "adventure" }, { cid: 5, value: 8.8 }, { cid: 6, text: "16 Jul 2010" } ]
            },
            { 
                id: 2,
                text: "Gravity",
                cells: [{ cid: 1 }, { cid: 2, text: "Gravity" }, { cid: 3, text: "2013" }, { cid: 4, text: "Sci-Fi", icon: "sci-fi" }, { cid: 5, value: 7.9 }, { cid: 6, text: "04 Oct 2013" } ]
            },
            { 
                id: 3,
                text: "Django Unchained",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Django Unchained" }, { cid: 3, text: "2012" }, { cid: 4, text: "Western", icon: "western" }, { cid: 5, value: 8.5 }, { cid: 6, text: "25 Dec 2012" } ]
            },
            { 
                id: 4,
                text: "Toy Story 3",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Toy Story 3" }, { cid: 3, text: "2010" }, { cid: 4, text: "Animation", icon: "animation" }, { cid: 5, value: 8.4 }, { cid: 6, text: "18 Jun 2010" } ]
            },
            { 
                id: 5,
                text: "The Wolf of Wall Street",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "The Wolf of Wall Street" }, { cid: 3, text: "2013" }, { cid: 4, text: "Comedy", icon: "comedy" }, { cid: 5, value: 8.2 }, { cid: 6, text: "25 Dec 2013" } ]
            },
            { 
                id: 6,
                text: "The Town",
                cells: [{ cid: 1 }, { cid: 2, text: "The Town" }, { cid: 3, text: "2010" }, { cid: 4, text: "Action", icon: "action" }, { cid: 5, value: 7.6 }, { cid: 6, text: "17 Sep 2010" } ]
            },
            { 
                id: 7,
                text: "Nightcrawler",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Nightcrawler" }, { cid: 3, text: "2014" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 7.9 }, { cid: 6, text: "31 Oct 2014" } ]
            },
            { 
                id: 8,
                text: "Locke",
                cells: [{ cid: 1 }, { cid: 2, text: "Locke" }, { cid: 3, text: "2014" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 7.1 }, { cid: 6, text: "29 May 2014" } ]
            },
            { 
                id: 9,
                text: "Prometheus",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Prometheus" }, { cid: 3, text: "2012" }, { cid: 4, text: "Sci-Fi", icon: "sci-fi" }, { cid: 5, value: 7.0 }, { cid: 6, text: "08 Jun 2012" } ]
            },
            { 
                id: 10,
                text: "The Social Network",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "The Social Network" }, { cid: 3, text: "2010" }, { cid: 4, text: "Biography", icon: "biography" }, { cid: 5, value: 7.8 }, { cid: 6, text: "01 Oct 2010" } ]
            },
            { 
                id: 11,
                text: "The Conjuring",
                cells: [{ cid: 1 }, { cid: 2, text: "The Conjuring" }, { cid: 3, text: "2013" }, { cid: 4, text: "Horror", icon: "horror" }, { cid: 5, value: 7.5 }, { cid: 6, text: "19 Jul 2013" } ]
            },
            { 
                id: 12,
                text: "Blue Jasmine",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Blue Jasmine" }, { cid: 3, text: "2013" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 7.3 }, { cid: 6, text: "23 Aug 2013" } ]
            },
            { 
                id: 13,
                text: "Black Swan",
                cells: [{ cid: 1 }, { cid: 2, text: "Black Swan" }, { cid: 3, text: "2010" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 8.0 }, { cid: 6, text: "17 Dec 2010" } ]
            },
            { 
                id: 14,
                text: "Prisoners",
                cells: [{ cid: 1 }, { cid: 2, text: "Prisoners" }, { cid: 3, text: "2013" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 8.1 }, { cid: 6, text: "20 Sep 2013" } ]
            },
            { 
                id: 15,
                text: "The Avengers",
                cells: [{ cid: 1 }, { cid: 2, text: "The Avengers" }, { cid: 3, text: "2012" }, { cid: 4, text: "Sci-Fi", icon: "sci-fi" }, { cid: 5, value: 8.2 }, { cid: 6, text: "04 May 2012" } ]
            },
            { 
                id: 16,
                text: "Snowpiercer",
                cells: [{ cid: 1 }, { cid: 2, text: "Snowpiercer" }, { cid: 3, text: "2014" }, { cid: 4, text: "Action", icon: "action" }, { cid: 5, value: 7.0 }, { cid: 6, text: "11 Jul 2014" } ]
            },
            { 
                id: 17,
                text: "The Dark Knight Rises",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "The Dark Knight Rises" }, { cid: 3, text: "2012" }, { cid: 4, text: "Action", icon: "action" }, { cid: 5, value: 8.5 }, { cid: 6, text: "20 Jul 2012" } ]
            },
            { 
                id: 18,
                text: "American Hustle",
                cells: [{ cid: 1 }, { cid: 2, text: "American Hustle" }, { cid: 3, text: "2013" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 7.3 }, { cid: 6, text: "20 Dec 2013" } ]
            },
            { 
                id: 19,
                text: "Dawn of the Planet of the Apes",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Dawn of the Planet of the Apes" }, { cid: 3, text: "2014" }, { cid: 4, text: "Sci-Fi", icon: "sci-fi" }, { cid: 5, value: 7.7 }, { cid: 6, text: "11 Jul 2014" } ]
            },
            { 
                id: 20,
                text: "Frozen",
                cells: [{ cid: 1 }, { cid: 2, text: "Frozen" }, { cid: 3, text: "2013" }, { cid: 4, text: "Animation", icon: "animation" }, { cid: 5, value: 7.7 }, { cid: 6, text: "27 Nov 2013" } ]
            },
            { 
                id: 21,
                text: "Edge of Tomorrow",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Edge of Tomorrow" }, { cid: 3, text: "2014" }, { cid: 4, text: "Action", icon: "action" }, { cid: 5, value: 7.9 }, { cid: 6, text: "06 Jun 2014" } ]
            },
            { 
                id: 22,
                text: "Interstellar",
                cells: [{ cid: 1 }, { cid: 2, text: "Interstellar" }, { cid: 3, text: "2014" }, { cid: 4, text: "Sci-Fi", icon: "sci-fi" }, { cid: 5, value: 8.7 }, { cid: 6, text: "07 Nov 2014" } ]
            },
            { 
                id: 23,
                text: "Rush",
                cells: [{ cid: 1 }, { cid: 2, text: "Rush" }, { cid: 3, text: "2013" }, { cid: 4, text: "Action", icon: "action" }, { cid: 5, value: 8.2 }, { cid: 6, text: "27 Sep 2013" } ]
            },
            { 
                id: 24,
                text: "Shutter Island",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Shutter Island" }, { cid: 3, text: "2010" }, { cid: 4, text: "Mystery", icon: "mystery" }, { cid: 5, value: 8.1 }, { cid: 6, text: "19 Feb 2010" } ]
            },
            { 
                id: 25,
                text: "This Is the End",
                cells: [{ cid: 1 }, { cid: 2, text: "This Is the End" }, { cid: 3, text: "2013" }, { cid: 4, text: "Comedy", icon: "comedy" }, { cid: 5, value: 5.7 }, { cid: 6, text: "12 Jun 2013" } ]
            },
            { 
                id: 26,
                text: "Titanic",
                cells: [{ cid: 1 }, { cid: 2, text: "Titanic" }, { cid: 3, text: "1997" }, { cid: 4, text: "Romance", icon: "romance" }, { cid: 5, value: 7.8 }, { cid: 6, text: "19 Dec 1997" } ]
            },
            { 
                id: 27,
                text: "The Martian",
                cells: [{ cid: 1 }, { cid: 2, text: "The Martian" }, { cid: 3, text: "2015" }, { cid: 4, text: "Adventure", icon: "adventure" }, { cid: 5, value: 8.0 }, { cid: 6, text: "02 Oct 2015" } ]
            }
        ];
    } 

    ngAfterViewInit(){
        if (this.grid)
            for (let i = 0; i < this.rows.length; i++){
                let cellGenre = this.grid.getCellByColumnId(this.rows[i].cells, 4);
                if (cellGenre)
                    cellGenre.value = cellGenre.icon;

                let cellRating = this.grid.getCellByColumnId(this.rows[i].cells, 5);
                if (cellRating)
                    cellRating.text = this.getRatingValue(cellRating.value);
            }
    }

    // CheckBox Cell ---------------------------------------------------------------------

    public checkBoxClicked(cell: any){
        if (cell){
            let currentValue = cell.value == true ? true : false;
            cell.value = !currentValue;
        }
    }

    public columnCheckClicked(e: any, column: any){
        if (column){
            let currentValue = column.value == true ? true : false;
            column.value = !currentValue;

            let list = this.grid.getList();
            for (let i = 0; i < list.length; i++){
                let cell = this.getCellWithCheckBox(list[i]);
                if (cell)
                    cell.value = column.value;
            }
        }

        e.stopPropagation();
    }

    private getCellWithCheckBox(row: any){
        let found: any = null;

        for (let j = 0; j < row.cells.length; j++){
            if (row.cells[j].cid == 1){
                found = row.cells[j];
                break;
            }

        }

        return found;
    }

    // Ratings Cell ----------------------------------------------------------------------

    private getRatingValue(value: number){
        return Math.floor(value / 2).toString();
    }

    public getCellRating(cell: any): string {
        let retValue: string = 'app/resources/stars-small.png';

        if (cell.value){
            let rating = this.getRatingValue(cell.value);
            retValue = 'app/resources/stars-small-' + rating + '.png';
        }

        return retValue;
    }
}
