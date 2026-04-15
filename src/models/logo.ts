import type { LogoData } from '../types'
import type { Channel } from './channel'
import type { Feed } from './feed'
import store from '../store'

export class Logo {
  /** Channel ID */
  channel: string
  /** Feed ID */
  feed: string | null
  /** Indicates whether the broadcaster is currently using this logo **/
  in_use: boolean
  /** List of keywords describing this version of the logo */
  tags: string[]
  /** The width of the image in pixels */
  width: number
  /** The height of the image in pixels */
  height: number
  /** Image format (one of: `PNG`, `JPEG`, `SVG`, `GIF`, `WebP`, `AVIF`, `APNG`) */
  format: string | null
  /** Logo URL */
  url: string

  constructor(data: LogoData) {
    this.channel = data.channel || ''
    this.feed = data.feed || null
    this.in_use = data.in_use === false ? false : true
    this.tags = data.tags || []
    this.width = data.width || 0
    this.height = data.height || 0
    this.format = data.format || null
    this.url = data.url || ''
  }

  /** @returns Channel associated with the logo */
  getChannel(): Channel | undefined {
    return store.channelsKeyById.get(this.channel)
  }

  /** @returns Feed associated with the logo */
  getFeed(): Feed | undefined {
    return store.feedsKeyByStreamId.get(this.getStreamId())
  }

  /** @returns Stream ID for the logo */
  getStreamId(): string {
    if (!this.feed) return this.channel

    return `${this.channel}@${this.feed}`
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): LogoData {
    return {
      channel: this.channel,
      feed: this.feed,
      in_use: this.in_use,
      tags: this.tags,
      width: this.width,
      height: this.height,
      format: this.format,
      url: this.url
    }
  }
}
