import { Request, Response } from 'express'
import { deleteCustomerService } from '../../services';

export class DeleteCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const customer = await deleteCustomerService.execute(id);

    return response.status(201).json(customer);
  }
}
