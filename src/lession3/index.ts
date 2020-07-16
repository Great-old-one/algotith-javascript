/**
 * 缺失的第一个正整数
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数
 * eg: [1,2,0]=>3;[3,4,-1,1]=> 2
 */

// 方案一
// export function findMinInteger(arr: number[]) {
//     arr = arr.filter((v) => v > 0).sort((a, b) => a - b);
//     if (!arr.length) {
//         return 1;
//     }
//     if (arr[0] > 1) {
//         return 1;
//     } else {
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i + 1] - arr[i] > 1) {
//                 return arr[i] + 1;
//             }
//         }
//         return arr.pop()! + 1;
//     }
// }

// 方案二（选择排序）
export function findMinInteger(arr: number[]) {
    arr = arr.filter((v) => v > 0);
    if (!arr.length) {
        return 1;
    }
    for (let i = 0, min; i < arr.length; i++) {
        min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                const temp = min;
                min = arr[j];
                arr[j] = temp;
            }
        }
        arr[i] = min;
        if (i === 0) {
            if (min !== 1) {
                return 1;
            }
        } else {
            if (arr[i] - arr[i - 1] > 1) {
                return arr[i - 1] + 1;
            }
        }
    }

    return arr.pop()! + 1;
}
