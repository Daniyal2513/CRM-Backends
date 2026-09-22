import { Router } from 'express';
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
} from '../controllers/customer.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

/**
 * Express router for customer data management routes.
 * All routes require authentication.
 */

// POST /api/customers - Creates a new customer
router.post('/', authenticate, createCustomer);

// GET /api/customers - Retrieves all customers
router.get('/', authenticate, getAllCustomers);

// GET /api/customers/:id - Retrieves a specific customer by ID
router.get('/:id', authenticate, getCustomerById);

// PUT /api/customers/:id - Updates a specific customer by ID
router.put('/:id', authenticate, updateCustomer);

// DELETE /api/customers/:id - Deletes a specific customer by ID
router.delete('/:id', authenticate, deleteCustomer);

export default router;