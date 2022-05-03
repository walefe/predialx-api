import { Customer } from "@prisma/client";
import { prisma } from "../../database/prismaClient";

export class CreateCustomerService {
  async execute(name: any): Promise<Customer> {
    return await prisma.customer.create({
      data: {
      name,
      }
    });
  }
}
