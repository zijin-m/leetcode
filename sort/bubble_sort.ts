function bubbleSort(array: number[]) {
    if (array.length < 2) {
        return array;
    }
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                const tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([3, 1, 5, 8, 2, 0, 9]));
