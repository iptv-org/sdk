import { ProcessedData, RawData } from '../types/dataProcessor'
import { Collection } from '@freearhey/core'
import store from '../store'
import {
  BlocklistRecord,
  Subdivision,
  Category,
  Language,
  Timezone,
  Channel,
  Country,
  Region,
  Stream,
  Guide,
  City,
  Feed,
  Logo
} from '../models'

export class DataProcessor {
  process(data: RawData): ProcessedData {
    const blocklist = new Collection(data.blocklist).map<BlocklistRecord>(
      data => new BlocklistRecord(data)
    )
    const categories = new Collection(data.categories).map<Category>(data => new Category(data))
    const channels = new Collection(data.channels).map<Channel>(data => new Channel(data))
    const cities = new Collection(data.cities).map<City>(data => new City(data))
    const countries = new Collection(data.countries).map<Country>(data => new Country(data))
    const feeds = new Collection(data.feeds).map<Feed>(data => new Feed(data))
    const guides = new Collection(data.guides).map<Guide>(data => new Guide(data))
    const languages = new Collection(data.languages).map<Language>(data => new Language(data))
    const logos = new Collection(data.logos).map<Logo>(data => new Logo(data))
    const regions = new Collection(data.regions).map<Region>(data => new Region(data))
    const streams = new Collection(data.streams).map<Stream>(data => new Stream(data))
    const subdivisions = new Collection(data.subdivisions).map<Subdivision>(
      data => new Subdivision(data)
    )
    const timezones = new Collection(data.timezones).map<Timezone>(data => new Timezone(data))

    store.blocklistRecordsGroupedByChannel = blocklist.groupBy(
      (blocklistRecord: BlocklistRecord) => blocklistRecord.channel
    )
    store.categoriesKeyById = categories.keyBy((category: Category) => category.id)
    store.channelsGroupedByCountry = channels.groupBy((channel: Channel) => channel.country)
    store.channelsKeyById = channels.keyBy((channel: Channel) => channel.id)
    store.citiesKeyByCode = cities.keyBy((city: City) => city.code)
    store.countriesKeyByCode = countries.keyBy((country: Country) => country.code)
    store.feedsGroupedByChannel = feeds.groupBy((feed: Feed) => feed.channel)
    store.feedsKeyByStreamId = feeds.keyBy((feed: Feed) => feed.getStreamId())
    store.guidesGroupedByChannel = guides.groupBy((guide: Guide) => guide.channel)
    store.guidesGroupedByStreamId = guides.groupBy((guide: Guide) => guide.getStreamId())
    store.languagesKeyByCode = languages.keyBy((language: Language) => language.code)
    store.logosGroupedByChannel = logos.groupBy((logo: Logo) => logo.channel)
    store.logosGroupedByStreamId = logos.groupBy((logo: Logo) => logo.getStreamId())
    store.regionsKeyByCode = regions.keyBy((region: Region) => region.code)
    store.streamsGroupedByChannel = streams.groupBy((stream: Stream) => stream.channel)
    store.streamsGroupedById = streams.groupBy((stream: Stream) => stream.getId())
    store.subdivisionsKeyByCode = subdivisions.keyBy((subdivision: Subdivision) => subdivision.code)
    store.timezonesKeyById = timezones.keyBy((timezone: Timezone) => timezone.id)
    store.cities = cities
    store.regions = regions
    store.subdivisions = subdivisions

    return {
      blocklist,
      categories,
      channels,
      cities,
      countries,
      feeds,
      guides,
      languages,
      logos,
      regions,
      streams,
      subdivisions,
      timezones
    }
  }
}
