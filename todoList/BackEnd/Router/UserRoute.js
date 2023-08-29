const express = require('express')
const router = express.Router();
const multer = require('multer')
const { SingUp, Login } = require('../Controllers/UserControler');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})
const upload = multer({ storage: storage })

router.post('/SingUp', upload.single('Image'), SingUp)
router.post('/Login', Login)

module.exports = router;


