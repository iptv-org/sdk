import { beforeAll, describe, expect, test } from 'vitest'
import { DataManager } from '../../src/core/dataManager'
import { Category } from '../../src/models'

let category: Category

describe('Category', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    category = data.categories.first()
  })

  test('id', () => {
    expect(category.id).toBe('auto')
  })

  test('name', () => {
    expect(category.name).toBe('Auto')
  })

  test('description', () => {
    expect(category.description).toBe(
      'Programming related to cars, motorcycles, and other automobiles'
    )
  })

  test('data()', () => {
    expect(category.toObject()).toMatchObject({
      id: 'auto',
      name: 'Auto',
      description: 'Programming related to cars, motorcycles, and other automobiles'
    })
  })
})
