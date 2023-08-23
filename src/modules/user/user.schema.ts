import { buildJsonSchemas } from 'fastify-zod'
import { z } from 'zod'

const userCreateBodySchema = z.object({
  username: z.string().nonempty(),
  password: z.string().nonempty(),
  profile_picture: z.string(),
})

export type UserCreateBodySchema = z.infer<typeof userCreateBodySchema>

export const { schemas: userSchemas, $ref } = buildJsonSchemas(
  {
    userCreateBodySchema
  },
  { $id: 'userSchemas' }
)
