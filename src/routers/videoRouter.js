import express from 'express';
import { edit, see, deleteVideo, upload } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id', see);
videoRouter.get('/upload', upload);
videoRouter.get('/:id/edit', edit);
videoRouter.get('/:id/delete', deleteVideo);
export default videoRouter;
