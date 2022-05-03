import { Order } from "@prisma/client";
import { prisma } from "../../database/prismaClient";

export class ListOrderService {
  async execute(): Promise<Order[]> {
    return await prisma.order.findMany({
      include: {
        collaborator: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        },
        customer: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    })
  }
}
