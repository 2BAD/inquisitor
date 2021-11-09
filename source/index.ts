import type { Resolver } from 'dns/promises'
import type { Inquire } from './types/inquire'
import { URL } from 'url'
import { client } from './client/index'
import { content, timings } from './client/get'
import { createResolver, setupResolve } from './dns/resolve'

export const Inquisitor = (url: string, resolver?: Resolver): Inquire => {
  const { hostname } = new URL(url)
  resolver = resolver ?? createResolver()
  const resolve = setupResolve(resolver)(hostname)

  return {
    timings: timings(client),
    content: content(client),
    dns: {
      a: resolve('A'),
      cname: resolve('CNAME'),
      mx: resolve('MX'),
      txt: resolve('TXT')
    }
  }
}
