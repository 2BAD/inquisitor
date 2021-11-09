import type { Response, CancelableRequest } from 'got'

export type Client = {
  get: (url: string | URL) => CancelableRequest<Response<string>>
  head: (url: string | URL) => CancelableRequest<Response<string>>
}

export type Headers = Record<string, string | string[] | undefined>

export type Timings = {
  start: number
  socket?: number
  lookup?: number
  connect?: number
  secureConnect?: number
  upload?: number
  response?: number
  end?: number
  error?: number
  abort?: number
  phases: {
    wait?: number
    dns?: number
    tcp?: number
    tls?: number
    request?: number
    firstByte?: number
    download?: number
    total?: number
  }
}
