function selectSort(array: number[]) {
    if (array.length < 2) {
        return array;
    }
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            const tmp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = tmp;
        }
    }
    return array;
}

console.log(selectSort([3, 1, 5, 8, 2, 0, 9]));
