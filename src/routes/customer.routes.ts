import { Router } from "express";
import { CreateCustomerController } from "../controllers/customer/CreateCustomerController";
import { DeleteCustomerController } from "../controllers/customer/DeleteCustomerController";
import { ListCustomerController } from "../controllers/customer/ListCustomerController";
import { UpdateCustomerController } from "../controllers/customer/UpdateCustomerController";

const customerRoutes = Router()
const createCustomerController = new CreateCustomerController()
const listCustomerController = new ListCustomerController()
const updateCustomerController = new UpdateCustomerController()
const deleteCustomerController = new DeleteCustomerController()

customerRoutes.post('/', createCustomerController.handle)
customerRoutes.get('/', listCustomerController.handle)
customerRoutes.put('/:id', updateCustomerController.handle)
customerRoutes.delete('/:id', deleteCustomerController.handle)

export { customerRoutes }
