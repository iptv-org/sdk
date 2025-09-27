# Class: Stream

Defined in: models/stream.ts:10

## Constructors

### Constructor

```ts
new Stream(data: StreamData): Stream;
```

Defined in: models/stream.ts:26

#### Parameters

##### data

[`StreamData`](../wiki/Types.TypeAlias.StreamData)

#### Returns

`Stream`

## Properties

### channel

```ts
channel: null | string;
```

Defined in: models/stream.ts:12

Channel ID

***

### feed

```ts
feed: null | string;
```

Defined in: models/stream.ts:14

Feed ID

***

### title

```ts
title: string;
```

Defined in: models/stream.ts:16

Stream title

***

### url

```ts
url: string;
```

Defined in: models/stream.ts:18

Stream URL

***

### referrer

```ts
referrer: null | string;
```

Defined in: models/stream.ts:20

The [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) request header for the stream

***

### user\_agent

```ts
user_agent: null | string;
```

Defined in: models/stream.ts:22

The [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) request header for the stream

***

### quality

```ts
quality: null | string;
```

Defined in: models/stream.ts:24

Maximum stream quality

## Methods

### getId()

```ts
getId(): string;
```

Defined in: models/stream.ts:37

#### Returns

`string`

Stream ID

***

### getChannel()

```ts
getChannel(): undefined | Channel;
```

Defined in: models/stream.ts:51

#### Returns

`undefined` \| [`Channel`](../wiki/Models.Class.Channel)

Channel associated with the stream

***

### getFeed()

```ts
getFeed(): undefined | Feed;
```

Defined in: models/stream.ts:58

#### Returns

`undefined` \| [`Feed`](../wiki/Models.Class.Feed)

Feed associated with the stream

***

### getBroadcastAreaCodes()

```ts
getBroadcastAreaCodes(): Collection<string>;
```

Defined in: models/stream.ts:72

#### Returns

`Collection`\<`string`\>

List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`, `ct/<city_code>`)

***

### getCategories()

```ts
getCategories(): Collection<Category>;
```

Defined in: models/stream.ts:80

#### Returns

`Collection`\<[`Category`](../wiki/Models.Class.Category)\>

List of all categories of the stream

***

### getLanguages()

```ts
getLanguages(): Collection<Language>;
```

Defined in: models/stream.ts:88

#### Returns

`Collection`\<[`Language`](../wiki/Models.Class.Language)\>

List of all languages in which the stream is broadcast

***

### getLogos()

```ts
getLogos(): Collection<Logo>;
```

Defined in: models/stream.ts:96

#### Returns

`Collection`\<[`Logo`](../wiki/Models.Class.Logo)\>

List of logos for the stream

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/stream.ts:107

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): StreamData;
```

Defined in: models/stream.ts:112

#### Returns

[`StreamData`](../wiki/Types.TypeAlias.StreamData)

JS object with all data
