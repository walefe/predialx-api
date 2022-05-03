import { prisma } from "../../database/prismaClient";

export class DeleteCustomerService {
  async execute(id: string): Promise<void> {
    await prisma.customer.delete({
      where: {
        id
      }
    })
  }
}
