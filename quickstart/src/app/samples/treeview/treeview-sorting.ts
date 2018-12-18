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
import { IntegralUISortOrder } from '../../integralui/components/integralui.core';
import { IntegralUITreeView } from '../../integralui/components/integralui.treeview';

@Component({
    selector: '',
    template: `
        <style>
            .trw-srt-normal
            {
                float: left;
                width: 350px;
                height: 300px;
            }
            .trw-srt-normal .iui-treeitem-content
            {
                padding: 5px;
            }
            .trw-srt-button
            {
                margin: 5px 0;
                width: 125px;
            }
        </style>
        <h2 class="feature-title">TreeView / Context Menu</h2>
        <div class="feature-content">
            <iui-treeview [items]="data" [controlStyle]="treeStyle" [allowAnimation]="true" #treeview>
                <ng-template let-item>
                    {{item.text}}
                </ng-template>
            </iui-treeview>
            <div class="control-panel" align="center" style="float:left;width:150px">
                <button class="trw-srt-button" (click)="sortAscending()">Ascending</button><br />
                <button class="trw-srt-button" (click)="sortDescending()">Descending</button>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:700px">
                <p><span class="initial-space"></span>This sample demonstrates how to sort TreeView items in ascending or descending order. By clicking on buttons on right panel, you can see how items are sorted.</p>
                <p>The following properties and methods are presented:</p>
                <ul class="feature-points" style="padding-bottom:10px;width:800px">
                    <li><span style="color:#c60d0d">sorting</span> a property which determines the sort order</li>
                    <li><span style="color:#c60d0d">sort</span> a method which sorts the TreeView items based on applied order</li>
                </ul>
                <p><span class="initial-space"></span>Sorting is performed using the item text, but if item has its value field set (it has higher priority than text), the value will be used.</p>
                <p><span class="initial-space"></span>Although in this sample a basic sorting is used (a sorting of string values), you can create your own custom sorting by providing a <span style="color:#c60d0d">comparer</span> function as a second parameter of the sort method. In this way you can create any kind of custom sort operations.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>treeview/treeview-sorting.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeViewSortingSample {
    @ViewChild('treeview') treeview: IntegralUITreeView;

    public data: Array<any>;

    public treeStyle: any = {
        general: {
            normal: 'trw-srt-normal'
        }
    }

    constructor(){
        this.data = [
            { 
                id: 1,
                text: "PC",
                items: [
                    { id: 11, pid: 1, text: "Driving/Racing", expanded: false,
                        items: [
                            { id: 111, pid: 11, text: "DiRT 3" },
                            { id: 112, pid: 11, text: "Ridge Racer Unbounded" },
                            { id: 113, pid: 11, text: "TrackMania 2" }
                        ]
                    },
                    { id: 12, pid: 1, text: "Role-Playing",
                        items: [
                            { id: 121, pid: 12, text: "Dark Souls 2" },
                            { id: 122, pid: 12, text: "Mass Effect 3" },
                            { id: 123, pid: 12, text: "The Elder Scrolls V: Skyrim" },
                            { id: 124, pid: 12, text: "Divinity: Original Sin" },
                            { id: 125, pid: 12, text: "Fallout: New Vegas" }
                        ]
                    },
                    { id: 13, pid: 1, text: "Action", expanded: false,
                        items: [
                            { id: 131, pid: 13, text: "Diablo 3" },
                            { id: 132, pid: 13, text: "Gears of War" },
                            { id: 133, pid: 13, text: "F.E.A.R." },
                            { id: 134, pid: 13, text: "Path of Exile" },
                            { id: 135, pid: 13, text: "Grand Theft Auto IV" },
                            { id: 136, pid: 13, text: "Divine Divinity" },
                            { id: 137, pid: 13, text: "The Witcher 2" }
                        ]
                    },
                    { id: 14, pid: 1, text: "Shooter", expanded: false,
                        items: [
                            { id: 141, pid: 14, text: "Battlefield: Bad Company 2" },
                            { id: 142, pid: 14, text: "Call of Duty: Black Ops" },
                            { id: 143, pid: 14, text: "BioShock Infinite" },
                            { id: 143, pid: 14, text: "Crysis 2" }
                        ]
                    }
                ]
            },
            { 
                id: 2,
                text: "Xbox One",
                items: [
                    { id: 21, pid: 2, text: "Sports", expanded: false,
                        items: [
                            { id: 211, pid: 21, text: "FIFA 14" },
                            { id: 212, pid: 21, text: "Madden NFL 25" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Adventure",
                        items: [
                            { id: 221, pid: 22, text: "Assassin's Creed IV" },
                            { id: 222, pid: 22, text: "Tomb Raider" },
                            { id: 223, pid: 22, text: "Metal Gear Solid V" }
                        ]
                    },
                    { id: 23, pid: 2, text: "Miscellaneous", expanded: false,
                        items: [
                            { id: 231, pid: 23, text: "Peggle 2" }
                        ]
                    }
                ]
            },
            { 
                id: 3,
                text: "PlayStation", 
                items: [
                    { id: 31, pid: 3, text: "First-Person",
                        items: [
                            { id: 311, pid: 31, text: "Battlefield 4" },
                            { id: 312, pid: 31, text: "Call of Duty: Ghosts" },
                            { id: 313, pid: 31, text: "Killzone: Shadow Fall" }
                        ]
                    },
                    { id: 32, pid: 3, text: "Platformer", expanded: false,
                        items: [
                            { id: 321, pid: 32, text: "Rayman Legends" },
                            { id: 322, pid: 32, text: "Rogue Legacy" },
                            { id: 323, pid: 32, text: "1001 Spikes" }
                        ]
                    },
                    { id: 33, pid: 3, text: "MMO", expanded: false,
                        items: [
                            { id: 333, pid: 33, text: "Final Fantasy XIV Online" }
                        ]
                    }
                ]
            }
        ];
    }
    
    sortAscending(){
        this.treeview.sort(IntegralUISortOrder.Ascending);
    }
    
    sortDescending(){
        this.treeview.sort(IntegralUISortOrder.Descending);
    }
}
