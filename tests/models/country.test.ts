import { Channel, City, Country, Language, Region, Subdivision } from '../../src/models'
import { beforeAll, describe, expect, test } from 'vitest'
import { DataManager } from '../../src/core/dataManager'

let country: Country

describe('Country', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    country = data.countries.first()
  })

  test('code', () => {
    expect(country.code).toBe('AF')
  })

  test('name', () => {
    expect(country.name).toBe('Afghanistan')
  })

  test('flag', () => {
    expect(country.flag).toBe('🇦🇫')
  })

  test('languages', () => {
    expect(country.languages.length).toBe(3)
    expect(country.languages[0]).toBe('pus')
  })

  test('getLanguages()', () => {
    expect(country.getLanguages().count()).toBe(3)
    expect(country.getLanguages().first()).instanceOf(Language)
  })

  test('getSubdivisions()', () => {
    expect(country.getSubdivisions().count()).toBe(33)
    expect(country.getSubdivisions().first()).instanceOf(Subdivision)
  })

  test('getRegions()', () => {
    expect(country.getRegions().count()).toBe(5)
    expect(country.getRegions().first()).instanceOf(Region)
  })

  test('getCities()', () => {
    expect(country.getCities().count()).toBe(1)
    expect(country.getCities().first()).instanceOf(City)
  })

  test('getChannels()', () => {
    expect(country.getChannels().count()).toBe(1)
    expect(country.getChannels().first()).instanceOf(Channel)
  })

  test('toObject()', () => {
    expect(country.toObject()).toMatchObject({
      code: 'AF',
      name: 'Afghanistan',
      flag: '🇦🇫',
      languages: ['pus', 'prd', 'tuk']
    })
  })
})
