type ModelData =
  | BlocklistRecordData
  | CategoryData
  | ChannelData
  | CityData
  | CountryData
  | FeedData
  | GuideData
  | LanguageData
  | LogoData
  | RegionData
  | StreamData
  | SubdivisionData
  | TimezoneData

export type RawData = Record<string, ModelData[]>

export type ProcessedData = {
  blocklist: Collection<BlocklistRecord>
  categories: Collection<Category>
  channels: Collection<Channel>
  cities: Collection<City>
  countries: Collection<Country>
  feeds: Collection<Feed>
  guides: Collection<Guide>
  languages: Collection<Language>
  logos: Collection<Logo>
  regions: Collection<Region>
  streams: Collection<Stream>
  subdivisions: Collection<Subdivision>
  timezones: Collection<Timezone>
}
