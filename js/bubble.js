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

const testThree = {
    val: 1,
    child: [
        {
            val: 2,
            child: [
                {
                    val: 3,
                    child: [
                        {
                            val: 5,
                            child: []
                        }
                    ]
                },
                {
                    val: 4,
                    child: [
                        {
                            val: 6,
                            child: [
                                {
                                    val: 7
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

function showThree(three) {
    let tmp = three;
    let stack = [];
    
    do {
        if (tmp.child.length == 0) {
            console.log(tmp.val);
            tmp = stack.pop();
        } else {
            stack.push(tmp);
            tmp = tmp.child.pop();
        }
    } while (stack.length != 0);

    console.log(three.val);
}

function showThreeWidth(three) {
    let queue = [three];

    for (let i = 0; i < queue.length; i++) {
        let currentItem = queue[i];
        console.log(currentItem.val);

        queue.push(...currentItem.child);
    }
}

function getPrimeNumbers(max) {
    const simple = [];

    for (let i = 3; i <= max; i+=2) {
        let isSimple = true;

        for (let j = 0; j < simple.length; j++) {
            const remaind = i % simple[j];

            if ( remaind == 0 ) {
                isSimple = false;
                break;
            }

            if (simple[j] > Math.sqrt(i)) {
                break;
            }
        }

        if (isSimple) simple.push(i);
    }

    if (max >= 2) simple.unshift(2);

    console.log(simple);
}

function shakerSort(array) {
    const sortedArray = [];
    const someVar = array.length;
    
    for (let j = 0; j < someVar; j++) {
        let max = -Infinity;
        let maxId = -1;

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
            if (max < element) {
                max = element;
                maxId = i;
            }
        }
        
        // console.log(array);
        
        array.splice(maxId, 1);

        sortedArray.push(max);
    }

    console.log(sortedArray);
    
    return sortedArray;  
}

shakerSort([10, 1,3,7, 5, 2, 4]);