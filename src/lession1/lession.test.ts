import {isClose, isPlainrome, mulBase} from "./lession1";

test("mulBase", () => {
    expect(mulBase(4, 2)).toBe(100);
});

test("mulBase2", () => {
    expect(mulBase(9, 8)).toBe(11);
});

test("mulBase3", () => {
    expect(mulBase(32, 2)).toBe(100000);
});

test("mulBase4", () => {
    expect(mulBase(125, 8)).toBe(175);
});

test("isPlainrome", () => {
    expect(isPlainrome("12345654321")).toBe(true);
});

test("isPlainrome2", () => {
    expect(isPlainrome("123456543210")).toBe(false);
});

test("isClose", () => {
    expect(isClose("((()))")).toBe(true);
});

test("isClose2", () => {
    expect(isClose("(((()))")).toBe(false);
});

test("isClose3", () => {
    expect(isClose("))")).toBe(false);
});
