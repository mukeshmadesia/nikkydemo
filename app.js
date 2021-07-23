const fexpress = require('express');

const app = fexpress();

var  hit_counter = 0

app.get('/',function (req,res){
    res.send('hello world')
    console.log('No of hits', hit_counter+1)
})


app.get('/customer', function(req,res){
    res.send('provide customer number in link')


})

app.get('/customer/:id', function(req,res){
    const id = req.params.id

    if (id == 1) {
       res.send('Customer1') }
    else if (id ==2){
        res.send('customer2')}
    else {  res.send('Wrong ID')}

})

app.listen(8081,function (req,res){
    console.log('Runing..')
});

