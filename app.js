const express = require('express');
const app = express();
const path = require('path')
const port = 3030;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))







app.listen(port, () => console.log( "Serve running in http://localhost:"+ port) )