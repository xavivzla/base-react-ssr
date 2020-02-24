import express from 'express'
import v1 from '../v1'

var app = express()
const router = express.Router()

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.use('/api/v1', v1)

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

app.listen(5000, function () {
    console.log('Example app listening on port 3000!');
});