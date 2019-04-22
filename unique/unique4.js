function unique4(arr) {
    return arr.sort().reduce((init, cur) => {
        if (init.length === 0 || init[init.length - 1] !== cur) {
            init.push(cur)
        }
        return init
    }, [])
}

console.log(unique4([1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]))
