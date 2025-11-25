import { Subdivision } from './subdivision'
import { Collection } from '@freearhey/core'
import type { CountryData } from '../types'
import type { City, Channel } from './'
import { Language } from './language'
import { Region } from './region'
import store from '../store'

export class Country {
  /** Name of the country */
  name: string
  /** [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country */
  code: string
  /** List of official language [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) codes of the country */
  languages: string[]
  /** Country flag emoji */
  flag: string

  constructor(data: CountryData) {
    this.name = data.name
    this.code = data.code
    this.languages = data.languages
    this.flag = data.flag
  }

  /** @returns List of official languages of the country */
  getLanguages(): Collection<Language> {
    const languages = new Collection<Language>()
    new Collection<string>(this.languages).forEach((code: string) => {
      const data = store.languagesKeyByCode.get(code)
      if (!data) return undefined

      languages.add(new Language(data))
    })

    return languages
  }

  /** @returns List of channels broadcast from the country */
  getChannels(): Collection<Channel> {
    return new Collection<Channel>(store.channelsGroupedByCountry.get(this.code))
  }

  /** @returns List of regions that include the country */
  getRegions(): Collection<Region> {
    return store.regions
      .filter(region => region.countries.includes(this.code))
      .map<Region>(data => new Region(data))
  }

  /** @returns List of subdivisions of the country */
  getSubdivisions(): Collection<Subdivision> {
    return store.subdivisions
      .filter(subdivision => subdivision.country === this.code)
      .map<Subdivision>(data => new Subdivision(data))
  }

  /** @returns List of cities of the country */
  getCities(): Collection<City> {
    return store.cities.filter(city => city.country === this.code)
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): CountryData {
    return {
      name: this.name,
      code: this.code,
      languages: this.languages,
      flag: this.flag
    }
  }
}
