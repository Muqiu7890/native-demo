// - 创建一个新对象
// - 将构造函数的作用域赋值给新对象(因此this指向这个对象)
// - 执行构造函数中的代码(为这个新对象添加属性)
// - 返回新对象
function _new(func) {
    let target = {}
    target.__proto__ = func.prototype
    let res = func.call(target)
    if (typeof (res) == 'object' || typeof (res) == 'function') {
        return res
    }
    return target
}





