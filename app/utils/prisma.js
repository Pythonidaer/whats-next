const { PrismaClient } = require('@prisma/client')

const globalForPrisma = global
globalForPrisma.prisma = undefined

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

//   instantiates a singleton
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export default prisma
