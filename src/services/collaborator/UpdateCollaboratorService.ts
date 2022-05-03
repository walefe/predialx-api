import { Collaborator } from "@prisma/client";
import { prisma } from "../../database/prismaClient";

export class UpdateCollaboratorService {
  async execute(
    name: string,
    email: string,
    password: string,
    id: string
  ): Promise<Collaborator> {
    return await prisma.collaborator.update({
      where: {
        id
      },
      data: {
        name,
        email,
        password
      }
    })
  }
}
