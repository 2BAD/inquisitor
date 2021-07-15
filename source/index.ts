import { time } from './client'
import { min } from './dns/resolve'

export const Inquisitor = () => {
  return {
    time,
    dns: {
      min
    }
  }
}
