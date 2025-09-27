import { Collection } from '@freearhey/core'
import { TimezoneData } from '../types'
import { Country } from './country'
import store from '../store'

export class Timezone {
  /** Timezone ID from [tz database](https://en.wikipedia.org/wiki/Tz_database) */
  id: string
  /** [UTC offset](https://en.wikipedia.org/wiki/UTC_offset) for this time zone */
  utc_offset: string
  /** List of country codes included in the time zone */
  countries: string[]

  constructor(data: TimezoneData) {
    this.id = data.id
    this.utc_offset = data.utc_offset
    this.countries = data.countries
  }

  /** @returns List of countries included in the time zone */
  getCountries(): Collection<Country> {
    const countries = new Collection<Country>()
    this.countries.forEach((code: string) => {
      const country = store.countriesKeyByCode.get(code)
      if (country) countries.add(country)
    })

    return countries
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): TimezoneData {
    return {
      id: this.id,
      utc_offset: this.utc_offset,
      countries: this.countries
    }
  }
}
