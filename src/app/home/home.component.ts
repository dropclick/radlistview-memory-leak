import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { isIOS } from "tns-core-modules/platform";
import { GC } from "tns-core-modules/utils/utils";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    collectGarbage(): void {
        if (isIOS)
            (<any>global).__collect();
        else
            GC();
    }
}
