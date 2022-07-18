const fs = require('fs');
const path = require('path');
const web = require('express');



const app = web();

app.use(web.urlencoded({extended: false}))

app.get('/', function handle(req, res){
    res.send('<form action="/store-user" method="POST"><label>E-mail</label><input type="text" name="user"><button>Submit</button></form>')
    })

    app.post('/store-user', function(req, res){
        const use = req.body.user;
         const filePath = path.join(__dirname, "data", 'user.json')

       const fileData  =   fs.readFileSync(filePath)
       const existing  = JSON.parse(fileData);
       existing.push(use);
        fs.writeFileSync(filePath, JSON.stringify(existing))

        res.send('<h1>E-mail</h1> ')
    })

    app.get('/user', function(req,res){
        const filePath = path.join(__dirname, "data", 'user.json')

        const fileData  =   fs.readFileSync(filePath)
        const existing  = JSON.parse(fileData);
        res.send(existing);
    })
app.listen(3030);
