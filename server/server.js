import express from 'express';

const app = express();

app.use(express.static('./app/dist/etudiants'))
app.get('/', function (req, res) {
res.sendFile('index.html');
});
app.listen(8080);
