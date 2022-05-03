import { Request, Response } from 'express'
import { deleteOrderService } from '../../services';

export class DeleteOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const customer = await deleteOrderService.execute(id);

    return response.status(201).json(customer);
  }
}
