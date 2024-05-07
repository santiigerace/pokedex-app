const express = require('express');
const path = require('path'); 
const routes = require('./routes');

const app = express();

// Sirve archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});