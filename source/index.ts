import type { PlainResponse } from 'got'
import { client } from '~/client'

export const Inquisitor = () => {
  return {
    time: (url: string): Promise<PlainResponse['timings']> => client.get(url).then(r => r.timings)
  }
}
