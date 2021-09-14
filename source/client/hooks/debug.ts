import type { NormalizedOptions, Response } from 'got'
import { serializeError } from 'serialize-error'
import { Logger } from './../../logger'

const log = Logger.child({
  namespace: 'request'
})

export const logRequest = (options: NormalizedOptions): void => {
  const context = {
    method: options.method,
    url: options.url.toString(),
    body: options?.body?.toString() ?? '',
    searchParams: options?.searchParams?.toString() ?? ''
  }

  log.debug(context, 'request parameters')
}

export const logResponse = (response: Response): Response => {
  const { url, statusCode } = response
  let body = response.body

  try {
    body = JSON.stringify(body)
  } catch (error) {
    log.error(serializeError(error), 'payload cannot be stringified')
  }

  const context = {
    url,
    statusCode
  }

  log.debug(context, 'response data')
  return response
}
