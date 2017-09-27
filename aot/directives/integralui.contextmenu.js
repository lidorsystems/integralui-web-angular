/*
  filename: integralui.contextmenu.js
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
import { Component, ComponentFactoryResolver, ContentChildren, Directive, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUITComponent } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIMenuItem } from '../components/integralui.menuitem';
var IntegralUIContextMenuComponent = (function (_super) {
__extends(IntegralUIContextMenuComponent,_super);function IntegralUIContextMenuComponent(a,c,d,e,f){var b=_super.call(this,d)||this;b.dataService=a;b.elemRef=c;b.commonService=d;b.cmpResolver=e;b.baseService=f;b.blockDisplay="none";b.blockElemWidth="0";b.blockElemHeight="0";b.blockOverflow="hidden";b.blockOpacity=0;b.trialRef=null;b.position={x:"0",y:"0"};b.itemClick=new EventEmitter;b.menuOpened=new EventEmitter;b.menuClosed=new EventEmitter;b.itemList=[];return b}
IntegralUIContextMenuComponent.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init(this.items);this.generalClassName="iui-contextmenu";this.initStyle()};IntegralUIContextMenuComponent.prototype.ngAfterViewInit=function(){var a=this,c=setTimeout(function(){var d=a.cmpResolver.resolveComponentFactory(IntegralUITComponent);d&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(d));clearTimeout(c)},100)};
IntegralUIContextMenuComponent.prototype.ngAfterContentInit=function(){var a=this,c=setTimeout(function(){a.elemRef.nativeElement.firstElementChild.focus();clearTimeout(c)},1)};IntegralUIContextMenuComponent.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};IntegralUIContextMenuComponent.prototype.onBlur=function(a){this.menuClosed.emit({event:a})};IntegralUIContextMenuComponent.prototype.onRightClick=function(a){a.preventDefault()};
IntegralUIContextMenuComponent.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.itemList=this.contentList.toArray(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};IntegralUIContextMenuComponent.prototype.invokeMethod=function(a,c){switch(a){case "ITEM_CLICK":this.itemClick.emit({event:c.event,item:this.getItemFromComponent(c.cmp)})}};
IntegralUIContextMenuComponent.prototype.open=function(a){var c=this;if(c.items){var d=17*c.items.length,e=0,f=0;c.blockDisplay="block";var b=setInterval(function(){e<d?(f=0==f?1:f+5,e+=f,c.blockElemHeight=e+"px",c.blockOpacity=e/d):(c.blockElemHeight="auto",c.blockOverflow="visible",c.blockOpacity=1,c.menuOpened.emit({event:a}),clearInterval(b))},15)}};    return IntegralUIContextMenuComponent;
}(IntegralUIBaseComponent));
export { IntegralUIContextMenuComponent };
IntegralUIContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'iui-contextmenu',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\" [ngStyle]=\"{ 'top': position.y, 'left': position.x, 'height': blockElemHeight, 'opacity': blockOpacity }\" (blur)=\"onBlur($event)\" (contextmenu)=\"onRightClick($event)\" tabindex=\"999\">\n\t\t\t<ul #content>\n\t\t\t\t<!-- <iui-menuitem *ngFor=\"let item of items\" [data]=\"item\" [icon]=\"item.icon\"  [text]=\"item.text\" (itemMouseDown)=\"itemClicked($event)\" [orientation]=\"vertical\"></iui-menuitem> -->\n\t\t\t\t<iui-menuitem *ngFor=\"let item of items\" [data]=\"item\" [enabled]=\"item.enabled\" [icon]=\"item.icon\"  [text]=\"item.text\" [orientation]=\"'vertical'\"></iui-menuitem>\n\t\t\t</ul>\n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'state'],
                providers: [IntegralUIBaseService, IntegralUIDataService],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIContextMenuComponent.ctorParameters = function () { return [
    { type: IntegralUIDataService, },
    { type: ElementRef, },
    { type: IntegralUICommonService, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUIBaseService, },
]; };
IntegralUIContextMenuComponent.propDecorators = {
    'contentRef': [{ type: ViewChild, args: ['content', { read: ViewContainerRef },] },],
    'contentList': [{ type: ContentChildren, args: [IntegralUIMenuItem,] },],
    'items': [{ type: Input },],
    'position': [{ type: Input },],
    'itemClick': [{ type: Output },],
    'menuOpened': [{ type: Output },],
    'menuClosed': [{ type: Output },],
};
var IntegralUIContextMenu = (function () {
function IntegralUIContextMenu(c,a,b){this.elemRef=c;this.viewContainer=a;this.cmpResolver=b;this.isMenuActive=!1;this.eventList=[];this.cmpRef=null;this.itemClick=new EventEmitter;this.menuClick=new EventEmitter;this.menuOpening=new EventEmitter;this.menuOpened=new EventEmitter;this.menuClosed=new EventEmitter}IntegralUIContextMenu.prototype.ngOnDestroy=function(){this.closeMenu()};
IntegralUIContextMenu.prototype.closeMenu=function(c){this.cmpRef&&(this.eventList&&this.eventList.forEach(function(a){return a.unsubscribe()}),this.cmpRef.destroy());c&&this.menuClosed.emit({event:c})};
IntegralUIContextMenu.prototype.onContextMenu=function(c){c.preventDefault();var a=this,b=a.contextMenuRef?a.contextMenuRef:a.settings.appRef;if(b){a.closeMenu();a.menuOpening.emit(c);var d=a.cmpResolver.resolveComponentFactory(IntegralUIContextMenuComponent);d&&(a.cmpRef=b.createComponent(d),a.cmpRef&&(b=null,a.cmpRef._component?b=a.cmpRef._component:a.cmpRef._hostElement&&(b=a.cmpRef._hostElement.component),b&&(a.isMenuActive=!0,b.position={x:c.pageX+"px",y:c.pageY+"px"},b.items=a.createMenuList(a.settings.items),
b.open(c),a.eventList.push(b.itemClick.subscribe(function(b){a.itemClick.emit(b);a.menuClick.emit(b);a.closeMenu(b)})),a.eventList.push(b.menuOpened.subscribe(function(b){a.menuOpened.emit(b)})),a.eventList.push(b.menuClosed.subscribe(function(b){a.closeMenu(b)})))))}};IntegralUIContextMenu.prototype.createMenuList=function(c){var a=[];if(c)for(var b=0;b<c.length;b++)0!=c[b].visible&&a.push(c[b]);return a};    return IntegralUIContextMenu;
}());
export { IntegralUIContextMenu };
IntegralUIContextMenu.decorators = [
    { type: Directive, args: [{
                selector: '[iuiContextMenu]'
            },] },
];
/** @nocollapse */
IntegralUIContextMenu.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
]; };
IntegralUIContextMenu.propDecorators = {
    'settings': [{ type: Input, args: ['iuiContextMenu',] },],
    'contextMenuRef': [{ type: Input },],
    'itemClick': [{ type: Output },],
    'menuClick': [{ type: Output },],
    'menuOpening': [{ type: Output },],
    'menuOpened': [{ type: Output },],
    'menuClosed': [{ type: Output },],
    'onContextMenu': [{ type: HostListener, args: ['contextmenu', ['$event'],] },],
};
//# sourceMappingURL=integralui.contextmenu.js.map