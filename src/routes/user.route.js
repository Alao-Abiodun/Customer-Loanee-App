import { Router } from 'express';

import UserController from '../controllers/user.controller';

const router = Router();

router.get('/users', UserController.getAllUser);
router.post('/userProfile', UserController.createUser);
router.get('/login', UserController.loginAUser);

export default router;
