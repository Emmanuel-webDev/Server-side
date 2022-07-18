const exp = require('express');

const app = exp()

app.get('/currenttime', function(req, res){
res.send("<h1>" + new Date().toDateString() + "</h1>");
});

app.get('/', function(req, res){
    res.send('<h1> Hello world </h1>')
})

app.post('/api', (req, res)=>{
    
})
app.listen(3000)