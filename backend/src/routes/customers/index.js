import express from 'express';
import customers from '../../controllers/customers/index.js';

const customersRoutes = express.Router();

customersRoutes.get('/', customers.get);
customersRoutes.post('/', customers.add);
customersRoutes.put('/:id', customers.edit);
customersRoutes.delete('/:id', customers.del);

export default customersRoutes;
