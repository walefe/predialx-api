import { Request, Response } from 'express'
import { listCustomerService } from '../../services';

export class ListCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const customers = await listCustomerService.execute();
    return response.status(201).json(customers);
  }
}
