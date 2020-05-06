const multer = require('multer')

const handler = (app) => {
  const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname)
    },
  })
  const upload = multer({ storage: storage })

  app.post('/uploadHandler', upload.single('file'), function(req, res, next) {
    if (req.file && req.file.originalname) {
      console.log(`Received file ${req.file.originalname}`)
    }

    res.send({ responseText: req.file.path })
  })
}

module.exports = handler