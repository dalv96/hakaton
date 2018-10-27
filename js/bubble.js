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