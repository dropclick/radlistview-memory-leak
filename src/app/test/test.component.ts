import { Component, OnInit, OnDestroy } from "@angular/core";
import { Page, ViewBase, View } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Test",
    moduleId: module.id,
    templateUrl: "./test.component.html"
})
export class TestComponent implements OnInit, OnDestroy {
    items: string[];


    constructor(private page: Page) {
        this.items = [];
        for (let i = 0; i < 50000; i++) {
            this.items.push("" + i);
        }
        this.page.addEventListener("navigatingFrom", () => {
            let grid: ViewBase = this.page.getViewById("grid");
            let listView: ViewBase = grid.getViewById("listView");
            //console.log(grid);
            //console.log(listView);
            let i = 0;
            listView.eachChild((child: ViewBase):boolean => {
                //console.log(child);
                //listView._removeView(child);
                child.disposeNativeView();
                return true;
            })
            this.items = null;
        });
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}
