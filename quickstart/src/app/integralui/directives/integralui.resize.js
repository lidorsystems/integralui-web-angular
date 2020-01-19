/*
  filename: integralui.resize.js
  version : 1.6.211
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __decorate=this&&this.__decorate||function(b,a,e,d){var f=arguments.length,c=3>f?a:null===d?d=Object.getOwnPropertyDescriptor(a,e):d,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(b,a,e,d);else for(var h=b.length-1;0<=h;h--)if(g=b[h])c=(3>f?g(c):3<f?g(a,e,c):g(a,e))||c;return 3<f&&c&&Object.defineProperty(a,e,c),c},__metadata=this&&this.__metadata||function(b,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(b,
a)};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUIResize=function(){function b(a,b){this.elemRef=a;this.commonService=b;this.changeTimer=null;this.elemSize={width:0,height:0};this.prevElemSize={width:0,height:0};this.elemSizeChanged=new core_1.EventEmitter}b.prototype.ngAfterViewInit=function(){var a=this;a.elemSize={width:a.elemRef.nativeElement.offsetWidth,height:a.elemRef.nativeElement.offsetHeight};a.prevElemSize.width=a.elemSize.width;
a.prevElemSize.height=a.elemSize.height;a.changeTimer=setInterval(function(){a.checkForSizeChanges()},a.settings&&a.settings.interval?a.settings.interval:100)};b.prototype.ngOnDestroy=function(){this.changeTimer&&clearInterval(this.changeTimer)};b.prototype.checkForSizeChanges=function(){this.elemSize={width:this.elemRef.nativeElement.offsetWidth,height:this.elemRef.nativeElement.offsetHeight};var a=!1;this.elemSize.width!=this.prevElemSize.width?(this.prevElemSize.width=this.elemSize.width,a=!0):
this.elemSize.height!=this.prevElemSize.height&&(this.prevElemSize.height=this.elemSize.height,a=!0);if(a){a=this.commonService.getBorderWidth(this.elemRef.nativeElement);var b=this.commonService.getMargin(this.elemRef.nativeElement),d=this.commonService.getPadding(this.elemRef.nativeElement);this.elemSizeChanged.emit({borderWidth:a,margin:b,padding:d,size:this.elemSize})}};__decorate([core_1.Input("iuiResize"),__metadata("design:type",Object)],b.prototype,"settings",void 0);__decorate([core_1.Output(),
__metadata("design:type",core_1.EventEmitter)],b.prototype,"elemSizeChanged",void 0);return b=__decorate([core_1.Directive({selector:"[iuiResize]"}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],b)}();exports.IntegralUIResize=IntegralUIResize;