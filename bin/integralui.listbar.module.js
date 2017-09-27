"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
  filename: integralui.listbar.module.js
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
var integralui_core_module_1 = require("./integralui.core.module");
var integralui_core_1 = require("./components/integralui.core");
var integralui_listbar_1 = require("./components/integralui.listbar");
var integralui_listgroup_1 = require("./components/integralui.listgroup");
var IntegralUIListBarModule = (function () {
    function IntegralUIListBarModule() {
    }
    return IntegralUIListBarModule;
}());
IntegralUIListBarModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, integralui_core_module_1.IntegralUICoreModule],
        declarations: [
            integralui_listbar_1.IntegralUIListBar,
            integralui_listgroup_1.IntegralUIListGroup
        ],
        exports: [
            integralui_core_1.IntegralUIFocus,
            integralui_core_1.IntegralUIItem,
            integralui_listbar_1.IntegralUIListBar,
            integralui_listgroup_1.IntegralUIListGroup,
            integralui_core_1.IntegralUITemplate
        ]
    })
], IntegralUIListBarModule);
exports.IntegralUIListBarModule = IntegralUIListBarModule;
//# sourceMappingURL=integralui.listbar.module.js.map