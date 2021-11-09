import type { Response, CancelableRequest } from 'got'

export type HTTPClient = {
  get: (url: string | URL) => CancelableRequest<Response<string>>
  head: (url: string | URL) => CancelableRequest<Response<string>>
}

export type Headers = Record<string, string | string[] | undefined>
