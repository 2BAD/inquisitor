import type { Resolver } from 'dns/promises'
import type { Inquire } from './types/inquire'
import { timings, content } from './client/get'
import { createResolver, setupResolve } from './dns/resolve'
import { URL } from 'url'

export const Inquisitor = (url: string, resolver?: Resolver): Inquire => {
  const { hostname } = new URL(url)
  resolver = resolver ?? createResolver()
  const resolve = setupResolve(resolver)(hostname)

  return {
    timings: timings(url),
    content: content(url),
    dns: {
      a: resolve('A'),
      cname: resolve('CNAME'),
      mx: resolve('MX'),
      txt: resolve('TXT')
    }
  }
}
