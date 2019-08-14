express = require('express');
notes = require('./models/notes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('Notes request: ');
    const allNotes = notes();
    allNotes
        .then(data => {
            console.log('Notes Data: ')
            console.log(data);
            res.json(data);
        })
})

app.listen(port, () => console.log(`App listening on port ${port}`))