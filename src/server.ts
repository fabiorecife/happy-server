import express, { response } from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.json({msg: 'Hello'})
})

app.listen(3333)