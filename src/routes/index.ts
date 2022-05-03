import { Router } from 'express'
import { collaboratorsRoutes } from './collaborators.routes';
import { customerRoutes } from './customer.routes';
import { ordersRoutes } from './orders.routes';

const routes = Router()
routes.use('/customers', customerRoutes)
routes.use('/collaborators', collaboratorsRoutes)
routes.use('/orders', ordersRoutes)

export default routes;
