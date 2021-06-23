const axios = require('axios');

axios.post('http://localhost:1000/text')
  .then(function(res){
      console.log(res)
  }).catch(err =>{
    res.send(err);
})

