const express = require('express');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'myuser',
    password: 'mypassword',
    database: 'mydatabase'
}

const mysql = require('mysql');

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Fabricio')`;
connection.query(sql);
connection.end();


app.get('/', (req, res) => {
    res.send('<h1> Full Cycle</h1>')
})

app.listen(port, () => {
    console.log(`Aplicação Node.js está rodando na porta ${port}`);
  });





