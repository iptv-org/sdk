import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ProcessedData, RawData } from '../types/dataProcessor'
import { DataProcessor } from './dataProcessor'
import { Collection } from '@freearhey/core'
import doFetch from '@ntlab/sfetch'
import { isNode } from '../utils'
import {
  BlocklistRecord,
  Category,
  Channel,
  City,
  Country,
  Feed,
  Guide,
  Language,
  Logo,
  Region,
  Stream,
  Subdivision,
  Timezone
} from '../models'

const files = [
  'blocklist',
  'categories',
  'channels',
  'cities',
  'countries',
  'feeds',
  'guides',
  'languages',
  'logos',
  'regions',
  'streams',
  'subdivisions',
  'timezones'
]

export class DataManager {
  #rawData: RawData
  #processedData?: ProcessedData
  #client: AxiosInstance
  #baseUrl: string
  #dataDir: string
  #dataProcessor: DataProcessor

  constructor(config?: { dataDir?: string }) {
    const baseURL = 'https://iptv-org.github.io/api'

    this.#client = axios.create({ baseURL })
    this.#baseUrl = baseURL
    this.#dataDir = config && config.dataDir ? config.dataDir : './temp/data'
    this.#dataProcessor = new DataProcessor()
    this.#rawData = {}
  }

  async downloadToDisk(config?: { request?: AxiosRequestConfig }) {
    const params = config ? config.request : undefined
    const requests = files.map(basename => this.downloadFileToDisk(basename, params))

    await Promise.allSettled(requests).catch(console.error)
  }

  async downloadFileToDisk(basename: string, requestConfig?: AxiosRequestConfig) {
    try {
      if (!isNode()) throw new Error('Node.js is required to save files to the disk.')

      requestConfig = { ...requestConfig, ...{ responseType: 'stream' } }

      const fs = await import('node:fs')
      const path = await import('node:path')

      const filename = `${basename}.json`
      const targetPath = path.resolve(this.#dataDir, filename)
      const targetDir = path.dirname(targetPath)

      const response = await this.#client.get(filename, requestConfig)

      await fs.promises.mkdir(targetDir, { recursive: true })
      const writer = fs.createWriteStream(targetPath)

      response.data.pipe(writer)

      return new Promise((resolve, reject) => {
        writer.on('finish', () => {
          resolve(true)
        })

        writer.on('error', err => {
          reject(err)
        })
      })
    } catch (error) {
      throw error
    }
  }

  async loadFromDisk() {
    for (const basename of files) {
      this.#rawData[basename] = await this.loadFileFromDisk(basename)
    }
  }

  async loadFileFromDisk(basename: string): Promise<object[]> {
    if (!isNode()) throw new Error('Node.js is required to load files from the disk.')

    const fs = await import('node:fs')
    const path = await import('node:path')

    try {
      const filepath = path.resolve(this.#dataDir, `${basename}.json`)
      const content = fs.readFileSync(filepath, 'utf8')

      return JSON.parse(content)
    } catch (err) {
      console.error(err)

      return []
    }
  }

  async downloadToMemory(config?: { request?: AxiosRequestConfig }) {
    const params = config ? config.request : undefined
    const queue = files.map(basename => {
      return {
        basename,
        url: `${this.#baseUrl}/${basename}.json`,
        params
      }
    })

    await doFetch(queue, (req, data) => {
      this.#rawData[req.basename] = data
    }).catch(console.error)
  }

  loadFromMemory() {
    // placeholder
  }

  processData() {
    this.#processedData = this.#dataProcessor.process(this.#rawData)
  }

  getProcessedData(): ProcessedData {
    return (
      this.#processedData || {
        blocklist: new Collection<BlocklistRecord>(),
        categories: new Collection<Category>(),
        channels: new Collection<Channel>(),
        cities: new Collection<City>(),
        countries: new Collection<Country>(),
        feeds: new Collection<Feed>(),
        guides: new Collection<Guide>(),
        languages: new Collection<Language>(),
        logos: new Collection<Logo>(),
        regions: new Collection<Region>(),
        streams: new Collection<Stream>(),
        subdivisions: new Collection<Subdivision>(),
        timezones: new Collection<Timezone>()
      }
    )
  }

  getRawData(): RawData {
    return this.#rawData
  }

  setRawData(rawData: RawData) {
    this.#rawData = rawData
  }
}
