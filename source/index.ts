import { time } from './client/time'
import { min } from './dns/resolve'

export const Inquisitor = () => {
  return {
    time,
    dns: {
      min
    }
  }
}
