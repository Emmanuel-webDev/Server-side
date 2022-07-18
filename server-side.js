const fs = require('fs')
const path = require('path')
const impt = require('express')

const app  = impt();

app.use(impt.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.send('<form action="/output" method="POST"><label for="mail">E-mail</label><input type="text" id="mail" name="usermail"><br><label for="pass">Password</label><input type="password" id="pass" name="usercode"><br><button>Submit</button></form>')
})

app.post('/output', function(req, res){
    const umail = req.body.usermail;
    const upass = req.body.usercode
   
const filePath1 = path.join(__dirname, "data", "user.json");
const read = fs.readFileSync(filePath1);
const exist = JSON.parse(read);
exist.push(umail,upass);
fs.writeFileSync(filePath1, JSON.stringify(exist));

    res.send('<h2> Data submitted successfully </h2>')
})

app.listen(8080)