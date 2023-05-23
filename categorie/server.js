const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const db = require('./models');
const categoriSchema = require('./categoriSchema');
const categoriResolver = require('./categoriResolver');
const app = express();
const port = 5001;
// Utilisation de GraphQL pour gérer les requêtes
app.use('/graphql', graphqlHTTP({
schema: categoriSchema,
rootValue: categoriResolver,
graphiql: true
}));
// Utilisation de body-parser pour analyser les demandes HTTP
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Implémentation de l'API REST
app.get('/categoris', (req, res) => {
db.all(`SELECT * FROM categoris`, [], (err, rows) => {
if (err) {
res.status(400).json({ "error": err.message });
return;
}
res.json(rows);
});
});

app.get('/categori/:id', (req, res) => {
db.get(`SELECT * FROM categoris WHERE id = ?`, [req.params.id], (err, row) => {
if (err) {
res.status(400).json({ "error": err.message });
return;
}
res.json(row);
});
});

app.post('/categori', (req, res) => {
    const { job, categorie } = req.body;
    db.run(`INSERT INTO categoris (job, categorie) VALUES (?, ?)`, [job,categorie], (err) => {
    if (err) {
    res.status(400).json({ "error": err.message });
    return;
    }
    res.json({ "message": "success" });
    });
});

app.put('/categori/:id', (req, res) => {
    const { job, categorie} = req.body;
    db.run(`UPDATE categoris SET job = ?, categorie = ? WHERE id = ?`, [job, categorie, req.params.id], (err) => {
        if (err) {
        res.status(400).json({ "error": err.message });
        return;
        }
        res.json({ "message": "success" });
    });
    });
    
app.delete('/categori/:id', (req, res) => {
    db.run(`DELETE FROM categoris WHERE id = ?`, [req.params.id], (err) => {
        if (err) {
        res.status(400).json({ "error": err.message });
        return;
        }
        res.json({ "message": "success" });
    });
});
    
// Lancement du serveur
app.listen(port, () => {
console.log(`Serveur démarré sur le port ${port}.`);
});