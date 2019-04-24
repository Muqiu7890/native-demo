// function bubbleSort(arr) {
//     for(var i = 0;i < arr.length - 1;i++) {
//         for(var j = 0;j < arr.length - 1 - i;j++) {
//             if(arr[j] > arr[j+1]) {
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// 改进：增加一个标志位 如果某次循环 没有任何数据交换 将标志记为true 跳出循环 可减少不必要的排序

function bubbleSort2(arr) {
    for(var i = 0;i < arr.length - 1;i++) {
        var done = true
        for(var j = 0;j < arr.length - 1 - i;j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                done = false
            }
        }
        if(done) break
    }
    return arr
}


let a = [1,56,23,41,34]

console.log(bubbleSort2(a))