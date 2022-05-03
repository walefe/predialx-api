import { Request, Response } from 'express'
import { listCollaboratorsService } from '../../services';

export class ListCollaboratorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const customers = await listCollaboratorsService.execute();
    return response.status(201).json(customers);
  }
}
