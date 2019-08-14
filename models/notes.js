db = require('./conn');

function getNotes() {
    return db.any(`SELECT * FROM notes`)
        .catch( (err) => {
            console.log('Error Found: ');
            console.log(err);
        })
}

module.exports = getNotes;