import { Collection, Dictionary } from '@freearhey/core'
import { ChannelSearchableData } from '../types/channel'
import { ProcessedData } from '../types/dataProcessor'
import { SearchEngine } from './searchEngine'
import { DataManager } from './dataManager'
import { Channel } from '../models'
import { isNode } from '../utils'

export class Client {
  #dataManager: DataManager
  #channelsKeyById?: Dictionary<Channel>
  #searchIndex: any

  constructor(options?: { dataDir?: string }) {
    const dataDir = options ? options.dataDir : undefined

    this.#dataManager = new DataManager({ dataDir })
  }

  async load() {
    if (isNode()) {
      await this.#dataManager.downloadToDisk()
      await this.#dataManager.loadFromDisk()
    } else {
      await this.#dataManager.downloadToMemory()
      this.#dataManager.loadFromMemory()
    }

    this.#dataManager.processData()

    const processedData = this.getData()

    if (!processedData) return

    const channels = processedData.channels

    if (!channels) return

    this.#channelsKeyById = channels.keyBy((channel: Channel) => channel.id)

    const searchableData = channels.map((channel: Channel) => channel.getSearchable())

    this.#searchIndex = SearchEngine.createIndex<ChannelSearchableData>(searchableData)
  }

  getData(): ProcessedData {
    return this.#dataManager.getProcessedData()
  }

  searchChannels(query: string): Collection<Channel> {
    if (!this.#searchIndex || !this.#channelsKeyById) return new Collection<Channel>()

    const results = this.#searchIndex.search(query)

    const channels = new Collection<Channel>()
    results.forEach((data: ChannelSearchableData) => {
      if (!this.#channelsKeyById) return
      const channel = this.#channelsKeyById.get(data.id)
      if (channel) channels.add(channel)
    })

    return channels
  }
}
