/*
  filename: integralui.listgroup.js
  version : 1.5.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])};return function(b,a){function c(){this.constructor=b}e(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_groupbox_1=require("./integralui.groupbox"),IntegralUIListGroup=function(e){function b(a,c,b,f){var d=e.call(this,c,b)||this;d.dataService=a;d.commonService=c;d.cmpResolver=b;d.baseService=f;d.numItems=0;d.itemEventList=[];d.headerExpandBoxClassName="";d.itemClassName=
"";return d}__extends(b,e);b.prototype.ngOnInit=function(){this.parentCtrl=this.baseService.getComponent();this.dataService.init([{data:this.items}]);this.generalClassName="iui-listgroup";this.headerClassName=this.generalClassName+"-header";this.headerExpandBoxClassName=this.headerClassName+"-expand-box";this.contentClassName=this.generalClassName+"-content";this.itemClassName=this.generalClassName+"-item";this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+
"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},header:{general:{disabled:this.headerClassName+"-disabled",focused:this.headerClassName+"-focused",normal:this.headerClassName,hovered:this.headerClassName+"-hovered",selected:this.headerClassName+"-selected"},expandBox:this.headerExpandBoxClassName},content:{general:this.contentClassName,expanded:this.contentClassName+"-expand",collapsed:this.contentClassName+"-collapse"},
item:{general:{disabled:this.itemClassName+"-disabled",focused:this.itemClassName+"-focused",normal:this.itemClassName,hovered:this.itemClassName+"-hovered",selected:this.itemClassName+"-selected"}}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass()};b.prototype.ngAfterContentInit=function(){var a=this;a.itemList=a.contentList.toArray();a.numItems=a.itemList.length;a.attachItemEvents();var c=setTimeout(function(){if(a.contentElem){var b=a.contentElem.nativeElement.firstElementChild.cloneNode(!0);
b.style.position="absolute";b.style.top="-9999999px";a.controlElem.nativeElement.append(b);a.maxBlockHeight=b.offsetHeight;b.remove()}a.headerSize={width:a.headerElem.nativeElement.firstElementChild.offsetWidth,height:a.headerElem.nativeElement.firstElementChild.offsetHeight};clearTimeout(c)},100)};b.prototype.ngOnDestroy=function(){};b.prototype.ngAfterContentChecked=function(){this.contentList&&(this.itemList=this.contentList.toArray(),this.numItems!=this.itemList.length&&(this.attachItemEvents(),
this.numItems=this.itemList.length))};b.prototype.onHeaderClick=function(a){var c=this;if(c.isEnabled&&1==a.buttons){c.selected=!0;!c.supressCallback&&c.parentCtrl&&c.parentCtrl.invokeMethod&&c.parentCtrl.invokeMethod("SELECT_GROUP",c);c.supressCallback||c.expanded||(c.expanded=!0);c.isClicked=!0;c.clickPos=c.commonService.getClientPos(a,c.headerElem.nativeElement.firstElementChild);var b=setTimeout(function(){c.isClicked=!1;clearTimeout(b)},500)}};b.prototype.onHeaderExpand=function(a){this.supressCallback=
!0;this.expanded=!this.expanded;a.event.stopPropagation()};b.prototype.toggleContent=function(){var a=this,c=0,b=0;if(a.expanded)if(a.contentDisplay="block",a.allowAnimation)var e=setInterval(function(){c<a.maxBlockHeight?(b=0==b?1:b+2,c+=b,a.contentHeight=c+"px"):(a.contentHeight="auto",a.expandState="none",a.callAfterEvent(!0,a.supressCallback),a.supressCallback=!1,clearInterval(e))},25);else a.contentHeight="auto",a.expandState="none",a.callAfterEvent(!0,a.supressCallback),a.supressCallback=!1;
else if(a.maxBlockHeight=a.contentElem.nativeElement.offsetHeight,c=a.maxBlockHeight,a.allowAnimation)var g=setInterval(function(){0<c?(b=0==b?1:b+2,c-=b,a.contentHeight=c+"px"):(a.contentDisplay="none",a.contentHeight="0",a.expandState="none",a.callAfterEvent(),a.supressCallback=!1,clearInterval(g))},25);else a.contentDisplay="none",a.contentHeight="0",a.expandState="none",a.callAfterEvent(),a.supressCallback=!1};b.prototype.getComponentData=function(a){if(a){if(a.data)return a.data;a=this.getItemDataIndex(a);
if(this.items&&0<=a&&a<this.items.length)return this.items[a]}return null};b.prototype.getItemCurrentIndex=function(a){this.itemList=this.contentList.toArray();return a&&this.itemList?this.itemList.indexOf(a):-1};b.prototype.getItemDataIndex=function(a){return a&&(a=this.getItemCurrentIndex(a),this.items&&0<=a&&a<this.items.length)?a:-1};b.prototype.attachItemEvents=function(){var a=this;this.itemList=this.contentList.toArray();a.itemEventList&&(a.itemEventList.forEach(function(a){a.forEach(function(a){a.unsubscribe()})}),
a.itemEventList.length=0);this.itemList&&0<this.itemList.length&&this.itemList.forEach(function(b){var c=[];c.push(b.mouseDown.subscribe(function(c){b&&(a.clearSelection(),b.state|=integralui_core_1.IntegralUIObjectState.selected,a.selected=!0,a.updateSelectedItemFromComponent(b),a.afterSelect.emit({group:a.data,item:a.getComponentData(b)}))}));a.itemEventList.push(c)})};b.prototype.updateSelectedItemFromComponent=function(a){this.itemList&&0<this.itemList.length&&a&&this.itemList.indexOf(a)};b.prototype.clearSelection=
function(a){this.itemList=this.contentList.toArray();this.itemList.forEach(function(b){b!=a&&(b.state&=~integralui_core_1.IntegralUIObjectState.selected)})};b.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};b.prototype.getItemGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.itemClassName+"-disabled"),
focused:this.commonService.isFieldAvailable(a.focused,this.itemClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.itemClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.itemClassName),selected:this.commonService.isFieldAvailable(a.selected,this.itemClassName+"-selected")}:{disabled:this.defaultStyle.item.general.disabled,focused:this.defaultStyle.item.general.focused,hovered:this.defaultStyle.item.general.hovered,normal:this.defaultStyle.item.general.normal,
selected:this.defaultStyle.item.general.selected}};b.prototype.getItemStyle=function(a){return{general:this.getItemGeneralStyle(a.general)}};b.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),header:this.getHeaderStyle(a.header),content:this.getContentStyle(a.content),item:this.getItemStyle(a.item)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,
selected:this.defaultStyle.general.selected},header:{general:{disabled:this.defaultStyle.header.general.disabled,focused:this.defaultStyle.header.general.focused,hovered:this.defaultStyle.header.general.hovered,normal:this.defaultStyle.header.general.normal,selected:this.defaultStyle.header.general.selected},expandBox:this.defaultStyle.header.expandBox},content:{general:this.defaultStyle.content.general,expanded:this.defaultStyle.content.expanded,collapsed:this.defaultStyle.content.collapsed},item:{general:{disabled:this.defaultStyle.item.general.disabled,
focused:this.defaultStyle.item.general.focused,hovered:this.defaultStyle.item.general.hovered,normal:this.defaultStyle.item.general.normal,selected:this.defaultStyle.item.general.selected}}}};b.decorators=[{type:core_1.Component,args:[{selector:"iui-listgroup",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" #control>\n\t\t\t<iui-header [controlStyle]="getCurrentHeaderStyle()" [enabled]="enabled" [icon]="icon" [text]="text" (mouseDown)="onHeaderClick($event)" [animationType]="expandBoxType" (expandClicked)="onHeaderExpand($event)" #header>\n\t\t\t\t<ng-content select="[header]"></ng-content>\n                <span *ngIf="allowAnimation && isClicked" class="iui-groupbox-header-animate-select-block" [ngStyle]="{ height: headerSize.height + \'px\', width: clickPos.x + \'px\' }">\n                    <span [ngClass]="{ \'iui-groupbox-header-animate-select iui-groupbox-header-animate-select-left\': isClicked }" [ngStyle]="{ height: headerSize.height + \'px\' }"></span>\n               </span>\n                <span *ngIf="allowAnimation && isClicked" class="iui-groupbox-header-animate-select-block" [ngStyle]="{ left: clickPos.x + \'px\', height: headerSize.height + \'px\', width: headerSize.width - clickPos.x + \'px\' }">\n                    <span [ngClass]="{ \'iui-groupbox-header-animate-select iui-groupbox-header-animate-select-right\': isClicked }" [ngStyle]="{ height: headerSize.height + \'px\' }"></span>\n                </span>\n\t\t\t</iui-header>\n\t\t\t<div [ngClass]="getContentClass()" [ngStyle]="{ \'border-width\': expanded ? \'1px\' : \'0\' + \'px\', \'display\': contentDisplay, \'height\': contentHeight, \'opacity\': contentOpacity }" #content>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n    ',
inputs:"controlStyle data enabled expandBoxType icon name size state text".split(" "),outputs:"afterCollapse afterExpand afterSelect beforeCollapse beforeExpand beforeSelect selectedChanged".split(" "),providers:[integralui_data_service_1.IntegralUIDataService],encapsulation:core_1.ViewEncapsulation.None}]}];b.ctorParameters=function(){return[{type:integralui_data_service_1.IntegralUIDataService},{type:integralui_common_service_1.IntegralUICommonService},{type:core_1.ComponentFactoryResolver},{type:integralui_core_1.IntegralUIBaseService}]};
b.propDecorators={controlElem:[{type:core_1.ViewChild,args:["control",{read:core_1.ElementRef}]}],contentRef:[{type:core_1.ViewChild,args:["content",{read:core_1.ViewContainerRef}]}],contentElem:[{type:core_1.ViewChild,args:["content",{read:core_1.ElementRef}]}],header:[{type:core_1.ViewChild,args:["header"]}],contentList:[{type:core_1.ContentChildren,args:[integralui_core_1.IntegralUIItem]}],items:[{type:core_1.Input}]};return b}(integralui_groupbox_1.IntegralUIGroupBox);
exports.IntegralUIListGroup=IntegralUIListGroup;