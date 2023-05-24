const db = require('./models');
// Implémentation des résolveurs GraphQL
const jobResolver = {
job: ({ id }) => {
    return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM jobs WHERE id = ?`, [id], (err, row) => {
    if (err) {
    reject(err);
    } else {
    resolve(row);
    }
    });
    });
},
jobs: () => {
    return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM jobs`, [], (err, rows) => {
    if (err) {
    reject(err);
    } else {
    resolve(rows);
    }
    });
    });
},
addJob: ({ job, categorie}) => {
    return new Promise((resolve, reject) => {
    db.run(`INSERT INTO jobs (job, categorie) VALUES (?, ?)`,
    [job, categorie], function(err) {
    if (err) {
    reject(err);
    } else {
    resolve({ id: this.lastID, job, categorie });
    }
    });
    });
},

deleteJob: ({id}) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM jobs WHERE id = ?`, [id], function(err) {
        if (err) {
          reject(err);
        } else {
          if (this.changes === 0) {
            reject(new Error(`Job with id ${id} not found`));
          } else {
            resolve(`Job with id ${id} deleted successfully`);
          }
        }
      });
    });
  }
  
};
module.exports = jobResolver;