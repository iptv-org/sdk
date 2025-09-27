import { BlocklistRecordData } from '../types'
import { Channel } from './channel'
import store from '../store'

export class BlocklistRecord {
  /** Channel ID */
  channel: string
  /** Reason for blocking (`dmca` or `nsfw`) */
  reason: string
  /** Link to removal request or DMCA takedown notice */
  ref: string

  constructor(data: BlocklistRecordData) {
    this.channel = data.channel
    this.reason = data.reason
    this.ref = data.ref
  }

  /** @returns Channel associated with this record in the blocklist */
  getChannel(): Channel | undefined {
    return store.channelsKeyById.get(this.channel)
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): BlocklistRecordData {
    return {
      channel: this.channel,
      reason: this.reason,
      ref: this.ref
    }
  }
}
