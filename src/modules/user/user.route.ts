import { FastifyInstance } from "fastify";
import { $ref, userSchemas } from "./user.schema";
import { userCreateHandler } from "./user.controller";

async function userRoutes(server: FastifyInstance) {
    server.post(
        '/',
        {
          schema: {
            body: $ref('userCreateBodySchema')
          }
        },
        userCreateHandler
      )

    for (const schema of userSchemas) {
      server.addSchema(schema)
    }
}

export default userRoutes