import type { Timings } from './http'
import { Result as ResolveResult } from './resolve'

export type Inquire = {
  timings: (url: string) => Promise<Timings>
  content: (url: string) => Promise<string>
  dns: {
    a: () => ResolveResult
    cname: () => ResolveResult
    mx: () => ResolveResult
    txt: () => ResolveResult
  }
}
