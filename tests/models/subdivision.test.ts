import { City, Country, Subdivision } from '../../src/models'
import { beforeAll, describe, expect, test } from 'vitest'
import { DataManager } from '../../src/core/dataManager'

let subdivision: Subdivision

describe('Subdivision', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    subdivision = data.subdivisions.first()
  })

  test('code', () => {
    expect(subdivision.code).toBe('AD-02')
  })

  test('country', () => {
    expect(subdivision.country).toBe('AD')
  })

  test('getCountry()', () => {
    expect(subdivision.getCountry()).instanceOf(Country)
  })

  test('parent', () => {
    expect(subdivision.parent).toBe('AD-03')
  })

  test('getParent()', () => {
    expect(subdivision.getParent()).instanceOf(Subdivision)
  })

  test('toObject()', () => {
    expect(subdivision.toObject()).toMatchObject({
      country: 'AD',
      code: 'AD-02',
      name: 'Canillo',
      parent: 'AD-03'
    })
  })
})
