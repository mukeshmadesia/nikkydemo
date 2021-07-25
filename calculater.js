var calc = require("./functions.js")

result1 = calc(4,5)

console.log('without alias', result1)

/*
result_add = calc.add(4,5)
console.log('with alias:',result_add)
got an error calc.add is not a function
*/

/* result2 = sub_func(4,5) -- gave error sub_func is not defined */

result2 = calc.sub_func(4,5)
console.log('with alias sub:', result2)

/*
result3 = calc.sub(4,5)
console.log('with only sub:', result3)
calc.sub is not a function
*/

result3 = calc.mult(4,5)
console.log('mult',result3)
