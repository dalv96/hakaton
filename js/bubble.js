function bubbleSort(array) {
    
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length - i; j++) {

           if (j+1 < array.length && array[j] > array[j+1]) {
               let tmp = array[j+1];

               array[j+1] = array[j];
               array[j] = tmp;
           }
           
       } 
    }

    return array;
}

function binarySearch(array, element) {
    let offset = 0;
    let lastIndex = -1;

    for (let i = 0; i < array.length; i++) {
        let center = Math.floor( array.length / (2 * (i + 1)) ) + offset;

        if (array[center] == element) {
            lastIndex = center;
        }

        if (array[center] < element) {
            offset = center + 1;
        }

        if (center - offset === 0) return lastIndex;
    }

    return -1;
}