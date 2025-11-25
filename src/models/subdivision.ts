import type { Country, Region, City } from './'
import type { SubdivisionData } from '../types'
import { Collection } from '@freearhey/core'
import store from '../store'

export class Subdivision {
  /** [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country */
  country: string
  /** Subdivision name */
  name: string
  /** [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code of the subdivision */
  code: string
  /** [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code of the parent subdivision */
  parent: string | null

  constructor(data: SubdivisionData) {
    this.country = data.country
    this.name = data.name
    this.code = data.code
    this.parent = data.parent
  }

  /** @returns Country in which the subdivision is located */
  getCountry(): Country | undefined {
    return store.countriesKeyByCode.get(this.country)
  }

  /** @returns Parent subdivision */
  getParent(): Subdivision | undefined {
    if (!this.parent) return undefined

    return store.subdivisionsKeyByCode.get(this.parent)
  }

  /** @returns List of cities in which the subdivision is located */
  getCities(): Collection<City> {
    return store.cities.filter((city: City) => city.subdivision === this.code)
  }

  /** @returns List of regions in which the city is located */
  getRegions(): Collection<Region> {
    const country = this.getCountry()
    if (!country) return new Collection<Region>()

    return country.getRegions()
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): SubdivisionData {
    return {
      country: this.country,
      name: this.name,
      code: this.code,
      parent: this.parent
    }
  }
}
