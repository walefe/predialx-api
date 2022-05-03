import { Request, Response } from 'express'
import { listOrderService } from '../../services';

export class ListOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const orders = await listOrderService.execute();
    return response.status(201).json(orders);
  }
}
