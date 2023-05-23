const sqlite3 = require('sqlite3').verbose();

// Connexion la base de données
let db = new sqlite3.Database('./database.sqlite', (err) => {
if (err) {
console.error(err.message);
throw err;
}
console.log('Base de données connectée.');
});

// Création de la table "categoris"
db.run(`CREATE TABLE IF NOT EXISTS categoris (
id INTEGER PRIMARY KEY AUTOINCREMENT,
job TEXT NOT NULL
)`);

// Modèle de données pour représenter un utilisateur
class Categori {
    constructor(job) {
    this.job = job;
    }

    // Enregistrer un nouvel utilisateur dans la base de données
    save(callback) {
        db.run(`INSERT INTO categoris (job) VALUES (?)`,
        [this.job], function(err) {
            if (err) {
            console.error(err.message);
            return callback(err);
            }
            console.log(`Utilisateur ${this.job} ajouté avec l'ID ${this.lastID}`);
            callback(null, this.lastID);
        });
    }

    // Rechercher tous les utilisateurs dans la base de données
    static findAll(callback) {
        db.all(`SELECT * FROM categoris`, [], function(err, rows) {
            if (err) {
            console.error(err.message);
            return callback(err);
            }
            const categoris = rows.map(row => new Categori(row.job
            ));
            callback(null);
        });
    }

    // Rechercher un utilisateur par ID dans la base de données
    static findById(id, callback) {
        db.get(`SELECT * FROM categoris WHERE id = ?`, [id], function(err, row) {
            if (err) {
            console.error(err.message);
            return callback(err);
            }
            if (!row) {
            return callback(new Error('Utilisateur non trouvé'));
            }
            const categori = new Categori(row.job);
            callback(null, categori);
        });
    }


    // Mettre à jour un utilisateur dans la base de données
    static updateById(id, job, categorie, callback) {
        db.run(`UPDATE categoris SET job = ?WHERE id = ?`,[job, categorie, id], function(err) {
            if (err) {
            console.error(err.message);
            return callback(err);
            }
            console.log(`Utilisateur avec l'ID ${id} mis à jour.`);
            callback(null);
        });
        }

    // Supprimer un utilisateur de la base de données
    static deleteById(id, callback) {
        db.run(`DELETE FROM ctegoris WHERE id = ?`, [id], function(err) {
            if (err) {
            console.error(err.message);
            return callback(err);
            }
            console.log(`Utilisateur avec l'ID ${id} supprimé.`);
            callback(null);
        });
    }
}
    

module.exports = db;