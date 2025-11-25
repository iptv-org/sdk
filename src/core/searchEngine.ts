import sjs from '@freearhey/search-js'

export class SearchEngine {
  static createIndex<Type>(items: Type[], searchable?: string[]) {
    searchable = searchable || []

    return sjs.createIndex(items, { searchable })
  }
}
