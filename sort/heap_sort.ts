function heapSort(arr: number[]) {
    if (arr.length < 2) {
        return arr;
    }
    // 构建堆
    let size = 0;
    for (let i = 0; i < arr.length; i++) {
        heapInsert(arr, i);
        size++;
    }
    // 堆排序
    while (size--) {
        swap(arr, 0, size);
        heapify(arr, 0, size)
    }
    return arr;

}

function heapInsert(arr: number[], index: number) {
    while (index > 0 && arr[index] > arr[Math.floor((index - 1) / 2)]) {
        swap(arr, index, Math.floor((index - 1) / 2));
        index = Math.floor((index - 1) / 2);
    }
}

function heapify(arr: number[], index: number, size: number) {
    let left = index * 2 + 1;
    while (left < size) {
        // 子节点找最大
        let largest = left + 1 < size && arr[left] < arr[left + 1] ? left + 1 : left;
        // 和父节点比较
        largest = arr[largest] < arr[index] ? index : largest;
        // 父节点就是最大的，结束
        if (largest === index) {
            break;
        }
        // 交换位置，继续循环
        swap(arr, largest, index);
        index = largest;
        left = index * 2 + 1;
    }
}

function swap(arr: number[], i: number, j: number) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

const arr = [3, 1, 5, 8, 2, 0, 9, 6, 4, 7];
heapSort(arr);
console.log(arr);