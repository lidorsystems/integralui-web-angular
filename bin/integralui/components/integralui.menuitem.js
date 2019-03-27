/*
  filename: integralui.menuitem.js
  version : 2.2.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var f in a)a.hasOwnProperty(f)&&(b[f]=a[f])};return function(b,a){function f(){this.constructor=b}g(b,a);b.prototype=null===a?Object.create(a):(f.prototype=a.prototype,new f)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),IntegralUIMenuItem=function(g){function b(a,b,d,e){var c=g.call(this,b,d)||this;c.dataService=a;c.elemRef=b;c.commonService=d;c.baseService=e;c.contentAnimation={display:"none",left:0,width:0,height:0};c.eventList=[];c.expandState="none";c.isItemHovered=!1;c.blockPos=
{top:0,left:0};c.popupOrder=999;c.blockDisplay="none";c.blockElemWidth="0";c.blockElemHeight="0";c.blockOverflow="hidden";c.blockOpacity=0;c.pauseTimer=null;c.parentCtrl=null;c.parentItem=null;c.pause=300;c.showAnimation=!0;return c}__extends(b,g);Object.defineProperty(b.prototype,"expanded",{get:function(){return this.isExpanded},set:function(a){this.isExpanded!=a&&this.isEnabled&&(this.expandState=a?"expand":"collapse",this.isExpanded=a,this.toggleContent())},enumerable:!0,configurable:!0});b.prototype.ngOnInit=
function(){this.parentCtrl=this.baseService.getComponent();this.dataService.init([{data:this.items}]);this.isExpanded=this.data&&void 0!=this.data.expanded?this.data.expanded:!1;this.blockElemHeight="0";this.generalClassName=this.data&&!this.data.pid?"iui-menuitem-root":"iui-menuitem";this.blockClassName="iui-menuitem-block";this.contentClassName=this.generalClassName+"-content";this.expandBoxClassName="iui-menu-marker-expand";this.expandBoxSpaceClassName=this.expandBoxClassName+"-space";this.separatorClassName=
this.generalClassName+"-separator";this.initStyle();this.enabled=this.data&&0!=this.data.enabled?!0:!1};b.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},expandBox:{general:this.expandBoxClassName,animated:this.expandBoxClassName+"-load",expanded:this.expandBoxClassName+"-open",collapsed:this.expandBoxClassName+
"-close"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"},separator:this.separatorClassName};this.updateStyle(this.controlStyle);this.updateControlClass()};b.prototype.ngOnDestroy=function(){};b.prototype.ngAfterContentInit=function(){this.updateLayout()};b.prototype.collapse=function(){this.expanded=!1};b.prototype.expand=function(){this.expanded=
!0};b.prototype.toggle=function(){this.expanded=!this.expanded};b.prototype.onExpandBoxMouseDown=function(a){this.isEnabled&&this.toggle()};b.prototype.getDataType=function(){return this.data&&this.data.type?this.data.type:"item"};b.prototype.getItemLevel=function(){return void 0!=this.level?this.level+1:0};b.prototype.isThereChildren=function(){return this.items&&0<this.items.length};b.prototype.isBlockVisible=function(){return this.isItemHovered&&this.isThereChildren()};b.prototype.updateLayout=
function(){var a=this,b=setTimeout(function(){a.data&&(a.data.pid||"vertical"==a.orientation?a.elemRef.nativeElement.parentElement&&(a.blockPos={top:0<a.level?-2:-1,left:a.elemRef.nativeElement.parentElement.offsetWidth-3}):a.elemRef.nativeElement.parentElement&&(a.blockPos={top:a.elemRef.nativeElement.parentElement.offsetHeight-8,left:-1}));clearTimeout(b)},1)};b.prototype.onMouseDown=function(a){this.isEnabled&&(1==a.which&&this.parentCtrl&&this.parentCtrl.invokeMethod("ITEM_CLICK",{event:a,cmp:this,
item:this.data}),this.mouseDown.emit(a));a.stopPropagation()};b.prototype.onMouseEnter=function(a){this.isEnabled&&(this.state|=integralui_core_1.IntegralUIObjectState.hovered,this.isItemHovered=!0,this.updateLayout(),this.expand(),this.mouseEnter.emit(a));a.stopPropagation()};b.prototype.onMouseLeave=function(a){this.isEnabled&&(this.state&=~integralui_core_1.IntegralUIObjectState.hovered,this.removePauseTimer(),this.isItemHovered=!1,this.collapse(),this.mouseLeave.emit(a));a.stopPropagation()};
b.prototype.onContextMenu=function(a){a.preventDefault();a.stopPropagation()};b.prototype.onChildItemMouseDown=function(a){this.collapse()};b.prototype.removePauseTimer=function(){this.pauseTimer&&clearTimeout(this.pauseTimer)};b.prototype.toggleContent=function(){var a=this;if(a.items){var b=a.elemRef.nativeElement.firstElementChild.offsetHeight/2*a.items.length,d=0,e=0;if(a.showAnimation)if(a.expanded)a.removePauseTimer(),a.pauseTimer=setTimeout(function(){if(a.pauseTimer){a.blockDisplay="block";
var c=setInterval(function(){d<b?(e=0==e?1:e+2,d+=e,a.blockElemHeight=d+"px",a.blockOpacity=d/b):(a.blockElemHeight="auto",a.blockOverflow="visible",a.blockOpacity=1,a.expandState="none",clearInterval(c))},25)}a.removePauseTimer()},300);else{a.blockOverflow="hidden";a.blockElem&&(d=a.blockElem.nativeElement.offsetHeight);var c=setInterval(function(){0<d?(e=0==e?1:e+2,d-=e,a.blockElemHeight=d+"px",a.blockOpacity=d/b):(a.blockDisplay="none",a.blockElemHeight="0",a.blockOpacity=0,a.expandState="none",
clearInterval(c))},25)}else a.expanded?(a.removePauseTimer(),a.pauseTimer=setTimeout(function(){a.pauseTimer&&(a.blockDisplay="block",a.blockElemHeight="auto",a.blockOverflow="visible",a.blockOpacity=1,a.expandState="none");a.removePauseTimer()},300)):(a.blockOverflow="hidden",a.blockDisplay="none",a.blockElemHeight="0",a.blockOpacity=0,a.expandState="none")}};b.prototype.getControlStyle=function(){var a={};this.data&&(a=this.data.style||{});a.display=this.getItemDisplay();return a};b.prototype.getItemDisplay=
function(){return void 0!=this.data.pid?this.orientation?"vertical"==this.orientation?"block":"inline-block":"block":this.orientation?"vertical"==this.orientation?"block":"inline-block":"inline-block"};b.prototype.updateControlClass=function(){this.ctrlClass.length=0;this.ctrlClass.push(this.generalClassName);if("separator"==this.getDataType())this.ctrlClass.push(this.getSeparatorClass());else if(this.options.currentStyle&&(this.ctrlClass.push(this.options.currentStyle.general.normal),this.state&
integralui_core_1.IntegralUIObjectState.disabled?this.ctrlClass.push(this.options.currentStyle.general.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?this.ctrlClass.push(this.options.currentStyle.general.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?this.ctrlClass.push(this.options.currentStyle.general.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered&&this.ctrlClass.push(this.options.currentStyle.general.hovered),this.isThereChildren())){var a=
this.getExpandBoxClass();a=this.data.pid||"vertical"==this.orientation?a+"-right":a+"-down";this.ctrlClass.push(a);this.ctrlClass.push(this.getExpandBoxSpaceClass())}};b.prototype.getExpandBoxSpaceClass=function(){var a="";this.isThereChildren()&&(a=this.expandBoxSpaceClassName);return a};b.prototype.getSeparatorClass=function(){return this.options.currentStyle?this.options.currentStyle.separator:this.defaultStyle.separator};b.prototype.getBlockClass=function(){var a=this.blockClassName;this.isThereChildren()&&
(a=0!=this.expanded?a+(" "+this.blockClassName+"-open"):a+(" "+this.blockClassName+"-close"));return a};b.prototype.getGeneralClass=function(){return this.generalClassName};b.prototype.getExpandBoxClass=function(){var a="";this.isThereChildren()&&(a+=" "+this.options.currentStyle.expandBox.general);return a};b.prototype.getExpandBoxStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.expandBoxClassName),animated:this.commonService.isFieldAvailable(a.animated,
this.expandBoxClassName+"-load"),expanded:this.commonService.isFieldAvailable(a.expanded,this.expandBoxClassName+"-open"),collapsed:this.commonService.isFieldAvailable(a.collapsed,this.expandBoxClassName+"-close")}:{general:this.defaultStyle.expandBox.general,animated:this.defaultStyle.expandBox.animated,expanded:this.defaultStyle.expandBox.expanded,collapsed:this.defaultStyle.expandBox.collapsed}};b.prototype.updateStyle=function(a){this.options.currentStyle=a?{content:this.getContentStyle(a.content),
expandBox:this.getExpandBoxStyle(a.expandBox),general:this.getGeneralStyle(a.general),separator:this.commonService.isFieldAvailable(a.separator,this.separatorClassName)}:{content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected},expandBox:{general:this.defaultStyle.expandBox.general,animated:this.defaultStyle.expandBox.animated,expanded:this.defaultStyle.expandBox.expanded,
collapsed:this.defaultStyle.expandBox.collapsed},general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},separator:this.defaultStyle.separator}};b.decorators=[{type:core_1.Component,args:[{selector:"iui-menuitem",template:'\n        <li [ngClass]="getControlClass()" (click)="onClick($event)" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)" (mouseenter)="onMouseEnter($event)" (mousemove)="onMouseMove($event)" (mouseleave)="onMouseLeave($event)" (contextmenu)="onContextMenu($event)" [ngStyle]="getControlStyle()">\n            <div *ngIf="getDataType()==\'item\'">\n                <span *ngIf="!templateRef" #content>\n                    <span *ngIf="icon" class="iui-item-icon" [ngClass]="icon" [style.display]="getIconStatus()"></span>\n                    <img *ngIf="iconUrl" class="iui-item-icon-url" src="{{iconUrl}}" />\n                    <span *ngIf="text" class="iui-item-label">{{text}}</span>\n                </span>\n                <span *ngIf="templateRef" #content>\n                    <span [iuiTemplateOutlet]="templateRef" [iuiTemplateOutletContext]="{$implicit: (data)}"></span>\n                </span>\n                <ul *ngIf="items && items.length > 0" #block class="iui-menuitem-block" [ngStyle]="{ \'display\': blockDisplay, \'top\': blockPos.top + \'px\', \'left\': blockPos.left + \'px\', \'height\': blockElemHeight, \'overflow\': blockOverflow, \'opacity\': blockOpacity }">\n                    <iui-menuitem *ngFor="let childItem of items" [data]="childItem" [items]="childItem.items" [enabled]="childItem.enabled" [icon]="childItem.icon" [iconUrl]="childItem.iconUrl" [text]="childItem.text" [level]="getItemLevel()" [templateRef]="templateRef" (mouseDown)="onChildItemMouseDown($event)" [showAnimation]="showAnimation"></iui-menuitem>\n                </ul>\n            </div>\n            <hr *ngIf="getDataType()==\'separator\'" />\n        </li>\n    ',
inputs:"controlStyle data enabled icon name state text".split(" "),outputs:"click mouseDown mouseEnter mouseLeave mouseMove mouseUp".split(" "),providers:[integralui_data_service_1.IntegralUIDataService],encapsulation:core_1.ViewEncapsulation.None}]}];b.ctorParameters=function(){return[{type:integralui_data_service_1.IntegralUIDataService},{type:core_1.ElementRef},{type:integralui_common_service_1.IntegralUICommonService},{type:integralui_core_1.IntegralUIBaseService}]};b.propDecorators={blockElem:[{type:core_1.ViewChild,
args:["block",{read:core_1.ElementRef}]}],contentElem:[{type:core_1.ViewChild,args:["content",{read:core_1.ElementRef}]}],contentList:[{type:core_1.ContentChildren,args:[b]}],iconUrl:[{type:core_1.Input}],items:[{type:core_1.Input}],level:[{type:core_1.Input}],orientation:[{type:core_1.Input}],pause:[{type:core_1.Input}],showAnimation:[{type:core_1.Input}],templateRef:[{type:core_1.Input}],expanded:[{type:core_1.Input}]};return b}(integralui_core_1.IntegralUIItem);exports.IntegralUIMenuItem=IntegralUIMenuItem;