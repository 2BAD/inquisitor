import got from 'got'
import { logRequest, logResponse } from '~/client/hooks/debug'

export const client = got.extend({
  headers: {
    'user-agent': '2bad/inquisitor'
  },
  hooks: {
    beforeRequest: [
      logRequest
    ],
    afterResponse: [
      logResponse
    ]
  }
})

export const time = (url: string) => client.get(url).then(r => r.timings)
