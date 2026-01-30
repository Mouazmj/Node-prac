const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.status(200).sendFile('./views/about.html', { root: __dirname })
})

app.get('about-me', (req, res) => {
    res.status(301).redirect('/about')
})

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})



app.listen(3000)