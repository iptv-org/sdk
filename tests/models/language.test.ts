import { beforeAll, describe, expect, test } from 'vitest'
import { DataManager } from '../../src/core/dataManager'
import { Language } from '../../src/models'

let language: Language

describe('Language', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    language = data.languages.first()
  })

  test('code', () => {
    expect(language.code).toBe('aaa')
  })

  test('name', () => {
    expect(language.name).toBe('Ghotuo')
  })

  test('toObject()', () => {
    expect(language.toObject()).toMatchObject({
      code: 'aaa',
      name: 'Ghotuo'
    })
  })
})
