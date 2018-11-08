import 'babel-polyfill'
const fs = require('fs')
const path = require('path')
const util = require('util')

const fsReadFile = util.promisify(fs.readFile)
const CERTS_DIR = path.resolve(__dirname, './certs')
const PORT = 8080

const readCertFile = (filename) => fsReadFile(path.resolve(CERTS_DIR, filename))

async function createServerOptions () {
  const [key, cert] = await Promise.all([
    readCertFile('key.pem'),
    readCertFile('cert.pem')
  ])
  return { key, cert }
}

async function main () {
  const { key, cert } = await createServerOptions()

  // Require the framework and instantiate it
  const app = require('fastify')({
    http2: true,
    https: {
      allowHTTP1: true, // fallback support for HTTP1
      key,
      cert
    },
    logger: true
  })

  // Declare a route
  app.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
  })

  // Run the server!
  let address = await app.listen(PORT)
  app.log.info(`server listening on ${address}`)
}

main().catch((err) => {
  console.error(err)
})
