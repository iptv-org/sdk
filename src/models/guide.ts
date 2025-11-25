import type { GuideData } from '../types'
import type { Channel } from './channel'
import type { Feed } from './feed'
import store from '../store'

export class Guide {
  /** Channel ID */
  channel: string | null
  /** Feed ID */
  feed: string | null
  /** Site domain name */
  site: string
  /** Unique channel ID used on the site */
  site_id: string
  /** Channel name used on the site */
  site_name: string
  /** Language of the guide ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code) */
  lang: string

  constructor(data: GuideData) {
    this.channel = data.channel
    this.feed = data.feed
    this.site = data.site
    this.site_id = data.site_id
    this.site_name = data.site_name
    this.lang = data.lang
  }

  /** @returns Channel associated with the guide */
  getChannel(): Channel | undefined {
    if (!this.channel) return undefined

    return store.channelsKeyById.get(this.channel)
  }

  /** @returns Feed associated with the guide */
  getFeed(): Feed | undefined {
    return store.feedsKeyByStreamId.get(this.getStreamId())
  }

  /** @returns Stream ID for the guide */
  getStreamId(): string {
    if (this.channel && this.feed) return `${this.channel}@${this.feed}`
    if (!this.channel) return ''
    if (!this.feed) {
      const channel = this.getChannel()
      if (!channel) return ''
      const mainFeed = channel.getMainFeed()
      if (!mainFeed) return ''

      return `${channel.id}@${mainFeed.id}`
    }

    return this.channel || ''
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): GuideData {
    return {
      channel: this.channel,
      feed: this.feed,
      site: this.site,
      site_id: this.site_id,
      site_name: this.site_name,
      lang: this.lang
    }
  }
}
