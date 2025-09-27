import { BroadcastAreaLocationData } from '../types/broadcastAreaLocation'
import store from '../store'

export class BroadcastAreaLocation {
  /** Code of the location */
  code: string
  /** Type of the location */
  type: string

  constructor(data: BroadcastAreaLocationData) {
    const [type, code] = data.code.split('/')

    const types: Record<string, string> = {
      ct: 'city',
      s: 'subdivision',
      c: 'country',
      r: 'region'
    }

    this.type = types[type]
    this.code = code
  }

  /** @returns Name of the location */
  getName(): string | undefined {
    switch (this.type) {
      case 'city': {
        const city = store.citiesKeyByCode.get(this.code)
        return city ? city.name : undefined
      }
      case 'subdivision': {
        const subdivision = store.subdivisionsKeyByCode.get(this.code)
        return subdivision ? subdivision.name : undefined
      }
      case 'country': {
        const country = store.countriesKeyByCode.get(this.code)
        return country ? country.name : undefined
      }
      case 'region': {
        const region = store.regionsKeyByCode.get(this.code)
        return region ? region.name : undefined
      }
      default:
        return undefined
    }
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): BroadcastAreaLocationData {
    return {
      code: this.code
    }
  }
}
