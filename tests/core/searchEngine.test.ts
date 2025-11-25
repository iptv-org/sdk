import { SearchEngine } from '../../src/core/searchEngine'
import { expect, test, describe } from 'vitest'

describe('SearchEngine', () => {
  test('createIndex()', () => {
    const searchIndex = SearchEngine.createIndex<{ id: number }>([{ id: 1 }, { id: 2 }])

    expect(searchIndex.fields[0]).toBe('id')
  })
})
