# Class: Channel

Defined in: models/channel.ts:15

## Constructors

### Constructor

```ts
new Channel(data: ChannelData): Channel;
```

Defined in: models/channel.ts:41

#### Parameters

##### data

[`ChannelData`](../wiki/Types.TypeAlias.ChannelData)

#### Returns

`Channel`

## Properties

### id

```ts
id: string;
```

Defined in: models/channel.ts:17

Unique channel ID

***

### name

```ts
name: string;
```

Defined in: models/channel.ts:19

Full name of the channel

***

### alt\_names

```ts
alt_names: string[];
```

Defined in: models/channel.ts:21

List of alternative channel names

***

### network

```ts
network: null | string;
```

Defined in: models/channel.ts:23

Name of the network operating the channel

***

### owners

```ts
owners: string[];
```

Defined in: models/channel.ts:25

List of channel owners

***

### country

```ts
country: string;
```

Defined in: models/channel.ts:27

Country code from which the broadcast is transmitted ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))

***

### categories

```ts
categories: string[];
```

Defined in: models/channel.ts:29

List of categories to which this channel belongs

***

### is\_nsfw

```ts
is_nsfw: boolean;
```

Defined in: models/channel.ts:31

Indicates whether the channel broadcasts adult content

***

### launched

```ts
launched: null | string;
```

Defined in: models/channel.ts:33

Launch date of the channel (`YYYY-MM-DD`)

***

### closed

```ts
closed: null | string;
```

Defined in: models/channel.ts:35

Date on which the channel closed (`YYYY-MM-DD`)

***

### replaced\_by

```ts
replaced_by: null | string;
```

Defined in: models/channel.ts:37

The ID of the channel that this channel was replaced by

***

### website

```ts
website: null | string;
```

Defined in: models/channel.ts:39

Official website URL

## Methods

### isClosed()

```ts
isClosed(): boolean;
```

Defined in: models/channel.ts:57

#### Returns

`boolean`

`true` if the channel is marked as "closed"

***

### isBlocked()

```ts
isBlocked(): boolean;
```

Defined in: models/channel.ts:62

#### Returns

`boolean`

`true` if the channel is on the blocklist

***

### getCountry()

```ts
getCountry(): undefined | Country;
```

Defined in: models/channel.ts:67

#### Returns

`undefined` \| [`Country`](../wiki/Models.Class.Country)

Country from which the channel is broadcasting

***

### getCategories()

```ts
getCategories(): Collection<Category>;
```

Defined in: models/channel.ts:72

#### Returns

`Collection`\<[`Category`](../wiki/Models.Class.Category)\>

List of all categories of the channel

***

### getFeeds()

```ts
getFeeds(): Collection<Feed>;
```

Defined in: models/channel.ts:83

#### Returns

`Collection`\<[`Feed`](../wiki/Models.Class.Feed)\>

List of all feeds of the channel

***

### getMainFeed()

```ts
getMainFeed(): undefined | Feed;
```

Defined in: models/channel.ts:88

#### Returns

`undefined` \| [`Feed`](../wiki/Models.Class.Feed)

Main feed of the channel

***

### getBroadcastAreaCodes()

```ts
getBroadcastAreaCodes(): Collection<string>;
```

Defined in: models/channel.ts:93

#### Returns

`Collection`\<`string`\>

List of broadcast area codes of the channel

***

### getBroadcastAreaLocations()

```ts
getBroadcastAreaLocations(): Collection<BroadcastAreaLocation>;
```

Defined in: models/channel.ts:103

#### Returns

`Collection`\<[`BroadcastAreaLocation`](../wiki/Models.Class.BroadcastAreaLocation)\>

List of broadcast area locations of the channel

***

### getLanguages()

```ts
getLanguages(): Collection<Language>;
```

Defined in: models/channel.ts:113

#### Returns

`Collection`\<[`Language`](../wiki/Models.Class.Language)\>

List of all languages in which the channel is broadcast

***

### getTimezones()

```ts
getTimezones(): Collection<Timezone>;
```

Defined in: models/channel.ts:123

#### Returns

`Collection`\<[`Timezone`](../wiki/Models.Class.Timezone)\>

List of all timezones in which the channel is broadcast

***

### getVideoFormats()

```ts
getVideoFormats(): Collection<string>;
```

Defined in: models/channel.ts:133

#### Returns

`Collection`\<`string`\>

List of all video formats in which the channel is broadcast

***

### getLogos()

```ts
getLogos(): Collection<Logo>;
```

Defined in: models/channel.ts:143

#### Returns

`Collection`\<[`Logo`](../wiki/Models.Class.Logo)\>

List of all available logos for the channel

***

### getStreams()

```ts
getStreams(): Collection<Stream>;
```

Defined in: models/channel.ts:148

#### Returns

`Collection`\<[`Stream`](../wiki/Models.Class.Stream)\>

List of all available streams for the channel

***

### getGuides()

```ts
getGuides(): Collection<Guide>;
```

Defined in: models/channel.ts:153

#### Returns

`Collection`\<[`Guide`](../wiki/Models.Class.Guide)\>

List of all available guides for the channel

***

### getBlocklistRecords()

```ts
getBlocklistRecords(): Collection<BlocklistRecord>;
```

Defined in: models/channel.ts:158

#### Returns

`Collection`\<[`BlocklistRecord`](../wiki/Models.Class.BlocklistRecord)\>

List of records in the blocklist associated with the channel

***

### getSearchable()

```ts
getSearchable(): ChannelSearchableData;
```

Defined in: models/channel.ts:163

#### Returns

[`ChannelSearchableData`](../wiki/Types.TypeAlias.ChannelSearchableData)

Data used to search for the channel

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/channel.ts:274

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): ChannelData;
```

Defined in: models/channel.ts:279

#### Returns

[`ChannelData`](../wiki/Types.TypeAlias.ChannelData)

JS object with all data
