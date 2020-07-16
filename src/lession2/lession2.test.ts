import {baseSort} from "./lession2";

it("should be sorted", function() {
    const arr = [91, 46, 85, 15, 92, 35, 31, 22, 64, 77];
    expect(baseSort(arr).toString()).toBe([15, 22, 31, 35, 46, 64, 77, 85, 91, 92].toString());
});
