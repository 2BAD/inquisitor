import got from 'got'
import { logRequest, logResponse } from './hooks/debug'

export const client = got.extend({
  headers: {
    'user-agent': '2bad/inquisitor'
  },
  hooks: {
    beforeRequest: [logRequest],
    afterResponse: [logResponse]
  }
})
