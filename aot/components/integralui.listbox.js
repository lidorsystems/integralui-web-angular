/*
  filename: integralui.listbox.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ComponentFactoryResolver, ContentChild, ContentChildren, ElementRef, Renderer, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseService, IntegralUIObjectState, IntegralUITComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIFilterService } from '../services/integralui.filter.service';
import { IntegralUIBaseList } from './integralui.base.list';
import { IntegralUIListItem } from './integralui.listitem';
var IntegralUIListBox = (function (_super) {
__extends(IntegralUIListBox,_super);function IntegralUIListBox(a,b,d,g,f,e,h,k){var c=_super.call(this,a,b,d,g,f,e)||this;c.dataService=a;c.dragDropService=b;c.elemRef=d;c.elemRenderer=g;c.commonService=f;c.filterService=e;c.cmpResolver=h;c.baseService=k;c.trialRef=null;c.itemList=[];return c}
IntegralUIListBox.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.updateData();this.updateCurrentList();this.generalClassName="iui-listbox";this.itemClassName="iui-listitem";this.itemContentClassName=this.itemClassName+"-content";this.initStyle()};IntegralUIListBox.prototype.updateData=function(){this.dataService.init([{data:this.items}])};
IntegralUIListBox.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var d=a.cmpResolver.resolveComponentFactory(IntegralUITComponent);d&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(d));clearTimeout(b)},100);a.updateLayout()};IntegralUIListBox.prototype.ngAfterContentInit=function(){};IntegralUIListBox.prototype.ngOnDestroy=function(){this.removeDropMark();this.updateTimer&&clearTimeout(this.updateTimer);this.trialRef&&this.trialRef.destroy()};
IntegralUIListBox.prototype.addItem=function(a){this.callEventAdd("add",a)};IntegralUIListBox.prototype.clearItems=function(){this.dataService.clear();this.clear.emit(null)};IntegralUIListBox.prototype.insertItemAt=function(a,b){this.callEventAdd("at",a,b)};IntegralUIListBox.prototype.removeItemAt=function(a){return this.callEventRemove(null,a)};
IntegralUIListBox.prototype.updateCurrentList=function(){this.currentList.length=0;var a=this.dataService.getList();if(a){this.applySorting(a);for(var b=0;b<a.length;b++)this.addItemToCurrentList(a[b])}};IntegralUIListBox.prototype.addItemToCurrentList=function(a){a.type="item";a[this.options.dataFields.id]||(a[this.options.dataFields.id]=this.commonService.getUniqueId());this.isItemAllowed(a)&&this.currentList.push({data:a})};
IntegralUIListBox.prototype.updateScrollItemList=function(){for(var a=this.scrollItemList.length=0,b=this.currentIndex;b<this.currentList.length&&b<this.currentIndex+this.visibleRange;b++,a++){var d={data:this.currentList[b].data,index:b-this.currentIndex,style:{},tabIndex:a};this.updateItemStyle(d);this.scrollItemList.push(d)}};
IntegralUIListBox.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.updateItemList(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};IntegralUIListBox.prototype.updateItemList=function(){this.contentList&&(this.itemList=this.contentList.toArray())};IntegralUIListBox.prototype.updateBlockSize=function(){this.blockSize={width:this.contentElem.nativeElement.offsetWidth,height:this.contentElem.nativeElement.offsetHeight}};
IntegralUIListBox.prototype.getContentSize=function(){return this.contentElem?{width:this.contentElem.nativeElement.offsetWidth,height:this.contentElem.nativeElement.offsetHeight}:{width:0,height:0}};IntegralUIListBox.prototype.getItemElemList=function(){return this.itemElems?this.itemElems.toArray():null};
IntegralUIListBox.prototype.updateLayout=function(){var a=this;a.allowUpdate&&(a.updateTimer=setTimeout(function(){a.updateCurrentList();a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth,height:a.elemRef.nativeElement.firstElementChild.clientHeight};a.virtualMode&&a.updateScrollItemList();var b=setTimeout(function(){a.updateVisibleRange();a.virtualMode&&a.updateScrollItemList();var d=setTimeout(function(){a.updateBlockSize();var b=a.getItemElemList();a.avgItemHeight=0;if(b&&
0<b.length){for(var f=0,e=0;e<b.length;e++)f+=b[e].nativeElement.offsetHeight;a.avgItemHeight=Math.floor(f/b.length)}a.updateScrollSize();a.refresh();a.updateComplete.emit(null);clearTimeout(d)},1);clearTimeout(b)},50);clearTimeout(a.updateTimer)},100))};IntegralUIListBox.prototype.resetRefresh=function(){this.refreshTimer&&clearTimeout(this.refreshTimer);this.refreshTimer=null};
IntegralUIListBox.prototype.refresh=function(a){this.resetRefresh();if(0!=this.virtualMode)for(this.updateControlClass(),a=0;a<this.scrollItemList.length;a++)this.updateItemStyle(this.scrollItemList[a]);else for(this.updateItemList(),this.clearComponentSelection(),a=0;a<this.currentSelectedItems.length;a++){var b=this.getItemCurrentIndex(this.currentSelectedItems[a]);this.isComponentIndexInRange(b)&&(this.itemList[b].state|=IntegralUIObjectState.selected)}};    return IntegralUIListBox;
}(IntegralUIBaseList));
export { IntegralUIListBox };
IntegralUIListBox.decorators = [
    { type: Component, args: [{
                selector: 'iui-listbox',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\" (mousewheel)=\"processMouseWheel($event)\" (mouseenter)=\"onCtrlMouseEnter($event)\" (mouseleave)=\"onCtrlMouseLeave($event)\" (dragleave)=\"ctrlDragLeave($event)\" (dragover)=\"ctrlDragOver($event)\" (drop)=\"ctrlDragDrop($event)\" (scroll)=\"onScroll($event)\" [ngStyle]=\"{ overflow: virtualMode != false ? 'hidden' : 'auto' }\">\n            <span [ngSwitch]=\"virtualMode\" #content>\n                <span *ngSwitchCase=\"true\">\n\t                <ul style=\"margin:0;padding:0;\" [ngStyle]=\"{ width: contentSize.width + 'px', height: contentSize.height + 'px' }\">\n\t\t\t\t        <li [ngClass]=\"item.style.general\" *ngFor=\"let item of scrollItemList; let i = index\" (click)=\"itemClickEvent($event, item)\" (mousedown)=\"itemMouseDown($event, item)\" (mouseup)=\"itemMouseUp($event, item)\" (mouseenter)=\"itemMouseEnter($event, item)\" (mouseleave)=\"itemMouseLeave($event, item)\" draggable=\"true\" (dragstart)=\"itemDragStart($event, item)\" (dragover)=\"itemDragOver($event, item, i, true)\" (drop)=\"itemDragDrop($event, item)\" #itemElem>\n\t\t\t\t            <div [ngClass]=\"item.style.content\" tabindex=\"{{item.tabIndex}}\" [iuiFocus]=\"item.data == this.currentFocusItem\" (focus)=\"itemGotFocus(item)\" (blur)=\"itemLostFocus(item)\" (keydown)=\"itemKeyDown($event, item)\" (keypress)=\"itemKeyPress($event, item)\" (keyup)=\"itemKeyUp($event, item)\">\n\t\t\t\t\t\t\t\t<span [iuiTemplateOutlet]=\"itemTemplate\" [iuiTemplateOutletContext]=\"{$implicit: (item.data)}\"></span>\n\t\t\t\t            </div>\n\t\t\t\t        </li>\n\t\t\t\t    </ul>\n\t\t            <iui-scrollbar *ngIf=\"isVerScrollVisible()\" [value]=\"currentScrollPos.y\" [max]=\"maxScrollPos.y\" [largeChange]=\"scrollLargeChange.y\" [height]=\"scrollBarSize.height\" (valueChanged)=\"onVerticalScrollChanged($event)\" (scrollStart)=\"onVerticalScrollStart($event)\" (scrollEnd)=\"onVerticalScrollEnd($event)\" #verScroll></iui-scrollbar>\n\t\t            <iui-scrollbar *ngIf=\"isHorScrollVisible()\" [orientation]=\"horScrollOrientation\" [value]=\"currentScrollPos.x\" [max]=\"maxScrollPos.x\" [width]=\"scrollBarSize.width\" (valueChanged)=\"onHorizontalScrollChanged($event)\" (scrollStart)=\"onHorizontalScrollStart($event)\" (scrollEnd)=\"onHorizontalScrollEnd($event)\" #horScroll></iui-scrollbar>\n\t\t            <div *ngIf=\"isVerScrollVisible() && isHorScrollVisible()\" style=\"background:#f5f5f5;position:absolute;right:0;bottom:0;width:16px;height:16px;\"></div>\n\t            </span>\n                <span *ngSwitchDefault>\n\t\t\t\t\t<ul style=\"margin:0;padding:0;\" #content>\n\t\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t\t</ul>\n\t            </span>\n            </span>\n\t\t</div>\n\t",
                inputs: ['allowDrag', 'allowDrop', 'allowFilter', 'allowFocus', 'appRef', 'beforeEdit', 'controlStyle', 'data', 'items', 'name', 'selectedItem', 'selectionMode', 'sorting', 'state', 'virtualMode'],
                outputs: ['afterSelect', 'beforeSelect', 'change', 'clear', 'dragDrop', 'dragOver', 'itemAdding', 'itemAdded', 'itemRemoving', 'itemRemoved', 'keyDown', 'keyPress', 'keyUp', 'loadComplete', 'scrollPosChanged', 'selectionChanged', 'updateComplete'],
                providers: [IntegralUIBaseService, IntegralUIDataService]
            },] },
];
/** @nocollapse */
IntegralUIListBox.ctorParameters = function () { return [
    { type: IntegralUIDataService, },
    { type: IntegralUIDragDropService, },
    { type: ElementRef, },
    { type: Renderer, },
    { type: IntegralUICommonService, },
    { type: IntegralUIFilterService, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUIBaseService, },
]; };
IntegralUIListBox.propDecorators = {
    'contentList': [{ type: ContentChildren, args: [IntegralUIListItem,] },],
    'contentRef': [{ type: ViewChild, args: ['content', { read: ViewContainerRef },] },],
    'contentElem': [{ type: ViewChild, args: ['content', { read: ElementRef },] },],
    'itemElems': [{ type: ViewChildren, args: ['itemElem', { read: ElementRef },] },],
    'itemTemplate': [{ type: ContentChild, args: [TemplateRef,] },],
};
//# sourceMappingURL=integralui.listbox.js.map