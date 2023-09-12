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

const createTableSQL = `
    CREATE TABLE IF NOT EXISTS people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    )
`;

connection.query(createTableSQL, (err, results) => {
    if (err) throw err;
    console.log('Tabela "people" criada ou já existente.');
});

const insertSQL = `INSERT INTO people (name) VALUES ('Fabricio')`;

connection.query(insertSQL, (err, results) => {
    if (err) throw err;
    console.log('Registro inserido com sucesso.');
    // Não encerra a conexão aqui para que possamos fazer outras consultas
});

// Rota para listar todos os itens da tabela 'people' e exibir a mensagem <h1> Full Cycle</h1>
app.get('/', (req, res) => {
    const selectSQL = `SELECT * FROM people`;

    connection.query(selectSQL, (err, results) => {
        if (err) throw err;
        const peopleList = results.map(result => result.name).join(', ');
        const fullCycleMessage = '<h1> Full Cycle</h1>';
        res.send(`${fullCycleMessage}<p>Pessoas: ${peopleList}</p>`);
    });
});

app.listen(port, () => {
    console.log(`Aplicação Node.js está rodando na porta ${port}`);
});
