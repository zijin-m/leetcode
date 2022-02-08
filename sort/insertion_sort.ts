function insertionSort(array: number[]) {
    if (array.length < 2) {
        return array;
    }
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) {
            const tmp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = tmp;
        }
    }
    return array;
}

console.log(insertionSort([3, 1, 5, 8, 2, 0, 9]));
