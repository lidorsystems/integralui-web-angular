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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';

@Component({
    selector: '',
    template: `
        <style>
            .trw-dfjson-normal {
                width: 400px;
                height: 400px;
            }
            .trw-dfjson-normal .iui-treeitem-animate
            {
                margin: 1px 0;
            }
            .trw-dfjson-normal .iui-treeitem-expand-box
            {
                margin-top: 6px !important;
            }
            .trw-dfjson-normal .iui-treeitem-content
            {
                padding: 3px !important;
            }
            .trw-dfjson-label {
                display: inline-block;
                margin-top: 4px;
                vertical-align: top;
            }

            .project-icons
            {
                background-image: url(app/integralui/resources/project.png);
                background-repeat: no-repeat;
                display: inline-block;
                overflow: hidden;
                padding: 0 !important;
                margin: 0 5px 0 0;
                width: 24px;
                height: 24px;
            }
            .empty
            {
                background-position: 0px 0px;
            }
            .solution
            {
                background-position: -24px 0px;
            }
            .documents
            {
                background-position: -48px 0px;
            }
            .references
            {
                background-position: -72px 0px;
            }
            .notes
            {
                background-position: -96px 0px;
            }
            .assembly
            {
                background-position: -120px 0px;
            }
            .resources
            {
                background-position: -144px 0px;
            }
            .properties
            {
                background-position: -168px 0px;
            }
            .new
            {
                background-position: -192px 0px;
            }
            .form
            {
                background-position: -216px 0px;
            }
            .empty-doc
            {
                background-position: -240px 0px;
            }
        </style>
        <h2 class="feature-title">TreeView / Load Data from JSON using Custom Data Fields</h2>
        <div class="feature-content">
            <div style="float:left">
                <iui-treeview [controlStyle]="ctrlStyle" [items]="items" [dataFields]="treeFields" [allowAnimation]="true" #treeview>
                    <ng-template let-item>
                        <span [ngClass]="item.icon"></span>
                        <span class="trw-dfjson-label">{{item.label}}</span>
                    </ng-template>
                </iui-treeview>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px">
                <p><span class="initial-space"></span>This sample shows how to populate the TreeView using JSON file as a data source. The data source has custom data fields, which are mapped to the ones used by the tree view.</p>
                <p><span class="initial-space"></span>For data binding, use the <strong>dataFields</strong> property of the TreeView component. This property accepts an object that replaces the default field names with your own.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-data-fields.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewDataFieldsSample {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef: ViewContainerRef;
    @ViewChild('treeview', { static: false }) treeview: IntegralUITreeView;

    public items: Array<any> = [];

    public ctrlStyle: any = {
        general: {
            normal: 'trw-dfjson-normal'
        }
    }

    public treeFields: any = {
        id: 'itemId',
        expanded: 'isExpanded',
        pid: 'parentId',
        items: 'children',
        text: 'label'
    }

    constructor(private http: HttpClient){
    }   

    ngAfterViewInit(){
        // Load data into the TreeView from a JSON file
        this.loadFromJSON();
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/treeview-data.json").subscribe((data: Array<any>) => {
            // Suspend the tree layout from updates, to increase performance
            self.treeview.suspendLayout();

            // Load data into the tree view
            self.treeview.loadData(data, null, self.treeFields, false);

            // Resume and update the tree layout
            self.treeview.resumeLayout();
        });
    }
}
