function quickSort(arr: number[], l: number = 0, r: number = arr.length - 1) {
    if (l < r) {
        // 随机交换，打破一些有规律的数据，使复杂度趋近 O(NLogN)
        swap(arr, Math.floor(l + (r - l) * Math.random()), r);
        const [p1, p2] = partition(arr, l, r);
        quickSort(arr, l, p1 - 1);
        quickSort(arr, p2 + 1, r);
    }
    return arr;
}

/**
 * 分区数组使其数据变成： 左侧小于区域、右侧大于区域、相等区域
 * @param arr 数组
 * @param l 左边界
 * @param r 右边界
 * @returns 相等区域的两个边界组成的数组
 */
function partition(arr: number[], l: number, r: number): [number, number] {
    let less = l - 1;
    let more = r;
    while (l < more) {
        if (arr[l] < arr[r]) {
            // 左侧小于区域的后一个交换，且指针后移
            swap(arr, l++, ++less);
        }
        else if (arr[l] > arr[r]) {
            // 右侧大于区域的前一个交换，且指针位置不变
            swap(arr, l, --more);
        }
        else {
            // 相等区域，只移动指针
            l++;
        }
    }
    // 上述过程中 r 位置的数据未经历过交换，所以通过此步骤将其换到相等区域的右边
    swap(arr, more, r);
    return [less + 1, more];
}

function swap(arr: number[], i: number, j: number) {

    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

console.log(quickSort([3, 4, 6, 7, 8, 1, 5]));
