import { expect, test, it, beforeEach, beforeAll, afterAll, afterEach, describe } from 'vitest'
import { Client } from '../../src/core/client'
import { http, HttpResponse } from 'msw'
import { pathToFileURL } from 'node:url'
import { setupServer } from 'msw/node'
import * as fs from 'fs-extra'
import * as path from 'path'

let client: Client

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

beforeAll(async () => {
  server.listen({ onUnhandledRequest: 'error' })

  fs.emptyDirSync('./tests/__data__/output')

  files.forEach((basename: string) => {
    const filepath = `./tests/__data__/input/data/${basename}.json`
    const sourcePath = path.resolve(filepath)
    const targetPath = sourcePath.replace(
      'tests/__data__/input/data/',
      'tests/__data__/output/temp/'
    )

    fs.copySync(sourcePath, targetPath)
  })

  client = new Client({ dataDir: './tests/__data__/output/temp' })

  await client.load()
})

afterAll(() => server.close())

beforeEach(() => {})

afterEach(() => server.resetHandlers())

describe('Client', () => {
  test('getData()', () => {
    const { countries } = client.getData()

    expect(countries.count() > 0).toBe(true)
  })

  describe('searchChannels()', () => {
    it('returns empty list if there is no such channel', () => {
      let results = client.searchChannels('lorem')

      expect(results.count()).toBe(0)
    })

    it('can find channel by name', () => {
      let results = client.searchChannels('name:Everyday')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'EverydayHeroes.us'
      })
    })

    it('can find channels by multiple words', () => {
      let results = client.searchChannels('Sports Fox')

      expect(results.count()).toBe(2)
      expect(results.first()).toMatchObject({
        id: 'FoxSports1.us'
      })
      expect(results.all()[1]).toMatchObject({
        id: 'FoxSports2.us'
      })
    })

    it('can search for one of two words', () => {
      let results = client.searchChannels('LDPR,Libyas')

      expect(results.count()).toBe(2)
      expect(results.first()).toMatchObject({
        id: 'LDPRTV.ru'
      })
      expect(results.all()[1]).toMatchObject({
        id: 'LibyasChannel.ly'
      })
    })

    it('can search for exact word matches', () => {
      let results = client.searchChannels('"Libyas Channel"')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'LibyasChannel.ly'
      })
    })

    it('can find channels by id', () => {
      let results = client.searchChannels('id:MeteoMedia.ca')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'MeteoMedia.ca'
      })
    })

    it('can find channels by feed name', () => {
      let results = client.searchChannels('Web')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels by alternative names', () => {
      let results = client.searchChannels('alt_names:ATV')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels by network', () => {
      let results = client.searchChannels('network:Enlave')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels without the owner', () => {
      let results = client.searchChannels('owners:/^$/')

      expect(results.count()).toBe(23)
      expect(results.first()).toMatchObject({
        id: 'BBCNews.uk'
      })
    })

    it('can find channels by country code', () => {
      let results = client.searchChannels('country:HU')

      expect(results.count()).toBe(2)
      expect(results.first()).toMatchObject({
        id: 'Match4.hu'
      })
    })

    it('can find channels that have the same category', () => {
      let results = client.searchChannels('categories:animation')

      expect(results.count()).toBe(2)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels with website', () => {
      let results = client.searchChannels('website:/./')

      expect(results.count()).toBe(20)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels marked as NSFW', () => {
      let results = client.searchChannels('is_nsfw:true')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'VisitXTV.nl'
      })
    })

    it('can find closed channels', () => {
      let results = client.searchChannels('is_closed:true')

      expect(results.count()).toBe(2)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find blocked channels', () => {
      let results = client.searchChannels('is_blocked:true')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels by query in lower case', () => {
      let results = client.searchChannels('sports')

      expect(results.count()).toBe(3)
      expect(results.first()).toMatchObject({
        id: 'FoxSports1.us'
      })
      expect(results.all()[1]).toMatchObject({
        id: 'FoxSports2.us'
      })
      expect(results.all()[2]).toMatchObject({
        id: 'Match4.hu'
      })
    })

    it('can find channel by alternative name after another query', () => {
      client.searchChannels('atv')
      let results = client.searchChannels('alt_names:atv')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels that have streams', () => {
      let results = client.searchChannels('streams:>0')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels that have guides', () => {
      let results = client.searchChannels('guides:>0')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channel by country name', () => {
      let results = client.searchChannels('"hungary"')

      expect(results.count()).toBe(2)
      expect(results.first()).toMatchObject({
        id: 'Match4.hu'
      })
    })

    it('can find channel by display name from the guides', () => {
      let results = client.searchChannels('"9 канал"')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channel by stream url', () => {
      let results = client.searchChannels(
        'https://live.relentlessinnovations.net:1936/imantv/imantv/playlist.m3u8'
      )

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels by broadcast area code', () => {
      let results = client.searchChannels('broadcast_area:ct/ADCAN')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channel by broadcast area name', () => {
      let results = client.searchChannels('"Central Asia"')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'ElTR.kg'
      })
    })

    it('can find channels by exact language code', () => {
      let results = client.searchChannels('language:cat')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels by language name', () => {
      let results = client.searchChannels('catalan')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels by video format', () => {
      let results = client.searchChannels('format:1080i')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'France3.fr'
      })
    })

    it('can find channels by timezone id', () => {
      let results = client.searchChannels('timezone:Asia/Bishkek')

      expect(results.count()).toBe(2)
      expect(results.first()).toMatchObject({
        id: 'ElTR.kg'
      })
    })

    it('can find channels by stream id', () => {
      let results = client.searchChannels('AndorraTV.ad@SD')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels by logo url', () => {
      let results = client.searchChannels('https://i.imgur.com/AnhTn8i.png')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channels that do not have a logo', () => {
      let results = client.searchChannels('logos:0')

      expect(results.count()).toBe(33)
      expect(results.first()).toMatchObject({
        id: 'Eve.us'
      })
    })

    it('can find channels that have more than 2 logos', () => {
      let results = client.searchChannels('logos:>2')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channel by feed alternative name', () => {
      let results = client.searchChannels('Web')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channel by stream title', () => {
      let results = client.searchChannels('Iman TV')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })

    it('can find channel by city name', () => {
      let results = client.searchChannels('Canillo')

      expect(results.count()).toBe(1)
      expect(results.first()).toMatchObject({
        id: 'AndorraTV.ad'
      })
    })
  })
})
