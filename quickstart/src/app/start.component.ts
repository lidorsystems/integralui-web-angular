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
import { IntegralUIScrollMode } from './integralui/components/integralui.core';

@Component({
    selector: 'start-app',
    template: `
        <style>
            .list-components
            {
                background: transparent !important;
                border: 0 !important;
                overflow: visible !important;
                margin: 0;
                width: 300px;
                height: 680px;
            }
            .list-item
            {
                display: inline-block;
                padding: 0 7px;
                overflow: hidden;
                width: 250px;
                white-space: nowrap;
            }
            .list-item-hovered, .list-item-selected
            {
                background-color: transparent;
                border-color: transparent;
            }            
            .list-item a
            {
                color: #323232;
                text-decoration: none;
            }
            .list-item-hovered a
            {
                color: #c60d0d;
                font-weight: bold;
            }
            .category
            {
                color: #565656 !important;
                font-weight: bold;
                padding: 0 7px 5px 7px;
            }
            .separator
            {
                padding: 25px 7px 0 7px;
            }
            .category-hovered, .category-selected, .separator-hovered, .separator-selected
            {
                background-color: transparent;
            }
            .label
            {
                display: inline-block;
                vertical-align: middle;
            }
            .icon
            {
                background: url(app/integralui/resources/component-icons.png) no-repeat;
                display: inline-block;
                padding: 0;
                margin: 3px;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .accordion
            {
                background-position: -24px 0;
            }
            .groupbox
            {
                background-position: -48px 0;
            }
            .combobox
            {
                background-position: -72px 0;
            }
            .slidebar
            {
                background-position: -96px 0;
            }
            .listbar
            {
                background-position: -120px 0;
            }
            .menu
            {
                background-position: -144px 0;
            }
            .contextmenu
            {
                background-position: -168px 0;
            }
            .treelist
            {
                background-position: -192px 0;
            }
            .paginator
            {
                background-position: -216px 0;
            }
            .tooltip
            {
                background-position: -240px 0;
            }
            .listbox
            {
                background-position: 0 -24px;
            }
            .listview
            {
                background-position: -24px -24px;
            }
            .grid
            {
                background-position: -48px -24px;
            }
            .treegrid
            {
                background-position: -72px -24px;
            }
            .treeview
            {
                background-position: -96px -24px;
            }
            .range
            {
                background-position: -120px -24px;
            }
            .tabstrip
            {
                background-position: -144px -24px;
            }
            .splitcontainer
            {
                background-position: -168px -24px;
            }
            .splitter
            {
                background-position: -192px -24px;
            }
            .frame
            {
                background-position: -216px -24px;
            }
            .checkbox
            {
                background-position: -240px -24px;
            }
            .button
            {
                background-position: 0 -48px;
            }
            .dialog
            {
                background-position: -24px -48px;
            }
            .dropdownbutton
            {
                background-position: -48px -48px;
            }
            .numeric-updown
            {
                background-position: -72px -48px;
            }
            .progressbar
            {
                background-position: -96px -48px;
            }
            .radiobutton
            {
                background-position: -120px -48px;
            }
            .rating
            {
                background-position: -144px -48px;
            }
            .slider
            {
                background-position: -168px -48px;
            }
            .listscroller
            {
                background-position: -192px -48px;
            }
            .calendar
            {
                background-position: -240px -48px;
            }
            .datepicker
            {
                background-position: -264px -48px;
            }
            .autocomplete
            {
                background-position: -288px 0;
            }
            .breadcrumb
            {
                background-position: -264px 0;
            }
            .popover
            {
                background-position: -288px -24px;
            }
            .toolbar
            {
                background-position: -264px -24px;
            }
        </style>
        <div class="component-list">
            <h2 class="feature-title" style="color2:#c60d0d;font-size:1.6em;margin:0 0 20px 200px;padding-left:7px;">Components by Category</h2>
            <iui-listview [items]="items" [appRef]="applicationRef" [controlStyle]="ctrlStyle" [scrollMode]="scrollType" #listview>
                <iui-listitem *ngFor="let item of items; let i = index" [controlStyle]="getItemStyle(item)" [allowAnimation]="false">
                    <div [ngSwitch]="item.tag">
                        <div *ngSwitchCase="'category'">
                            {{item.text}}
                        </div>
                        <div *ngSwitchCase="'separator'" [ngStyle]="{ height: item.size + 'px' }">
                        </div>
                        <a *ngSwitchDefault routerLink="{{item.link}}">
                            <div>
                                <span class="icon {{item.icon}}"></span>
                                <span class="label">{{item.text}}</span>
                            </div>
                        </a>
                    </div>
                </iui-listitem>
            </iui-listview>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class StartComponent {
    public items: Array<any>;

    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public scrollType: IntegralUIScrollMode = IntegralUIScrollMode.Horizontal;  

    public ctrlStyle: any = {
        general: {
            normal: 'list-components'
        }
    }

    constructor(){
        this.items = [
            { text: "DATA MANAGEMENT", tag: 'category' },
            { text: "Grid", icon: 'grid', link: '/grid' },
            { text: "ListBox", icon: 'listbox', link: '/listbox' },
            { text: "ListView", icon: 'listview', link: '/listview' },
            { text: "TreeGrid", icon: 'treegrid', link: '/treegrid' },
            { tag: 'separator' },
            { text: "EDITORS", tag: 'category' },
            { text: "Button", icon: 'button', link: '/button' },
            { text: "CheckBox", icon: 'checkbox', link: '/checkbox' },
            { text: "ComboBox", icon: 'combobox', link: '/combobox' },
            { text: "DatePicker", icon: 'datepicker', link: '/datepicker' },
            { text: "NumericUpDown", icon: 'numeric-updown', link: '/numeric-updown' },
            { text: "ProgressBar", icon: 'progressbar', link: '/progressbar' },
            { text: "Radio Button", icon: 'radiobutton', link: '/radiobutton' },
            { text: "Rating", icon: 'rating', link: '/rating' },
            { text: "Slider", icon: 'slider', link: '/slider' },
            { text: "LAYOUT", tag: 'category' },
            { text: "Accordion", icon: 'accordion', link: '/accordion' },
            { text: "GroupBox", icon: 'groupbox', link: '/groupbox' },
            { text: "SplitContainer", icon: 'splitcontainer', link: '/splitcontainer' },
            { text: "Splitter", icon: 'splitter', link: '/splitter' },
            { text: "TabStrip", icon: 'tabstrip', link: '/tabstrip' },
            { tag: 'separator' },
            { text: "NAVIGATION", tag: 'category' },
            { text: "BreadCrumb", icon: 'breadcrumb', link: '/breadcrumb' },
            { text: "ListBar", icon: 'listbar', link: '/listbar' },
            { text: "ListScroller", icon: 'listscroller', link: '/listscroller' },
            { text: "Menu", icon: 'menu', link: '/menu' },
            { text: "TreeList", icon: 'treelist', link: '/treelist' },
            { text: "TreeView", icon: 'treeview', link: '/treeview' },
            { tag: 'separator', size: 50 },
            { text: "PRESENTATION", tag: 'category' },
            { text: "SlideBar", icon: 'slidebar', link: '/slidebar' },
            { tag: 'separator', size: 0 },
            { text: "UTILITY", tag: 'category' },
            { text: "AutoComplete", icon: 'autocomplete', link: '/autocomplete' },
            { text: "Calendar", icon: 'calendar', link: '/calendar' },
            { text: "Context Menu", icon: 'contextmenu', link: '/contextmenu' },
            { text: "Dialog", icon: 'dialog', link: '/dialog' },
            { text: "DropDown Button", icon: 'dropdownbutton', link: '/dropdownbutton' },
            { text: "Paginator", icon: 'paginator', link: '/paginator' },
            { text: "PopOver", icon: 'popover', link: '/popover' },
            { text: "Range", icon: 'range', link: '/range' },
            { text: "Frame", icon: 'frame', link: '/frame' },
            { text: "Toolbar", icon: 'toolbar', link: '/toolbar' },
            { text: "Tooltip", icon: 'tooltip', link: '/tooltip' }
        ];

    } 

    ngAfterViewInit(){}

    getItemStyle(item: any): any {
        let style: any = {
            general: {
                normal: 'list-item',
                hovered: 'list-item-hovered',
                selected: 'list-item-selected'
            }
        }

        switch (item.tag){
            case 'category':
                style.general.normal = 'category';
                style.general.hovered = 'category-hovered';
                style.general.selected = 'category-selected';
                break;

            case 'separator':
                style.general.normal = 'separator';
                style.general.hovered = 'separator-hovered';
                style.general.selected = 'separator-selected';
                break;
        }

        return style;
    }
}
