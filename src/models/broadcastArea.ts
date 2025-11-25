import type { BroadcastAreaData } from '../types/broadcastArea'
import { BroadcastAreaLocation } from './broadcastAreaLocation'
import { Collection } from '@freearhey/core'

export class BroadcastArea {
  /** List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`, `ct/<city_code>`) */
  codes: string[]

  constructor(data: BroadcastAreaData) {
    this.codes = data.codes || []
  }

  /** @returns List of locations describing the broadcasting area */
  getLocations(): Collection<BroadcastAreaLocation> {
    return new Collection<string>(this.codes).map<BroadcastAreaLocation>(
      (code: string) => new BroadcastAreaLocation({ code })
    )
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): BroadcastAreaData {
    return {
      codes: this.codes
    }
  }
}
