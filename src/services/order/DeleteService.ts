import { prisma } from "../../database/prismaClient";

export class DeleteOrderService {
  async execute(id: string): Promise<void> {
    await prisma.order.delete({
      where: {
        id
      }
    })
  }
}
