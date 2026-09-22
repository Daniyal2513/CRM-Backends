import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;

/**
 * Creates a new customer record.
 * @param {Object} customerData - The data for the new customer.
 * @param {string} customerData.name - Customer's full name.
 * @param {string} customerData.email - Customer's email address.
 * @param {string} [customerData.phone] - Customer's phone number.
 * @param {string} [customerData.company] - Customer's company name.
 * @param {string} customerData.assignedTo - ID of the user creating the customer.
 * @returns {Promise<Object>} The created customer document.
 */
export const createCustomer = async (customerData) => {
  try {
    const customer = new Customer(customerData);
    await customer.save();
    return customer;
  } catch (error) {
    throw error;
  }
};

/**
 * Retrieves all customers.
 * @returns {Promise<Array>} Array of customer documents.
 */
export const getAllCustomers = async () => {
  try {
    return await Customer.find().populate('assignedTo', 'name email');
  } catch (error) {
    throw error;
  }
};

/**
 * Retrieves a customer by their ID.
 * @param {string} id - The customer ID.
 * @returns {Promise<Object|null>} The customer document or null if not found.
 */
export const getCustomerById = async (id) => {
  try {
    return await Customer.findById(id).populate('assignedTo', 'name email');
  } catch (error) {
    throw error;
  }
};

/**
 * Updates a customer record.
 * @param {string} id - The customer ID.
 * @param {Object} updateData - Key-value pairs to update.
 * @returns {Promise<Object|null>} The updated customer document or null if not found.
 */
export const updateCustomerById = async (id, updateData) => {
  try {
    return await Customer.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
  } catch (error) {
    throw error;
  }
};

/**
 * Deletes a customer record.
 * @param {string} id - The customer ID.
 * @returns {Promise<Object|null>} The deleted customer document or null if not found.
 */
export const deleteCustomerById = async (id) => {
  try {
    return await Customer.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};