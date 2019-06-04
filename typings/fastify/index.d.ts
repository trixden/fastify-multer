import 'fastify'
import { isMultipart } from '../../src/lib/content-parser'
import { File, FilesObject } from '../../src/interfaces'

type FilesInRequest = FilesObject | Partial<File>[]

declare module 'fastify' {
  interface FastifyRequest<HttpRequest, Query, Params, Headers, Body> {
    isMultipart: typeof isMultipart
    file: File
    files: FilesInRequest
  }
}
