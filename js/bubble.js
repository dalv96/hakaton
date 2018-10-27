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
    let i = 0;

    while (center - offset !== 0) {
        let center = Math.floor( array.length / (2 * (i + 1)) ) + offset;

        if (array[center] == element) {
            lastIndex = center;
        }

        if (array[center] < element) {
            offset = center + 1;
        }

        i++;
    }

    return lastIndex;
}

function balanceOk(str) {
    let stack = [];
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case '[':
            case '(':
            case '{':
                stack.push(str[i]);
            break;

            case ']':
            case ')':
            case '}':
                if ( stack[stack.length - 1] === brackets[str[i]] ) {
                    stack.pop();
                } else {
                    return false;
                }
                break;
        }
    }

    return (stack.length === 0)?true:false;
}