import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const data =  [{data: "f"}]
        res.send({ data, success: true })
    } catch (error) {
        res.status(500).send({ error: error.message, success: false })
    }
})

export default router
