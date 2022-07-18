const http = require('http')
const date = require('./modls/Time');

function handleReq(req, res){
if(req.url === '/currenttime'){
    res.statusCode = 200;
res.end("<h1>" + new Date().toDateString() + "</h1>");
}else{
    res.statusCode = 200;
    res.write('<h1> Time is: </h1>' + date.displayTime());
    res.end();
}


}

const server= http.createServer(handleReq);

server.listen(3000);
