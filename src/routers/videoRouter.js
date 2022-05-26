import express from 'express';
import {
  getEdit,
  watch,
  deleteVideo,
  upload,
  search,
  postEdit,
} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', watch);
videoRouter.route('/:id(\\d+)/edit').get(getEdit).post(postEdit);

export default videoRouter;
