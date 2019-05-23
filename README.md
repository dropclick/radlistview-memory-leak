# radlistview-memory-leak

**Native Script demo app to illustrate memory leak of RadListView component**

Problem description: Heap memory allocated by RadListView instances is never fully released during garbage collection.

Steps to reproduce memory leak on iOS:
1. Run *tns install*
2. Run *tns build ios --for-device --release*
3. Open platforms/ios in XCode
4. Select Product > Profile
5. Choose *Allocations*
6. Start recording
7. Select *All Heap Allocations* in the allocations list
8. Navigate between pages *Home* and *Test* several times
9. Watch how heap memory allocations increase around 25 MB each time you navigate to *Test* page (this is expected behaviour, because every time an instance of the page is added to the navigation history stack)
10. On *Home* page click on *Navigate to Test Component and clear history*
11. Navigate back to *Home* page, tap/click on *Collect garbage* and see that heap allocations do *not* decrease

If you replace *RadListView* with *ListView* in *test.component.html* the described behaviour changes as follows:
* Heap allocations increase around 1 MB each you navigate from *Home* to *Test*
* When you do steps 10 und 11 the gargabe collector works as expected


The problem also exists on Android. I tested the above in Android Studio and the result is similar.




