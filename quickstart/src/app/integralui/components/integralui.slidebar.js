/*
  filename: integralui.slidebar.js
  version : 1.5.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var d in a)a.hasOwnProperty(d)&&(b[d]=a[d])};return function(b,a){function d(){this.constructor=b}e(b,a);b.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),IntegralUISlide=function(){function e(b){this.elemRef=b}e.prototype.size=function(){return{width:Math.floor(this.elemRef.nativeElement.firstElementChild.offsetWidth),height:Math.floor(this.elemRef.nativeElement.firstElementChild.offsetHeight)}};e.prototype.cloneElem=function(){return this.elemRef.nativeElement.firstElementChild.cloneNode(!0)};
e.decorators=[{type:core_1.Component,args:[{selector:"iui-slide",template:'<li class="iui-slide" data-element="slide">\n    \t\t<ng-content></ng-content>\n\t\t</li>\n\t'}]}];e.ctorParameters=function(){return[{type:core_1.ElementRef}]};return e}();exports.IntegralUISlide=IntegralUISlide;
var IntegralUISlideBar=function(e){function b(a,b,g,f){var c=e.call(this,g)||this;c.dataService=a;c.elemRef=b;c.commonService=g;c.cmpResolver=f;c.animationTimeout=null;c.animationTimer=null;c.buttons=[];c.arrowTopPos=0;c.arrowDisplay="none";c.numSlides=0;c.cloneAdded=!1;c.cloneElem=null;c.blockMargin=0;c.elemSize={width:0,height:0};c.blockSize={width:0,height:0};c.slideSize={width:0,height:0};c.currentSelection=null;c.currentSelectedIndex=-1;c.selectedSlideComponent=null;c.removeIndex=-1;c.trialRef=
null;c.allowAnimation=!0;c.animationPause=2E3;c.animationSpeed=integralui_core_1.IntegralUISpeedMode.Normal;c.navigationButtons=!0;c.clear=new core_1.EventEmitter;c.slideAdding=new core_1.EventEmitter;c.slideAdded=new core_1.EventEmitter;c.slideChanged=new core_1.EventEmitter;c.slideRemoving=new core_1.EventEmitter;c.slideRemoved=new core_1.EventEmitter;return c}__extends(b,e);Object.defineProperty(b.prototype,"selectedIndex",{get:function(){return this.currentSelectedIndex},set:function(a){this.currentSelectedIndex!=
a&&(this.currentSelectedIndex=a,this.selectSlideByIndex(a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedSlide",{get:function(){return this.currentSelection},set:function(a){this.currentSelection!=a&&(this.currentSelection=a,this.slides&&this.selectSlideByIndex(this.slides.indexOf(a)))},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.dataService.init([{data:this.slides}])};b.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var d=
a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);d&&(a.trialRef=a.blockRef.createComponent(d));clearTimeout(b)},100)};b.prototype.ngAfterContentInit=function(){this.slideList=this.contentSlideList.toArray();this.checkClone();this.numSlides=this.slideList.length;0<this.numSlides&&(0<=this.selectedIndex?this.selectSlideByIndex(this.selectedIndex):this.selectedSlide&&this.slides&&this.selectSlideByIndex(this.slides.indexOf(this.selectedSlide)));this.updateLayout();this.changeSlide()};
b.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};b.prototype.ngAfterContentChecked=function(){this.contentSlideList&&(this.slideList=this.contentSlideList.toArray(),this.numSlides!=this.slideList.length&&(this.numSlides>this.slideList.length&&this.slides&&0<this.slides.length&&(this.removeIndex==this.slides.length&&(this.removeIndex=this.slides.length-1),0<=this.removeIndex&&this.removeIndex<this.slides.length&&(this.isIndexInRange(this.removeIndex)?this.selectSlideByIndex(this.removeIndex):
this.selectSlideByIndex(this.slideList.length-1))),this.numSlides=this.slideList.length,this.updateLayout()),0==this.numSlides&&(this.cloneElem&&(this.cloneElem.remove(),this.cloneElem=null,this.cloneAdded=!1),this.selectedSlideComponent=null,this.arrowDisplay="none"));this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight};this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=
this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height)};b.prototype.checkClone=function(){this.slideList&&0<this.slideList.length&&!this.cloneAdded&&(this.cloneElem=this.slideList[0].cloneElem(),this.blockElem.nativeElement.append(this.cloneElem),this.cloneAdded=!0)};b.prototype.clearSlides=function(){this.dataService.clear();this.clear.emit(null)};b.prototype.addSlide=function(a){this.callEventAdd("add",a)};
b.prototype.insertSlideAt=function(a,b){this.callEventAdd("at",a,b)};b.prototype.insertSlideBefore=function(a,b){this.callEventAdd("ref",a,-1,b)};b.prototype.insertSlideAfter=function(a,b){this.callEventAdd("ref",a,-1,b,!0)};b.prototype.removeSlide=function(a){this.callEventRemove(a)};b.prototype.removeSlideAt=function(a){this.slides&&0<=a&&a<this.slides.length&&this.callEventRemove(this.slides[a])};b.prototype.callEventAdd=function(a,b,g,f,c){var d={cancel:!1,slide:b};this.slideAdding.emit(d);if(1!=
d.cancel){switch(a){case "at":this.dataService.insert(b,g);break;case "ref":this.dataService.insertByRef(b,f,c);break;default:this.dataService.insert(b)}this.slideAdded.emit({slide:b});this.selectedSlideComponent||this.selectSlideByIndex(0)}};b.prototype.callEventRemove=function(a){var b={cancel:!1,slide:a};this.slideRemoving.emit(b);1!=b.cancel&&(this.removeIndex=this.slides?this.slides.indexOf(a):-1,this.dataService.removeAt(a),this.slideRemoved.emit({slide:a}))};b.prototype.getButtonClass=function(a){var b=
this.getSlideCurrentIndex(this.selectedSlideComponent);return a&&a.index==b?"iui-slidebar-navigator-button-selected":""};b.prototype.getSlideCurrentIndex=function(a){this.slideList=this.contentSlideList.toArray();return a&&this.slideList?this.slideList.indexOf(a):-1};b.prototype.getSlideDataIndex=function(a){return a&&(a=this.getSlideCurrentIndex(a),this.slides&&0<=a&&a<this.slides.length)?a:-1};b.prototype.getSlideData=function(a){return this.slides&&0<=a&&a<this.slides.length?this.slides[a]:null};
b.prototype.isIndexInRange=function(a){return this.slideList?0<=a&&a<this.slideList.length:!1};b.prototype.ctrlMouseEnter=function(a){this.isEnabled&&(this.arrowDisplay="block")};b.prototype.ctrlMouseLeave=function(a){this.arrowDisplay="none"};b.prototype.prevSlide=function(){if(this.isEnabled){var a=this.getSlideCurrentIndex(this.selectedSlideComponent)-1;this.isIndexInRange(a)?this.selectSlideByIndex(a):this.selectSlideByIndex(this.slideList.length-1)}};b.prototype.nextSlide=function(){if(this.isEnabled){var a=
this.getSlideCurrentIndex(this.selectedSlideComponent)+1;this.isIndexInRange(a)?this.selectSlideByIndex(a):this.selectSlideByIndex(0)}};b.prototype.updateLayout=function(){var a=this;a.slideList=a.contentSlideList.toArray();a.buttons.length=0;if(a.slideList&&0<a.slideList.length){a.blockSize.width=0;a.checkClone();a.selectedSlideComponent||(a.selectedSlideComponent=a.slideList[0]);var b=0;a.slideList.forEach(function(d){var f=d.size();a.blockSize.width+=f.width;a.blockSize.height=f.height;d==a.slideList[0]&&
(a.blockSize.width+=f.width,a.elemSize.width=f.width);a.slideSize.width=f.width;a.slideSize.height=f.height;a.buttons.push({index:b});b++});a.blockSize.width++;a.arrowTopPos=a.arrowElem?Math.floor((a.blockSize.height-a.arrowElem.nativeElement.offsetHeight)/2):-999}};b.prototype.cancelAnimation=function(){this.animationTimer&&clearInterval(this.animationTimer);this.animationTimer=null};b.prototype.changeSlide=function(){var a=this.getSlideCurrentIndex(this.selectedSlideComponent);0<=a&&(this.blockMargin=
-(this.slideSize.width*a));this.startAnimation()};b.prototype.getSpeedFactor=function(){switch(this.animationSpeed){case integralui_core_1.IntegralUISpeedMode.VeryFast:return 25;case integralui_core_1.IntegralUISpeedMode.Fast:return 15;case integralui_core_1.IntegralUISpeedMode.Slow:return 5;case integralui_core_1.IntegralUISpeedMode.VerySlow:return 2}return 10};b.prototype.startAnimation=function(){var a=this;a.animationTimeout&&clearTimeout(a.animationTimeout);a.animationTimeout=setTimeout(function(){a.cancelAnimation();
if(0!=a.allowAnimation&&1<a.slideList.length){var b=a.getSlideCurrentIndex(a.selectedSlideComponent),e=0,f=a.getSpeedFactor();a.animationTimer=setInterval(function(){e<a.slideSize.width?(e+=f,a.blockMargin-=f):(e=0,a.cancelAnimation(),b++,a.isIndexInRange(b)?a.selectSlideByIndex(b):a.selectSlideByIndex(0))},15)}clearTimeout(a.animationTimeout)},a.animationPause)};b.prototype.stopAnimation=function(){this.cancelAnimation();var a=this.getSlideCurrentIndex(this.selectedSlideComponent);this.blockMargin=
-(this.slideSize.width*a)};b.prototype.selectSlide=function(a){a&&(this.selectedSlideComponent=a,this.slideChanged.emit({index:this.getSlideCurrentIndex(a),slide:this.getSlideData(this.getSlideDataIndex(a))}),this.changeSlide())};b.prototype.selectSlideByIndex=function(a){this.isIndexInRange(a)&&this.selectSlide(this.slideList[a])};b.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");
return a};b.decorators=[{type:core_1.Component,args:[{selector:"iui-slidebar",template:'<div class="iui-slidebar" [ngStyle]="getControlStyle()" #control data-element="slidebar" (mouseenter)="ctrlMouseEnter($event)" (mouseleave)="ctrlMouseLeave($event)" [ngStyle]="{ \'width\': elemSize.width + \'px\' }">\n        \t<ul #block class="iui-slidebar-container" [ngStyle]="{ \'margin-left\': blockMargin + \'px\', \'width\': blockSize.width + \'px\', \'height\': blockSize.height + \'px\' }">\n        \t\t<ng-content></ng-content>\n        \t</ul>\n        \t<div class="iui-slidebar-navigator">\n        \t\t<span class="iui-slidebar-navigator-button" *ngFor="let button of buttons; let i = index" [ngClass]="getButtonClass(button)" (click)="selectSlideByIndex(i)"></span>\n        \t</div>\n        \t<div *ngIf="navigationButtons" class="iui-slidebar-arrow iui-slidebar-arrow-left" [ngStyle]="{ \'display\': arrowDisplay, \'top\': arrowTopPos + \'px\' }" (click)="prevSlide()" #arrow><span></span></div>\n        \t<div *ngIf="navigationButtons" class="iui-slidebar-arrow iui-slidebar-arrow-right" [ngStyle]="{ \'display\': arrowDisplay, \'top\': arrowTopPos + \'px\' }" (click)="nextSlide()"><span></span></div>\n\t\t</div>\n\t',
inputs:"controlStyle data enabled name size state".split(" "),providers:[integralui_data_service_1.IntegralUIDataService]}]}];b.ctorParameters=function(){return[{type:integralui_data_service_1.IntegralUIDataService},{type:core_1.ElementRef},{type:integralui_common_service_1.IntegralUICommonService},{type:core_1.ComponentFactoryResolver}]};b.propDecorators={controlRef:[{type:core_1.ViewChild,args:["control",{read:core_1.ViewContainerRef}]}],blockRef:[{type:core_1.ViewChild,args:["block",{read:core_1.ViewContainerRef}]}],
contentSlideList:[{type:core_1.ContentChildren,args:[IntegralUISlide]}],blockElem:[{type:core_1.ViewChild,args:["block",{read:core_1.ElementRef}]}],arrowElem:[{type:core_1.ViewChild,args:["arrow",{read:core_1.ElementRef}]}],allowAnimation:[{type:core_1.Input}],animationPause:[{type:core_1.Input}],animationSpeed:[{type:core_1.Input}],navigationButtons:[{type:core_1.Input}],slides:[{type:core_1.Input}],selectedIndex:[{type:core_1.Input}],selectedSlide:[{type:core_1.Input}],clear:[{type:core_1.Output}],
slideAdding:[{type:core_1.Output}],slideAdded:[{type:core_1.Output}],slideChanged:[{type:core_1.Output}],slideRemoving:[{type:core_1.Output}],slideRemoved:[{type:core_1.Output}]};return b}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUISlideBar=IntegralUISlideBar;