const express = require('express')

const app = express()


app.get('/', (req, res) => {
    const day = [
        { title: 'Good day', snippet: 'I had a good gym workout' },
        { title: 'Okay day', snippet: 'I did not do much today' },
        { title: 'Bad day', snippet: 'I fell on floor and got a big bruise' }
    ]
    res.render({ username: 'mouazjamal', blogs: day })
})