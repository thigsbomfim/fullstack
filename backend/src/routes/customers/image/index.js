import express from 'express';
import multer from 'multer';
import multerConfig from '../../../config/multer.js'
import image from '../../../controllers/customers/image/index.js';

const imageRouter = express.Router();

imageRouter.get('/image/:id', image.getAll);
imageRouter.get('/profile/:id', image.profile);
imageRouter.get('/image/:id_cliente/:id_img', image.getOne);
imageRouter.post('/image/:id', multer(multerConfig).single('file'), image.add);
imageRouter.delete('/image/:id_cliente/:id_img', image.del);

export default imageRouter;
