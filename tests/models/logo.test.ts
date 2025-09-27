import { beforeAll, describe, expect, test } from 'vitest'
import { Channel, Feed, Logo } from '../../src/models'
import { DataManager } from '../../src/core/dataManager'

let logo: Logo

describe('Logo', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    logo = data.logos.first()
  })

  test('channel', () => {
    expect(logo.channel).toBe('MeteoMedia.ca')
  })

  test('feed', () => {
    expect(logo.feed).toBe(null)
  })

  test('tags', () => {
    expect(logo.tags.length).toBe(1)
    expect(logo.tags[0]).toBe('horizontal')
  })

  test('width', () => {
    expect(logo.width).toBe(512)
  })

  test('height', () => {
    expect(logo.height).toBe(512)
  })

  test('format', () => {
    expect(logo.format).toBe('PNG')
  })

  test('url', () => {
    expect(logo.url).toBe('https://s1.twnmm.com/images/en_ca/mobile/logos/twn-mobile-logo.png')
  })

  test('getStreamId()', () => {
    expect(logo.getStreamId()).toBe('MeteoMedia.ca')
  })

  test('getChannel()', () => {
    expect(logo.getChannel()).instanceOf(Channel)
  })

  test('getFeed()', () => {
    expect(logo.getFeed() === undefined).toBe(true)
  })

  test('toObject()', () => {
    expect(logo.toObject()).toMatchObject({
      channel: 'MeteoMedia.ca',
      feed: null,
      tags: ['horizontal'],
      width: 512,
      height: 512,
      format: 'PNG',
      url: 'https://s1.twnmm.com/images/en_ca/mobile/logos/twn-mobile-logo.png'
    })
  })
})
