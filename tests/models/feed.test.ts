import { beforeAll, describe, expect, test } from 'vitest'
import { DataManager } from '../../src/core/dataManager'
import {
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
} from '../../src/models'
import { BroadcastAreaLocation } from '../../src/models/broadcastAreaLocation'

let feed: Feed

describe('Feed', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    feed = data.feeds.first()
  })

  test('channel', () => {
    expect(feed.channel).toBe('AndorraTV.ad')
  })

  test('id', () => {
    expect(feed.id).toBe('SD')
  })

  test('name', () => {
    expect(feed.name).toBe('SD')
  })

  test('alt_names', () => {
    expect(feed.alt_names.length).toBe(1)
    expect(feed.alt_names[0]).toBe('Web')
  })

  test('is_main', () => {
    expect(feed.is_main).toBe(true)
  })

  test('broadcast_area', () => {
    expect(feed.broadcast_area.length).toBe(1)
    expect(feed.broadcast_area[0]).toBe('ct/ADCAN')
  })

  test('languages', () => {
    expect(feed.languages.length).toBe(1)
    expect(feed.languages[0]).toBe('cat')
  })

  test('getChannel()', () => {
    expect(feed.getChannel()).instanceOf(Channel)
  })

  test('getLanguages()', () => {
    expect(feed.getLanguages().count()).toBe(1)
    expect(feed.getLanguages().first()).instanceOf(Language)
  })

  test('getTimezones()', () => {
    expect(feed.getTimezones().count()).toBe(1)
    expect(feed.getTimezones().first()).instanceOf(Timezone)
  })

  test('getGuides()', () => {
    expect(feed.getGuides().count()).toBe(1)
    expect(feed.getGuides().first()).instanceOf(Guide)
  })

  test('getStreams()', () => {
    expect(feed.getStreams().count()).toBe(1)
    expect(feed.getStreams().first()).instanceOf(Stream)
  })

  test('getLogos()', () => {
    expect(feed.getLogos().count()).toBe(1)
    expect(feed.getLogos().first()).instanceOf(Logo)
    expect(feed.getLogos().first().url).toBe('https://i.imgur.com/BnhTn8i.png')
  })

  test('getStreamId()', () => {
    expect(feed.getStreamId()).toBe('AndorraTV.ad@SD')
  })

  test('getFullName()', () => {
    expect(feed.getFullName()).toBe('Andorra TV SD')
  })

  test('toObject()', () => {
    expect(feed.toObject()).toMatchObject({
      channel: 'AndorraTV.ad',
      id: 'SD',
      name: 'SD',
      alt_names: ['Web'],
      is_main: true,
      broadcast_area: ['ct/ADCAN'],
      timezones: ['America/Port_of_Spain'],
      languages: ['cat'],
      format: '576i'
    })
  })
})
