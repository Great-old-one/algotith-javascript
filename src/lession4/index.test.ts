import {quickSort, quickSortPro} from "./index";

it("should equal", function() {
    expect(quickSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(quickSort([3, 4, 2, 1])).toEqual([1, 2, 3, 4]);
});

it("should equal pro", function() {
    expect(quickSortPro([4, 3, 2, 5, 1, 9, 11, 23])).toEqual([1, 2, 3, 4, 5, 9, 11, 23]);
});
