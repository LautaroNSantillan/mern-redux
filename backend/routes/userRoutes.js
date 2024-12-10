import express from 'express';
import { authUser } from '../controllers/userController.js'; // dont forget .js

const router = express.Router();

router.post('/auth', authUser);

export default router;