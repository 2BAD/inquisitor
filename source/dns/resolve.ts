import { promises as dns } from 'dns'

const resolver = new dns.Resolver()
resolver.setServers(['8.8.8.8'])

export const a = (domain: string) => resolver.resolve(domain, 'A')
export const aaaa = (domain: string) => resolver.resolve(domain, 'AAAA')
export const cname = (domain: string) => resolver.resolve(domain, 'CNAME')
export const mx = (domain: string) => resolver.resolve(domain, 'MX')
export const naptr = (domain: string) => resolver.resolve(domain, 'NAPTR')
export const ns = (domain: string) => resolver.resolve(domain, 'NS')
export const ptr = (domain: string) => resolver.resolve(domain, 'PRT')
export const soa = (domain: string) => resolver.resolve(domain, 'SOA')
export const srv = (domain: string) => resolver.resolve(domain, 'SRV')
export const txt = (domain: string) => resolver.resolve(domain, 'TXT')

export const min = async (domain: string) => ({
  a: await a(domain),
  cname: await cname(domain),
  mx: await mx(domain),
  txt: await txt(domain)
})
