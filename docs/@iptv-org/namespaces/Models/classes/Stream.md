# Class: Stream

Defined in: [models/stream.ts:6](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L6)

## Constructors

### Constructor

```ts
new Stream(data: StreamData): Stream;
```

Defined in: [models/stream.ts:24](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L24)

#### Parameters

##### data

[`StreamData`](../../Types/type-aliases/StreamData.md)

#### Returns

`Stream`

## Properties

### channel

```ts
channel: string | null;
```

Defined in: [models/stream.ts:8](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L8)

Channel ID

***

### feed

```ts
feed: string | null;
```

Defined in: [models/stream.ts:10](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L10)

Feed ID

***

### title

```ts
title: string;
```

Defined in: [models/stream.ts:12](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L12)

Stream title

***

### url

```ts
url: string;
```

Defined in: [models/stream.ts:14](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L14)

Stream URL

***

### referrer

```ts
referrer: string | null;
```

Defined in: [models/stream.ts:16](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L16)

The [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) request header for the stream

***

### user\_agent

```ts
user_agent: string | null;
```

Defined in: [models/stream.ts:18](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L18)

The [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) request header for the stream

***

### quality

```ts
quality: string | null;
```

Defined in: [models/stream.ts:20](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L20)

Maximum stream quality

***

### label

```ts
label: string | null;
```

Defined in: [models/stream.ts:22](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L22)

Specified in cases where the broadcast for some reason may not be available to some users

## Methods

### getId()

```ts
getId(): string;
```

Defined in: [models/stream.ts:36](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L36)

#### Returns

`string`

Stream ID

***

### getChannel()

```ts
getChannel(): Channel | undefined;
```

Defined in: [models/stream.ts:50](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L50)

#### Returns

[`Channel`](Channel.md) \| `undefined`

Channel associated with the stream

***

### getFeed()

```ts
getFeed(): Feed | undefined;
```

Defined in: [models/stream.ts:57](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L57)

#### Returns

[`Feed`](Feed.md) \| `undefined`

Feed associated with the stream

***

### getBroadcastAreaCodes()

```ts
getBroadcastAreaCodes(): Collection<string>;
```

Defined in: [models/stream.ts:71](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L71)

#### Returns

`Collection`\<`string`\>

List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`, `ct/<city_code>`)

***

### getCategories()

```ts
getCategories(): Collection<Category>;
```

Defined in: [models/stream.ts:79](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L79)

#### Returns

`Collection`\<[`Category`](Category.md)\>

List of all categories of the stream

***

### getLanguages()

```ts
getLanguages(): Collection<Language>;
```

Defined in: [models/stream.ts:87](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L87)

#### Returns

`Collection`\<[`Language`](Language.md)\>

List of all languages in which the stream is broadcast

***

### getLogos()

```ts
getLogos(): Collection<Logo>;
```

Defined in: [models/stream.ts:95](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L95)

#### Returns

`Collection`\<[`Logo`](Logo.md)\>

List of logos for the stream

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/stream.ts:106](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L106)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): StreamData;
```

Defined in: [models/stream.ts:111](https://github.com/iptv-org/sdk/blob/master/src/models/stream.ts#L111)

#### Returns

[`StreamData`](../../Types/type-aliases/StreamData.md)

JS object with all data
