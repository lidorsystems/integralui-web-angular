/*
  filename: integralui.splitcontainer.js
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
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUISplitContainerTags=function(){function e(){}e.decorators=[{type:core_1.Directive,args:[{selector:"iui-panel1, iui-panel2"}]}];return e}();exports.IntegralUISplitContainerTags=IntegralUISplitContainerTags;
var IntegralUISplitContainer=function(e){function b(a,b,f,d){var c=e.call(this,b)||this;c.elemRef=a;c.commonService=b;c.cmpResolver=f;c.baseService=d;c.panel1Data={text:"Panel1"};c.panel2Data={text:"Panel2"};c.blockPos={top:"0",right:"auto",bottom:"auto",left:"0"};c.cmdButtonsAllowed=!0;c.maxPos={x:0,y:0};c.swap=!0;c.tabSize={width:0,height:0};c.currentOrientation=integralui_core_1.IntegralUIOrientation.Horizontal;c.currentSplitterDistance=100;c.panel1Size={width:0,height:0};c.panel2Size={width:0,
height:0};c.splitterSize={width:0,height:0};c.splitterBlockSize={width:0,height:0};c.splitterButtonBlockSize={width:0,height:0};c.splitterHandleSize={width:0,height:0};c.swapButtonSize={width:0,height:0};c.tab1Size={width:0,height:0};c.tab1ContentSize={width:0,height:0};c.tab2Size={width:0,height:0};c.tab2ContentSize={width:0,height:0};c.buttonClass=[];c.handleClass=[];c.panelClass=[];c.splitterClass=[];c.swapButtonClass=[];c.tabClass=[];c.tRef=null;c.orientationChanged=new core_1.EventEmitter;c.panelsSwapped=
new core_1.EventEmitter;c.splitterMoved=new core_1.EventEmitter;c.splitterMoving=new core_1.EventEmitter;c.splitterStartPos={x:0,y:0};c.isSplitterActive=!1;return c}__extends(b,e);Object.defineProperty(b.prototype,"orientation",{get:function(){return this.currentOrientation},set:function(a){if(this.currentOrientation!=a)var c=this,b=setTimeout(function(){c.currentOrientation=a;c.refresh();c.updateLayout();c.updateLayout();clearTimeout(b)},1)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"panel1",{get:function(){return this.panel1Data},set:function(a){this.panel1Data!=a&&(this.panel1Data=a,this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"panel2",{get:function(){return this.panel2Data},set:function(a){this.panel2Data!=a&&(this.panel2Data=a,this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"showButtons",{get:function(){return this.cmdButtonsAllowed},set:function(a){if(this.cmdButtonsAllowed!=a)var c=this,
b=setTimeout(function(){c.cmdButtonsAllowed=a;c.refresh();c.updateLayout();clearTimeout(b)},100)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"splitterDistance",{get:function(){return this.currentSplitterDistance},set:function(a){if(this.currentSplitterDistance!=a)var c=this,b=setTimeout(function(){a=c.orientation==integralui_core_1.IntegralUIOrientation.Vertical?Math.min(Math.max(0,a),c.maxPos.x):Math.min(Math.max(0,a),c.maxPos.y);c.currentSplitterDistance=a;c.splitterMoved.emit({value:a});
c.updateLayout();clearTimeout(b)},1)},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.generalClassName="iui-splitcontainer";this.buttonClassName=this.generalClassName+"-button";this.handleClassName=this.generalClassName+"-handle";this.panelClassName=this.generalClassName+"-panel";this.splitterClassName=this.generalClassName+"-splitter";this.swapButtonClassName=this.generalClassName+"-swap-button";this.tabClassName=this.generalClassName+"-tab";
this.initStyle()};b.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},panel:{disabled:this.panelClassName+"-disabled",normal:this.panelClassName+"-normal"},splitter:{general:{normal:this.splitterClassName,horizontal:this.splitterClassName+"-horizontal",vertical:this.splitterClassName+"-vertical"},
handle:{general:this.handleClassName,horizontal:this.handleClassName+"-horizontal",vertical:this.handleClassName+"-vertical"},swapButton:{disabled:this.swapButtonClassName+"-disabled",hovered:this.swapButtonClassName+"-hovered",normal:this.swapButtonClassName+"-normal",selected:this.swapButtonClassName+"-selected"},tab:{disabled:this.tabClassName+"-disabled",focused:this.tabClassName+"-focused",hovered:this.tabClassName+"-hovered",normal:this.tabClassName+"-normal",selected:this.tabClassName+"-selected"}}};
this.updateStyle(this.controlStyle);this.refresh()};b.prototype.ngAfterViewInit=function(){var a=this,c=setTimeout(function(){var b=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);b&&a.splitterRef&&(a.tRef=a.splitterRef.createComponent(b));clearTimeout(c)},100)};b.prototype.ngAfterContentInit=function(){this.ctrlRect=this.commonService.getPageRect(this.elemRef.nativeElement);this.updateLayout()};b.prototype.ngOnDestroy=function(){this.tRef&&this.tRef.destroy()};b.prototype.ngAfterContentChecked=
function(){this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth-2,height:this.elemRef.nativeElement.firstElementChild.clientHeight-2};this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height)};b.prototype.swapButtonClicked=function(){if(this.isEnabled){this.swap=!this.swap;var a=this.panel1Data;
this.panel1Data=this.panel2Data;this.panel2Data=a;this.panelsSwapped.emit(null);this.updateLayout()}};b.prototype.updateLayout=function(){var a=this,c=setTimeout(function(){a.splitterSize={width:0,height:0};for(var b=a.splitterElem.nativeElement.children,d=0;d<b.length-1;d++){switch(d){case 0:a.tab1Size={width:b[d].offsetWidth,height:b[d].offsetHeight};break;case 1:a.swapButtonSize={width:b[d].offsetWidth,height:b[d].offsetHeight};break;case 2:a.tab2Size={width:b[d].offsetWidth,height:b[d].offsetHeight}}a.splitterSize.width<
b[0].firstElementChild.offsetHeight&&(a.splitterSize.width=b[0].firstElementChild.offsetHeight);a.splitterSize.height<b[0].offsetHeight&&(a.splitterSize.height=b[0].offsetHeight)}a.tab1ContentSize={width:a.tab1ContentElem.nativeElement.offsetWidth,height:a.tab1ContentElem.nativeElement.offsetHeight};a.tab2ContentSize={width:a.tab2ContentElem.nativeElement.offsetWidth,height:a.tab2ContentElem.nativeElement.offsetHeight};a.splitterSize.width+=2;a.splitterSize.height+=2;a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth-
2,height:a.elemRef.nativeElement.firstElementChild.clientHeight-2};a.panel1Size={width:a.currentSplitterDistance,height:a.currentSplitterDistance};a.panel2Size={width:a.clientRect.width-a.currentSplitterDistance-a.splitterSize.width-4,height:a.clientRect.height-a.currentSplitterDistance-a.splitterSize.height-4};a.splitterButtonBlockSize={width:a.buttonBlockElem.nativeElement.offsetWidth,height:a.buttonBlockElem.nativeElement.offsetHeight};a.splitterBlockSize=a.orientation==integralui_core_1.IntegralUIOrientation.Vertical?
{width:a.splitterElem.nativeElement.clientWidth,height:a.splitterElem.nativeElement.clientHeight-(a.tab1ContentSize.width+a.swapButtonSize.height+a.tab2ContentSize.width+a.splitterButtonBlockSize.height+16)}:{width:a.splitterElem.nativeElement.clientWidth-(a.tab1Size.width+a.swapButtonSize.width+a.tab2Size.width+a.splitterButtonBlockSize.width+16),height:a.splitterElem.nativeElement.clientHeight};a.splitterHandleSize={width:a.handleElem.nativeElement.offsetWidth,height:a.handleElem.nativeElement.offsetHeight};
a.maxPos={x:a.clientRect.width-a.splitterSize.width-4,y:a.clientRect.height-a.splitterSize.height-4};clearTimeout(c)},1)};b.prototype.ctrlMouseMove=function(a){if(this.isEnabled&&1==a.buttons&&this.isSplitterActive){var b=this.commonService.getShiftPos();a={x:a.pageX-this.ctrlRect.left-b.x,y:a.pageY-this.ctrlRect.top-b.y};b=this.splitterDistance;this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?(b+=a.x-this.splitterStartPos.x,b=Math.min(Math.max(0,b),this.maxPos.x)):(b+=a.y-this.splitterStartPos.y,
b=Math.min(Math.max(0,b),this.maxPos.y));if(this.currentSplitterDistance!=b){var e={cancel:!1,value:b};this.splitterMoving.emit(e);1!=e.cancel&&(this.currentSplitterDistance=b,this.updateLayout())}this.splitterStartPos=a}};b.prototype.splitterMouseDown=function(a){if(this.isEnabled){var b=this.commonService.getShiftPos();a={x:a.pageX-this.ctrlRect.left-b.x,y:a.pageY-this.ctrlRect.top-b.y};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?a.y>this.tab1Size.height+this.swapButtonSize.height+
this.tab2Size.height+10&&(this.splitterStartPos=a,this.isSplitterActive=!0):a.x>this.tab1Size.width+this.swapButtonSize.width+this.tab2Size.width+10&&(this.splitterStartPos=a,this.isSplitterActive=!0)}};b.prototype.onWindowMouseUp=function(a){this.isEnabled&&(this.isSplitterActive=!1,this.splitterMoved.emit({value:this.currentSplitterDistance}))};b.prototype.changeOrientation=function(a){this.orientation=a?integralui_core_1.IntegralUIOrientation.Vertical:integralui_core_1.IntegralUIOrientation.Horizontal};
b.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};b.prototype.getInlinePanel1Style=function(){var a={top:"0",left:"0",width:"auto",height:"auto"};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?(a.width=this.panel1Size.width+"px",a.height=this.clientRect.height+"px"):a.height=this.panel1Size.height+"px";return a};b.prototype.getInlinePanel2Style=function(){var a=
{top:"0",left:"0",width:"auto",height:"auto"};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?(a.left=this.panel1Size.width+this.splitterSize.width+1+"px",a.width=this.panel2Size.width+"px",a.height=this.clientRect.height+"px"):(a.height=this.panel2Size.height+"px",a.top=this.panel1Size.height+this.splitterSize.height+"px");return a};b.prototype.getInlineSplitterStyle=function(){var a={top:"0",left:"0",width:"auto",height:"auto"};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?
(a.left=this.panel1Size.width+"px",a.width=this.splitterSize.width+"px",a.height=this.clientRect.height+"px"):(a.width=this.clientRect.width+"px",a.height=this.splitterSize.height+"px",a.top=this.panel1Size.height+1+"px");return a};b.prototype.getInlineTab1Style=function(){var a={top:"-1px",left:"0",width:"auto",height:"auto"};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?(a.left="-1px",a["border-left"]="0",a.width=this.tab1ContentSize.height+"px",a.height=this.tab1ContentSize.width+
"px"):(a.left="-1px",a["border-top"]="0",a.width=this.tab1ContentSize.width+"px",a.height=this.tab1ContentSize.height+"px");return a};b.prototype.getInlineTab1ContentStyle=function(){var a={top:"0",left:"0"};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical&&(a.top=(this.tab1ContentSize.width-this.tab1ContentSize.height)/2+"px",a.left=(this.tab1ContentSize.height-this.tab1ContentSize.width)/2+"px");return a};b.prototype.getInlineTab2Style=function(){var a={top:"auto",right:"auto",
bottom:"auto",left:"auto",width:"auto",height:"auto"};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?(a["border-right"]="0",a.right="-1px",a.top=this.tab1ContentSize.width+this.swapButtonSize.height+4+"px",a.width=this.tab2ContentSize.height+"px",a.height=this.tab2ContentSize.width+"px"):(a.bottom="-1px",a.left=this.tab1ContentSize.width+this.swapButtonSize.width+4+"px",a["border-bottom"]="0",a.width=this.tab2ContentSize.width+"px",a.height=this.tab2ContentSize.height+"px");return a};
b.prototype.getInlineTab2ContentStyle=function(){var a={top:"0",right:"0"};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical&&(a.top=(this.tab2ContentSize.width-this.tab2ContentSize.height)/2+"px",a.right=(this.tab2ContentSize.height-this.tab2ContentSize.width)/2+"px");return a};b.prototype.getInlineHandleBlockStyle=function(){var a={cursor:"ew-resize",width:"auto",height:"auto",top:"auto",left:"auto"};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?(a.height=this.splitterBlockSize.height+
"px",a.top=this.tab1ContentSize.width+this.swapButtonSize.height+this.tab2ContentSize.width+8+"px",a.left=(this.splitterBlockSize.width-this.splitterHandleSize.width)/2+"px"):(a.cursor="ns-resize",a.width=this.splitterBlockSize.width+"px",a.top=(this.splitterBlockSize.height-this.splitterHandleSize.height)/2+"px",a.left=this.tab1Size.width+this.swapButtonSize.width+this.tab2Size.width+8+"px");return a};b.prototype.getInlineHandleStyle=function(){var a={"margin-top":"0","margin-left":"0"};this.orientation==
integralui_core_1.IntegralUIOrientation.Vertical?a["margin-top"]=(this.splitterBlockSize.height-this.splitterHandleSize.height)/2+"px":a["margin-left"]=(this.splitterBlockSize.width-this.splitterHandleSize.width)/2+"px";return a};b.prototype.getInlineSwapButtonStyle=function(){return this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?{top:this.tab1ContentSize.width+2+"px",left:(this.splitterSize.width-this.swapButtonSize.width)/2+"px"}:{top:(this.splitterSize.height-this.swapButtonSize.height)/
2+"px",left:this.tab1ContentSize.width+2+"px"}};b.prototype.getInlineButtonBlockStyle=function(){var a={top:"auto",right:"auto",bottom:"auto",left:"auto"};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?(a.bottom="0px",a.left=(this.splitterBlockSize.width-this.splitterButtonBlockSize.width)/2+"px"):(a.top=(this.splitterBlockSize.height-this.splitterButtonBlockSize.height)/2+"px",a.right="2px");return a};b.prototype.updateButtonClass=function(){this.buttonClass.length=0;this.buttonClass.push(this.buttonClassName);
this.buttonClass.push(this.options.currentStyle.splitter.button.general.normal)};b.prototype.getButtonClass=function(){return this.buttonClass};b.prototype.updateSplitterClass=function(){this.splitterClass.length=0;this.splitterClass.push(this.splitterClassName);this.splitterClass.push(this.options.currentStyle.splitter.general.normal);this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?this.splitterClass.push(this.options.currentStyle.splitter.general.vertical):this.splitterClass.push(this.options.currentStyle.splitter.general.horizontal)};
b.prototype.getSplitterClass=function(){return this.splitterClass};b.prototype.updateHandleClass=function(){this.handleClass.length=0;this.handleClass.push(this.handleClassName);this.handleClass.push(this.options.currentStyle.splitter.handle.general);this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?this.handleClass.push(this.options.currentStyle.splitter.handle.vertical):this.handleClass.push(this.options.currentStyle.splitter.handle.horizontal)};b.prototype.getHandleClass=function(){return this.handleClass};
b.prototype.updatePanelClass=function(){this.panelClass.length=0;this.panelClass.push(this.panelClassName);this.panelClass.push(this.options.currentStyle.panel.normal)};b.prototype.getPanelClass=function(){return this.panelClass};b.prototype.updateSwapButtonClass=function(){this.swapButtonClass.length=0;this.swapButtonClass.push(this.swapButtonClassName);this.swapButtonClass.push(this.options.currentStyle.splitter.swapButton.normal);this.orientation==integralui_core_1.IntegralUIOrientation.Vertical&&
this.swapButtonClass.push(this.swapButtonClassName+"-vertical")};b.prototype.getSwapButtonClass=function(){return this.swapButtonClass};b.prototype.updateTabClass=function(){this.tabClass.length=0;this.tabClass.push(this.tabClassName);this.tabClass.push(this.options.currentStyle.splitter.tab.selected);this.orientation==integralui_core_1.IntegralUIOrientation.Vertical&&this.tabClass.push(this.tabClassName+"-vertical")};b.prototype.getTabClass=function(){return this.tabClass};b.prototype.getPanelStyle=
function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.panelClassName+"-disabled"),normal:this.commonService.isFieldAvailable(a.normal,this.panelClassName)}:{disabled:this.defaultStyle.panel.disabled,normal:this.defaultStyle.panel.normal}};b.prototype.getSplitterGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{normal:this.commonService.isFieldAvailable(a.normal,this.splitterClassName),horizontal:this.commonService.isFieldAvailable(a.horizontal,
this.splitterClassName+"-horizontal"),vertical:this.commonService.isFieldAvailable(a.vertical,this.splitterClassName+"-vertical")}:{normal:this.defaultStyle.splitter.general.normal,horizontal:this.defaultStyle.splitter.general.horizontal,vertical:this.defaultStyle.splitter.general.vertical}};b.prototype.getHandleStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.handleClassName),horizontal:this.commonService.isFieldAvailable(a.horizontal,
this.handleClassName+"-horizontal"),vertical:this.commonService.isFieldAvailable(a.vertical,this.handleClassName+"-vertical")}:{general:this.defaultStyle.splitter.handle.general,horizontal:this.defaultStyle.splitter.handle.horizontal,vertical:this.defaultStyle.splitter.handle.vertical}};b.prototype.getSwapButtonStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.swapButtonClassName+"-disabled"),hovered:this.commonService.isFieldAvailable(a.hovered,
this.swapButtonClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.swapButtonClassName),selected:this.commonService.isFieldAvailable(a.selected,this.swapButtonClassName+"-selected")}:{disabled:this.defaultStyle.splitter.swapButton.disabled,hovered:this.defaultStyle.splitter.swapButton.hovered,normal:this.defaultStyle.splitter.swapButton.normal,selected:this.defaultStyle.splitter.swapButton.selected}};b.prototype.getTabStyle=function(a){return this.commonService.isString(a)?
a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.tabClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.tabClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.tabClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.tabClassName),selected:this.commonService.isFieldAvailable(a.selected,this.tabClassName+"-selected")}:{disabled:this.defaultStyle.splitter.tab.disabled,focused:this.defaultStyle.splitter.tab.focused,
hovered:this.defaultStyle.splitter.tab.hovered,normal:this.defaultStyle.splitter.tab.normal,selected:this.defaultStyle.splitter.tab.selected}};b.prototype.getSplitterStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.getSplitterGeneralStyle(a.general),handle:this.getHandleStyle(a.handle),swapButton:this.getSwapButtonStyle(a.swapButton),tab:this.getTabStyle(a.tab)}:this.getDefaultSplitterStyle()};b.prototype.getDefaultStyle=function(){return{general:this.getDefaultGeneralStyle(),
panel:this.getDefaultPanelStyle(),splitter:this.getDefaultSplitterStyle()}};b.prototype.getDefaultPanelStyle=function(){return{disabled:this.defaultStyle.panel.disabled,normal:this.defaultStyle.panel.normal}};b.prototype.getDefaultSplitterStyle=function(){return{general:{normal:this.defaultStyle.splitter.general.normal,horizontal:this.defaultStyle.splitter.general.horizontal,vertical:this.defaultStyle.splitter.general.vertical},handle:{general:this.defaultStyle.splitter.handle.general,horizontal:this.defaultStyle.splitter.handle.horizontal,
vertical:this.defaultStyle.splitter.handle.vertical},swapButton:{disabled:this.defaultStyle.splitter.swapButton.disabled,hovered:this.defaultStyle.splitter.swapButton.hovered,normal:this.defaultStyle.splitter.swapButton.normal,selected:this.defaultStyle.splitter.swapButton.selected},tab:{disabled:this.defaultStyle.splitter.tab.disabled,focused:this.defaultStyle.splitter.tab.focused,hovered:this.defaultStyle.splitter.tab.hovered,normal:this.defaultStyle.splitter.tab.normal,selected:this.defaultStyle.splitter.tab.selected}}};
b.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),panel:this.getPanelStyle(a.panel),splitter:this.getSplitterStyle(a.splitter)}:this.getDefaultStyle()};b.prototype.refresh=function(){this.updateControlClass();this.updateSplitterClass();this.updateHandleClass();this.updatePanelClass();this.updateSwapButtonClass();this.updateTabClass()};b.decorators=[{type:core_1.Component,args:[{selector:"iui-splitcontainer",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" (mousemove)="ctrlMouseMove($event)">\n\t\t\t<div [ngClass]="getPanelClass()" [ngStyle]="getInlinePanel1Style()" #panel1>\n\t\t\t\t<ng-content select="iui-panel1"></ng-content>\n\t\t\t</div>\n\t\t\t<div [ngClass]="getSplitterClass()" [ngStyle]="getInlineSplitterStyle()" (mousedown)="splitterMouseDown($event)" #splitter>\n\t\t\t\t<div [ngClass]="getTabClass()" [ngStyle]="getInlineTab1Style()">\n\t\t\t\t\t<div #tab1Content [ngStyle]="getInlineTab1ContentStyle()">\n\t\t\t\t\t\t<span *ngIf="panel1Data.icon" [ngClass]="panel1Data.icon"></span>\n\t\t\t\t\t    <span *ngIf="panel1Data.text">{{panel1Data.text}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div [ngClass]="getSwapButtonClass()" [ngStyle]="getInlineSwapButtonStyle()" (click)="swapButtonClicked()" #btnSwap>\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t\t<div [ngClass]="getTabClass()" [ngStyle]="getInlineTab2Style()">\n\t\t\t\t\t<div #tab2Content [ngStyle]="getInlineTab2ContentStyle()">\n\t\t\t\t\t\t<span *ngIf="panel2Data.icon" [ngClass]="panel2Data.icon"></span>\n\t\t\t\t\t    <span *ngIf="panel2Data.text">{{panel2Data.text}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div [ngClass]="getHandleClass()" [ngStyle]="getInlineHandleBlockStyle()">\n\t\t\t\t\t<span [ngStyle]="getInlineHandleStyle()" #handle></span>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf="showButtons" class="iui-splitcontainer-button-block" [ngStyle]="getInlineButtonBlockStyle()" #buttonBlock>\n\t\t\t\t\t<div class="iui-splitcontainer-button iui-splitcontainer-button-vertical" [ngClass]="{ \'iui-splitcontainer-button-selected\': orientation == 1 }" (click)="changeOrientation(true)">\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="iui-splitcontainer-button iui-splitcontainer-button-horizontal" [ngClass]="{ \'iui-splitcontainer-button-selected\': orientation == 0 }" (click)="changeOrientation()">\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div [ngClass]="getPanelClass()" [ngStyle]="getInlinePanel2Style()" #panel2>\n\t\t\t\t<ng-content select="iui-panel2"></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t',
inputs:"controlStyle data enabled name size state".split(" "),providers:[integralui_core_1.IntegralUIBaseService],encapsulation:core_1.ViewEncapsulation.None}]}];b.ctorParameters=function(){return[{type:core_1.ElementRef},{type:integralui_common_service_1.IntegralUICommonService},{type:core_1.ComponentFactoryResolver},{type:integralui_core_1.IntegralUIBaseService}]};b.propDecorators={buttonBlockElem:[{type:core_1.ViewChild,args:["buttonBlock"]}],handleElem:[{type:core_1.ViewChild,args:["handle"]}],
panel1Elem:[{type:core_1.ViewChild,args:["panel1"]}],panel2Elem:[{type:core_1.ViewChild,args:["panel2"]}],splitterElem:[{type:core_1.ViewChild,args:["splitter"]}],splitterRef:[{type:core_1.ViewChild,args:["splitter",{read:core_1.ViewContainerRef}]}],tab1ContentElem:[{type:core_1.ViewChild,args:["tab1Content"]}],tab2ContentElem:[{type:core_1.ViewChild,args:["tab2Content"]}],orientation:[{type:core_1.Input}],panel1:[{type:core_1.Input}],panel2:[{type:core_1.Input}],showButtons:[{type:core_1.Input}],
splitterDistance:[{type:core_1.Input}],orientationChanged:[{type:core_1.Output}],panelsSwapped:[{type:core_1.Output}],splitterMoved:[{type:core_1.Output}],splitterMoving:[{type:core_1.Output}],onWindowMouseUp:[{type:core_1.HostListener,args:["document:mouseup",["$event"]]}]};return b}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUISplitContainer=IntegralUISplitContainer;