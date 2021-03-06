let app = require('express');
let bodyParser = require('body-parser');


let server = app();

server.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

server.use(bodyParser.json());

let customer = require('./customerdata.json');

//read all books
server.get('/api/customer/all',function(req,res){
    console.log("Just running all REST URI!!");
    res.status(200).send(customer);
});
const PORT = 8000;
server.listen(PORT,() => {
    console.log(`Rest Server is ready on port ${PORT}`);
});