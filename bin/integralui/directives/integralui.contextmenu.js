/*
  filename: integralui.contextmenu.js
  version : 2.0.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(e,a){function b(){this.constructor=e}for(var c in a)a.hasOwnProperty(c)&&(e[c]=a[c]);e.prototype=null===a?Object.create(a):(b.prototype=a.prototype,new b)},__decorate=this&&this.__decorate||function(e,a,b,c){var d=arguments.length,f=3>d?a:null===c?c=Object.getOwnPropertyDescriptor(a,b):c,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(e,a,b,c);else for(var h=e.length-1;0<=h;h--)if(g=e[h])f=(3>d?g(f):3<d?g(a,b,f):
g(a,b))||f;return 3<d&&f&&Object.defineProperty(a,b,f),f},__metadata=this&&this.__metadata||function(e,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,a)},core_1=require("@angular/core"),integralui_core_1=require("../components/integralui.core"),integralui_core_2=require("../components/integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),
integralui_menuitem_1=require("../components/integralui.menuitem"),IntegralUIContextMenuComponent=function(e){function a(a,c,d,f,g){var b=e.call(this,d)||this;b.dataService=a;b.elemRef=c;b.commonService=d;b.cmpResolver=f;b.baseService=g;b.blockDisplay="none";b.blockElemWidth="0";b.blockElemHeight="0";b.blockOverflow="hidden";b.blockOpacity=0;b.trialRef=null;b.adjustment={top:0,left:0};b.autoClose=!0;b.direction=integralui_core_2.IntegralUIDirection.None;b.inverse=!1;b.mode="normal";b.position={x:0,
y:-9999999};b.itemClick=new core_1.EventEmitter;b.menuOpened=new core_1.EventEmitter;b.menuClosed=new core_1.EventEmitter;b.itemList=[];return b}__extends(a,e);a.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init(this.items);this.generalClassName="iui-contextmenu";this.initStyle()};a.prototype.ngAfterViewInit=function(){var b=this,c=setTimeout(function(){var a=b.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);a&&b.contentRef&&(b.trialRef=
b.contentRef.createComponent(a));clearTimeout(c)},100)};a.prototype.ngAfterContentInit=function(){var b=this,c=setTimeout(function(){b.elemRef.nativeElement.firstElementChild.focus();clearTimeout(c)},1)};a.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};a.prototype.onBlur=function(b){0!=this.autoClose&&this.menuClosed.emit({event:b})};a.prototype.onRightClick=function(b){b.preventDefault()};a.prototype.getItemFromComponent=function(b){return b&&b.data?b.data:this.items&&(this.itemList=
this.contentList.toArray(),b=this.itemList.indexOf(b),0<=b&&b<this.items.length)?this.items[b]:null};a.prototype.invokeMethod=function(b,c){switch(b){case "ITEM_CLICK":this.itemClick.emit({event:c.event,item:this.getItemFromComponent(c.cmp)})}};a.prototype.size=function(){return{width:this.elemRef.nativeElement.firstElementChild.offsetWidth,height:this.elemRef.nativeElement.firstElementChild.offsetHeight}};a.prototype.adjustPosition=function(b,c,a,f,e){var d=this,g=d.commonService.getShiftPos();setTimeout(function(){var b=
d.size();"manual"==c&&e&&(a.x=e.left+e.width+g.x+d.adjustment.left,a.y=e.bottom+g.y+4+d.adjustment.top,d.direction&integralui_core_2.IntegralUIDirection.Above&&(a.y-=b.height),d.inverse||d.direction&integralui_core_2.IntegralUIDirection.Left)&&(a.x-=b.width);f&&a.y+b.height>f.height&&(a.y-=a.y+b.height-f.height);d.position=a},10)};a.prototype.open=function(a,c,d,e,g){this.items&&(this.blockDisplay="block",this.blockOpacity=1,this.adjustPosition(a,c,d,e,g))};return a}(integralui_core_1.IntegralUIBaseComponent);
__decorate([core_1.ViewChild("content",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],IntegralUIContextMenuComponent.prototype,"contentRef",void 0);__decorate([core_1.ContentChildren(integralui_menuitem_1.IntegralUIMenuItem),__metadata("design:type",core_1.QueryList)],IntegralUIContextMenuComponent.prototype,"contentList",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],IntegralUIContextMenuComponent.prototype,"adjustment",void 0);
__decorate([core_1.Input(),__metadata("design:type",Boolean)],IntegralUIContextMenuComponent.prototype,"autoClose",void 0);__decorate([core_1.Input(),__metadata("design:type",Number)],IntegralUIContextMenuComponent.prototype,"direction",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean)],IntegralUIContextMenuComponent.prototype,"inverse",void 0);__decorate([core_1.Input(),__metadata("design:type",Array)],IntegralUIContextMenuComponent.prototype,"items",void 0);
__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUIContextMenuComponent.prototype,"mode",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],IntegralUIContextMenuComponent.prototype,"position",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],IntegralUIContextMenuComponent.prototype,"itemTemplate",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIContextMenuComponent.prototype,"itemClick",void 0);
__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIContextMenuComponent.prototype,"menuOpened",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIContextMenuComponent.prototype,"menuClosed",void 0);
IntegralUIContextMenuComponent=__decorate([core_1.Component({selector:"iui-contextmenu",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="{ \'top\': position.y + \'px\', \'left\': position.x + \'px\', \'height\': \'auto\', \'opacity\': blockOpacity }" (blur)="onBlur($event)" (contextmenu)="onRightClick($event)" tabindex="999">\n\t\t\t<ul #content>\n\t\t\t\t<iui-menuitem *ngFor="let item of items" [data]="item" [items]="item.items" [enabled]="item.enabled" [icon]="item.icon" [iconUrl]="item.iconUrl"  [text]="item.text" [orientation]="\'vertical\'" [level]="0" [templateRef]="itemTemplate"></iui-menuitem>\n\t\t\t</ul>\n\t\t</div>\n\t',inputs:["controlStyle",
"data","state"],providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[integralui_data_service_1.IntegralUIDataService,core_1.ElementRef,integralui_common_service_1.IntegralUICommonService,core_1.ComponentFactoryResolver,integralui_core_1.IntegralUIBaseService])],IntegralUIContextMenuComponent);exports.IntegralUIContextMenuComponent=IntegralUIContextMenuComponent;
var IntegralUIContextMenu=function(){function e(a,b,c){this.elemRef=a;this.viewContainer=b;this.cmpResolver=c;this.isMenuActive=!1;this.eventList=[];this.cmpRef=null;this.templateList=[];this.itemClick=new core_1.EventEmitter;this.menuClick=new core_1.EventEmitter;this.menuOpening=new core_1.EventEmitter;this.menuOpened=new core_1.EventEmitter;this.menuClosed=new core_1.EventEmitter}e.prototype.ngAfterContentInit=function(){this.templateList=this.templates.toArray();for(var a=0;a<this.templateList.length;a++)if(this.templateList[a].settings)switch(this.templateList[a].settings.type){case "menu-item":this.itemTemplate=
this.templateList[a].getTemplate()}};e.prototype.ngOnDestroy=function(){this.closeMenu()};e.prototype.size=function(){return{width:this.elemRef.nativeElement.offsetWidth,height:this.elemRef.nativeElement.offsetHeight}};e.prototype.closeMenu=function(a){this.cmpRef&&(this.eventList&&this.eventList.forEach(function(a){return a.unsubscribe()}),this.cmpRef.destroy());a&&this.menuClosed.emit({event:a})};e.prototype.onContextMenu=function(a){"manual"!=this.settings.position&&this.processMenuOpen(a)};e.prototype.onMouseDown=
function(a){"manual"==this.settings.position&&this.processMenuOpen(a,"manual")};e.prototype.processMenuOpen=function(a,b){a.preventDefault();var c=this,d=c.contextMenuRef?c.contextMenuRef:c.settings.appRef;if(d){c.closeMenu();var e={cancel:!1,event:a};c.menuOpening.emit(e);1!=e.cancel&&(e=c.cmpResolver.resolveComponentFactory(IntegralUIContextMenuComponent))&&(c.cmpRef=d.createComponent(e),c.cmpRef&&(d=null,c.cmpRef._component?d=c.cmpRef._component:c.cmpRef._hostElement&&(d=c.cmpRef._hostElement.component),
d&&(c.isMenuActive=!0,d.mode=b,d.items=c.createMenuList(c.settings.items),d.adjustment=c.settings.adjustment?c.settings.adjustment:{top:0,left:0},d.autoClose=void 0!=c.settings.autoClose?c.settings.autoClose:!0,d.direction=c.settings.direction?c.settings.direction:integralui_core_2.IntegralUIDirection.None,d.inverse=void 0!=c.settings.inverse?c.settings.inverse:!1,d.itemTemplate=c.itemTemplate,d.controlStyle=c.settings.style,e=c.settings.appSize?c.settings.appSize:{width:window.innerWidth,height:window.innerHeight},
"manual"==b?d.open(a,b,{x:0,y:0},e,c.elemRef.nativeElement.getBoundingClientRect()):d.open(a,b,{x:a.pageX,y:a.pageY},e),c.eventList.push(d.itemClick.subscribe(function(a){c.itemClick.emit(a);c.menuClick.emit(a);c.closeMenu(a)})),c.eventList.push(d.menuOpened.subscribe(function(a){c.menuOpened.emit(a)})),c.eventList.push(d.menuClosed.subscribe(function(a){c.closeMenu(a)})),"manual"==b&&a.stopPropagation())))}};e.prototype.createMenuList=function(a){var b=[];if(a)for(var c=0;c<a.length;c++)0!=a[c].visible&&
b.push(a[c]);return b};return e}();__decorate([core_1.ContentChildren(integralui_core_1.IntegralUITemplate),__metadata("design:type",core_1.QueryList)],IntegralUIContextMenu.prototype,"templates",void 0);__decorate([core_1.Input("iuiContextMenu"),__metadata("design:type",Object)],IntegralUIContextMenu.prototype,"settings",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],IntegralUIContextMenu.prototype,"contextMenuRef",void 0);
__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIContextMenu.prototype,"itemClick",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIContextMenu.prototype,"menuClick",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIContextMenu.prototype,"menuOpening",void 0);
__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIContextMenu.prototype,"menuOpened",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIContextMenu.prototype,"menuClosed",void 0);__decorate([core_1.HostListener("contextmenu",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],IntegralUIContextMenu.prototype,"onContextMenu",null);
__decorate([core_1.HostListener("mousedown",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],IntegralUIContextMenu.prototype,"onMouseDown",null);IntegralUIContextMenu=__decorate([core_1.Directive({selector:"[iuiContextMenu]"}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.ViewContainerRef,core_1.ComponentFactoryResolver])],IntegralUIContextMenu);exports.IntegralUIContextMenu=IntegralUIContextMenu;