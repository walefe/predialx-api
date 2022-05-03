import { Customer } from "@prisma/client";
import { prisma } from "../../database/prismaClient";

type CollaboratorDTO = {
  name: string
  email: string
  password: string
}

export class CreateCollaboratorService {
  async execute({ name , email, password }: CollaboratorDTO): Promise<Customer> {
    return await prisma.collaborator.create({
      data: {
        name,
        email,
        password
      }
    });
  }
}
