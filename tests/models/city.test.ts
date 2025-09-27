import { City, Country, Region, Subdivision } from '../../src/models'
import { beforeAll, describe, expect, test } from 'vitest'
import { DataManager } from '../../src/core/dataManager'

let city: City

describe('City', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    city = data.cities.first()
  })

  test('code', () => {
    expect(city.code).toBe('ADCAN')
  })

  test('name', () => {
    expect(city.name).toBe('Canillo')
  })

  test('country', () => {
    expect(city.country).toBe('AD')
  })

  test('getCountry()', () => {
    expect(city.getCountry()).instanceOf(Country)
  })

  test('subdivision', () => {
    expect(city.subdivision).toBe('AD-02')
  })

  test('getSubdivision()', () => {
    expect(city.getSubdivision()).instanceOf(Subdivision)
  })

  test('getRegions()', () => {
    expect(city.getRegions().count()).toBe(5)
    expect(city.getRegions().first()).instanceOf(Region)
  })

  test('toObject()', () => {
    expect(city.toObject()).toMatchObject({
      country: 'AD',
      subdivision: 'AD-02',
      code: 'ADCAN',
      name: 'Canillo',
      wikidata_id: 'Q386802'
    })
  })
})
