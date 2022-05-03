import { Order } from "@prisma/client";
import { prisma } from "../../database/prismaClient";

type OrderDTO = {
  id: string
  customer_id: string
  collaborator_id: string
  description: string
}

export class UpdateOrderService {
  async execute({
    id,
    customer_id,
    collaborator_id,
    description
  }: OrderDTO): Promise<Order> {
    return await prisma.order.update({
      where: {
        id
      },
      data: {
        customer_id,
        collaborator_id,
        description
      }
    })
  }
}
