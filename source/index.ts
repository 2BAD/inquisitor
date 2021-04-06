import { client } from '~/client'

export const Inquisitor = () => {
  return {
    time: (url: string) => client.get(url).then(r => r.timings),
  }
}
