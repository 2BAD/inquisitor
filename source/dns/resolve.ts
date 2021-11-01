import type { AnyRecord, MxRecord, NaptrRecord, SoaRecord, SrvRecord } from 'dns'
import { Resolver } from 'dns/promises'
import { RRType } from '../types/rrtype'

export const createResolver = (servers = ['8.8.8.8', '8.8.4.4']): Resolver => {
  const resolver = new Resolver()
  resolver.setServers(servers)
  return resolver
}

export const setupResolve =
  (resolver: Resolver) =>
  (domain: string) =>
  (type: RRType) =>
  (): Promise<string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][] | AnyRecord[]> =>
    resolver.resolve(domain, type)
