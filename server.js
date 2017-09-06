const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const massive = require('massive')

const config = require('./config')
//---------------------------SERVER SETUP------------------------\\

const PORT = 8087;
const app = express();

app.use(bodyParser.json())
app.use(cors())
massive(config.POSTGRES).then(db => {
  app.set('db', db);

  const mainCtrl = require('./mainCtrl');
  // const USERS = require('./users');
  
  
  app.use(express.static(__dirname + '/dist'));
  //-------------------------ENDPONTs----------------------------\\
  app.get('/api/getmenu', mainCtrl.getMenu);


  app.get('/api/users', function(req, res, next) {
    res.status(200).send(USERS)
  })
  
        
        //-----server listener--------\\
      })
      .catch(function(error) {
        console.log(error);
        res.status(500).send(error)
      })
        
        app.listen(PORT, function() {
          console.log(`running on port ${PORT} home diggity`)
        });
        