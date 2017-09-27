/*
  filename: integralui.treelist.js
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
import { Component, ComponentFactoryResolver, ContentChild, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewChildren, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUIItem, IntegralUIObjectState, IntegralUITComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
var IntegralUITreeListItem = (function (_super) {
__extends(IntegralUITreeListItem,_super);function IntegralUITreeListItem(b,c,d){var a=_super.call(this,b,c)||this;a.elemRef=b;a.commonService=c;a.baseService=d;a.templateData=[];a.parentCtrl=null;return a}IntegralUITreeListItem.prototype.ngOnInit=function(){this.templateData.push(this.data);this.parentCtrl=this.baseService.getComponent();this.generalClassName="iui-treelistitem";this.contentClassName=this.generalClassName+"-content";this.initStyle()};    return IntegralUITreeListItem;
}(IntegralUIItem));
export { IntegralUITreeListItem };
IntegralUITreeListItem.decorators = [
    { type: Component, args: [{
                selector: 'iui-treelistitem',
                template: "\n\t\t<li [ngClass]=\"getControlClass()\" (click)=\"onClick($event)\" (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\" (mouseenter)=\"onMouseEnter($event)\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\">\n\t\t\t<ng-template ngFor [ngForOf]=\"templateData\" [ngForTemplate]=\"templateRef\"></ng-template>  \n\t\t</li>\n\t",
                inputs: ['controlStyle', 'data', 'icon', 'name', 'state', 'text'],
                outputs: ['click', 'mouseDown', 'mouseEnter', 'mouseLeave', 'mouseMove', 'mouseUp'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUITreeListItem.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: IntegralUICommonService, },
    { type: IntegralUIBaseService, },
]; };
IntegralUITreeListItem.propDecorators = {
    'templateRef': [{ type: Input },],
};
var IntegralUITreeList = (function (_super) {
__extends(IntegralUITreeList,_super);
function IntegralUITreeList(c,a,d,e,f){var b=_super.call(this,d)||this;b.dataService=c;b.elemRef=a;b.commonService=d;b.cmpResolver=e;b.baseService=f;b.animSpeed=300;b.prevData=null;b.itemData=null;b.nextData=null;b.hoverItem=null;b.blockPos={top:30,left:0};b.leftBlockPos={top:30,left:-300};b.rightBlockPos={top:30,left:300};b.leftBlockWidth=0;b.blockWidth=0;b.rightBlockWidth=0;b.leftBlockOpacity=0;b.blockOpacity=1;b.rightBlockOpacity=0;b.elemSize={width:0,height:0};b.currentSelection=null;b.headerItem=
null;b.headerText="";b.trialRef=null;b.afterSelect=new EventEmitter;b.beforeSelect=new EventEmitter;b.clear=new EventEmitter;b.itemAdding=new EventEmitter;b.itemAdded=new EventEmitter;b.itemRemoving=new EventEmitter;b.itemRemoved=new EventEmitter;b.selectionChanged=new EventEmitter;b.selList=[];return b}
Object.defineProperty(IntegralUITreeList.prototype,"selectedItem",{get:function(){return this.currentSelection},set:function(c){var a={cancel:!1,header:this.headerItem,item:c};this.beforeSelect.emit(a);1!=a.cancel&&this.currentSelection!=c&&(this.currentSelection=c,c?c.items&&0<c.items.length&&(this.headerItem=c,this.headerText=c.text):(this.headerItem=null,this.headerText=this.title),this.afterSelect.emit({header:this.headerItem,item:c}),this.selectionChanged.emit(null))},enumerable:!0,configurable:!0});
IntegralUITreeList.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init([{data:this.items}]);this.itemData=this.items;this.headerText=this.title;this.generalClassName="iui-treelist";this.initStyle()};
IntegralUITreeList.prototype.ngAfterViewInit=function(){var c=this;c.blockPos.top=this.headerElem.nativeElement.offsetHeight;c.leftBlockPos.top=this.headerElem.nativeElement.offsetHeight;c.rightBlockPos.top=this.headerElem.nativeElement.offsetHeight;c.elemSize={width:c.elemRef.nativeElement.firstElementChild.clientWidth,height:c.elemRef.nativeElement.firstElementChild.clientHeight};c.leftBlockWidth=c.blockWidth=c.rightBlockWidth=c.elemSize.width;var a=setTimeout(function(){var d=c.cmpResolver.resolveComponentFactory(IntegralUITComponent);
d&&c.contentRef&&(c.trialRef=c.contentRef.createComponent(d));clearTimeout(a)},100)};IntegralUITreeList.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};IntegralUITreeList.prototype.onItemMouseEnter=function(c,a){this.hoverItem=a};IntegralUITreeList.prototype.onItemMouseLeave=function(c,a){this.hoverItem=null};
IntegralUITreeList.prototype.onItemMouseDown=function(c,a){if(1==c.buttons&&a){var d=this;if(a.items&&0<a.items.length){d.selList.push(d.headerItem);d.nextData=a.items;var e=0,f=5/d.elemSize.width,b=.5,h=1/d.elemSize.width,g=0,k=setInterval(function(){e<d.elemSize.width?(e+=10,b-=f,g+=h,d.blockPos.left=-e,d.blockOpacity=b,d.rightBlockPos.left=d.elemSize.width-e,d.rightBlockOpacity=g):(d.selectedItem=a,d.itemData=d.nextData,d.blockPos.left=0,d.blockOpacity=1,d.rightBlockPos.left=d.elemSize.width,d.rightBlockOpacity=
0,clearInterval(k))},10)}else d.selectedItem=a}};
IntegralUITreeList.prototype.onHeaderMouseDown=function(c){var a=this;if(1==c.buttons&&0<a.selList.length){var d=a.selList.length-1;a.prevData=a.selList[d]&&a.selList[d].items?a.selList[d].items:a.items;var e=0,f=5/a.elemSize.width,b=.5,h=1/a.elemSize.width,g=0,k=setInterval(function(){e<a.elemSize.width?(e+=10,b-=f,g+=h,a.blockPos.left=e,a.blockOpacity=b,a.leftBlockPos.left=e-a.elemSize.width,a.leftBlockOpacity=g):(a.selectedItem=a.selList[d],a.itemData=a.prevData,a.selList.splice(d,1),a.blockPos.left=
0,a.blockOpacity=1,a.leftBlockPos.left=-a.elemSize.width,a.leftBlockOpacity=0,clearInterval(k))},10)}};IntegralUITreeList.prototype.getItemState=function(c){return c==this.selectedItem?IntegralUIObjectState.selected:c==this.hoverItem?IntegralUIObjectState.hovered:IntegralUIObjectState.normal};    return IntegralUITreeList;
}(IntegralUIBaseComponent));
export { IntegralUITreeList };
IntegralUITreeList.decorators = [
    { type: Component, args: [{
                selector: 'iui-treelist',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\">\n\t\t\t<div class=\"iui-treelist-header\" (mousedown)=\"onHeaderMouseDown($event)\" #header>\n                <span class=\"expand-icons back\" *ngIf=\"headerItem!=null\"></span>\n                <span>{{headerText}}</span>\n\t\t\t</div>\n\t\t\t<ul class=\"iui-treelist-block\" #leftBlock [ngStyle]=\"{ 'position': 'absolute', 'top': leftBlockPos.top + 'px', 'left': leftBlockPos.left + 'px', 'width': leftBlockWidth + 'px', 'opacity': leftBlockOpacity }\">\n\t            <iui-treelistitem *ngFor=\"let item of prevData\" [text]=\"item.text\" [templateRef]=\"itemTemplate\" [data]=\"item\">\n\t\t\t\t</iui-treelistitem> \n\t\t\t</ul>\n\t\t\t<ul class=\"iui-treelist-block\" #contentBlock [ngStyle]=\"{ 'position': 'absolute', 'top': blockPos.top + 'px', 'left': blockPos.left + 'px', 'width': blockWidth + 'px', 'opacity': blockOpacity }\">\n\t            <iui-treelistitem *ngFor=\"let item of itemData\" [text]=\"item.text\" [templateRef]=\"itemTemplate\" [data]=\"item\" (mouseDown)=\"onItemMouseDown($event, item)\" (mouseEnter)=\"onItemMouseEnter($event, item)\" (mouseLeave)=\"onItemMouseLeave($event, item)\" [state]=\"getItemState(item)\">\n\t\t\t\t</iui-treelistitem> \n\t\t\t</ul>\n\t\t\t<ul class=\"iui-treelist-block\" #rightBlock [ngStyle]=\"{ 'position': 'absolute', 'top': rightBlockPos.top + 'px', 'left': rightBlockPos.left + 'px', 'width': rightBlockWidth + 'px', 'opacity': rightBlockOpacity }\">\n\t            <iui-treelistitem *ngFor=\"let item of nextData\" [text]=\"item.text\" [templateRef]=\"itemTemplate\" [data]=\"item\">\n\t\t\t\t</iui-treelistitem> \n\t\t\t</ul>\n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'state'],
                providers: [IntegralUIBaseService, IntegralUIDataService]
            },] },
];
/** @nocollapse */
IntegralUITreeList.ctorParameters = function () { return [
    { type: IntegralUIDataService, },
    { type: ElementRef, },
    { type: IntegralUICommonService, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUIBaseService, },
]; };
IntegralUITreeList.propDecorators = {
    'contentList': [{ type: ViewChildren, args: [IntegralUITreeListItem,] },],
    'contentRef': [{ type: ViewChild, args: ['contentBlock', { read: ViewContainerRef },] },],
    'headerElem': [{ type: ViewChild, args: ['header', { read: ElementRef },] },],
    'leftBlockElem': [{ type: ViewChild, args: ['leftBlock', { read: ElementRef },] },],
    'blockElem': [{ type: ViewChild, args: ['contentBlock', { read: ElementRef },] },],
    'rightBlockElem': [{ type: ViewChild, args: ['rightBlock', { read: ElementRef },] },],
    'itemTemplate': [{ type: ContentChild, args: [TemplateRef,] },],
    'items': [{ type: Input },],
    'title': [{ type: Input },],
    'selectedItem': [{ type: Input },],
    'afterSelect': [{ type: Output },],
    'beforeSelect': [{ type: Output },],
    'clear': [{ type: Output },],
    'itemAdding': [{ type: Output },],
    'itemAdded': [{ type: Output },],
    'itemRemoving': [{ type: Output },],
    'itemRemoved': [{ type: Output },],
    'selectionChanged': [{ type: Output },],
};
//# sourceMappingURL=integralui.treelist.js.map