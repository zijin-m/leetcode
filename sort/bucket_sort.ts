function bucketSort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }
    radixSort(arr, getMaxDigit(arr));
    return arr;
}

function getMaxDigit(arr: number[]): number {
    let max = 0;
    for (const val of arr) {
        if (val > max) {
            max = val;
        }
    }
    return max.toString().length;
}

function radixSort(arr: number[], digit: number) {
    const bucket: number[] = [];
    const radix = 10;
    for (let d = 1; d <= digit; d++) {
        const count: number[] = new Array(radix).fill(0);
        // 统计每个分位的数字出现的次数
        for (let i = 0; i < arr.length; i++) {
            const v = getDigit(arr[i], d);
            count[v]++;
        }
        // 依次相加，获取每个分位的数字前面总共排了几个（包括自身）
        for (let i = 1; i < count.length; i++) {
            count[i] = count[i - 1] + count[i];
        }
        // 反向遍历，根据前面的排序确定自身的位置
        for (let i = arr.length - 1; i >= 0; i--) {
            const v = getDigit(arr[i], d);
            // 数量 - 1 即为此轮排序放置的位置
            bucket[count[v] - 1] = arr[i];
            // 放置了一个，将数量减 1
            count[v]--;
        }
        // 依次放回原数组
        for (let i = 0; i < arr.length; i++) {
            arr[i] = bucket[i];
        }
    }
}

function getDigit(val: number, digit: number): number {
    const len = val.toString().length;
    if (len < digit) {
        return 0;
    }
    const n = Number(val.toString()[len - digit]);
    return n;
}

const arr = [13, 1, 25, 38, 42, 10, 109, 63, 4, 22, 68, 51];
bucketSort(arr);
console.log(arr);