import { client } from './index'

export const time = (url: string) => client.get(url).then((r) => r.timings)
