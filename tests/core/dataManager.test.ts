import { expect, test, beforeEach, beforeAll, afterAll, afterEach, describe } from 'vitest'
import { DataManager } from '../../src/core/dataManager'
import { Country } from '../../src/models'
import { http, HttpResponse } from 'msw'
import { pathToFileURL } from 'node:url'
import { setupServer } from 'msw/node'
import * as fs from 'fs-extra'
import * as path from 'path'

describe('DataManager', () => {
  let manager: DataManager

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

  const restHandlers = files.map((basename: string) => {
    const url = `https://iptv-org.github.io/api/${basename}.json`
    return http.get(url, () => {
      const json = JSON.parse(
        fs.readFileSync(pathToFileURL(`./tests/__data__/input/data/${basename}.json`), 'utf8')
      )
      return HttpResponse.json(json)
    })
  })

  const server = setupServer(...restHandlers)

  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

  afterAll(() => server.close())

  beforeEach(() => {
    fs.emptyDirSync('./tests/__data__/output')

    manager = new DataManager({ dataDir: './tests/__data__/output/temp' })
  })

  afterEach(() => server.resetHandlers())

  test('downloadToDisk()', async () => {
    await manager.downloadToDisk()

    files.forEach((basename: string) => {
      const filepath = `./tests/__data__/output/temp/${basename}.json`
      const content = getContent(filepath)
      expect(content.length > 0, filepath).toBe(true)
      expect(Array.isArray(content), filepath).toBe(true)
    })
  })

  test('loadFromDisk()', async () => {
    files.forEach((basename: string) => {
      const sourcePath = path.resolve(`./tests/__data__/input/data/${basename}.json`)
      const targetPath = sourcePath.replace(
        'tests/__data__/input/data/',
        'tests/__data__/output/temp/'
      )

      fs.copySync(sourcePath, targetPath)
    })

    await manager.loadFromDisk()

    manager.processData()

    const { countries } = manager.getProcessedData()

    expect(countries.count() > 0).toBe(true)
  })

  test('downloadToMemory()', async () => {
    await manager.downloadToMemory()

    const data = manager.getRawData() as Record<string, any[]>

    files.forEach((basename: string) => {
      const content = data[basename]
      expect(Array.isArray(content), basename).toBe(true)
      expect(content.length > 0, basename).toBe(true)
    })
  })

  test('loadFromMemory()', async () => {
    const data: Record<string, any[]> = {}
    files.forEach((basename: string) => {
      const filepath = `./tests/__data__/input/data/${basename}.json`
      data[basename] = getContent(filepath)
    })

    manager.setRawData(data)
    manager.loadFromMemory()

    const rawData = manager.getRawData() as Record<string, any[]>

    expect(rawData.countries.length > 0).toBe(true)
  })

  test('processData()', () => {
    const data: Record<string, any[]> = {}
    files.forEach((basename: string) => {
      const filepath = `./tests/__data__/input/data/${basename}.json`
      data[basename] = getContent(filepath)
    })

    manager.setRawData(data)

    manager.processData()

    const processedData = manager.getProcessedData()

    expect(processedData.countries.count() > 0).toBe(true)
    expect(processedData.countries.first()).instanceof(Country)
  })

  function getContent(filepath: string) {
    try {
      const rawData = fs.readFileSync(pathToFileURL(filepath), 'utf8')

      return JSON.parse(rawData)
    } catch (err) {
      console.error(err)
    }
  }
})
