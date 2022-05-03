import { Request, Response } from 'express'
import { deleteCollaboratorService } from '../../services';

export class DeleteCollaboratorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const customer = await deleteCollaboratorService.execute(id);

    return response.status(201).json(customer);
  }
}
