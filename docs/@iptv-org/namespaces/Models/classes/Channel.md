# Class: Channel

Defined in: [models/channel.ts:15](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L15)

## Constructors

### Constructor

```ts
new Channel(data: ChannelData): Channel;
```

Defined in: [models/channel.ts:41](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L41)

#### Parameters

##### data

[`ChannelData`](../../Types/type-aliases/ChannelData.md)

#### Returns

`Channel`

## Properties

### id

```ts
id: string;
```

Defined in: [models/channel.ts:17](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L17)

Unique channel ID

***

### name

```ts
name: string;
```

Defined in: [models/channel.ts:19](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L19)

Full name of the channel

***

### alt\_names

```ts
alt_names: string[];
```

Defined in: [models/channel.ts:21](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L21)

List of alternative channel names

***

### network

```ts
network: string | null;
```

Defined in: [models/channel.ts:23](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L23)

Name of the network operating the channel

***

### owners

```ts
owners: string[];
```

Defined in: [models/channel.ts:25](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L25)

List of channel owners

***

### country

```ts
country: string;
```

Defined in: [models/channel.ts:27](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L27)

Country code from which the broadcast is transmitted ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))

***

### categories

```ts
categories: string[];
```

Defined in: [models/channel.ts:29](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L29)

List of categories to which this channel belongs

***

### is\_nsfw

```ts
is_nsfw: boolean;
```

Defined in: [models/channel.ts:31](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L31)

Indicates whether the channel broadcasts adult content

***

### launched

```ts
launched: string | null;
```

Defined in: [models/channel.ts:33](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L33)

Launch date of the channel (`YYYY-MM-DD`)

***

### closed

```ts
closed: string | null;
```

Defined in: [models/channel.ts:35](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L35)

Date on which the channel closed (`YYYY-MM-DD`)

***

### replaced\_by

```ts
replaced_by: string | null;
```

Defined in: [models/channel.ts:37](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L37)

The ID of the channel that this channel was replaced by

***

### website

```ts
website: string | null;
```

Defined in: [models/channel.ts:39](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L39)

Official website URL

## Methods

### isClosed()

```ts
isClosed(): boolean;
```

Defined in: [models/channel.ts:57](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L57)

#### Returns

`boolean`

`true` if the channel is marked as "closed"

***

### isBlocked()

```ts
isBlocked(): boolean;
```

Defined in: [models/channel.ts:62](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L62)

#### Returns

`boolean`

`true` if the channel is on the blocklist

***

### getCountry()

```ts
getCountry(): Country | undefined;
```

Defined in: [models/channel.ts:67](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L67)

#### Returns

[`Country`](Country.md) \| `undefined`

Country from which the channel is broadcasting

***

### getCategories()

```ts
getCategories(): Collection<Category>;
```

Defined in: [models/channel.ts:72](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L72)

#### Returns

`Collection`\<[`Category`](Category.md)\>

List of all categories of the channel

***

### getFeeds()

```ts
getFeeds(): Collection<Feed>;
```

Defined in: [models/channel.ts:83](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L83)

#### Returns

`Collection`\<[`Feed`](Feed.md)\>

List of all feeds of the channel

***

### getMainFeed()

```ts
getMainFeed(): Feed | undefined;
```

Defined in: [models/channel.ts:88](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L88)

#### Returns

[`Feed`](Feed.md) \| `undefined`

Main feed of the channel

***

### getBroadcastAreaCodes()

```ts
getBroadcastAreaCodes(): Collection<string>;
```

Defined in: [models/channel.ts:93](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L93)

#### Returns

`Collection`\<`string`\>

List of broadcast area codes of the channel

***

### getBroadcastAreaLocations()

```ts
getBroadcastAreaLocations(): Collection<BroadcastAreaLocation>;
```

Defined in: [models/channel.ts:103](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L103)

#### Returns

`Collection`\<[`BroadcastAreaLocation`](BroadcastAreaLocation.md)\>

List of broadcast area locations of the channel

***

### getLanguages()

```ts
getLanguages(): Collection<Language>;
```

Defined in: [models/channel.ts:113](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L113)

#### Returns

`Collection`\<[`Language`](Language.md)\>

List of all languages in which the channel is broadcast

***

### getTimezones()

```ts
getTimezones(): Collection<Timezone>;
```

Defined in: [models/channel.ts:123](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L123)

#### Returns

`Collection`\<[`Timezone`](Timezone.md)\>

List of all timezones in which the channel is broadcast

***

### getVideoFormats()

```ts
getVideoFormats(): Collection<string>;
```

Defined in: [models/channel.ts:133](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L133)

#### Returns

`Collection`\<`string`\>

List of all video formats in which the channel is broadcast

***

### getLogos()

```ts
getLogos(): Collection<Logo>;
```

Defined in: [models/channel.ts:143](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L143)

#### Returns

`Collection`\<[`Logo`](Logo.md)\>

List of all available logos for the channel

***

### getStreams()

```ts
getStreams(): Collection<Stream>;
```

Defined in: [models/channel.ts:148](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L148)

#### Returns

`Collection`\<[`Stream`](Stream.md)\>

List of all available streams for the channel

***

### getGuides()

```ts
getGuides(): Collection<Guide>;
```

Defined in: [models/channel.ts:153](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L153)

#### Returns

`Collection`\<[`Guide`](Guide.md)\>

List of all available guides for the channel

***

### getBlocklistRecords()

```ts
getBlocklistRecords(): Collection<BlocklistRecord>;
```

Defined in: [models/channel.ts:158](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L158)

#### Returns

`Collection`\<[`BlocklistRecord`](BlocklistRecord.md)\>

List of records in the blocklist associated with the channel

***

### getSearchable()

```ts
getSearchable(): ChannelSearchableData;
```

Defined in: [models/channel.ts:163](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L163)

#### Returns

[`ChannelSearchableData`](../../Types/type-aliases/ChannelSearchableData.md)

Data used to search for the channel

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/channel.ts:274](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L274)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): ChannelData;
```

Defined in: [models/channel.ts:279](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/channel.ts#L279)

#### Returns

[`ChannelData`](../../Types/type-aliases/ChannelData.md)

JS object with all data
