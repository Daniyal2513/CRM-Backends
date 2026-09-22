import { Router } from 'express';
import * as authController from '../controllers/auth.controler.js';

const router = Router();

/**
 * Route serving user registration.
 * @name post/register
 * @memberof module:routes/auth
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/register', authController.register);

/**
 * Route serving user login.
 * @name post/login
 * @memberof module:routes/auth
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/login', authController.login);

export default router;