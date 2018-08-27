module.exports = (app) => {
  const multer = require('multer');
  const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      const ext = '.' + file.mimetype.split('/')[1]

      cb(null, file.originalname + '_' + Date.now() + ext);
    }
  });
  const upload = multer({storage: storage});

  app.post('/uploadHandler', upload.single('file'), function (req, res, next) {
    if (req.file && req.file.originalname) {
      console.log(`Received file ${req.file.originalname}`);
    }

    res.send({ responseText: req.file.path }); // You can send any response to the user here
  });
}
