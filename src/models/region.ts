import { Collection } from '@freearhey/core'
import { Subdivision } from './subdivision'
import { RegionData } from '../types'
import { Country } from './country'
import { City } from './city'
import store from '../store'

export class Region {
  /** Code of the region */
  code: string
  /** Full name of the region */
  name: string
  /** List of countries in the region */
  countries: string[]

  constructor(data: RegionData) {
    this.code = data.code
    this.name = data.name
    this.countries = data.countries
  }

  /** @returns List of regions related to the region */
  getRegions(): Collection<Region> {
    return store.regions.filter(
      (region: Region) =>
        !new Collection<string>(region.countries)
          .intersects(new Collection<string>(this.countries))
          .isEmpty()
    )
  }

  /** @returns List of country of the region */
  getCountries(): Collection<Country> {
    const countries = new Collection<Country>()
    this.countries.forEach((code: string) => {
      const country = store.countriesKeyByCode.get(code)
      if (country) countries.add(country)
    })

    return countries
  }

  /** @returns List of subdivisions of the region */
  getSubdivisions(): Collection<Subdivision> {
    const subdivisions = new Collection<Subdivision>()
    this.getCountries().forEach((country: Country) => {
      subdivisions.concat(country.getSubdivisions())
    })

    return subdivisions.uniqBy((subdivision: Subdivision) => subdivision.code)
  }

  /** @returns List of cities of the region */
  getCities(): Collection<City> {
    const cities = new Collection<City>()
    this.getCountries().forEach((country: Country) => {
      cities.concat(country.getCities())
    })

    return cities.uniqBy((subdivision: City) => subdivision.code)
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): RegionData {
    return {
      code: this.code,
      name: this.name,
      countries: this.countries
    }
  }
}
