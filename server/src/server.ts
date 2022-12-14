import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const prisma = new PrismaClient({
  log: ['query'],
})

async function bootstrap() {
  const fastify = Fastify({
    logger: true
  })

  await fastify.register(cors, {
    origin: true
  })

  fastify.get('/pools/count', async () => {

    const poolConsult = await prisma.pool.count()

    return { poolConsult }
  })

  await fastify.listen({ port: 3333 })
}

bootstrap()