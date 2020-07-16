import {findMinInteger} from "./index";

it("test findMinInteger", () => {
    expect(findMinInteger([1, 2, 0])).toBe(3);
    expect(findMinInteger([1, 2, 0, 56, -1, 90])).toBe(3);
    expect(findMinInteger([3, 4, -1, 1])).toBe(2);
    expect(findMinInteger([])).toBe(1);
    expect(findMinInteger([1])).toBe(2);
    expect(findMinInteger([7, 8, 9, 10, 11])).toBe(1);
});
