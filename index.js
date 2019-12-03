const Express = require('express');
const port = process.env.PORT || 8000;

const app = new Express();
const path = require('path');

app.listen(port, function(){
    console.log("Listening on port:", port);
})
