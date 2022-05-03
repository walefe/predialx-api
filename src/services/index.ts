import { CreateCollaboratorService } from './collaborator/CreateCollaboratorService';
import { DeleteCollaboratorService } from './collaborator/DeleteCollaboratorService';
import { ListCollaboratorService } from './collaborator/ListCollaboratorService';
import { UpdateCollaboratorService } from './collaborator/UpdateCollaboratorService';
import { CreateCustomerService } from './customer/CreateCustomerService';
import { DeleteCustomerService } from './customer/DeleteCustomerService';
import { ListCustomerService } from './customer/ListCutomerService';
import { UpdateCustomerService } from './customer/UpdateCustomerService';
import { CreateOrderService } from './order/CreateOrderService';
import { DeleteOrderService } from './order/DeleteService';
import { ListOrderService } from './order/ListOrderService';
import { UpdateOrderService } from './order/UpdateOrderService';

export const createCustomerService = new CreateCustomerService();
export const deleteCustomerService = new DeleteCustomerService()
export const listCustomerService = new ListCustomerService()
export const updateCustomerService = new UpdateCustomerService()

export const createCollaboratorService = new CreateCollaboratorService();
export const listCollaboratorsService = new ListCollaboratorService()
export const updateCollaboratorService = new UpdateCollaboratorService()
export const deleteCollaboratorService = new DeleteCollaboratorService()

export const createOrderService = new CreateOrderService()
export const listOrderService = new ListOrderService()
export const updateOrderService = new UpdateOrderService()
export const deleteOrderService = new DeleteOrderService()
