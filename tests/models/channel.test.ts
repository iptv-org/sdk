import { beforeAll, describe, expect, test } from 'vitest'
import { DataManager } from '../../src/core/dataManager'
import {
  BlocklistRecord,
  Category,
  Channel,
  Country,
  Feed,
  Guide,
  Language,
  Logo,
  Stream,
  Timezone
} from '../../src/models'
import { BroadcastAreaLocation } from '../../src/models/broadcastAreaLocation'

let channel: Channel

describe('Channel', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    channel = data.channels.first()
  })

  test('id', () => {
    expect(channel.id).toBe('AndorraTV.ad')
  })

  test('name', () => {
    expect(channel.name).toBe('Andorra TV')
  })

  test('alt_names', () => {
    expect(channel.alt_names.length).toBe(1)
    expect(channel.alt_names[0]).toBe('ATV')
  })

  test('network', () => {
    expect(channel.network).toBe('Enlave')
  })

  test('owners', () => {
    expect(channel.owners.length).toBe(1)
    expect(channel.owners[0]).toBe('Disney')
  })

  test('country', () => {
    expect(channel.country).toBe('AD')
  })

  test('is_nsfw', () => {
    expect(channel.is_nsfw).toBe(false)
  })

  test('launched', () => {
    expect(channel.launched).toBe('2022-09-01')
  })

  test('closed', () => {
    expect(channel.closed).toBe('2025-09-01')
  })

  test('replaced_by', () => {
    expect(channel.replaced_by).toBe('BBCNews.uk')
  })

  test('website', () => {
    expect(channel.website).toBe('https://www.andorradifusio.ad/')
  })

  test('categories', () => {
    expect(channel.categories.length).toBe(2)
    expect(channel.categories[0]).toBe('animation')
  })

  test('isClosed()', () => {
    expect(channel.isClosed()).toBe(true)
  })

  test('isBlocked()', () => {
    expect(channel.isBlocked()).toBe(true)
  })

  test('getCountry()', () => {
    expect(channel.getCountry()).instanceOf(Country)
  })

  test('getLogos()', () => {
    expect(channel.getLogos().count()).toBe(3)
    expect(channel.getLogos().first()).instanceOf(Logo)
  })

  test('getFeeds()', () => {
    expect(channel.getFeeds().count()).toBe(1)
    expect(channel.getFeeds().first()).instanceOf(Feed)
  })

  test('getStreams()', () => {
    expect(channel.getStreams().count()).toBe(2)
    expect(channel.getStreams().first()).instanceOf(Stream)
  })

  test('getCategories()', () => {
    expect(channel.getCategories().count()).toBe(2)
    expect(channel.getCategories().first()).instanceOf(Category)
  })

  test('getGuides()', () => {
    expect(channel.getGuides().count()).toBe(1)
    expect(channel.getGuides().first()).instanceOf(Guide)
  })

  test('getTimezones()', () => {
    expect(channel.getTimezones().count()).toBe(1)
    expect(channel.getTimezones().first()).instanceOf(Timezone)
  })

  test('getLanguages()', () => {
    expect(channel.getLanguages().count()).toBe(1)
    expect(channel.getLanguages().first()).instanceOf(Language)
  })

  test('getVideoFormats()', () => {
    expect(channel.getVideoFormats().count()).toBe(1)
    expect(channel.getVideoFormats().first()).toBe('576i')
  })

  test('getLogos()', () => {
    expect(channel.getLogos().count()).toBe(3)
    expect(channel.getLogos().first()).instanceOf(Logo)
  })

  test('getBlocklistRecords()', () => {
    expect(channel.getBlocklistRecords().count()).toBe(1)
    expect(channel.getBlocklistRecords().first()).instanceOf(BlocklistRecord)
  })

  test('getBroadcastAreaLocations()', () => {
    expect(channel.getBroadcastAreaLocations().count()).toBe(1)
    expect(channel.getBroadcastAreaLocations().first()).instanceOf(BroadcastAreaLocation)
  })

  test('getSearchable()', () => {
    expect(channel.getSearchable()).toMatchObject({
      id: 'AndorraTV.ad',
      name: 'Andorra TV',
      alt_names: ['ATV'],
      alt_name: ['ATV'],
      network: 'Enlave',
      owner: ['Disney'],
      owners: ['Disney'],
      country: 'AD',
      category: ['animation', 'kids'],
      categories: ['animation', 'kids'],
      launched: '2022-09-01',
      closed: '2025-09-01',
      replaced_by: 'BBCNews.uk',
      website: 'https://www.andorradifusio.ad/',
      is_nsfw: false,
      is_closed: true,
      is_blocked: true,
      feeds: 1,
      logos: 3,
      streams: 2,
      guides: 1,
      language: ['cat'],
      languages: ['cat'],
      broadcast_area: ['ct/ADCAN'],
      format: ['576i'],
      formats: ['576i'],
      timezone: ['America/Port_of_Spain'],
      timezones: ['America/Port_of_Spain'],
      _languageNames: ['Catalan'],
      _broadcastAreaNames: ['Canillo'],
      _countryName: 'Andorra',
      _guideSiteNames: ['9 канал'],
      _streamTitles: ['Iman TV', 'ATV HD'],
      _streamUrls: [
        'https://live.relentlessinnovations.net:1936/imantv/imantv/playlist.m3u8',
        'https://iptv-all.lanesh4d0w.repl.co/andorra/atv_hd'
      ],
      _feedNames: ['SD'],
      _feedAltNames: ['Web'],
      _streamIds: ['AndorraTV.ad@SD'],
      _logoUrls: [
        'https://i.imgur.com/BnhTn8i.png',
        'https://i.imgur.com/AnhTn8i.png',
        'https://i.imgur.com/CnhTn8i.png'
      ]
    })
  })

  test('toObject()', () => {
    expect(channel.toObject()).toMatchObject({
      id: 'AndorraTV.ad',
      name: 'Andorra TV',
      alt_names: ['ATV'],
      network: 'Enlave',
      owners: ['Disney'],
      country: 'AD',
      categories: ['animation', 'kids'],
      is_nsfw: false,
      launched: '2022-09-01',
      closed: '2025-09-01',
      replaced_by: 'BBCNews.uk',
      website: 'https://www.andorradifusio.ad/'
    })
  })
})
