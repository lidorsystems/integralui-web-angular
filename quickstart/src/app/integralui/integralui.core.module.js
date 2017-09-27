"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
  filename: integralui.core.module.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library.
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.
*/
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var integralui_core_1 = require("./components/integralui.core");
var integralui_common_service_1 = require("./services/integralui.common.service");
var integralui_dragdrop_service_1 = require("./services/integralui.dragdrop.service");
var integralui_filter_service_1 = require("./services/integralui.filter.service");
var IntegralUICoreModule = (function () {
    function IntegralUICoreModule() {
    }
    return IntegralUICoreModule;
}());
IntegralUICoreModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        declarations: [
            integralui_core_1.IntegralUIBaseComponent,
            integralui_core_1.IntegralUIDragWindow,
            integralui_core_1.IntegralUIFocus,
            integralui_core_1.IntegralUIHeaderItem,
            integralui_core_1.IntegralUIItem,
            integralui_core_1.IntegralUITComponent,
            integralui_core_1.IntegralUITemplate,
            integralui_core_1.IntegralUITemplateOutlet
        ],
        exports: [
            integralui_core_1.IntegralUIBaseComponent,
            integralui_core_1.IntegralUIFocus,
            integralui_core_1.IntegralUIHeaderItem,
            integralui_core_1.IntegralUIItem,
            integralui_core_1.IntegralUITemplate,
            integralui_core_1.IntegralUITemplateOutlet
        ],
        entryComponents: [integralui_core_1.IntegralUIDragWindow, integralui_core_1.IntegralUITComponent],
        providers: [integralui_common_service_1.IntegralUICommonService, integralui_dragdrop_service_1.IntegralUIDragDropService, integralui_filter_service_1.IntegralUIFilterService]
    })
], IntegralUICoreModule);
exports.IntegralUICoreModule = IntegralUICoreModule;
//# sourceMappingURL=integralui.core.module.js.map