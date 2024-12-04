import express from 'express';
import { 
  getExtensions, 
  addExtension, 
  updateExtension, 
  deleteExtension 
} from '../controllers/extensionController.js';

const router = express.Router();

router.get('/', getExtensions);
router.post('/', addExtension);
router.put('/:number', updateExtension);
router.delete('/:number', deleteExtension);

export default router;