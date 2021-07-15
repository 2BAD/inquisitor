/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
import type { NormalizedOptions, Response } from 'got'
import { serializeError } from 'serialize-error'
import { Logger } from './../../logger'

const log = Logger.child({
  namespace: 'request'
})

export const logRequest = (options: NormalizedOptions): void => {
  log.debug({
    method: options.method,
    url: options.url.toString(),
    body: options?.body?.toString() ?? '',
    searchParams: options?.searchParams?.toString() ?? ''
  }, 'request parameters')
}

export const logResponse = (response: Response): Response => {
  const { url, statusCode } = response
  // eslint-disable-next-line functional/no-let
  let body = response.body
  // eslint-disable-next-line functional/no-try-statement
  try {
    body = JSON.stringify(body)
  } catch (error) {
    log.error({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      error: serializeError(error)
    }, 'payload cannot be stringified')
  }
  log.debug({
    url,
    statusCode,
    // body
  }, 'response data')
  return response
}
