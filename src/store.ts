import { Collection, Dictionary } from '@freearhey/core'
import type {
  Category,
  Channel,
  City,
  Country,
  Feed,
  Language,
  Region,
  Subdivision,
  Timezone,
  BlocklistRecord,
  Guide,
  Logo,
  Stream
} from './models'

export default {
  blocklistRecordsGroupedByChannel: new Dictionary<BlocklistRecord[]>(),
  categoriesKeyById: new Dictionary<Category>(),
  channelsGroupedByCountry: new Dictionary<Channel[]>(),
  channelsKeyById: new Dictionary<Channel>(),
  citiesKeyByCode: new Dictionary<City>(),
  countriesKeyByCode: new Dictionary<Country>(),
  feedsGroupedByChannel: new Dictionary<Feed[]>(),
  feedsKeyByStreamId: new Dictionary<Feed>(),
  guidesGroupedByChannel: new Dictionary<Guide[]>(),
  guidesGroupedByStreamId: new Dictionary<Guide[]>(),
  languagesKeyByCode: new Dictionary<Language>(),
  logosGroupedByChannel: new Dictionary<Logo[]>(),
  logosGroupedByStreamId: new Dictionary<Logo[]>(),
  regionsKeyByCode: new Dictionary<Region>(),
  streamsGroupedByChannel: new Dictionary<Stream[]>(),
  streamsGroupedById: new Dictionary<Stream[]>(),
  subdivisionsKeyByCode: new Dictionary<Subdivision>(),
  timezonesKeyById: new Dictionary<Timezone>(),
  cities: new Collection<City>(),
  regions: new Collection<Region>(),
  subdivisions: new Collection<Subdivision>()
}
