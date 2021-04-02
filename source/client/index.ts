import got from 'got'
import { logRequest, logResponse } from '~/client/hooks/debug'

export const create = got.extend({
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
