Function.prototype.apply = function (context, rest) {
    if (!context) {
        //context为null或者是undefined时,设置默认值
        context = typeof window === 'undefined' ? global : window
    }
    context.fn = this
    let result = context.fn(...rest)
    delete context.fn
    return result
}
var foo = {name: 'Selina'}
var name = 'Chirs'

function bar(job, age) {
    console.log(this.name)
    console.log(job, age)
}

bar.apply(foo, ['programmer', 20])
// Selina programmer 20
bar.apply(null, ['teacher', 25])
// 浏览器环境: Chirs programmer 20 node 环境: undefined teacher 25