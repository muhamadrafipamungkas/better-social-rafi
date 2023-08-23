import Fastify, { FastifyRequest } from "fastify"
import httpStatus from 'http-status'
import { UserCreateBodySchema } from "./user.schema"
import ApiResponse from "utils/api-response"

export const userCreateHandler = async (
    request: FastifyRequest<{
      Body: UserCreateBodySchema
    }>
) => {
    const { body } = request
    return new ApiResponse(httpStatus.OK, 'Okay', body) 
}