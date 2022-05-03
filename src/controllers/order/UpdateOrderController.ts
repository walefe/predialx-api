import { Request, Response } from 'express'
import { updateOrderService } from '../../services';

export class UpdateOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { customer_id, description, collaborator_id } = request.body;
    const { id } = request.params
    const customer = await updateOrderService.execute({ customer_id, description, collaborator_id, id });

    return response.status(201).json(customer);
  }
}
