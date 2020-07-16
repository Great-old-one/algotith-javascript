/**
 * 基数排序
 * 核心思想：将每一位上的数字放入到对应的队列中
 */
export function baseSort(nums: number[]) {
    const queues = [];
    for (let i = 0; i < 10; ++i) {
        queues[i] = [];
    }
    distribute(nums, queues, 10, 1);
    distribute(collect(queues), queues, 10, 10);
    return collect(queues);
}

function distribute(nums: number[], queues: number[][], n: number, digit: 1 | 10) {
    for (let i = 0; i < n; i++) {
        if (digit === 1) {
            queues[nums[i] % 10].push(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].push(nums[i]);
        }
    }
    return queues;
}

function collect(queues: number[][]) {
    let nums: number[] = [];
    for (let i = 0; i < queues.length; i++) {
        if (queues[i].length) {
            nums = nums.concat(queues[i]);
            // 初始化queues
            queues[i] = [];
        }
    }
    return nums;
}
