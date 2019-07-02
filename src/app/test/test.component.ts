import { Component, OnInit, OnDestroy } from "@angular/core";
import { Page, ViewBase, View } from "tns-core-modules/ui/page/page";
import { ListViewEventData } from "nativescript-ui-listview";

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
            if (grid) {
                let listView: ViewBase = grid.getViewById("listView");
                listView.eachChild((child: ViewBase): boolean => {
                    child.disposeNativeView();
                    child.eachChild((grandchild: ViewBase): boolean => {
                        console.log(grandchild);
                        grandchild.disposeNativeView();
                        return true;
                    });
                    return true;
                })
                this.items = null;
            }
        });
    }


    public onSwipeCellStarted(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        const swipeView = args['object'];
        const deleteItem = swipeView.getViewById<View>('test');
        swipeLimits.left = 0;
        swipeLimits.right = deleteItem.getMeasuredWidth();
        swipeLimits.threshold = deleteItem.getMeasuredWidth() / 2;
    }

    onTestButtonTap(args) {
        console.log("test button tapped.");
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}
