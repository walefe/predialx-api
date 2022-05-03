import { Router } from "express";
import { CreateOrderController } from "../controllers/order/CreateOrderController";
import { DeleteOrderController } from "../controllers/order/DeleteOrderController";
import { ListOrderController } from "../controllers/order/ListOrderService";
import { UpdateOrderController } from "../controllers/order/UpdateOrderController";

const ordersRoutes = Router()
const createOrderController = new CreateOrderController()
const listOrderController = new ListOrderController()
const updateOrderController = new UpdateOrderController()
const deleteOrderController = new DeleteOrderController()

ordersRoutes.post('/', createOrderController.handle)
ordersRoutes.get('/', listOrderController.handle)
ordersRoutes.put('/:id', updateOrderController.handle)
ordersRoutes.delete('/:id', deleteOrderController.handle)

export { ordersRoutes }
