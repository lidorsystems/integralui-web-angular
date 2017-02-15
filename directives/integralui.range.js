var __decorate=this&&this.__decorate||function(c,a,d,b){var f=arguments.length,e=3>f?a:null===b?b=Object.getOwnPropertyDescriptor(a,d):b,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)e=Reflect.decorate(c,a,d,b);else for(var h=c.length-1;0<=h;h--)if(g=c[h])e=(3>f?g(e):3<f?g(a,d,e):g(a,d))||e;return 3<f&&e&&Object.defineProperty(a,d,e),e},__metadata=this&&this.__metadata||function(c,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(c,
a)},core_1=require("@angular/core"),integralui_core_1=require("../components/integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUIRange=function(){function c(a,d,b){this.elemRef=a;this.elemRenderer=d;this.commonService=b;this.defaultSettings={anchor:integralui_core_1.IntegralUIAnchorStyle.Top|integralui_core_1.IntegralUIAnchorStyle.Left,factor:1,height:0,maxHeight:9999999,maxWidth:9999999,minHeight:0,minWidth:0,ref:"parent",width:0};this.resizeInterval=
null;this.originalElemSize={width:0,height:0};this.sizeChanged=new core_1.EventEmitter}c.prototype.ngAfterViewInit=function(){var a=this;a.defaultSettings.width=parseInt(a.elemRef.nativeElement.width,10);var d={anchor:integralui_core_1.IntegralUIAnchorStyle.Top|integralui_core_1.IntegralUIAnchorStyle.Left,factor:1,height:0,maxHeight:9999999,maxWidth:9999999,minHeight:0,minWidth:0,ref:"parent",width:0};a.settings&&(d.anchor=a.commonService.isFieldAvailable(a.settings.anchor,a.defaultSettings.anchor),
d.factor=a.commonService.isFieldAvailable(a.settings.factor,a.defaultSettings.factor),d.minWidth=parseInt(a.commonService.isFieldAvailable(a.settings.minWidth,a.defaultSettings.minWidth),10),d.maxWidth=parseInt(a.commonService.isFieldAvailable(a.settings.maxWidth,a.defaultSettings.maxWidth),10),d.minHeight=parseInt(a.commonService.isFieldAvailable(a.settings.minHeight,a.defaultSettings.minHeight),10),d.maxHeight=parseInt(a.commonService.isFieldAvailable(a.settings.maxHeight,a.defaultSettings.maxHeight),
10));var b=a.elemRef.nativeElement.parentElement.offsetWidth,c=a.elemRef.nativeElement.parentElement.offsetHeight,e=0,g=0;a.originalElemSize={width:a.elemRef.nativeElement.offsetWidth,height:a.elemRef.nativeElement.offsetHeight};var h={dx:0,dy:0};a.resizeInterval=setInterval(function(){var f=a.elemRef.nativeElement.parentElement.offsetWidth-2,k=a.elemRef.nativeElement.parentElement.offsetHeight-2;f!=e&&(h.dx=(f-b)*d.factor);k!=g&&(h.dy=(k-c)*d.factor);a.settings&&"parent"==a.settings.ref&&a.updateSize(d,
h);e=f;g=k},10)};c.prototype.ngOnDestroy=function(){null!=this.resizeInterval&&clearInterval(this.resizeInterval)};c.prototype.onMouseEnter=function(){this.sizeChanged.emit(null)};c.prototype.onChange=function(a){};c.prototype.onResize=function(a){};c.prototype.updateSize=function(a,c){var b;this.commonService.getPadding(this.elemRef.nativeElement.parentElement);a.anchor&integralui_core_1.IntegralUIAnchorStyle.Right&&(b=this.originalElemSize.width+c.dx,b=b<a.minWidth?a.minWidth:b,b=b>a.maxWidth?a.maxWidth:
b,this.elemRenderer.setElementStyle(this.elemRef.nativeElement,"width",b-2+"px"));a.anchor&integralui_core_1.IntegralUIAnchorStyle.Bottom&&(b=this.originalElemSize.height+c.dy,b=b<a.minHeight?a.minHeight:b,b=b>a.maxHeight?a.maxHeight:b,this.elemRenderer.setElementStyle(this.elemRef.nativeElement,"height",b-2+"px"))};__decorate([core_1.Input("iuiRange"),__metadata("design:type",Object)],c.prototype,"settings",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],c.prototype,
"sizeChanged",void 0);__decorate([core_1.HostListener("mouseenter"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],c.prototype,"onMouseEnter",null);__decorate([core_1.HostListener("change"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],c.prototype,"onChange",null);__decorate([core_1.HostListener("window:resize"),__metadata("design:type",Function),__metadata("design:paramtypes",
[Object]),__metadata("design:returntype",void 0)],c.prototype,"onResize",null);return c=__decorate([core_1.Directive({selector:"[iuiRange]"}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.Renderer,integralui_common_service_1.IntegralUICommonService])],c)}();exports.IntegralUIRange=IntegralUIRange;