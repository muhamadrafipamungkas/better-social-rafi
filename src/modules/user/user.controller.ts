import fastify, { FastifyRequest } from "fastify"
import { UserCreateBodySchema } from "./user.schema"

export const userCreateHandler = async (
    request: FastifyRequest<{
      Body: UserCreateBodySchema
    }>
) => {
    const { body } = request
    body.username
}