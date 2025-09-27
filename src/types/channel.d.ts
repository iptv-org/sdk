export type ChannelSearchableData = {
  id: string
  name: string
  alt_names: string[]
  alt_name: string[]
  network: string
  owner: string[]
  owners: string[]
  country: string
  category: string[]
  categories: string[]
  launched: string
  closed: string
  replaced_by: string
  website: string
  is_nsfw: boolean
  is_closed: boolean
  is_blocked: boolean
  languages: string[]
  language: string[]
  broadcast_area: string[]
  streams: number
  guides: number
  feeds: number
  logos: number
  format: string[]
  formats: string[]
  timezone: string[]
  timezones: string[]
  _languageNames: string[]
  _broadcastAreaNames: string[]
  _countryName: string
  _guideSiteNames: string[]
  _streamTitles: string[]
  _streamUrls: string[]
  _feedNames: string[]
  _feedAltNames: string[]
  _streamIds: string[]
  _logoUrls: string[]
}

export type ChannelData = {
  id: string
  name: string
  country: string
  alt_names: string[]
  network: string | null
  owners: string[]
  categories: string[]
  is_nsfw: boolean
  launched: string | null
  closed: string | null
  replaced_by: string | null
  website: string | null
}
