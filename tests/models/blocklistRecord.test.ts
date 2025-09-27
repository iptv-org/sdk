import { BlocklistRecord, Channel } from '../../src/models'
import { beforeAll, describe, expect, test } from 'vitest'
import { DataManager } from '../../src/core/dataManager'

let blocklistRecord: BlocklistRecord

describe('BlocklistRecord', () => {
  beforeAll(async () => {
    const dataManager = new DataManager({ dataDir: './tests/__data__/input/data' })
    await dataManager.loadFromDisk()
    dataManager.processData()

    const data = dataManager.getProcessedData()
    blocklistRecord = data.blocklist.first()
  })

  test('channel', () => {
    expect(blocklistRecord.channel).toBe('AndorraTV.ad')
  })

  test('reason', () => {
    expect(blocklistRecord.reason).toBe('dmca')
  })

  test('ref', () => {
    expect(blocklistRecord.ref).toBe('https://github.com/iptv-org/iptv/issues/16839')
  })

  test('getChannel()', () => {
    expect(blocklistRecord.getChannel()).instanceOf(Channel)
  })

  test('toObject()', () => {
    expect(blocklistRecord.toObject()).toMatchObject({
      channel: 'AndorraTV.ad',
      reason: 'dmca',
      ref: 'https://github.com/iptv-org/iptv/issues/16839'
    })
  })
})
