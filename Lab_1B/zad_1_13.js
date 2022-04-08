const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

let metoda = (req, res, next) => {
    console.log("Metoda: ", req.method)
    let sciezka = "Ścieżka: " + req.protocol + "://" + req.get('host') + req.originalUrl
    console.log(sciezka)

    res.set('Content-Type', 'text/html')
    res.send('<html><body>' + '<h1>Metoda: ' + req.method + '</h1> <h2>Ścieżka' + sciezka + '</h2>' + '</body></html>')

    next()
}

app.use('/metoda', metoda)

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))