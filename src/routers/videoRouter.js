import express from 'express';
import {
  edit,
  see,
  deleteVideo,
  upload,
  search,
} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/upload', upload);
videoRouter.get('/search', search);
videoRouter.get('/:id', see);
videoRouter.get('/:id/edit', edit);
videoRouter.get('/:id/delete', deleteVideo);
export default videoRouter;
