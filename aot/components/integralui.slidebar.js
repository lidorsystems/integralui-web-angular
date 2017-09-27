/*
  filename: integralui.slidebar.js
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
import { Component, ComponentFactoryResolver, ContentChildren, ElementRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUITComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
var IntegralUISlide = (function () {
function IntegralUISlide(a){this.elemRef=a}IntegralUISlide.prototype.size=function(){return{width:Math.floor(this.elemRef.nativeElement.firstElementChild.offsetWidth),height:Math.floor(this.elemRef.nativeElement.firstElementChild.offsetHeight)}};IntegralUISlide.prototype.cloneElem=function(){return this.elemRef.nativeElement.firstElementChild.cloneNode(!0)};    return IntegralUISlide;
}());
export { IntegralUISlide };
IntegralUISlide.decorators = [
    { type: Component, args: [{
                selector: 'iui-slide',
                template: "<li class=\"iui-slide\" data-element=\"slide\">\n    \t\t<ng-content></ng-content>\n\t\t</li>\n\t"
            },] },
];
/** @nocollapse */
IntegralUISlide.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
var IntegralUISlideBar = (function (_super) {
__extends(IntegralUISlideBar,_super);
function IntegralUISlideBar(a,c,d){var b=_super.call(this,c)||this;b.dataService=a;b.commonService=c;b.cmpResolver=d;b.animationTimeout=null;b.animationTimer=null;b.buttons=[];b.arrowTopPos=0;b.arrowDisplay="none";b.numSlides=0;b.cloneAdded=!1;b.cloneElem=null;b.blockMargin=0;b.elemSize={width:0,height:0};b.blockSize={width:0,height:0};b.slideSize={width:0,height:0};b.currentSelection=null;b.currentSelectedIndex=-1;b.selectedSlideComponent=null;b.removeIndex=-1;b.trialRef=null;b.allowAnimation=!0;
b.animationPause=2E3;b.animationSpeed="normal";b.clear=new EventEmitter;b.slideAdding=new EventEmitter;b.slideAdded=new EventEmitter;b.slideChanged=new EventEmitter;b.slideRemoving=new EventEmitter;b.slideRemoved=new EventEmitter;return b}Object.defineProperty(IntegralUISlideBar.prototype,"selectedIndex",{get:function(){return this.currentSelectedIndex},set:function(a){this.currentSelectedIndex!=a&&(this.currentSelectedIndex=a,this.selectSlideByIndex(a))},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUISlideBar.prototype,"selectedSlide",{get:function(){return this.currentSelection},set:function(a){this.currentSelection!=a&&(this.currentSelection=a,this.slides&&this.selectSlideByIndex(this.slides.indexOf(a)))},enumerable:!0,configurable:!0});IntegralUISlideBar.prototype.ngOnInit=function(){this.dataService.init([{data:this.slides}])};
IntegralUISlideBar.prototype.ngAfterViewInit=function(){var a=this,c=setTimeout(function(){var d=a.cmpResolver.resolveComponentFactory(IntegralUITComponent);d&&(a.trialRef=a.blockRef.createComponent(d));clearTimeout(c)},100)};
IntegralUISlideBar.prototype.ngAfterContentInit=function(){this.slideList=this.contentSlideList.toArray();this.checkClone();this.numSlides=this.slideList.length;0<this.numSlides&&(0<=this.selectedIndex?this.selectSlideByIndex(this.selectedIndex):this.selectedSlide&&this.slides&&this.selectSlideByIndex(this.slides.indexOf(this.selectedSlide)));this.updateLayout();this.changeSlide()};IntegralUISlideBar.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};
IntegralUISlideBar.prototype.ngAfterContentChecked=function(){this.contentSlideList&&(this.slideList=this.contentSlideList.toArray(),this.numSlides!=this.slideList.length&&(this.numSlides>this.slideList.length&&this.slides&&0<this.slides.length&&(this.removeIndex==this.slides.length&&(this.removeIndex=this.slides.length-1),0<=this.removeIndex&&this.removeIndex<this.slides.length&&(this.isIndexInRange(this.removeIndex)?this.selectSlideByIndex(this.removeIndex):this.selectSlideByIndex(this.slideList.length-
1))),this.numSlides=this.slideList.length,this.updateLayout()),0==this.numSlides&&(this.cloneElem&&(this.cloneElem.remove(),this.cloneElem=null,this.cloneAdded=!1),this.selectedSlideComponent=null,this.arrowDisplay="none"))};IntegralUISlideBar.prototype.checkClone=function(){this.slideList&&0<this.slideList.length&&!this.cloneAdded&&(this.cloneElem=this.slideList[0].cloneElem(),this.blockElem.nativeElement.append(this.cloneElem),this.cloneAdded=!0)};
IntegralUISlideBar.prototype.clearSlides=function(){this.dataService.clear();this.clear.emit(null)};IntegralUISlideBar.prototype.addSlide=function(a){this.callEventAdd("add",a)};IntegralUISlideBar.prototype.insertSlideAt=function(a,c){this.callEventAdd("at",a,c)};IntegralUISlideBar.prototype.insertSlideBefore=function(a,c){this.callEventAdd("ref",a,-1,c)};IntegralUISlideBar.prototype.insertSlideAfter=function(a,c){this.callEventAdd("ref",a,-1,c,!0)};IntegralUISlideBar.prototype.removeSlide=function(a){this.callEventRemove(a)};
IntegralUISlideBar.prototype.removeSlideAt=function(a){this.slides&&0<=a&&a<this.slides.length&&this.callEventRemove(this.slides[a])};IntegralUISlideBar.prototype.callEventAdd=function(a,c,d,b,f){var e={cancel:!1,slide:c};this.slideAdding.emit(e);if(1!=e.cancel){switch(a){case "at":this.dataService.insert(c,d);break;case "ref":this.dataService.insertByRef(c,b,f);break;default:this.dataService.insert(c)}this.slideAdded.emit({slide:c});this.selectedSlideComponent||this.selectSlideByIndex(0)}};
IntegralUISlideBar.prototype.callEventRemove=function(a){var c={cancel:!1,slide:a};this.slideRemoving.emit(c);1!=c.cancel&&(this.removeIndex=this.slides?this.slides.indexOf(a):-1,this.dataService.removeAt(a),this.slideRemoved.emit({slide:a}))};IntegralUISlideBar.prototype.getButtonClass=function(a){var c=this.getSlideCurrentIndex(this.selectedSlideComponent);return a&&a.index==c?"iui-slidebar-navigator-button-selected":""};
IntegralUISlideBar.prototype.getSlideCurrentIndex=function(a){this.slideList=this.contentSlideList.toArray();return a&&this.slideList?this.slideList.indexOf(a):-1};IntegralUISlideBar.prototype.getSlideDataIndex=function(a){return a&&(a=this.getSlideCurrentIndex(a),this.slides&&0<=a&&a<this.slides.length)?a:-1};IntegralUISlideBar.prototype.getSlideData=function(a){return this.slides&&0<=a&&a<this.slides.length?this.slides[a]:null};
IntegralUISlideBar.prototype.isIndexInRange=function(a){return this.slideList?0<=a&&a<this.slideList.length:!1};IntegralUISlideBar.prototype.ctrlMouseEnter=function(a){this.arrowDisplay="block"};IntegralUISlideBar.prototype.ctrlMouseLeave=function(a){this.arrowDisplay="none"};IntegralUISlideBar.prototype.prevSlide=function(){var a=this.getSlideCurrentIndex(this.selectedSlideComponent)-1;this.isIndexInRange(a)?this.selectSlideByIndex(a):this.selectSlideByIndex(this.slideList.length-1)};
IntegralUISlideBar.prototype.nextSlide=function(){var a=this.getSlideCurrentIndex(this.selectedSlideComponent)+1;this.isIndexInRange(a)?this.selectSlideByIndex(a):this.selectSlideByIndex(0)};
IntegralUISlideBar.prototype.updateLayout=function(){var a=this;a.slideList=a.contentSlideList.toArray();a.buttons.length=0;if(a.slideList&&0<a.slideList.length){a.blockSize.width=0;a.checkClone();a.selectedSlideComponent||(a.selectedSlideComponent=a.slideList[0]);var c=0;a.slideList.forEach(function(d){var b=d.size();a.blockSize.width+=b.width;a.blockSize.height=b.height;d==a.slideList[0]&&(a.blockSize.width+=b.width,a.elemSize.width=b.width);a.slideSize.width=b.width;a.slideSize.height=b.height;
a.buttons.push({index:c});c++});a.blockSize.width++;a.arrowTopPos=Math.floor((a.blockSize.height-a.arrowElem.nativeElement.offsetHeight)/2)}};IntegralUISlideBar.prototype.cancelAnimation=function(){this.animationTimer&&clearInterval(this.animationTimer);this.animationTimer=null};IntegralUISlideBar.prototype.changeSlide=function(){var a=this.getSlideCurrentIndex(this.selectedSlideComponent);0<=a&&(this.blockMargin=-(this.slideSize.width*a));this.startAnimation()};
IntegralUISlideBar.prototype.getSpeedFactor=function(){switch(this.animationSpeed){case "veryfast":return 25;case "fast":return 15;case "slow":return 5;case "veryslow":return 2}return 10};
IntegralUISlideBar.prototype.startAnimation=function(){var a=this;a.animationTimeout&&clearTimeout(a.animationTimeout);a.animationTimeout=setTimeout(function(){a.cancelAnimation();if(0!=a.allowAnimation&&1<a.slideList.length){var c=a.getSlideCurrentIndex(a.selectedSlideComponent),d=0,b=a.getSpeedFactor();a.animationTimer=setInterval(function(){d<a.slideSize.width?(d+=b,a.blockMargin-=b):(d=0,a.cancelAnimation(),c++,a.isIndexInRange(c)?a.selectSlideByIndex(c):a.selectSlideByIndex(0))},15)}clearTimeout(a.animationTimeout)},
a.animationPause)};IntegralUISlideBar.prototype.stopAnimation=function(){this.cancelAnimation();var a=this.getSlideCurrentIndex(this.selectedSlideComponent);this.blockMargin=-(this.slideSize.width*a)};IntegralUISlideBar.prototype.selectSlide=function(a){a&&(this.selectedSlideComponent=a,this.slideChanged.emit({index:this.getSlideCurrentIndex(a),slide:this.getSlideData(this.getSlideDataIndex(a))}),this.changeSlide())};
IntegralUISlideBar.prototype.selectSlideByIndex=function(a){this.isIndexInRange(a)&&this.selectSlide(this.slideList[a])};    return IntegralUISlideBar;
}(IntegralUIBaseComponent));
export { IntegralUISlideBar };
IntegralUISlideBar.decorators = [
    { type: Component, args: [{
                selector: 'iui-slidebar',
                template: "<div class=\"iui-slidebar\" #control data-element=\"slidebar\" (mouseenter)=\"ctrlMouseEnter($event)\" (mouseleave)=\"ctrlMouseLeave($event)\" [ngStyle]=\"{ 'width': elemSize.width + 'px' }\">\n        \t<ul #block class=\"iui-slidebar-container\" [ngStyle]=\"{ 'margin-left': blockMargin + 'px', 'width': blockSize.width + 'px', 'height': blockSize.height + 'px' }\">\n        \t\t<ng-content></ng-content>\n        \t</ul>\n        \t<div class=\"iui-slidebar-navigator\">\n        \t\t<span class=\"iui-slidebar-navigator-button\" *ngFor=\"let button of buttons; let i = index\" [ngClass]=\"getButtonClass(button)\" (click)=\"selectSlideByIndex(i)\"></span>\n        \t</div>\n        \t<div #arrow class=\"iui-slidebar-arrow iui-slidebar-arrow-left\" [ngStyle]=\"{ 'display': arrowDisplay, 'top': arrowTopPos + 'px' }\" (click)=\"prevSlide()\"><span></span></div>\n        \t<div class=\"iui-slidebar-arrow iui-slidebar-arrow-right\" [ngStyle]=\"{ 'display': arrowDisplay, 'top': arrowTopPos + 'px' }\" (click)=\"nextSlide()\"><span></span></div>\n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'name', 'state'],
                providers: [IntegralUIDataService]
            },] },
];
/** @nocollapse */
IntegralUISlideBar.ctorParameters = function () { return [
    { type: IntegralUIDataService, },
    { type: IntegralUICommonService, },
    { type: ComponentFactoryResolver, },
]; };
IntegralUISlideBar.propDecorators = {
    'controlRef': [{ type: ViewChild, args: ['control', { read: ViewContainerRef },] },],
    'blockRef': [{ type: ViewChild, args: ['block', { read: ViewContainerRef },] },],
    'contentSlideList': [{ type: ContentChildren, args: [IntegralUISlide,] },],
    'blockElem': [{ type: ViewChild, args: ['block', { read: ElementRef },] },],
    'arrowElem': [{ type: ViewChild, args: ['arrow', { read: ElementRef },] },],
    'allowAnimation': [{ type: Input },],
    'animationPause': [{ type: Input },],
    'animationSpeed': [{ type: Input },],
    'slides': [{ type: Input },],
    'selectedIndex': [{ type: Input },],
    'selectedSlide': [{ type: Input },],
    'clear': [{ type: Output },],
    'slideAdding': [{ type: Output },],
    'slideAdded': [{ type: Output },],
    'slideChanged': [{ type: Output },],
    'slideRemoving': [{ type: Output },],
    'slideRemoved': [{ type: Output },],
};
//# sourceMappingURL=integralui.slidebar.js.map