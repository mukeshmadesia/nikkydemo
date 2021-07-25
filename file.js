var fileFunc = require('fs')


fileFunc.readFile('functions.js','utf8',function(err,data)
{
    console.log(data)
    console.log('read err value:',err)

})

fileFunc.writeFile('output.xml','data123',function (err){
    console.log('successufully saved')
    console.log('Write err value:',err)

})