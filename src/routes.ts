import {Router} from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanageController'
import Status from './controllers/Status'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/',Status.status)
routes.get('/orphanages',OrphanagesController.index)
routes.get('/orphanages/:id',OrphanagesController.show)
routes.post('/orphanages', upload.array('images'),OrphanagesController.create)

export default routes