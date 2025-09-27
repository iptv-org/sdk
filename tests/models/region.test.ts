import { City, Country, Region, Subdivision } from '../../src/models'
import { beforeAll, describe, expect, test } from 'vitest'
import { DataManager } from '../../src/core/dataManager'

let region: Region

describe('Region', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    region = data.regions.first()
  })

  test('code', () => {
    expect(region.code).toBe('AFR')
  })

  test('name', () => {
    expect(region.name).toBe('Africa')
  })

  test('countries', () => {
    expect(region.countries.length).toBe(59)
    expect(region.countries[0]).toBe('AO')
  })

  test('getCountries()', () => {
    expect(region.getCountries().count()).toBe(59)
    expect(region.getCountries().first()).instanceOf(Country)
  })

  test('getSubdivisions()', () => {
    expect(region.getSubdivisions().count()).toBe(1101)
    expect(region.getSubdivisions().first()).instanceOf(Subdivision)
  })

  test('getCities()', () => {
    expect(region.getCities().count()).toBe(1)
    expect(region.getCities().first()).instanceOf(City)
  })

  test('getRegions()', () => {
    expect(region.getRegions().count()).toBe(13)
    expect(region.getRegions().first()).instanceOf(Region)
  })

  test('toObject()', () => {
    expect(region.toObject()).toMatchObject({
      code: 'AFR',
      name: 'Africa',
      countries: [
        'AO',
        'BF',
        'BI',
        'BJ',
        'BW',
        'CD',
        'CF',
        'CG',
        'CI',
        'CM',
        'CV',
        'DJ',
        'DZ',
        'EG',
        'EH',
        'ER',
        'ET',
        'GA',
        'GH',
        'GM',
        'GN',
        'GQ',
        'GW',
        'KE',
        'KM',
        'LR',
        'LS',
        'LY',
        'MA',
        'MG',
        'ML',
        'MR',
        'MU',
        'MW',
        'MZ',
        'NA',
        'NE',
        'NG',
        'RE',
        'RW',
        'SC',
        'SD',
        'SH',
        'SL',
        'SN',
        'SO',
        'SS',
        'ST',
        'SZ',
        'TD',
        'TF',
        'TG',
        'TN',
        'TZ',
        'UG',
        'YT',
        'ZA',
        'ZM',
        'ZW'
      ]
    })
  })
})
