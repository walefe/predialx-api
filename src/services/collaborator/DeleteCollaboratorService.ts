import { prisma } from "../../database/prismaClient";

export class DeleteCollaboratorService {
  async execute(id: string): Promise<void> {
    await prisma.collaborator.delete({
      where: {
        id
      }
    })
  }
}
