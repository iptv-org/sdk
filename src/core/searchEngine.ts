import { Collection } from '@freearhey/core'
import sjs from '@freearhey/search-js'

export class SearchEngine {
  static createIndex<Type>(items: Collection<Type>, searchable?: string[]) {
    searchable = searchable || []

    return sjs.createIndex(items.all(), { searchable })
  }
}
