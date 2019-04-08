function unique(array) {
    let res = []
    for(var i = 0; i < array.length; i++) {
        for(var j = 0 ;j < res.length;j++) {
            if(array[i] === res[j])
                break;
        }
        if(j === res.length) {
            res.push(array[i])
        }
    }
    return res
}

console.log(unique([1,2,"d",1,"d"]))