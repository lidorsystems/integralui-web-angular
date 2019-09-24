/*
  filename: integralui.resize.js
  version : 1.6.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __decorate=this&&this.__decorate||function(a,b,e,d){var f=arguments.length,c=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,e):d,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(a,b,e,d);else for(var h=a.length-1;0<=h;h--)if(g=a[h])c=(3>f?g(c):3<f?g(b,e,c):g(b,e))||c;return 3<f&&c&&Object.defineProperty(b,e,c),c},__metadata=this&&this.__metadata||function(a,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(a,
b)};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUIResize=function(){function a(b,a){this.elemRef=b;this.commonService=a;this.elemSize={width:0,height:0};this.prevElemSize={width:0,height:0};this.elemSizeChanged=new core_1.EventEmitter}a.prototype.ngAfterViewInit=function(){this.elemSize={width:this.elemRef.nativeElement.offsetWidth,height:this.elemRef.nativeElement.offsetHeight};this.prevElemSize.width=this.elemSize.width;this.prevElemSize.height=
this.elemSize.height};a.prototype.ngAfterContentChecked=function(){this.elemSize={width:this.elemRef.nativeElement.offsetWidth,height:this.elemRef.nativeElement.offsetHeight};var b=!1;this.elemSize.width!=this.prevElemSize.width?(this.prevElemSize.width=this.elemSize.width,b=!0):this.elemSize.height!=this.prevElemSize.height&&(this.prevElemSize.height=this.elemSize.height,b=!0);if(b){b=this.commonService.getBorderWidth(this.elemRef.nativeElement);var a=this.commonService.getMargin(this.elemRef.nativeElement),
d=this.commonService.getPadding(this.elemRef.nativeElement);this.elemSizeChanged.emit({borderWidth:b,margin:a,padding:d,size:this.elemSize})}};__decorate([core_1.Input("iuiResize"),__metadata("design:type",Object)],a.prototype,"settings",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"elemSizeChanged",void 0);return a=__decorate([core_1.Directive({selector:"[iuiResize]"}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],
a)}();exports.IntegralUIResize=IntegralUIResize;