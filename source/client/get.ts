import type { Headers } from 'got'
import type { Timings } from '../types/timings'
import { client } from './index'

export const content = (url: string) => (): Promise<string> => client.get(url).then((r) => r.body)
export const timings = (url: string) => (): Promise<Timings> => client.get(url).then((r) => r.timings)
export const headers = (url: string) => (): Promise<Headers> => client.head(url).then((r) => r.headers)
