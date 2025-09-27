import { beforeAll, describe, expect, test } from 'vitest'
import { DataManager } from '../../src/core/dataManager'
import { Country, Timezone } from '../../src/models'

let timezone: Timezone

describe('Timezone', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    timezone = data.timezones.first()
  })

  test('id', () => {
    expect(timezone.id).toBe('Africa/Abidjan')
  })

  test('utc_offset', () => {
    expect(timezone.utc_offset).toBe('+00:00')
  })

  test('countries', () => {
    expect(timezone.countries.length).toBe(12)
    expect(timezone.countries[0]).toBe('CI')
  })

  test('getCountries()', () => {
    expect(timezone.getCountries().count()).toBe(12)
    expect(timezone.getCountries().first()).instanceOf(Country)
  })

  test('toObject()', () => {
    expect(timezone.toObject()).toMatchObject({
      id: 'Africa/Abidjan',
      utc_offset: '+00:00',
      countries: ['CI', 'BF', 'GH', 'GM', 'GN', 'IS', 'ML', 'MR', 'SH', 'SL', 'SN', 'TG']
    })
  })
})
