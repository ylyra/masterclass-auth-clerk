import { clerkPlugin, getAuth } from '@clerk/fastify'
import type { FastifyInstance } from 'fastify'

export function privateRoutes(app: FastifyInstance) {
  app.register(clerkPlugin)

  app.get('/private', (request, reply) => {
    const { userId } = getAuth(request)

    if (!userId) {
      return reply.status(403).send()
    }

    return 'You are in a private route'
  })
}
