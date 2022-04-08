const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const users = require('./users')

app.use(express.json())

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `Użytkownik o id ${req.params.id} został odnaleziony` })
    }
})

const { v4: uuidv4 } = require('uuid');

app.post('/', (req, res) => {

    const newUser = {
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        status: "aktywny"
    }
    if (!newUser.name || !newUser.email) {
        return res.status(400).json({ msg: 'Wprowadź poprawne imię i nazwisko oraz email!' })
    }
    users.push(newUser)
    res.json(users)
})

app.put('/api/users/:id', (req, res) => {
    const found = users.some(user => user.id ===
        parseInt(req.params.id))
    if (found) {
        const updUser = req.body
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                user.name = updUser.name ? updUser.name : user.name
                user.email = updUser.email ? updUser.email : user.email
                res.json({ msg: 'Dane użytkownika zaktualizowane', user })
            }
        })
    } else {
        res.status(400).json({ msg: `Użytkownik o id ${req.params.id} nie istnieje!` })
    }
})

app.delete('/api/users/:id', (req, res) => {
    const found = users.some(user => user.id ===
        parseInt(req.params.id))
    if (found) {
        users.forEach(user => {
            const { id } = req.params;
            const index = users.findIndex((user, index) => user.id == id);
            users.splice(index, 1);
            res.json({ msg: `Użytkownik o id ${id} został usunięty` })
        })
    } else {
        res.status(400).json({ msg: `Użytkownik o id ${req.params.id} nie istnieje!` })
    }
})

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))