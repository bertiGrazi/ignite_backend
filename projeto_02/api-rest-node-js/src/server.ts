import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

// GET, POST, PUT, PATCH E DELETE

// http://localhost:3333/hello

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!')
  })
