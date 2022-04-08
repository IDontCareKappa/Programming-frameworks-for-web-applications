const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')


app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({
    extended: true
}))

app.get('/about', (req, res) => {
    res.render('about', { name: 'Tomasz' })
})

app.get('/info', (req, res) => {
    res.render('info', { surName: 'Ostrowski', email: 'tomasz.ostrowski1@pollub.edu.pl', wiek: 22 })
})

app.get('/form', (req, res) => {
    res.render('form')
})

app.post("/form1", (req, res) => {
    const nazwisko = req.body.nazwisko
    const email = req.body.email
    const wiek = req.body.wiek
    res.render('info', { surName: nazwisko, email: email, age: wiek })
})

app.listen(3000, () => console.log('Serwer działa!'))