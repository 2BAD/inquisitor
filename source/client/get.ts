import { Timings } from '../types/timings'
import { client } from './index'

export const content = (url: string): Promise<string> => client.get(url).then((r) => r.body)
export const timings = (url: string): Promise<Timings> => client.get(url).then((r) => r.timings)
