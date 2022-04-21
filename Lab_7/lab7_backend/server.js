const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const membershipController = require("./controllers/MembershipController")


const PORT = 3000;
const app = express();
app.use(bodyParser.json()); // obsługa danych w formacie json
app.use(cors());

app.use("/", membershipController)

app.get('/', function (req, res) { // test serwera
    res.send('Hello from server!');
})

app.post('/add', function (req, res) { // dodanie endpointa
    // req.body – zawiera dane członka nadchodzące z angulara
    console.log(req.body);
    res.status(200).send({ 'message': 'Data received' }); // wysłanie odpowiedzi
    // res.status(401).send({'message': 'Data received'}); // obserwowanie błędów
})

app.listen(PORT, function () {
    console.log('Server running on localhost port: ', PORT);
})