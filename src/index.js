const express = require('express')
const morgan = require('morgan')
const path = require('path')
const multer = require('multer')
const upload = multer()

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.get('/api/hello', (req,res) => {
    return res.json({greeting: 'Hello World!'})
})
app.post('/api/sendFile',upload.single('formFile'), (req,res) => {
    const { originalname, mimetype, size } = req.file
    return res.json({name: originalname, type: mimetype, size: size})
})

app.listen(app.get('port'), console.log(`Listen on port: ${app.get('port')}`))
