// 快速排序
export function quickSort(arr: number[]) {
    const sort = (list: number[]): number[] => {
        if (list.length < 2) {
            return list;
        } else {
            const flag = list[0];
            const left = [];
            const right = [];
            for (let i = 1; i < list.length; i++) {
                const tmp = list[i];
                if (tmp < flag) {
                    left.push(tmp);
                } else {
                    right.push(tmp);
                }
            }
            const res = sort(left).concat(flag, sort(right));
            return res;
        }
    };
    return sort(arr);
}

// 少内存
export function quickSortPro(list: number[]) {
    // 位置交换函数
    const swap = (arr: number[], i: number, j: number) => {
        const tm = arr[i];
        arr[i] = arr[j];
        arr[j] = tm;
    };
    const findCenter = (arr: number[], left: number, right: number): number => {
        const flag = arr[left];
        let index = left + 1;
        // 将小于flag的值依次放到flag下标index的位置
        for (let i = index; i <= right; i++ ) {
            if (arr[i] < flag) {
                swap(arr, index, i);
                index++;
            }
        }
        // 交换flag和index处元素的位置，实现小于flag的元素在它左边，大于它的在右边
        swap(arr, left, index - 1);
        return index;
    };
    const sort = (arr: number[], left: number, right: number) => {
        if (left < right) {
            const center = findCenter(arr, left, right);
            sort(arr, left, center - 1);
            sort(arr, center, right);
        }
        return arr;
    };
    sort(list, 0, list.length - 1);
    return list;
}
