import { Request, Response } from 'express'
import { updateCollaboratorService } from '../../services';

export class UpdateCollaboratorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const { id } = request.params
    const customer = await updateCollaboratorService.execute(name, email, password, id);

    return response.status(201).json(customer);
  }
}
