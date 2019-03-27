/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, HostListener, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUIListBox } from '../../integralui/components/integralui.listbox';

@Component({
    selector: '',
    template: `
        <style>
            .listbox-keynav-normal
            {
                width: 700px;
                height: 400px;
            }
            .listbox-keynav-ctrl-button
            {
                margin: 20px 10px 0 0;
                width: 75px;
            }
            .listbox-keynav-input-numeric
            {
                margin: 5px 20px 5px 0;
                width: 75px;
            }
            .listbox-keynav-item-label
            {
                padding: 1px 0;
            }
        </style>
        <h2 class="feature-title">ListBox / Keyboard Navigation</h2>
        <div class="feature-content">
            <div style="width:700px;" #application>
                <iui-listbox #listbox [appRef]="applicationRef" [items]="items" [allowDrag]="true" [allowFocus]="true" [controlStyle]="listStyle" [virtualMode]="true">
                    <ng-template let-item>
                        <span class="listbox-keynav-item-label">{{item.text}}</span>
                    </ng-template>
                </iui-listbox>
                <br />
                <div align="center">
                    <span>Max items:</span> <input class="listbox-keynav-input-numeric" type="number" [(ngModel)]="numItems" min="1" max="100000" />
                    <button (click)="add()" class="listbox-keynav-ctrl-button">Add</button>
                    <button (click)="clear()" class="listbox-keynav-ctrl-button">Clear</button>
                </div>
            </div>
            <br style="clear:both;"/>
            <div class="feature-help" style="width:800px;">
                <p><span class="initial-space"></span>This sample demonstrates keyboard navigation in ListBox component.</p>
                <p><span class="initial-space"></span>You can navigate among items using the following keys:</p>
                <ul class="feature-points">
                    <li><span style="color:#c60d0d">Up Arrow</span> - moves the focus to one item up</li>
                    <li><span style="color:#c60d0d">Down Arrow</span> - moves the focus to one item down</li>
                    <li><span style="color:#c60d0d">PageUp</span> - moves one view up</li>
                    <li><span style="color:#c60d0d">PageDown</span> - moves one view down</li>
                    <li><span style="color:#c60d0d">Home</span> - moves the focus to the first item</li>
                    <li><span style="color:#c60d0d">End</span> - moves the focus to the last item</li>
                </ul>
                <p><span class="initial-space"></span>During navigation, if focused item is not present in current view, the list is scrolled accordingly.</p>
                <p><span class="initial-space"></span>For more information check out the source code of this sample (<i>listbox/listbox-keyboard.ts</i>) file.</p> 
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ListBoxKeyboardSample {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('listbox') listbox: IntegralUIListBox;

    public items: Array<any>;

    public numItems: number = 1000;

    public scrollType: string = 'vertical';  

    public listStyle: any = {
        general: {
            normal: 'listbox-keynav-normal'
        }
    }

    constructor(){
        this.items = [];
    } 
    
    ngAfterViewInit(){
        let self = this;
        setTimeout(function(){
            self.add();
        }, 250);
    }

    addItems(){
        for (let i = 1; i <= this.numItems; i++){
            let item: any = {
                text : 'Item ' + i.toString(),
                id: i
            };

            this.items.push(item);
        }
    }

    add(){
        this.clear();
        this.addItems();

        this.listbox.updateLayout();
    }

    clear(){
        this.listbox.clearItems();
        this.listbox.updateLayout();
    }
}
