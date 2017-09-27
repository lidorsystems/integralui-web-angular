/*
  filename: integralui.menu.js
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
import { Component, ComponentFactoryResolver, ContentChildren, ElementRef, EventEmitter, Input, Output, Renderer, ViewChild, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUITComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIMenuItem } from '../components/integralui.menuitem';
var IntegralUIMenu = (function (_super) {
__extends(IntegralUIMenu,_super);function IntegralUIMenu(a,c,d,e,f,g){var b=_super.call(this,e)||this;b.dataService=a;b.elemRef=c;b.elemRenderer=d;b.commonService=e;b.cmpResolver=f;b.baseService=g;b.trialRef=null;b.itemClick=new EventEmitter;return b}IntegralUIMenu.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init([{data:this.items}]);this.generalClassName="iui-menu";this.initStyle()};
IntegralUIMenu.prototype.ngAfterViewInit=function(){var a=this,c=setTimeout(function(){var d=a.cmpResolver.resolveComponentFactory(IntegralUITComponent);d&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(d));clearTimeout(c)},100)};IntegralUIMenu.prototype.ngAfterContentInit=function(){this.itemList=this.contentList.toArray();this.updateLayout()};IntegralUIMenu.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};
IntegralUIMenu.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.itemList=this.contentList.toArray(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};IntegralUIMenu.prototype.invokeMethod=function(a,c){switch(a){case "ITEM_CLICK":this.itemClick.emit({event:c.event,item:this.getItemFromComponent(c.cmp)})}};IntegralUIMenu.prototype.updateLayout=function(){};    return IntegralUIMenu;
}(IntegralUIBaseComponent));
export { IntegralUIMenu };
IntegralUIMenu.decorators = [
    { type: Component, args: [{
                selector: 'iui-menu',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\">\n\t\t\t<ul class=\"iui-menu-block\" #content>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</ul>\n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'name', 'state'],
                providers: [IntegralUIBaseService, IntegralUIDataService]
            },] },
];
/** @nocollapse */
IntegralUIMenu.ctorParameters = function () { return [
    { type: IntegralUIDataService, },
    { type: ElementRef, },
    { type: Renderer, },
    { type: IntegralUICommonService, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUIBaseService, },
]; };
IntegralUIMenu.propDecorators = {
    'contentList': [{ type: ContentChildren, args: [IntegralUIMenuItem,] },],
    'contentRef': [{ type: ViewChild, args: ['content', { read: ViewContainerRef },] },],
    'appRef': [{ type: Input },],
    'items': [{ type: Input },],
    'itemClick': [{ type: Output },],
};
//# sourceMappingURL=integralui.menu.js.map