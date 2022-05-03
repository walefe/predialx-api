import { Customer } from "@prisma/client";
import { prisma } from "../../database/prismaClient";

export class UpdateCustomerService {
  async execute(name: string, id: string): Promise<Customer> {
    return await prisma.customer.update({
      where: {
        id
      },
      data: {
        name,
      }
    })
  }
}
