function quick_sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var pivot = arr.splice(middle, 1)[0];
    var low = [];
    var high = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            low.push(arr[i]);
        } else {
            high.push(arr[i]);
        }
    }
    return quick_sort(low).concat(pivot,quick_sort(high))
}

var arr = [6,4,5,2,7];
console.log(quick_sort(arr));  // [2,4,5,6,7]