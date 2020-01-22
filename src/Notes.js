// Bubblesort Notes!

function bubbleSort(arr) {
    let sorted
    let n = 0
    while (!sorted){
        sorted = true
        for (let i = arr.length - 1; i > n; i--){
            if(arr[i] < arr[i - 1]){
                // swap 
                let temp = [i]
                arr[i] = arr[i - 1]
                arr[i - i] = temp
                sorted = false
            }
        }
        n++
    }
    return arr
}

let myArr = []
for(let i = 0; i < 100000; i++){
    myArr[i] = Math.floor(Math.random() * 10000)
}

console.time()
// bubbleSort([3, 4, 1, 3, 2, 40, 23, 4, 5239, 204, 3904, 304, 2, 930])
bubbleSort(myArr)
console.timeEnd()



// Search Algorithms
    // binary Search
    // breadth-first-search
    // depth-first-search

// Sort Algorithms
    // bubble Sort
    // merge sort
    // quick sort