const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const db = {
    host:'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
}

const con = mysql.createConnection(db);

con.query('drop table if exists nome;');
con.query('create table nome (id int AUTO_INCREMENT primary key, nome varchar(250));');
const sql = con.query('show tables', function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});
// con.end();

let cont = 1;
app.get('/', (_, r) => {
    let resultado = '';
    con.query('insert into nome (nome) values ("nome_'+(cont++)+'");');
    con.query('select nome from nome;', function (err, result, fields) {
        // if (err) throw err;
        r.send('<h2>Full Cycle</h2>'+ JSON.stringify(result.map((e) => e.nome)));
    });
});

app.listen(port, () => console.log('No ar.'))
