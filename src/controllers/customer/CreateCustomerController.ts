import { Request, Response } from 'express'
import { createCustomerService } from '../../services';

export class CreateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const customer = await createCustomerService.execute(name);

    return response.status(201).json(customer);
  }
}
