import type { ChannelData, ChannelSearchableData } from '../types/channel'
import type { BroadcastAreaLocation } from './broadcastAreaLocation'
import type { BlocklistRecord } from './blocklistRecord'
import { Collection } from '@freearhey/core'
import type { Category } from './category'
import type { Language } from './language'
import type { Timezone } from './timezone'
import type { Country } from './country'
import type { Stream } from './stream'
import type { Guide } from './guide'
import type { Feed } from './feed'
import type { Logo } from './logo'
import store from '../store'

export class Channel {
  /** Unique channel ID */
  id: string
  /** Full name of the channel */
  name: string
  /** List of alternative channel names */
  alt_names: string[]
  /** Name of the network operating the channel */
  network: string | null
  /** List of channel owners */
  owners: string[]
  /** Country code from which the broadcast is transmitted ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)) */
  country: string
  /** List of categories to which this channel belongs */
  categories: string[]
  /** Indicates whether the channel broadcasts adult content */
  is_nsfw: boolean
  /** Launch date of the channel (`YYYY-MM-DD`) */
  launched: string | null
  /** Date on which the channel closed (`YYYY-MM-DD`) */
  closed: string | null
  /** The ID of the channel that this channel was replaced by */
  replaced_by: string | null
  /** Official website URL */
  website: string | null

  constructor(data: ChannelData) {
    this.id = data.id
    this.name = data.name
    this.alt_names = data.alt_names
    this.network = data.network
    this.owners = data.owners
    this.country = data.country
    this.categories = data.categories
    this.is_nsfw = data.is_nsfw
    this.launched = data.launched
    this.closed = data.closed
    this.replaced_by = data.replaced_by
    this.website = data.website
  }

  /** @returns `true` if the channel is marked as "closed" */
  isClosed(): boolean {
    return !!this.closed || !!this.replaced_by
  }

  /** @returns `true` if the channel is on the blocklist */
  isBlocked(): boolean {
    return this.getBlocklistRecords().isNotEmpty()
  }

  /** @returns Country from which the channel is broadcasting */
  getCountry(): Country | undefined {
    return store.countriesKeyByCode.get(this.country)
  }

  /** @returns List of all categories of the channel */
  getCategories(): Collection<Category> {
    const categories = new Collection<Category>()
    this.categories.forEach((id: string) => {
      const category = store.categoriesKeyById.get(id)
      if (category) categories.add(category)
    })

    return categories
  }

  /** @returns List of all feeds of the channel */
  getFeeds(): Collection<Feed> {
    return new Collection(store.feedsGroupedByChannel.get(this.id))
  }

  /** @returns Main feed of the channel */
  getMainFeed(): Feed | undefined {
    return this.getFeeds().find((feed: Feed) => feed.is_main)
  }

  /** @returns List of broadcast area codes of the channel */
  getBroadcastAreaCodes(): Collection<string> {
    const broadcastAreaCodes = new Collection<string>()
    this.getFeeds().forEach((feed: Feed) => {
      broadcastAreaCodes.concat(feed.getBroadcastAreaCodes())
    })

    return broadcastAreaCodes.uniqBy((code: string) => code)
  }

  /** @returns List of broadcast area locations of the channel */
  getBroadcastAreaLocations(): Collection<BroadcastAreaLocation> {
    const broadcastAreaLocations = new Collection<BroadcastAreaLocation>()
    this.getFeeds().forEach((feed: Feed) => {
      broadcastAreaLocations.concat(feed.getBroadcastAreaLocations())
    })

    return broadcastAreaLocations.uniqBy((location: BroadcastAreaLocation) => location.code)
  }

  /** @returns List of all languages in which the channel is broadcast */
  getLanguages(): Collection<Language> {
    const languages = new Collection<Language>()
    this.getFeeds().forEach((feed: Feed) => {
      languages.concat(feed.getLanguages())
    })

    return languages.uniqBy((language: Language) => language.code)
  }

  /** @returns List of all timezones in which the channel is broadcast */
  getTimezones(): Collection<Timezone> {
    const timezones = new Collection<Timezone>()
    this.getFeeds().forEach((feed: Feed) => {
      timezones.concat(feed.getTimezones())
    })

    return timezones.uniqBy((timezone: Timezone) => timezone.id)
  }

  /** @returns List of all video formats in which the channel is broadcast */
  getVideoFormats(): Collection<string> {
    const formats = new Collection<string>()
    this.getFeeds().forEach((feed: Feed) => {
      formats.add(feed.format)
    })

    return formats.uniq()
  }

