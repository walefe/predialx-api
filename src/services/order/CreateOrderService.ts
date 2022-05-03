import { Order } from "@prisma/client";
import { prisma } from "../../database/prismaClient";

type OrderDTO = {
  customer_id: string
  collaborator_id: string
  description: string
}

export class CreateOrderService {
  async execute({ customer_id, collaborator_id, description}: OrderDTO): Promise<Order> {
    return await prisma.order.create({
      data: {
        collaborator_id,
        customer_id,
        description
      }
    });
  }
}
