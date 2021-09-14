import { Timings } from './../types/timings'
import { client } from './index'

export const time = (url: string): Promise<Timings> => client.get(url).then((r) => r.timings)
