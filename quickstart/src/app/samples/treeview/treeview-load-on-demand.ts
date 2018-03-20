/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';

//import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

@Component({
    selector: '',
    template: `
        <style>
            .iui-treeview
            {
                background: white;
                width: 350px;
                height: 300px;
            }
        </style>
        <h2 class="feature-title">TreeView / Load on Demand</h2>
        <div class="feature-content">
            <div style="width:400px" #application>
                <iui-treeview [items]="items" [appRef]="applicationRef" (beforeExpand)="onBeforeExpand($event)" #treeview>
                    <ng-template let-item>
                        <span>{{item.text}}</span>
                    </ng-template>
                </iui-treeview>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>In above demo, when you click on expanding icon, a new random data is created and then inserted into the expanding item as its children. This process is accompanied with loading animation represented by custom loading icon that replaces the expanding icon for specified item. You can expand multiple items at once and new data will be added accordingly.</p>
                <p><span class="initial-space"></span>You can load new data from a remote JSON file or a database into a specified item. Because this sample is offline, this functionality is disabled. Check out the source code for more information about this (<i>treeview/treeview-load-on-demand.ts</i>) file, or read the following article:</p> 
                <p><span class="initial-space"></span><a href="http://www.lidorsystems.com/support/articles/angular/treeview/treeview-load-on-demand.aspx">Load Data on Demand in TreeView for Angular</a></p>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewLoadOnDemandSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeview') treeview: IntegralUITreeView;

    public items: Array<any>;

    constructor(/*private http: Http*/){
        this.items = [
            { id: 1, text: "Item 1", expanded: false, items: [], hasChildren: true },
            { id: 2, text: "Item 2", expanded: false, items: [], hasChildren: true },
            { id: 3, text: "Item 3", expanded: false, items: [], hasChildren: true }
        ];
    }

    // Make sure each node has a random set of child items
    private getChildCount(){
        return 1 + Math.floor(Math.random() * 5);
    }

    // Make sure that some child items can have children
    private itemHasChildren(){
        let num = 2 + Math.floor(Math.random() * 3);

        return num % 2 == 0 ? true : false;
    }

    // Handle the beforeExpand event to populate the expanding item with new data
    onBeforeExpand(e: any){
        let self = this;

        if (e.item.items && e.item.items.length == 0){
            // Replace the expanding icon with a loading icon
            self.treeview.beginLoad(e.item);

            let loadTimer = setTimeout(function(){
                // Get random number of child items
                let count: number = self.getChildCount();
                for (let i = 1; i <= count; i++){
                    // Create a child item
                    let childItem: any = {
                        expanded: false, 
                        hasChildren: self.itemHasChildren(), 
                        items: [],
                        text: e.item.text + i
                    }

                    // Add the child item to the expanding item
                    e.item.items.push(childItem);
                }

                // Restore the expanding icon
                self.treeview.endLoad(e.item);

                // Update the appareance of the TreeView
                self.treeview.refresh();

                // Populate the TreeView with data from a JSON file
                //self.loadFromJSON(e.item);

                clearTimeout(loadTimer);
            }, 1000);

        }
    }

    // 
    // If you load data from a JSON file use the following code
    //

    /*
    private loadFromJSON(item: any){
        // Use HTTP service to get data from the specified JSON file
        let obj: Observable<any> = this.http.get("./file.json")
                                        .map(this.extractData)
                                        .catch(this.handleError); 

        // Subscribe to the observable, so when data is ready add it to the TreeView
        obj.subscribe(data => this.addData(data, item), error => console.log(error));
    }

    private addData(data: any, item?: any){
        // Load data from JSON into the TreeView as children for specified item
        this.treeview.loadData(data, item);

        // Restore the expanding icon
        this.treeview.endLoad(item);

        // Update the appareance of the TreeView
        this.treeview.refresh();
    }

    private extractData(res: Response){
        let obj = res.json();

        return obj || { };
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else 
            errMsg = error.message ? error.message : error.toString();

        console.error(errMsg);

        return Observable.throw(errMsg);
    }
    */
}
