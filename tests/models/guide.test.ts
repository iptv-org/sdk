import { beforeAll, describe, expect, test } from 'vitest'
import { Channel, Feed, Guide } from '../../src/models'
import { DataManager } from '../../src/core/dataManager'

let guide: Guide

describe('Guide', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    guide = data.guides.first()
  })

  test('channel', () => {
    expect(guide.channel).toBe('AndorraTV.ad')
  })

  test('feed', () => {
    expect(guide.feed).toBe(null)
  })

  test('site', () => {
    expect(guide.site).toBe('9tv.co.il')
  })

  test('site_id', () => {
    expect(guide.site_id).toBe('#')
  })

  test('site_name', () => {
    expect(guide.site_name).toBe('9 канал')
  })

  test('lang', () => {
    expect(guide.lang).toBe('ru')
  })

  test('getChannel()', () => {
    expect(guide.getChannel()).instanceOf(Channel)
  })

  test('getFeed()', () => {
    expect(guide.getFeed()).instanceof(Feed)
  })

  test('getStreamId()', () => {
    expect(guide.getStreamId()).toBe('AndorraTV.ad@SD')
  })

  test('toObject()', () => {
    expect(guide.toObject()).toMatchObject({
      channel: 'AndorraTV.ad',
      feed: null,
      site: '9tv.co.il',
      site_id: '#',
      site_name: '9 канал',
      lang: 'ru'
    })
  })
})
