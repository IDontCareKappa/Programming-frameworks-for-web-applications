const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./api/routes')
const metoda = require('./middleware/metoda')

app.use(metoda)
app.use('/api/users', routes)

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))