import {Request, Response} from 'express'

const STATUS = {started: new Date()}

export default {
    async status(request: Request, response: Response) {
        response.json({started:STATUS.started})
    }    
}