# Class: Feed

Defined in: models/feed.ts:13

## Constructors

### Constructor

```ts
new Feed(data: FeedData): Feed;
```

Defined in: models/feed.ts:33

#### Parameters

##### data

[`FeedData`](../wiki/Types.TypeAlias.FeedData)

#### Returns

`Feed`

## Properties

### channel

```ts
channel: string;
```

Defined in: models/feed.ts:15

Channel ID

***

### id

```ts
id: string;
```

Defined in: models/feed.ts:17

Unique feed ID

***

### name

```ts
name: string;
```

Defined in: models/feed.ts:19

Name of the feed

***

### alt\_names

```ts
alt_names: string[];
```

Defined in: models/feed.ts:21

List of alternative feed names

***

### is\_main

```ts
is_main: boolean;
```

Defined in: models/feed.ts:23

Indicates if this feed is the main for the channel

***

### broadcast\_area

```ts
broadcast_area: string[];
```

Defined in: models/feed.ts:25

List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`, `ct/<city_code>`)

***

### languages

```ts
languages: string[];
```

Defined in: models/feed.ts:27

List of language codes in which the feed is broadcast

***

### timezones

```ts
timezones: string[];
```

Defined in: models/feed.ts:29

List of timezone IDs in which the feed is broadcast

***

### format

```ts
format: string;
```

Defined in: models/feed.ts:31

Video format of the feed

## Methods

### getStreamId()

```ts
getStreamId(): string;
```

Defined in: models/feed.ts:46

#### Returns

`string`

Stream ID for the feed

***

### getFullName()

```ts
getFullName(): string;
```

Defined in: models/feed.ts:51

#### Returns

`string`

Full name of the feed

***

### getChannel()

```ts
getChannel(): undefined | Channel;
```

Defined in: models/feed.ts:59

#### Returns

`undefined` \| [`Channel`](../wiki/Models.Class.Channel)

Channel associated with the feed

***

### getStreams()

```ts
getStreams(): Collection<Stream>;
```

Defined in: models/feed.ts:64

#### Returns

`Collection`\<[`Stream`](../wiki/Models.Class.Stream)\>

List of streams for the feed

***

### getGuides()

```ts
getGuides(): Collection<Guide>;
```

Defined in: models/feed.ts:76

#### Returns

`Collection`\<[`Guide`](../wiki/Models.Class.Guide)\>

List of guides for the feed

***

### getLanguages()

```ts
getLanguages(): Collection<Language>;
```

Defined in: models/feed.ts:88

#### Returns

`Collection`\<[`Language`](../wiki/Models.Class.Language)\>

List of languages in which the feed is broadcast

***

### getTimezones()

```ts
getTimezones(): Collection<Timezone>;
```

Defined in: models/feed.ts:99

#### Returns

`Collection`\<[`Timezone`](../wiki/Models.Class.Timezone)\>

List of timezones in which the feed is broadcast

***

### getBroadcastArea()

```ts
getBroadcastArea(): BroadcastArea;
```

Defined in: models/feed.ts:111

#### Returns

[`BroadcastArea`](../wiki/Models.Class.BroadcastArea)

Broadcast area of the feed

***

### getBroadcastAreaCodes()

```ts
getBroadcastAreaCodes(): Collection<string>;
```

Defined in: models/feed.ts:116

#### Returns

`Collection`\<`string`\>

List of broadcast area codes of the feed

***

### getBroadcastAreaLocations()

```ts
getBroadcastAreaLocations(): Collection<BroadcastAreaLocation>;
```

Defined in: models/feed.ts:121

#### Returns

`Collection`\<[`BroadcastAreaLocation`](../wiki/Models.Class.BroadcastAreaLocation)\>

List of broadcast area locations of the feed

***

### getLogos()

```ts
getLogos(): Collection<Logo>;
```

Defined in: models/feed.ts:126

#### Returns

`Collection`\<[`Logo`](../wiki/Models.Class.Logo)\>

List of logos for the feed

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/feed.ts:131

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): FeedData;
```

Defined in: models/feed.ts:136

#### Returns

[`FeedData`](../wiki/Types.TypeAlias.FeedData)

JS object with all data
