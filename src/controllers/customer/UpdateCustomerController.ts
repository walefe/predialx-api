import { Request, Response } from 'express'
import { updateCustomerService } from '../../services';

export class UpdateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { id } = request.params
    const customer = await updateCustomerService.execute(name, id);

    return response.status(201).json(customer);
  }
}
