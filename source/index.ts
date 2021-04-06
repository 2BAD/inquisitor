import type { Timings } from '@szmarczak/http-timer'
import { client } from '~/client'

export const Inquisitor = () => {
  return {
    time: (url: string): Promise<Timings> => client.get(url).then(r => r.timings)
  }
}
