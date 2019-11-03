const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const documents = {};
let questions = [];

const { promisify } = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

readFileAsync(`${__dirname}/data/data.json`, { encoding: 'utf8' })
    .then((contents) => {
        this.questions = JSON.parse(contents);
    })
    .catch((error) => {
        throw error;
    });

io.on('connection', (socket) => {
    let previousId;

    const safeJoin = (currentId) => {
        socket.leave(previousId);
        socket.join(currentId, () => console.log(`Socket ${socket.id} joined ${currentId}`));
        previousId = currentId;
    };

    socket.on('getDoc', (docId) => {
        safeJoin(docId);
        socket.emit('document', documents[docId]);
    });

    socket.on('getQuestions', (docId) => {
        // safeJoin(docId);
        socket.emit('questions', questions[docId]);
    });

    socket.on('addDoc', (doc) => {
        documents[doc.id] = doc;
        safeJoin(doc.id);
        io.emit('documents', Object.keys(documents));
        socket.emit('document', doc);
    });

    socket.on('editDoc', (doc) => {
        documents[doc.id] = doc;
        socket.to(doc.id).emit('document', doc);
    });

    io.emit('documents', Object.keys(documents));

    console.log(`Socket ${socket.id} has connected`);
});

http.listen(4444, () => {
    console.log('Listening on port 4444');
});
