import express, { response } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from './models/Orphanage'

import './database/connection'

const app = express()
app.use(express.json())

app.post('/orphanages', async (req, res) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = req.body

    const repository = getRepository(Orphanage)
    const orphanage = repository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    })
    
    await repository.save(orphanage)

    return res.json({message: 'Hello World'})
})

app.listen(3333)