  /** @returns List of all available logos for the channel */
  getLogos(): Collection<Logo> {
    return new Collection(store.logosGroupedByChannel.get(this.id))
  }

  /** @returns List of all available streams for the channel */
  getStreams(): Collection<Stream> {
    return new Collection(store.streamsGroupedByChannel.get(this.id))
  }

  /** @returns List of all available guides for the channel */
  getGuides(): Collection<Guide> {
    return new Collection(store.guidesGroupedByChannel.get(this.id))
  }

  /** @returns List of records in the blocklist associated with the channel */
  getBlocklistRecords(): Collection<BlocklistRecord> {
    return new Collection<BlocklistRecord>(store.blocklistRecordsGroupedByChannel.get(this.id))
  }

  /** @returns Data used to search for the channel */
  getSearchable(): ChannelSearchableData {
    const languages = this.getLanguages()
    const languageCodes = languages
      .map<string>((language: Language) => language.code)
      .filter(Boolean)
      .uniq()
    const languageNames = languages
      .map<string>((language: Language) => language.name)
      .filter(Boolean)
      .uniq()

    const timezones = this.getTimezones()
    const timezoneIds = timezones
      .map<string>((timezone: Timezone) => timezone.id)
      .filter(Boolean)
      .uniq()

    const streams = this.getStreams()
    const streamUrls = streams
      .map<string>((stream: Stream) => stream.url)
      .filter(Boolean)
      .uniq()
    const streamTitles = streams
      .map<string>((stream: Stream) => stream.title)
      .filter(Boolean)
      .uniq()

    const feeds = this.getFeeds()
    const feedNames = feeds
      .map<string>((feed: Feed) => feed.name)
      .filter(Boolean)
      .uniq()
    const feedAltNames = new Collection<string>()
    this.getFeeds().forEach((feed: Feed) => {
      feedAltNames.concat(new Collection(feed.alt_names))
    })

    feedAltNames.uniq()

    const videoFormats = this.getVideoFormats()

    const logos = this.getLogos()
    const logoUrls = logos
      .map<string>((logo: Logo) => logo.url)
      .filter(Boolean)
      .uniq()

    const guides = this.getGuides()
    const guideSiteNames = guides
      .map<string>((guide: Guide) => guide.site_name)
      .filter(Boolean)
      .uniq()

    const streamIds = feeds
      .map<string>((feed: Feed) => feed.getStreamId())
      .filter(Boolean)
      .uniq()

    const broadcastAreaCodes = this.getBroadcastAreaCodes()
    const broadcastAreaNames = new Collection<string>()
    this.getBroadcastAreaLocations().forEach((location: BroadcastAreaLocation) => {
      const name = location.getName()
      if (name) broadcastAreaNames.add(name)
    })

    const country = this.getCountry()
    const countryName = country ? country.name : ''

    return {
      id: this.id,
      name: this.name,
      alt_names: this.alt_names,
      alt_name: this.alt_names,
      network: this.network || '',
      owner: this.owners,
      owners: this.owners,
      country: this.country,
      category: this.categories,
      categories: this.categories,
      launched: this.launched || '',
      closed: this.closed || '',
      replaced_by: this.replaced_by || '',
      website: this.website || '',
      is_nsfw: this.is_nsfw,
      is_closed: this.isClosed(),
      is_blocked: this.isBlocked(),
      feeds: feeds.count(),
      logos: logos.count(),
      streams: streams.count(),
      guides: guides.count(),
      language: languageCodes.all(),
      languages: languageCodes.all(),
      format: videoFormats.all(),
      formats: videoFormats.all(),
      timezone: timezoneIds.all(),
      timezones: timezoneIds.all(),
      broadcast_area: broadcastAreaCodes.all(),
      _languageNames: languageNames.all(),
      _countryName: countryName,
      _guideSiteNames: guideSiteNames.all(),
      _streamTitles: streamTitles.all(),
      _streamUrls: streamUrls.all(),
      _streamIds: streamIds.all(),
      _feedNames: feedNames.all(),
      _feedAltNames: feedAltNames.all(),
      _logoUrls: logoUrls.all(),
      _broadcastAreaNames: broadcastAreaNames.all()
    }
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): ChannelData {
    return {
      id: this.id,
      name: this.name,
      alt_names: this.alt_names,
      network: this.network,
      owners: this.owners,
      country: this.country,
      categories: this.categories,
      is_nsfw: this.is_nsfw,
      launched: this.launched,
      closed: this.closed,
      replaced_by: this.replaced_by,
      website: this.website
    }
  }
}
