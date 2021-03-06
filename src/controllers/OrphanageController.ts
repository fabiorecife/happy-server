import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../models/Orphanage'
import orphanageView from '../views/OrphanagesView'
import * as Yup from 'yup'

export default {
    async index(request: Request, response: Response) {
        const repository = getRepository(Orphanage)
        const orphanages = await repository.find({ relations: ['images']})
        response.status(200).json(orphanageView.renderMany(orphanages))
    },
    async show(request: Request, response: Response) {
        const { id } = request.params
        const repository = getRepository(Orphanage)
        const orphanages = await repository.findOneOrFail(id, { relations: ['images']})
        response.status(200).json(orphanageView.render(orphanages))
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

        const requestImages = request.files as Express.Multer.File[]

        const images = requestImages.map(image => { 
            return {path: image.filename}
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === "true",
            images
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        })

        // const finalData = schema.cast(data)

        await schema.validate(data, { 
            abortEarly: false
        })

        const orphanage = repository.create(data)
        
        await repository.save(orphanage)
    
        return response.status(201).json(orphanage)
    }

}