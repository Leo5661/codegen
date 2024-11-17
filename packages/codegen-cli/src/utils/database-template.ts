export const PRISMA_SCHEMA = `// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
`;

export const PRISMA_DB_UTIL_TS = `import { PrismaClient } from '@prisma/client'

const globalPrisma = globalThis as unknown as {
    prisma: any | undefined
}

export const prisma = globalPrisma.prisma ??
    new PrismaClient({
        log: ['query'],
    })

if (process.env.NODE_ENV !== 'production') globalPrisma.prisma = prisma
`;

export const PRISMA_DB_UTIL_JS = `import { PrismaClient } from '@prisma/client'

const globalPrisma = globalThis;

globalPrisma.prisma = globalPrisma.prisma || new PrismaClient({
    log: ['query'],
});

if (process.env.NODE_ENV !== 'production') {
    globalPrisma.prisma = globalPrisma.prisma;
}

module.export = globalPrisma.prisma;
`;
