function mergeSort(array: number[]): number[] {
    if (array.length < 2) {
        return array;
    }
    const mid = array.length >> 1;
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    const res = merge(left, right);
    for (const idx in res) {
        array[idx] = res[idx];
    }
    return array;
}

function merge(left: number[], right: number[]): number[] {
    const help: number[] = [];
    while (left.length && right.length) {
        help.push(left[0] <= right[0] ? left.shift()! : right.shift()!)
    }
    while (left.length) {
        help.push(left.shift()!)
    }
    while (right.length) {
        help.push(right.shift()!)
    }
    return help;
}


const arr = [3, 1, 5, 8, 2, 0, 9, 6, 4];
mergeSort(arr);
console.log(arr);
