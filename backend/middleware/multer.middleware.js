import multer from 'multer';




const storage = multer.diskStorage({
    destination: function (req, image, cb) {
      cb(null,"../public/image" )
    },
    filename: function (req, image, cb) {
      cb(null, image.originalname)
    }
  })
  
export const upload = multer(
    { storage: storage }
)