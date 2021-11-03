import { Result as ResolveResult } from './resolve'
import type { Timings } from './timings'

export type Inquire = {
  timings: () => Promise<Timings>
  content: () => Promise<string>
  dns: {
    a: () => ResolveResult
    cname: () => ResolveResult
    mx: () => ResolveResult
    txt: () => ResolveResult
  }
}
