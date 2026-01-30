const express = require('express')

const app = express()

app.listen(3000)

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    const day = [
        { title: 'Good day', snippet: 'I had a good gym workout' },
        { title: 'Okay day', snippet: 'I did not do much today' },
        { title: 'Bad day', snippet: 'I fell on floor and got a big bruise' }
    ]
    res.render('partials/head', { username: 'mouazjamal', blogs: day, title: 'head' })
})

