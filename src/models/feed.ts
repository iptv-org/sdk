import { BroadcastAreaLocation } from './broadcastAreaLocation'
import { BroadcastArea } from './broadcastArea'
import { Collection } from '@freearhey/core'
import { Timezone } from './timezone'
import { Language } from './language'
import { FeedData } from '../types'
import { Channel } from './channel'
import { Stream } from './stream'
import { Guide } from './guide'
import { Logo } from './logo'
import store from '../store'

export class Feed {
  /** Channel ID */
  channel: string
  /** Unique feed ID */
  id: string
  /** Name of the feed */
  name: string
  /** List of alternative feed names */
  alt_names: string[]
  /** Indicates if this feed is the main for the channel */
  is_main: boolean
  /** List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`, `ct/<city_code>`) */
  broadcast_area: string[]
  /** List of language codes in which the feed is broadcast */
  languages: string[]
  /** List of timezone IDs in which the feed is broadcast */
  timezones: string[]
  /** Video format of the feed */
  format: string

  constructor(data: FeedData) {
    this.channel = data.channel
    this.id = data.id
    this.name = data.name
    this.alt_names = data.alt_names
    this.is_main = data.is_main
    this.broadcast_area = data.broadcast_area
    this.languages = data.languages
    this.timezones = data.timezones
    this.format = data.format
  }

  /** @returns Stream ID for the feed */
  getStreamId(): string {
    return `${this.channel}@${this.id}`
  }

  /** @returns Full name of the feed */
  getFullName(): string {
    const channel = this.getChannel()
    if (!channel) return ''

    return `${channel.name} ${this.name}`
  }

  /** @returns Channel associated with the feed */
  getChannel(): Channel | undefined {
    return store.channelsKeyById.get(this.channel)
  }

  /** @returns List of streams for the feed */
  getStreams(): Collection<Stream> {
    const streams = new Collection<Stream>(store.streamsGroupedById.get(this.getStreamId()))

    if (this.is_main) {
      const otherStreams = new Collection<Stream>(store.streamsGroupedById.get(this.channel))
      streams.concat(otherStreams)
    }

    return streams
  }

  /** @returns List of guides for the feed */
  getGuides(): Collection<Guide> {
    const guides = new Collection<Guide>(store.guidesGroupedByStreamId.get(this.getStreamId()))

    if (this.is_main) {
      const otherGuides = new Collection<Guide>(store.guidesGroupedByStreamId.get(this.channel))
      guides.concat(otherGuides)
    }

    return guides
  }

  /** @returns List of languages in which the feed is broadcast */
  getLanguages(): Collection<Language> {
    const languages = new Collection<Language>()
    this.languages.forEach((code: string) => {
      const language = store.languagesKeyByCode.get(code)
      if (language) languages.add(language)
    })

    return languages
  }

  /** @returns List of timezones in which the feed is broadcast */
  getTimezones(): Collection<Timezone> {
    const timezones = new Collection<Timezone>()

    this.timezones.forEach((id: string) => {
      const timezone = store.timezonesKeyById.get(id)
      if (timezone) timezones.add(timezone)
    })

    return timezones
  }

  /** @returns Broadcast area of the feed */
  getBroadcastArea(): BroadcastArea {
    return new BroadcastArea({ codes: this.broadcast_area })
  }

  /** @returns List of broadcast area codes of the feed */
  getBroadcastAreaCodes(): Collection<string> {
    return new Collection<string>(this.getBroadcastArea().codes)
  }

  /** @returns List of broadcast area locations of the feed */
  getBroadcastAreaLocations(): Collection<BroadcastAreaLocation> {
    return this.getBroadcastArea().getLocations()
  }

  /** @returns List of logos for the feed */
  getLogos(): Collection<Logo> {
    return new Collection<Logo>(store.logosGroupedByStreamId.get(this.getStreamId()))
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): FeedData {
    return {
      channel: this.channel,
      id: this.id,
      name: this.name,
      alt_names: this.alt_names,
      is_main: this.is_main,
      broadcast_area: this.broadcast_area,
      languages: this.languages,
      timezones: this.timezones,
      format: this.format
    }
  }
}
