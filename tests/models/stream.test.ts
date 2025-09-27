import { Category, Channel, Feed, Language, Logo, Stream } from '../../src/models'
import { beforeAll, describe, expect, test } from 'vitest'
import { DataManager } from '../../src/core/dataManager'

let streams: Stream[]

describe('Stream', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    streams = data.streams.all()
  })

  test('title', () => {
    expect(streams[0].title).toBe('Iman TV')
    expect(streams[1].title).toBe('ATV HD')
  })

  test('url', () => {
    expect(streams[0].url).toBe(
      'https://live.relentlessinnovations.net:1936/imantv/imantv/playlist.m3u8'
    )
    expect(streams[1].url).toBe('https://iptv-all.lanesh4d0w.repl.co/andorra/atv_hd')
  })

  test('quality', () => {
    expect(streams[0].quality).toBe('480p')
    expect(streams[1].quality).toBe('1080i')
  })

  test('channel', () => {
    expect(streams[0].channel).toBe('AndorraTV.ad')
    expect(streams[1].channel).toBe('AndorraTV.ad')
  })

  test('feed', () => {
    expect(streams[0].feed).toBe(null)
    expect(streams[1].feed).toBe('HD')
  })

  test('getId()', () => {
    expect(streams[0].getId()).toBe('AndorraTV.ad@SD')
    expect(streams[1].getId()).toBe('AndorraTV.ad@HD')
  })

  test('getChannel()', () => {
    expect(streams[0].getChannel()).instanceOf(Channel)
    expect(streams[1].getChannel()).instanceOf(Channel)
  })

  test('getFeed()', () => {
    expect(streams[0].getFeed()).instanceOf(Feed)
    expect(streams[1].getFeed() === undefined).toBe(true)
  })

  test('getCategories()', () => {
    expect(streams[0].getCategories().count()).toBe(2)
    expect(streams[0].getCategories().first()).instanceOf(Category)
    expect(streams[1].getCategories().count()).toBe(2)
    expect(streams[1].getCategories().first()).instanceOf(Category)
  })

  test('getLanguages()', () => {
    expect(streams[0].getLanguages().count()).toBe(1)
    expect(streams[0].getLanguages().first()).instanceOf(Language)
    expect(streams[1].getLanguages().count()).toBe(0)
  })

  test('getBroadcastAreaCodes()', () => {
    expect(streams[0].getBroadcastAreaCodes().count()).toBe(1)
    expect(streams[0].getBroadcastAreaCodes().first()).toBe('ct/ADCAN')
    expect(streams[1].getBroadcastAreaCodes().count()).toBe(0)
  })

  test('getLogos()', () => {
    expect(streams[0].getLogos().count()).toBe(3)
    expect(streams[0].getLogos().first()).instanceOf(Logo)
    expect(streams[0].getLogos().first().url).toBe('https://i.imgur.com/BnhTn8i.png')
    expect(streams[1].getLogos().count()).toBe(2)
  })

  test('toObject()', () => {
    expect(streams[0].toObject()).toMatchObject({
      channel: 'AndorraTV.ad',
      feed: null,
      title: 'Iman TV',
      url: 'https://live.relentlessinnovations.net:1936/imantv/imantv/playlist.m3u8',
      referrer: null,
      user_agent: null,
      quality: '480p'
    })
    expect(streams[1].toObject()).toMatchObject({
      channel: 'AndorraTV.ad',
      feed: 'HD',
      title: 'ATV HD',
      url: 'https://iptv-all.lanesh4d0w.repl.co/andorra/atv_hd',
      referrer: 'https://origin.xyz',
      user_agent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
      quality: '1080i'
    })
  })
})
