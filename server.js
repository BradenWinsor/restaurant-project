const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
//---------------------------SERVER SETUP------------------------\\

const PORT = 8087;
const app = express();

app.use(bodyParser.json())
app.use(cors())

// const USERS = require('./users');


app.use(express.static(__dirname + '/public'));
//-------------------------ENDPONTs----------------------------\\

app.get('/api/users', function(req, res, next) {
  res.status(200).send(USERS)
})
// app.get('/api/users/:id', function(req, res) {
//   console.log('returning 1 users data')
//   let id = req.params.id;
//   let user = USERS.filter(function(value) {
//       if(value.id == id) {
//         return value;
//       }
//   })
// })


//-----server listener--------\\

app.listen(PORT, function() {
  console.log(`running on port ${PORT} home diggity`)
});
