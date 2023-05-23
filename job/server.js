const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const db = require('./models');
const jobSchema = require('./jobSchema');
const jobResolver = require('./jobResolver');
const app = express();
const port = 5000;
// Utilisation de GraphQL pour gérer les requêtes
app.use('/graphql', graphqlHTTP({
schema: jobSchema,
rootValue: jobResolver,
graphiql: true
}));
// Utilisation de body-parser pour analyser les demandes HTTP
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Implémentation de l'API REST
app.get('/jobs', (req, res) => {
db.all(`SELECT * FROM jobs`, [], (err, rows) => {
if (err) {
res.status(400).json({ "error": err.message });
return;
}
res.json(rows);
});
});

app.get('/job/:id', (req, res) => {
db.get(`SELECT * FROM jobs WHERE id = ?`, [req.params.id], (err, row) => {
if (err) {
res.status(400).json({ "error": err.message });
return;
}
res.json(row);
});
});

app.post('/job', (req, res) => {
    const { job, categorie } = req.body;
    db.run(`INSERT INTO jobs (job, categorie) VALUES (?, ?)`, [job,categorie], (err) => {
    if (err) {
    res.status(400).json({ "error": err.message });
    return;
    }
    res.json({ "message": "success" });
    });
});

app.put('/job/:id', (req, res) => {
    const { job, categorie} = req.body;
    db.run(`UPDATE jobs SET job = ?, categorie = ? WHERE id = ?`, [job, categorie, req.params.id], (err) => {
        if (err) {
        res.status(400).json({ "error": err.message });
        return;
        }
        res.json({ "message": "success" });
    });
    });
    
app.delete('/job/:id', (req, res) => {
    db.run(`DELETE FROM jobs WHERE id = ?`, [req.params.id], (err) => {
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