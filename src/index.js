const config = require('./config/config');
const cors = require('cors');
const express = require('express');
const bodyparser = require('body-parser');
const userApplication = require('./application/userApplication');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(cors());

app.get('/', function(req,res){
  res.send('Hello world API');
});

app.post('/gen-cache', userApplication.generatedCache);

app.get('/get-user/:p1', userApplication.getUser);

app.listen(config.PORT, () => console.log('Aplicação rodando na porta ' + config.PORT));


/*

corpo requisição 

post  - body - json  - raw

{ "values": 
  {
    "name":"john",
    "email": "john@gmail.com",
    "nivel": "nivel prata"

  }
}

{ "values": 
  {
    "name":"maria",
    "email": "maria@gmail.com",
    "nivel": "nivel gold"

  }
}

http://localhost:8180/gen-cache

http://localhost:8180/get-user/57ce016f-6351-4958-8145-77f64f15bbb1


*/