import { Customer } from "@prisma/client";
import { prisma } from "../../database/prismaClient";

export class ListCustomerService {
  async execute(): Promise<Customer[]> {
    return await prisma.customer.findMany()
  }
}
