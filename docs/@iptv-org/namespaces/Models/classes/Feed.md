# Class: Feed

Defined in: [models/feed.ts:7](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L7)

## Constructors

### Constructor

```ts
new Feed(data: FeedData): Feed;
```

Defined in: [models/feed.ts:27](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L27)

#### Parameters

##### data

[`FeedData`](../../Types/type-aliases/FeedData.md)

#### Returns

`Feed`

## Properties

### channel

```ts
channel: string;
```

Defined in: [models/feed.ts:9](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L9)

Channel ID

***

### id

```ts
id: string;
```

Defined in: [models/feed.ts:11](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L11)

Unique feed ID

***

### name

```ts
name: string;
```

Defined in: [models/feed.ts:13](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L13)

Name of the feed

***

### alt\_names

```ts
alt_names: string[];
```

Defined in: [models/feed.ts:15](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L15)

List of alternative feed names

***

### is\_main

```ts
is_main: boolean;
```

Defined in: [models/feed.ts:17](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L17)

Indicates if this feed is the main for the channel

***

### broadcast\_area

```ts
broadcast_area: string[];
```

Defined in: [models/feed.ts:19](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L19)

List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`, `ct/<city_code>`)

***

### languages

```ts
languages: string[];
```

Defined in: [models/feed.ts:21](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L21)

List of language codes in which the feed is broadcast

***

### timezones

```ts
timezones: string[];
```

Defined in: [models/feed.ts:23](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L23)

List of timezone IDs in which the feed is broadcast

***

### format

```ts
format: string;
```

Defined in: [models/feed.ts:25](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L25)

Video format of the feed

## Methods

### getStreamId()

```ts
getStreamId(): string;
```

Defined in: [models/feed.ts:40](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L40)

#### Returns

`string`

Stream ID for the feed

***

### getFullName()

```ts
getFullName(): string;
```

Defined in: [models/feed.ts:45](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L45)

#### Returns

`string`

Full name of the feed

***

### getChannel()

```ts
getChannel(): Channel | undefined;
```

Defined in: [models/feed.ts:53](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L53)

#### Returns

[`Channel`](Channel.md) \| `undefined`

Channel associated with the feed

***

### getStreams()

```ts
getStreams(): Collection<Stream>;
```

Defined in: [models/feed.ts:58](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L58)

#### Returns

`Collection`\<[`Stream`](Stream.md)\>

List of streams for the feed

***

### getGuides()

```ts
getGuides(): Collection<Guide>;
```

Defined in: [models/feed.ts:70](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L70)

#### Returns

`Collection`\<[`Guide`](Guide.md)\>

List of guides for the feed

***

### getLanguages()

```ts
getLanguages(): Collection<Language>;
```

Defined in: [models/feed.ts:82](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L82)

#### Returns

`Collection`\<[`Language`](Language.md)\>

List of languages in which the feed is broadcast

***

### getTimezones()

```ts
getTimezones(): Collection<Timezone>;
```

Defined in: [models/feed.ts:93](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L93)

#### Returns

`Collection`\<[`Timezone`](Timezone.md)\>

List of timezones in which the feed is broadcast

***

### getBroadcastArea()

```ts
getBroadcastArea(): BroadcastArea;
```

Defined in: [models/feed.ts:105](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L105)

#### Returns

[`BroadcastArea`](BroadcastArea.md)

Broadcast area of the feed

***

### getBroadcastAreaCodes()

```ts
getBroadcastAreaCodes(): Collection<string>;
```

Defined in: [models/feed.ts:110](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L110)

#### Returns

`Collection`\<`string`\>

List of broadcast area codes of the feed

***

### getBroadcastAreaLocations()

```ts
getBroadcastAreaLocations(): Collection<BroadcastAreaLocation>;
```

Defined in: [models/feed.ts:115](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L115)

#### Returns

`Collection`\<[`BroadcastAreaLocation`](BroadcastAreaLocation.md)\>

List of broadcast area locations of the feed

***

### getLogos()

```ts
getLogos(): Collection<Logo>;
```

Defined in: [models/feed.ts:120](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L120)

#### Returns

`Collection`\<[`Logo`](Logo.md)\>

List of logos for the feed

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/feed.ts:125](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L125)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): FeedData;
```

Defined in: [models/feed.ts:130](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/feed.ts#L130)

#### Returns

[`FeedData`](../../Types/type-aliases/FeedData.md)

JS object with all data
