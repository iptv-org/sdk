import { beforeAll, describe, expect, test } from 'vitest'
import { BroadcastAreaLocation } from '../../src/models'
import { DataManager } from '../../src/core/dataManager'

let location: BroadcastAreaLocation

describe('BroadcastAreaLocation', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    location = new BroadcastAreaLocation({ code: 'ct/ADCAN' })
  })

  test('rawCode', () => {
    expect(location.rawCode).toBe('ct/ADCAN')
  })

  test('type', () => {
    expect(location.type).toBe('city')
  })

  test('code', () => {
    expect(location.code).toBe('ADCAN')
  })

  test('getName()', () => {
    expect(location.getName()).toBe('Canillo')
  })

  test('toObject()', () => {
    expect(location.toObject()).toMatchObject({
      code: 'ct/ADCAN'
    })
  })
})
