import { Request, Response } from 'express'
import { createOrderService } from '../../services';

export class CreateOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { customer_id, description, collaborator_id } = request.body;
    const customer = await createOrderService.execute({ customer_id, description, collaborator_id });

    return response.status(201).json(customer);
  }
}
