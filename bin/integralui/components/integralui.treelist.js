/*
  filename: integralui.treelist.js
  version : 1.5.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,b){c.__proto__=b}||function(c,b){for(var a in b)b.hasOwnProperty(a)&&(c[a]=b[a])};return function(c,b){function a(){this.constructor=c}f(c,b);c.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),IntegralUITreeListItem=function(f){function c(b,a,e){var c=f.call(this,b,a)||this;c.elemRef=b;c.commonService=a;c.baseService=e;c.templateData=[];c.clickPos={x:0,y:0};c.isClicked=!1;c.isHovered=!1;c.parentCtrl=null;return c}__extends(c,f);c.prototype.ngOnInit=function(){this.templateData.push(this.data);
this.parentCtrl=this.baseService.getComponent();this.generalClassName="iui-treelistitem";this.contentClassName=this.generalClassName+"-content";this.initStyle()};c.prototype.onMouseDown=function(b){var a=this;if(a.isEnabled){a.isClicked=!0;a.clickPos=a.commonService.getClientPos(b,a.elemRef.nativeElement.firstElementChild);var e=setTimeout(function(){a.isClicked=!1;clearTimeout(e)},500);a.mouseDown.emit(b)}b.stopPropagation()};c.prototype.onMouseEnter=function(b){this.isEnabled&&(this.state|=integralui_core_1.IntegralUIObjectState.hovered,
this.isHovered=!0,this.mouseEnter.emit(b));b.stopPropagation()};c.prototype.onMouseLeave=function(b){this.isEnabled&&(this.state&=~integralui_core_1.IntegralUIObjectState.hovered,this.mouseLeave.emit(b));this.isHovered=!1;b.stopPropagation()};c.decorators=[{type:core_1.Component,args:[{selector:"iui-treelistitem",template:'\n\t\t<li [ngClass]="{ \'iui-treelistitem-general\': !allowAnimation, \'iui-treelistitem-animate\': allowAnimation, \'iui-treelistitem-animate-enter-suspended\': allowAnimation && isHovered }" (mouseenter)="onMouseEnter($event)" (mousemove)="onMouseMove($event)" (mouseleave)="onMouseLeave($event)">\n\t\t\t<div [ngClass]="getControlClass()" style="position:relative" [ngStyle]="getControlStyle()" (click)="onClick($event)" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)">\n\t\t\t\t<ng-template ngFor [ngForOf]="templateData" [ngForTemplate]="templateRef"></ng-template>  \n\t            <span *ngIf="allowAnimation && isClicked" class="iui-treelistitem-animate-select-block" [ngStyle]="{ height: getSize().height + \'px\', width: clickPos.x + \'px\' }">\n\t                <span [ngClass]="{ \'iui-treelistitem-animate-select iui-treelistitem-animate-select-left\': isClicked }" [ngStyle]="{ height: getSize().height + \'px\' }"></span>\n\t           </span>\n\t            <span *ngIf="allowAnimation && isClicked" class="iui-treelistitem-animate-select-block" [ngStyle]="{ left: clickPos.x + \'px\', height: getSize().height + \'px\', width: getSize().width - clickPos.x + \'px\' }">\n\t                <span [ngClass]="{ \'iui-treelistitem-animate-select iui-treelistitem-animate-select-right\': isClicked }" [ngStyle]="{ height: getSize().height + \'px\' }"></span>\n\t            </span>\n\t\t\t</div>\n\t\t</li>\n\t',
inputs:"controlStyle data enabled icon name size state text".split(" "),outputs:"click mouseDown mouseEnter mouseLeave mouseMove mouseUp".split(" "),encapsulation:core_1.ViewEncapsulation.None}]}];c.ctorParameters=function(){return[{type:core_1.ElementRef},{type:integralui_common_service_1.IntegralUICommonService},{type:integralui_core_1.IntegralUIBaseService}]};c.propDecorators={templateRef:[{type:core_1.Input}]};return c}(integralui_core_1.IntegralUIItem);exports.IntegralUITreeListItem=IntegralUITreeListItem;
var IntegralUITreeList=function(f){function c(b,a,e,c,h){var d=f.call(this,e)||this;d.dataService=b;d.elemRef=a;d.commonService=e;d.cmpResolver=c;d.baseService=h;d.animateItemSize={width:0,height:0};d.animSpeed=300;d.prevClickedObj=null;d.prevData=null;d.itemData=null;d.nextData=null;d.clickPos={x:0,y:0};d.hoverItem=null;d.isClicked=!1;d.blockPos={top:30,left:0};d.leftBlockPos={top:30,left:-300};d.rightBlockPos={top:30,left:300};d.leftBlockWidth=0;d.blockWidth=0;d.rightBlockWidth=0;d.leftBlockOpacity=
0;d.blockOpacity=1;d.rightBlockOpacity=0;d.elemSize={width:0,height:0};d.currentSelection=null;d.headerItem=null;d.headerText="";d.tRef=null;d.afterSelect=new core_1.EventEmitter;d.beforeSelect=new core_1.EventEmitter;d.clear=new core_1.EventEmitter;d.itemAdding=new core_1.EventEmitter;d.itemAdded=new core_1.EventEmitter;d.itemRemoving=new core_1.EventEmitter;d.itemRemoved=new core_1.EventEmitter;d.selectionChanged=new core_1.EventEmitter;d.selList=[];return d}__extends(c,f);Object.defineProperty(c.prototype,
"selectedItem",{get:function(){return this.currentSelection},set:function(b){var a={cancel:!1,header:this.headerItem,item:b};this.beforeSelect.emit(a);1!=a.cancel&&this.currentSelection!=b&&(this.currentSelection=b,b?b.items&&0<b.items.length&&(this.headerItem=b,this.headerText=b.text):(this.headerItem=null,this.headerText=this.title),this.afterSelect.emit({header:this.headerItem,item:b}),this.selectionChanged.emit(null))},enumerable:!0,configurable:!0});c.prototype.ngOnInit=function(){this.baseService.setComponent(this);
this.dataService.init([{data:this.items}]);this.itemData=this.items;this.headerText=this.title;this.generalClassName="iui-treelist";this.initStyle()};c.prototype.ngAfterViewInit=function(){var b=this;b.blockPos.top=this.headerElem.nativeElement.offsetHeight;b.leftBlockPos.top=this.headerElem.nativeElement.offsetHeight;b.rightBlockPos.top=this.headerElem.nativeElement.offsetHeight;b.animateItemSize={width:this.headerElem.nativeElement.offsetWidth,height:this.headerElem.nativeElement.offsetHeight};
b.elemSize={width:b.elemRef.nativeElement.firstElementChild.clientWidth,height:b.elemRef.nativeElement.firstElementChild.clientHeight};b.leftBlockWidth=b.blockWidth=b.rightBlockWidth=b.elemSize.width;var a=setTimeout(function(){var e=b.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);e&&b.contentRef&&(b.tRef=b.contentRef.createComponent(e));clearTimeout(a)},100)};c.prototype.ngOnDestroy=function(){this.tRef&&this.tRef.destroy()};c.prototype.onItemMouseEnter=function(b,a){this.isEnabled&&
(this.hoverItem=a)};c.prototype.onItemMouseLeave=function(b,a){this.hoverItem=null};c.prototype.onItemMouseDown=function(b,a){if(this.isEnabled&&1==b.buttons&&a){var e=this;if(a.items&&0<a.items.length){e.selList.push(e.headerItem);e.nextData=a.items;var c=0,f=5/e.elemSize.width,d=.5,k=1/e.elemSize.width,g=0;if(e.allowAnimation)var l=setInterval(function(){c<e.elemSize.width?(c+=10,d-=f,g+=k,e.blockPos.left=-c,e.blockOpacity=d,e.rightBlockPos.left=e.elemSize.width-c,e.rightBlockOpacity=g):(e.selectedItem=
a,e.itemData=e.nextData,e.blockPos.left=0,e.blockOpacity=1,e.rightBlockPos.left=e.elemSize.width,e.rightBlockOpacity=0,clearInterval(l))},10);else e.selectedItem=a,e.itemData=e.nextData,e.blockPos.left=0,e.blockOpacity=1,e.rightBlockPos.left=e.elemSize.width,e.rightBlockOpacity=0}else e.selectedItem=a}};c.prototype.onHeaderMouseDown=function(b){var a=this;if(this.isEnabled&&1==b.buttons&&0<a.selList.length){var c=a.selList.length-1;a.prevData=a.selList[c]&&a.selList[c].items?a.selList[c].items:a.items;
var f=0,h=5/a.elemSize.width,d=.5,k=1/a.elemSize.width,g=0;if(a.allowAnimation){var l=setInterval(function(){f<a.elemSize.width?(f+=10,d-=h,g+=k,a.blockPos.left=f,a.blockOpacity=d,a.leftBlockPos.left=f-a.elemSize.width,a.leftBlockOpacity=g):(a.selectedItem=a.selList[c],a.itemData=a.prevData,a.selList.splice(c,1),a.blockPos.left=0,a.blockOpacity=1,a.leftBlockPos.left=-a.elemSize.width,a.leftBlockOpacity=0,clearInterval(l))},10);a.isClicked=!0;a.clickPos=a.commonService.getClientPos(b,a.headerElem.nativeElement);
var m=setTimeout(function(){a.isClicked=!1;clearTimeout(m)},500)}else a.selectedItem=a.selList[c],a.itemData=a.prevData,a.selList.splice(c,1),a.blockPos.left=0,a.blockOpacity=1,a.leftBlockPos.left=-a.elemSize.width,a.leftBlockOpacity=0}};c.prototype.getItemState=function(b){return b==this.selectedItem?integralui_core_1.IntegralUIObjectState.selected:b==this.hoverItem?integralui_core_1.IntegralUIObjectState.hovered:integralui_core_1.IntegralUIObjectState.normal};c.prototype.getControlStyle=function(){var b=
{};0<this.ctrlSize.width&&(b.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(b.height=this.ctrlSize.height+"px");return b};c.decorators=[{type:core_1.Component,args:[{selector:"iui-treelist",template:'\n\t\t<div [ngClass]="getControlClass()">\n\t\t\t<div class="iui-treelist-header" (mousedown)="onHeaderMouseDown($event)" #header>\n                <span class="expand-icons back" *ngIf="headerItem!=null"></span>\n                <span class="iui-treelist-header-title">{{headerText}}</span>\n\t            <span *ngIf="allowAnimation && isClicked" class="iui-treelistitem-animate-select-block" [ngStyle]="{ height: animateItemSize.height + \'px\', width: clickPos.x + \'px\' }">\n\t                <span [ngClass]="{ \'iui-treelistitem-animate-select iui-treelistitem-animate-select-left\': isClicked }" [ngStyle]="{ height: animateItemSize.height + \'px\' }"></span>\n\t           </span>\n\t            <span *ngIf="allowAnimation && isClicked" class="iui-treelistitem-animate-select-block" [ngStyle]="{ left: clickPos.x + \'px\', height: animateItemSize.height + \'px\', width: animateItemSize.width - clickPos.x + \'px\' }">\n\t                <span [ngClass]="{ \'iui-treelistitem-animate-select iui-treelistitem-animate-select-right\': isClicked }" [ngStyle]="{ height: animateItemSize.height + \'px\' }"></span>\n\t            </span>\n\t\t\t</div>\n\t\t\t<ul class="iui-treelist-block" #leftBlock [ngStyle]="{ \'position\': \'absolute\', \'top\': leftBlockPos.top + \'px\', \'left\': leftBlockPos.left + \'px\', \'width\': leftBlockWidth + \'px\', \'opacity\': leftBlockOpacity }">\n\t            <iui-treelistitem *ngFor="let item of prevData" [allowAnimation]="allowAnimation" [enabled]="item.enabled" [text]="item.text" [templateRef]="itemTemplate" [data]="item">\n\t\t\t\t</iui-treelistitem> \n\t\t\t</ul>\n\t\t\t<ul class="iui-treelist-block" #contentBlock [ngStyle]="{ \'position\': \'absolute\', \'top\': blockPos.top + \'px\', \'left\': blockPos.left + \'px\', \'width\': blockWidth + \'px\', \'opacity\': blockOpacity }">\n\t            <iui-treelistitem *ngFor="let item of itemData" [allowAnimation]="allowAnimation" [enabled]="item.enabled" [text]="item.text" [templateRef]="itemTemplate" [data]="item" (mouseDown)="onItemMouseDown($event, item)" (mouseEnter)="onItemMouseEnter($event, item)" (mouseLeave)="onItemMouseLeave($event, item)" [state]="getItemState(item)">\n\t\t\t\t</iui-treelistitem> \n\t\t\t</ul>\n\t\t\t<ul class="iui-treelist-block" #rightBlock [ngStyle]="{ \'position\': \'absolute\', \'top\': rightBlockPos.top + \'px\', \'left\': rightBlockPos.left + \'px\', \'width\': rightBlockWidth + \'px\', \'opacity\': rightBlockOpacity }">\n\t            <iui-treelistitem *ngFor="let item of nextData" [allowAnimation]="allowAnimation" [enabled]="item.enabled" [text]="item.text" [templateRef]="itemTemplate" [data]="item">\n\t\t\t\t</iui-treelistitem> \n\t\t\t</ul>\n\t\t</div>\n\t',
inputs:["controlStyle","data","enabled","state"],providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService]}]}];c.ctorParameters=function(){return[{type:integralui_data_service_1.IntegralUIDataService},{type:core_1.ElementRef},{type:integralui_common_service_1.IntegralUICommonService},{type:core_1.ComponentFactoryResolver},{type:integralui_core_1.IntegralUIBaseService}]};c.propDecorators={contentList:[{type:core_1.ViewChildren,args:[IntegralUITreeListItem]}],
contentRef:[{type:core_1.ViewChild,args:["contentBlock",{read:core_1.ViewContainerRef}]}],headerElem:[{type:core_1.ViewChild,args:["header",{read:core_1.ElementRef}]}],leftBlockElem:[{type:core_1.ViewChild,args:["leftBlock",{read:core_1.ElementRef}]}],blockElem:[{type:core_1.ViewChild,args:["contentBlock",{read:core_1.ElementRef}]}],rightBlockElem:[{type:core_1.ViewChild,args:["rightBlock",{read:core_1.ElementRef}]}],itemTemplate:[{type:core_1.ContentChild,args:[core_1.TemplateRef]}],items:[{type:core_1.Input}],
title:[{type:core_1.Input}],selectedItem:[{type:core_1.Input}],afterSelect:[{type:core_1.Output}],beforeSelect:[{type:core_1.Output}],clear:[{type:core_1.Output}],itemAdding:[{type:core_1.Output}],itemAdded:[{type:core_1.Output}],itemRemoving:[{type:core_1.Output}],itemRemoved:[{type:core_1.Output}],selectionChanged:[{type:core_1.Output}]};return c}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUITreeList=IntegralUITreeList;