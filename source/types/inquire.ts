import { Result as ResolveResult } from './resolve'
import type { Timings } from './timings'

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
