import { PrismaClient } from "@prisma/client";
import { customers, collaborators } from './data'

const prisma = new PrismaClient();

async function main() {
  await prisma.customer.createMany({
   data: customers
  })

  await prisma.collaborator.createMany({
    data: collaborators
  })
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
