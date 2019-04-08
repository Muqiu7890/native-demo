let arr = ['a', 'b', 'c', 1, 2, 1, 'a']

function unique(array) {
    let res = []
    for(let i = 0 ;i < array.length;i++) {
        let current = array[i]
        if(res.indexOf(current) === -1) {
            res.push(current)
        }
    }
    return res
}

console.log(unique(arr))