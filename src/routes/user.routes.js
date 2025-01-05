// File: src/routes/user.routes.js
import express from 'express';
import { userController } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', userController.create);
router.get('/', userController.findAll);
router.get('/:id', userController.findOne);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;