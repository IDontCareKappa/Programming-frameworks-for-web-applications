const express = require('express')
const http = require('http')
const path = require('path')
const { check, validationResult } = require('express-validator')
const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "form3.html"))
})
app.post("/form", [
    check('nazwisko').isLength({ min: 3, max: 25 }).isAlpha('pl-PL', { ignore: ' ' }).withMessage("Błędne nazwisko!"),
    check('email').isEmail().withMessage("Błędny email!"),
    check('wiek').isInt({ min: 0, max: 110 }).withMessage("Błędny wiek!")
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    const nazwisko = req.body.nazwisko
    const email = req.body.email
    const wiek = req.body.wiek
    res.send("Użytkownik: " + nazwisko + "<br>Email: " + email + "<br>Wiek: " + wiek)
})

const sanitizeNazw = nazw => {
    nazw.trim()
}


app.post("/form2", [
    check('nazwisko')
        .isLength({ min: 3, max: 25 })
        .isAlpha('pl-PL', { ignore: ' ' })
        .bail()
        .customSanitizer(nazwisko => {
            return sanitizeNazw(nazwisko)
        }),
    check('email')
        .isEmail()
        .withMessage("Błędny email!"),
    check('wiek')
        .isInt({ min: 0, max: 110 })
        .withMessage("Błędny wiek!")
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    const nazwisko = req.body.nazwisko
    const email = req.body.email
    const wiek = req.body.wiek
    res.send("Użytkownik: " + nazwisko + "<br>Email: " + email + "<br>Wiek: " + wiek)
})
app.listen(3000)

