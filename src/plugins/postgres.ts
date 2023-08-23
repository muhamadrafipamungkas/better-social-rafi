import fp from 'fastify-plugin'
import { FastifyPluginAsync } from 'fastify'
import { Client } from 'pg' 
import config from 'configs/config'

const postgrePlugin: FastifyPluginAsync = fp(async (server, options) => {
    const client = new Client({ 
        user: config.database.username, 
        password: config.database.password, 
        host: config.database.host, 
        port: parseInt(config.database.port), 
        database: config.database.name
    })
    await client.connect() 
    server.decorate('postgre', client)
})

export default postgrePlugin