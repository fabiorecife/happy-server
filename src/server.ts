import express, { response } from 'express'

const app = express()

app.get('/users', (req, res) => {
    return res.json({msg: 'Hello'})
})

app.listen(3333)