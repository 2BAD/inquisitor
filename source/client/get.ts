import type { Client, Headers, Timings } from '../types/http'

export const content =
  (client: Client) =>
  (url: string): Promise<string> =>
    client.get(url).then((r) => r.body)

export const timings =
  (client: Client) =>
  (url: string): Promise<Timings> =>
    client.get(url).then((r) => r.timings)

export const headers =
  (client: Client) =>
  (url: string): Promise<Headers> =>
    client.head(url).then((r) => r.headers)
