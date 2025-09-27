import { Collection } from '@freearhey/core'
import { StreamData } from '../types'
import { Category } from './category'
import { Language } from './language'
import { Channel } from './channel'
import { Feed } from './feed'
import { Logo } from './logo'
import store from '../store'

export class Stream {
  /** Channel ID */
  channel: string | null
  /** Feed ID */
  feed: string | null
  /** Stream title */
  title: string
  /** Stream URL */
  url: string
  /** The [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) request header for the stream */
  referrer: string | null
  /** The [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) request header for the stream */
  user_agent: string | null
  /** Maximum stream quality */
  quality: string | null

  constructor(data: StreamData) {
    this.channel = data.channel
    this.feed = data.feed
    this.title = data.title
    this.url = data.url
    this.referrer = data.referrer
    this.user_agent = data.user_agent
    this.quality = data.quality
  }

  /** @returns Stream ID */
  getId(): string {
    if (!this.channel) return ''
    if (this.feed) return `${this.channel}@${this.feed}`

    const channel = this.getChannel()
    if (!channel) return ''

    const mainFeed = channel.getMainFeed()
    if (!mainFeed) return ''

    return `${channel.id}@${mainFeed.id}`
  }

  /** @returns Channel associated with the stream */
  getChannel(): Channel | undefined {
    if (!this.channel) return undefined

    return store.channelsKeyById.get(this.channel)
  }

  /** @returns Feed associated with the stream */
  getFeed(): Feed | undefined {
    if (this.channel && this.feed)
      return store.feedsKeyByStreamId.get(`${this.channel}@${this.feed}`)
    if (!this.channel) return
    if (!this.feed) {
      const channelFeeds = new Collection<Feed>(store.feedsGroupedByChannel.get(this.channel))

      return channelFeeds.find((feed: Feed) => feed.is_main)
    }

    return
  }

  /** @returns List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`, `ct/<city_code>`) */
  getBroadcastAreaCodes(): Collection<string> {
    const feed = this.getFeed()
    if (feed) return new Collection<string>(feed.broadcast_area)

    return new Collection<string>()
  }

  /** @returns List of all categories of the stream */
  getCategories(): Collection<Category> {
    const channel = this.getChannel()
    if (channel) return channel.getCategories()

    return new Collection<Category>()
  }

  /** @returns List of all languages in which the stream is broadcast */
  getLanguages(): Collection<Language> {
    const feed = this.getFeed()
    if (feed) return feed.getLanguages()

    return new Collection<Language>()
  }

  /** @returns List of logos for the stream */
  getLogos(): Collection<Logo> {
    const channel = this.getChannel()
    if (!channel) return new Collection<Logo>()

    const channelLogos = channel.getLogos()
    if (!this.feed) return channelLogos

    return channelLogos.filter((logo: Logo) => !logo.feed || logo.feed === this.feed)
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): StreamData {
    return {
      channel: this.channel,
      feed: this.feed,
      title: this.title,
      url: this.url,
      referrer: this.referrer,
      user_agent: this.user_agent,
      quality: this.quality
    }
  }
}
