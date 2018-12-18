/*
  filename: integralui.listbox.js
  version : 1.7.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])};return function(b,a){function c(){this.constructor=b}f(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_dragdrop_service_1=require("../services/integralui.dragdrop.service"),integralui_filter_service_1=require("../services/integralui.filter.service"),integralui_base_list_1=require("./integralui.base.list"),integralui_listitem_1=require("./integralui.listitem"),
IntegralUIListBox=function(f){function b(a,b,d,g,h,e,k,l){var c=f.call(this,a,b,d,g,h,e)||this;c.dataService=a;c.dragDropService=b;c.elemRef=d;c.elemRenderer=g;c.commonService=h;c.filterService=e;c.cmpResolver=k;c.baseService=l;c.trialRef=null;c.itemList=[];return c}__extends(b,f);b.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.updateData();this.updateCurrentList();this.generalClassName="iui-listbox";this.itemClassName="iui-listitem";this.itemContentClassName=this.itemClassName+
"-content";this.initStyle()};b.prototype.updateData=function(){this.dataService.init([{data:this.items}])};b.prototype.ngAfterViewInit=function(){var a=this,c=setTimeout(function(){var b=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);b&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(b));clearTimeout(c)},100);a.updateLayout()};b.prototype.ngAfterContentInit=function(){};b.prototype.ngOnDestroy=function(){this.removeDropMark();this.updateTimer&&clearTimeout(this.updateTimer);
this.trialRef&&this.trialRef.destroy()};b.prototype.ngAfterContentChecked=function(){this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight};this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height)};b.prototype.addItem=function(a){this.callEventAdd("add",
a)};b.prototype.clearItems=function(){this.dataService.clear();this.clear.emit(null)};b.prototype.insertItemAt=function(a,b){this.callEventAdd("at",a,b)};b.prototype.removeItemAt=function(a){return this.callEventRemove(null,a)};b.prototype.updateCurrentList=function(){this.currentList.length=0;var a=this.dataService.getList();if(a){this.applySorting(a);for(var b=0;b<a.length;b++)this.addItemToCurrentList(a[b])}};b.prototype.addItemToCurrentList=function(a){a.type="item";a[this.options.dataFields.id]||
(a[this.options.dataFields.id]=this.commonService.getUniqueId());this.isItemAllowed(a)&&this.currentList.push({data:a})};b.prototype.updateScrollItemList=function(){for(var a=this.scrollItemList.length=0,b=this.currentIndex;b<this.currentList.length&&b<this.currentIndex+this.visibleRange;b++,a++){var d=this.currentList[b];d={clickPos:{x:0,y:0},data:d.data,index:b-this.currentIndex,inlineStyle:this.getItemInlineStyle(d),style:{},tabIndex:a};this.updateItemStyle(d);this.scrollItemList.push(d)}};b.prototype.getItemFromComponent=
function(a){return a&&a.data?a.data:this.items&&(this.updateItemList(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};b.prototype.updateItemList=function(){this.contentList&&(this.itemList=this.contentList.toArray())};b.prototype.invokeEvent=function(a,b){if(this.isEnabled&&b)switch(a){case "ITEM_HOVER":this.itemHover.emit({item:b})}return!0};b.prototype.updateBlockSize=function(){this.blockSize={width:this.contentElem.nativeElement.offsetWidth,height:this.contentElem.nativeElement.offsetHeight}};
b.prototype.getContentSize=function(){return this.contentElem?{width:this.contentElem.nativeElement.offsetWidth,height:this.contentElem.nativeElement.offsetHeight}:{width:0,height:0}};b.prototype.getItemElemList=function(){return this.itemElems?this.itemElems.toArray():null};b.prototype.updateLayout=function(){var a=this;a.allowUpdate&&(a.resetLayoutTimer(),a.updateTimer=setTimeout(function(){a.updateCurrentList();a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth,height:a.elemRef.nativeElement.firstElementChild.clientHeight};
a.virtualMode&&a.updateScrollItemList();var b=setTimeout(function(){a.updateVisibleRange();a.virtualMode&&a.updateScrollItemList();var c=setTimeout(function(){a.updateBlockSize();var b=a.getItemElemList();a.avgItemHeight=0;if(b&&0<b.length){for(var d=0,e=0;e<b.length;e++)d+=b[e].nativeElement.offsetHeight;a.avgItemHeight=Math.floor(d/b.length)}a.animateItemSize.height=a.avgItemHeight;a.updateScrollSize();a.refresh();a.updateComplete.emit(null);clearTimeout(c)},1);clearTimeout(b)},50);clearTimeout(a.updateTimer)},
100))};b.prototype.getControlStyle=function(){var a={cursor:this.ctrlCursor,overflow:this.virtualMode?"hidden":"auto"};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};b.prototype.resetRefresh=function(){this.refreshTimer&&clearTimeout(this.refreshTimer);this.refreshTimer=null};b.prototype.refresh=function(a){this.resetRefresh();if(0!=this.virtualMode)for(this.updateControlClass(),a=0;a<this.scrollItemList.length;a++)this.updateItemStyle(this.scrollItemList[a]);
else for(this.updateItemList(),this.clearComponentSelection(),a=0;a<this.currentSelectedItems.length;a++){var b=this.getItemCurrentIndex(this.currentSelectedItems[a]);this.isComponentIndexInRange(b)&&(this.itemList[b].state|=integralui_core_1.IntegralUIObjectState.selected)}};b.decorators=[{type:core_1.Component,args:[{selector:"iui-listbox",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" (DOMMouseScroll)="processMouseWheel($event)" (mousewheel)="processMouseWheel($event)" (mouseenter)="onCtrlMouseEnter($event)" (mouseleave)="onCtrlMouseLeave($event)" (dragenter)="ctrlDragEnter($event)" (dragleave)="ctrlDragLeave($event)" (dragover)="ctrlDragOver($event)" (drop)="ctrlDragDrop($event)" (dragend)="ctrlDragEnd($event)" (scroll)="onScroll($event)">\n            <span [ngSwitch]="virtualMode" #content>\n                <span *ngSwitchCase="true">\n\t                <ul (touchstart)="ctrlTouchStart($event)" (touchend)="ctrlTouchEnd($event)" style="margin:0;padding:0;" [ngStyle]="{ width: contentSize.width + \'px\', height: contentSize.height + \'px\' }">\n\t\t\t        \t<li [ngClass]="{ \'iui-listitem-animate\': allowAnimation, \'iui-listitem-animate-enter\': allowAnimation && item.data == hoverItem }" *ngFor="let item of scrollItemList; let i = index" (mouseenter)="itemMouseEnter($event, item)" (mouseleave)="itemMouseLeave($event, item)" #itemElem>\n\t\t\t\t\t        <div [ngClass]="item.style.general" (click)="itemClickEvent($event, item)" (dblclick)="itemDblClickEvent($event, item)" (contextmenu)="itemRightClickEvent($event, item)" (mousedown)="itemMouseDown($event, item)" (mouseup)="itemMouseUp($event, item)" draggable="true" (dragstart)="itemDragStart($event, item)" (dragover)="itemDragOver($event, item, i, true)" (drop)="itemDragDrop($event, item)" [ngStyle]="item.inlineStyle">\n\t\t\t\t\t            <div [ngClass]="item.style.content" tabindex="{{item.tabIndex}}" [iuiFocus]="item.data == this.currentFocusItem" (focus)="itemGotFocus(item)" (blur)="itemLostFocus(item)" (keydown)="itemKeyDown($event, item)" (keypress)="itemKeyPress($event, item)" (keyup)="itemKeyUp($event, item)">\n\t\t\t\t\t\t\t\t\t<span [iuiTemplateOutlet]="itemTemplate" [iuiTemplateOutletContext]="{$implicit: (item.data)}"></span>\n\t\t\t\t\t            </div>\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <span *ngIf="allowAnimation && item.isClicked" class="iui-listitem-animate-select-block" [ngStyle]="{ height: animateItemSize.height + \'px\', width: item.clickPos.x + \'px\' }">\n\t\t\t\t\t\t        <span [ngClass]="{ \'iui-listitem-animate-select iui-listitem-animate-select-left\': item.isClicked }" [ngStyle]="{ height: animateItemSize.height + \'px\' }"></span>\n\t\t\t\t\t       </span>\n\t\t\t\t\t        <span *ngIf="allowAnimation && item.isClicked" class="iui-listitem-animate-select-block" [ngStyle]="{ left: item.clickPos.x + \'px\', height: animateItemSize.height + \'px\', width: contentSize.width - item.clickPos.x + \'px\' }">\n\t\t\t\t\t\t        <span [ngClass]="{ \'iui-listitem-animate-select iui-listitem-animate-select-right\': item.isClicked }" [ngStyle]="{ height: animateItemSize.height + \'px\' }"></span>\n\t\t\t\t\t        </span>\n\t\t\t           </li>\n\t\t\t\t    </ul>\n\t\t            <iui-scrollbar *ngIf="isVerScrollVisible()" [enabled]="enabled" [value]="currentScrollPos.y" [max]="maxScrollPos.y" [largeChange]="scrollLargeChange.y" [height]="scrollBarSize.height" (valueChanged)="onVerticalScrollChanged($event)" (scrollStart)="onVerticalScrollStart($event)" (scrollEnd)="onVerticalScrollEnd($event)" #verScroll></iui-scrollbar>\n\t\t            <iui-scrollbar *ngIf="isHorScrollVisible()" [enabled]="enabled" [orientation]="horScrollOrientation" [value]="currentScrollPos.x" [max]="maxScrollPos.x" [width]="scrollBarSize.width" (valueChanged)="onHorizontalScrollChanged($event)" (scrollStart)="onHorizontalScrollStart($event)" (scrollEnd)="onHorizontalScrollEnd($event)" #horScroll></iui-scrollbar>\n\t\t            <div *ngIf="isVerScrollVisible() && isHorScrollVisible()" style="background:#f5f5f5;position:absolute;right:0;bottom:0;width:16px;height:16px;"></div>\n\t            </span>\n                <span *ngSwitchDefault>\n\t\t\t\t\t<ul style="margin:0;padding:0;" #content>\n\t\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t\t</ul>\n\t            </span>\n            </span>\n\t\t</div>\n\t',
inputs:"allowDrag allowDrop allowFilter allowFocus appRef controlStyle data enabled items name selectedItem selectionMode sorting state virtualMode".split(" "),outputs:"afterSelect beforeEdit beforeSelect change clear dragEnter dragDrop dragLeave dragOver itemAdding itemAdded itemHover itemRemoving itemRemoved keyDown keyPress keyUp loadComplete scrollPosChanged selectionChanged updateComplete".split(" "),providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService]}]}];
b.ctorParameters=function(){return[{type:integralui_data_service_1.IntegralUIDataService},{type:integralui_dragdrop_service_1.IntegralUIDragDropService},{type:core_1.ElementRef},{type:core_1.Renderer},{type:integralui_common_service_1.IntegralUICommonService},{type:integralui_filter_service_1.IntegralUIFilterService},{type:core_1.ComponentFactoryResolver},{type:integralui_core_1.IntegralUIBaseService}]};b.propDecorators={contentList:[{type:core_1.ContentChildren,args:[integralui_listitem_1.IntegralUIListItem]}],
contentRef:[{type:core_1.ViewChild,args:["content",{read:core_1.ViewContainerRef}]}],contentElem:[{type:core_1.ViewChild,args:["content",{read:core_1.ElementRef}]}],itemElems:[{type:core_1.ViewChildren,args:["itemElem",{read:core_1.ElementRef}]}],itemTemplate:[{type:core_1.ContentChild,args:[core_1.TemplateRef]}]};return b}(integralui_base_list_1.IntegralUIBaseList);exports.IntegralUIListBox=IntegralUIListBox;