const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')
const http = require('http')

app.use(express.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
    res.send('Szkielet programistyczny Express!')
})

app.get('/about', function (req, res) {
    res.send("<h1>Autor strony: Tomasz Ostrowski</h1>")
})

app.get('/name/:imie', function (req, res) {
    res.status(200)
    res.set('Content-Type', 'text/html')
    res.end('<html><body>' + '<h1>Cześć ' + req.params.imie + '</h1>' + '</body></html>')
})

app.get('/name/:imie/:slowo', function (req, res) {
    res.status(200)
    res.set('Content-Type', 'text/html')
    res.end('<html><body>' + '<h1>Cześć ' + req.params.imie + ' i ' + req.params.slowo + '</h1>' + '</body></html>')
})

app.get("/form2", (req, res) => {
    res.sendFile(path.join(__dirname, "form2.html"))
})

app.post("/form2", (req, res) => {
    let user = req.body.user
    let jezyki = req.body.jezyki
    if (jezyki == null || user == null || user.length == 0) {
        res.send("Wprawdz dane")
    } else {
        res.send("Użytkownik: " + user + "<br>jezyki: " + jezyki)
    }

})

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))