import { NgModule, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";

import { TestRoutingModule } from "./test-routing.module";
import { TestComponent } from "./test.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TestRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        TestComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TestModule {
}
