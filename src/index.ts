import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'

import postgrePlugin from './plugins/postgre'
import config from 'configs/config'
import logger from 'utils/logger'

const server: FastifyInstance = Fastify({})

server.register(postgrePlugin)

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get('/ping', opts, async (request, reply) => {
  return { pong: 'it worked!' }
})

const start = async () => {
  try {
    const port = typeof config.port === 'string' ? parseInt(config.port) : config.port
    await server.listen({ port })

    const address = server.server.address()
    logger.info(`✨ Listening port ${typeof address === 'string' ? address : address?.port}`)

  } catch (err) {
    logger.error(err)
    process.exit(1)
  }
}

start()