import type { Subdivision } from './subdivision'
import { Collection } from '@freearhey/core'
import type { CityData } from '../types'
import type { Country } from './country'
import type { Region } from './region'
import store from '../store'

export class City {
  /** [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country where the city is located */
  country: string
  /** [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code of the subdivision where the city is located */
  subdivision: string | null
  /** City name */
  name: string
  /** [UN/LOCODE](https://en.wikipedia.org/wiki/UN/LOCODE) of the city */
  code: string
  /** ID of this city in [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page) */
  wikidata_id: string

  constructor(data: CityData) {
    this.country = data.country
    this.subdivision = data.subdivision || null
    this.name = data.name
    this.code = data.code
    this.wikidata_id = data.wikidata_id
  }

  /** @returns Country in which the city is located */
  getCountry(): Country | undefined {
    return store.countriesKeyByCode.get(this.country)
  }

  /** @returns Subdivision in which the city is located */
  getSubdivision(): Subdivision | undefined {
    if (!this.subdivision) return undefined

    return store.subdivisionsKeyByCode.get(this.subdivision)
  }

  /** @returns List of regions in which the city is located */
  getRegions(): Collection<Region> {
    return store.regions.filter(region => region.countries.includes(this.country))
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): CityData {
    return {
      country: this.country,
      subdivision: this.subdivision,
      name: this.name,
      code: this.code,
      wikidata_id: this.wikidata_id
    }
  }
}
