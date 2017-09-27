"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
  filename: integralui.common.module.js
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
var integralui_combobox_1 = require("./components/integralui.combobox");
var integralui_dropdown_1 = require("./directives/integralui.dropdown");
var integralui_frame_1 = require("./directives/integralui.frame");
var integralui_listitem_1 = require("./components/integralui.listitem");
var integralui_paginator_1 = require("./components/integralui.paginator");
var integralui_range_1 = require("./directives/integralui.range");
var integralui_scrollbar_1 = require("./components/integralui.scrollbar");
var integralui_splitter_1 = require("./components/integralui.splitter");
var integralui_tooltip_1 = require("./directives/integralui.tooltip");
var IntegralUICommonModule = (function () {
    function IntegralUICommonModule() {
    }
    return IntegralUICommonModule;
}());
IntegralUICommonModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, integralui_core_module_1.IntegralUICoreModule],
        declarations: [
            integralui_combobox_1.IntegralUIComboBox,
            integralui_dropdown_1.IntegralUIDropDown,
            integralui_dropdown_1.IntegralUIDropDownComponent,
            integralui_frame_1.IntegralUIFrame,
            integralui_listitem_1.IntegralUIListItem,
            integralui_paginator_1.IntegralUIPaginator,
            integralui_range_1.IntegralUIRange,
            integralui_scrollbar_1.IntegralUIScrollBar,
            integralui_splitter_1.IntegralUISplitter,
            integralui_tooltip_1.IntegralUITooltip,
            integralui_tooltip_1.IntegralUITooltipComponent
        ],
        exports: [
            integralui_combobox_1.IntegralUIComboBox,
            integralui_dropdown_1.IntegralUIDropDown,
            integralui_frame_1.IntegralUIFrame,
            integralui_listitem_1.IntegralUIListItem,
            integralui_paginator_1.IntegralUIPaginator,
            integralui_range_1.IntegralUIRange,
            integralui_scrollbar_1.IntegralUIScrollBar,
            integralui_splitter_1.IntegralUISplitter,
            integralui_tooltip_1.IntegralUITooltip
        ],
        entryComponents: [integralui_dropdown_1.IntegralUIDropDownComponent, integralui_tooltip_1.IntegralUITooltipComponent],
    })
], IntegralUICommonModule);
exports.IntegralUICommonModule = IntegralUICommonModule;
//# sourceMappingURL=integralui.common.module.js.map