//  排序后去重
let arr = ['a', 'b', 'c', 1, 3, 1, 'a']

function unique(array) {
    let res = []
    let sortedArray = array.sort()
    let current = ''
    for(var i = 0 ; i < sortedArray.length; i++) {
        // 如果是第一个元素或者不相同的元素
        if(!i || current !== sortedArray[i]) {
            res.push(sortedArray[i])
        }
        current = sortedArray[i]
    }
    return res
}

console.log(unique(arr))