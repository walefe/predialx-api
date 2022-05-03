import { Request, Response } from 'express'
import { createCollaboratorService } from '../../services';

export class CreateCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const customer = await createCollaboratorService.execute({
      name,
      email,
      password
    });

    return response.status(201).json(customer);
  }
}
