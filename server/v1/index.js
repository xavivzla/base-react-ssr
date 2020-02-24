import express from 'express'

import company from './company'


const router = express.Router()


router.use('/company', company)


export default router
