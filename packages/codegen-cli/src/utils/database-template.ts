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
