// + ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值
// + 对于相等值得判断类似于三等运算符 主要区别NaN等于自身
// + 在Set数据结构中 两个对象总是不相等的
// + 将Set结构转为数组 Array.from()
function unique3(arr) {
    return [...new Set(arr)]
}

console.log(unique3([1,2,3,1,2,4,56]))

