import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../models/Orphanage'

export default {
    async index(request: Request, response: Response) {
        const repository = getRepository(Orphanage)
        const orphanages = await repository.find()
        response.status(200).json(orphanages)
    },
    async show(request: Request, response: Response) {
        const { id } = request.params
        const repository = getRepository(Orphanage)
        const orphanages = await repository.findOneOrFail(id)
        response.status(200).json(orphanages)
    },
    async create (request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body
    
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
    
        return response.status(201).json(orphanage)
    }

}