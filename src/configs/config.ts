import dotEnv from 'dotenv'
import 'dotenv/config'
import z from 'zod'

dotEnv.config({ path: `.env.${process.env.NODE_ENV}` })

const envVars = z.object({
    // ** ENVIRONMENT
    NODE_ENV: z.string().default('production'),
    DOCKERIZE: z.string().default(''),
    // ** SERVER
    PORT: z.string().default('3000'),
    HOST: z.string().default('127.0.0.1'),
    // ** DATABASE
    DB_HOST: z.string().default('127.0.0.1'),
    DB_PORT: z.string().default('5432'),
    DB_USERNAME: z.string().nonempty(),
    DB_PASSWORD: z.string().nonempty(),
    DB_NAME: z.string().nonempty(),
    // TODO: Kalau sempat
    // // ** JWT
    // SECRET: z.string(),
})


const envResult = envVars.safeParse(process.env)

if (!envResult.success) {
  throw new Error(envResult.error.message)
}

const data = envResult.data

const config = {
    appName: 'better-social',
    filesDir:
      data.NODE_ENV === 'production'
        ? `${__dirname.replaceAll('dist/configs', '')}uploads`
        : `${__dirname.replaceAll('src/configs', '')}uploads`,
    env: data.NODE_ENV,
    dockerize: data.DOCKERIZE,
    port: data.PORT,
    host: data.HOST,
    database: {
        host: data.DB_HOST,
        port: data.DB_PORT,
        username: data.DB_USERNAME,
        password: data.DB_PASSWORD,
        name: data.DB_NAME,
    }
}

export default config
