import { Collaborator } from "@prisma/client";
import { prisma } from "../../database/prismaClient";

export class ListCollaboratorService {
  async execute(): Promise<Collaborator[]> {
    return await prisma.collaborator.findMany()
  }
}
