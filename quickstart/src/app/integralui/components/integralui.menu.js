/*
  filename: integralui.menu.js
  version : 2.2.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])};return function(b,a){function c(){this.constructor=b}d(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_menuitem_1=require("../components/integralui.menuitem"),IntegralUIMenu=function(d){function b(a,b,f,e,g,h){var c=d.call(this,e)||this;c.dataService=a;c.elemRef=b;c.elemRenderer=f;c.commonService=e;c.cmpResolver=g;c.baseService=h;c.virtualization=!0;c.trialRef=
null;c.showAnimation=!0;c.itemClick=new core_1.EventEmitter;return c}__extends(b,d);Object.defineProperty(b.prototype,"virtualMode",{get:function(){return this.virtualization},set:function(a){this.virtualization=a;this.updateLayout()},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init([{data:this.items}]);this.generalClassName="iui-menu";this.initStyle()};b.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var c=
a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);c&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(c));clearTimeout(b)},100)};b.prototype.ngAfterContentInit=function(){this.itemList=this.contentList.toArray();this.updateLayout()};b.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};b.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.itemList=this.contentList.toArray(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?
this.items[a]:null};b.prototype.getItemParent=function(a){return this.dataService.getParent(a)};b.prototype.invokeMethod=function(a,b){if(this.isEnabled)switch(a){case "ITEM_CLICK":this.itemClick.emit({event:b.event,item:b.item})}};b.prototype.updateLayout=function(){};b.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};b.decorators=[{type:core_1.Component,args:[{selector:"iui-menu",
template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()">\n            <span [ngSwitch]="virtualMode">\n                <span *ngSwitchCase="true">\n\t\t\t\t\t<ul class="iui-menu-block" #content>\n\t\t\t\t\t\t<iui-menuitem *ngFor="let item of items" [data]="item" [items]="item.items" [enabled]="item.enabled" [icon]="item.icon" [iconUrl]="item.iconUrl"  [text]="item.text" [level]="0" [templateRef]="itemTemplate" [showAnimation]="showAnimation"></iui-menuitem>\n\t\t\t\t\t</ul>\n\t            </span>\n                <span *ngSwitchDefault>\n\t\t\t\t\t<ul class="iui-menu-block" #content>\n\t\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t\t</ul>\n\t            </span>\n            </span>\n\t\t</div>\n\t',
inputs:"controlStyle data enabled name size state".split(" "),providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService],encapsulation:core_1.ViewEncapsulation.None}]}];b.ctorParameters=function(){return[{type:integralui_data_service_1.IntegralUIDataService},{type:core_1.ElementRef},{type:core_1.Renderer},{type:integralui_common_service_1.IntegralUICommonService},{type:core_1.ComponentFactoryResolver},{type:integralui_core_1.IntegralUIBaseService}]};b.propDecorators=
{contentList:[{type:core_1.ContentChildren,args:[integralui_menuitem_1.IntegralUIMenuItem]}],contentRef:[{type:core_1.ViewChild,args:["content",{read:core_1.ViewContainerRef}]}],itemTemplate:[{type:core_1.ContentChild,args:[core_1.TemplateRef]}],appRef:[{type:core_1.Input}],items:[{type:core_1.Input}],showAnimation:[{type:core_1.Input}],virtualMode:[{type:core_1.Input}],itemClick:[{type:core_1.Output}]};return b}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIMenu=IntegralUIMenu;