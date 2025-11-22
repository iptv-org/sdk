# Class: Stream

Defined in: [models/stream.ts:10](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L10)

## Constructors

### Constructor

```ts
new Stream(data: StreamData): Stream;
```

Defined in: [models/stream.ts:26](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L26)

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

Defined in: [models/stream.ts:12](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L12)

Channel ID

***

### feed

```ts
feed: string | null;
```

Defined in: [models/stream.ts:14](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L14)

Feed ID

***

### title

```ts
title: string;
```

Defined in: [models/stream.ts:16](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L16)

Stream title

***

### url

```ts
url: string;
```

Defined in: [models/stream.ts:18](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L18)

Stream URL

***

### referrer

```ts
referrer: string | null;
```

Defined in: [models/stream.ts:20](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L20)

The [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) request header for the stream

***

### user\_agent

```ts
user_agent: string | null;
```

Defined in: [models/stream.ts:22](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L22)

The [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) request header for the stream

***

### quality

```ts
quality: string | null;
```

Defined in: [models/stream.ts:24](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L24)

Maximum stream quality

## Methods

### getId()

```ts
getId(): string;
```

Defined in: [models/stream.ts:37](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L37)

#### Returns

`string`

Stream ID

***

### getChannel()

```ts
getChannel(): Channel | undefined;
```

Defined in: [models/stream.ts:51](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L51)

#### Returns

[`Channel`](Channel.md) \| `undefined`

Channel associated with the stream

***

### getFeed()

```ts
getFeed(): Feed | undefined;
```

Defined in: [models/stream.ts:58](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L58)

#### Returns

[`Feed`](Feed.md) \| `undefined`

Feed associated with the stream

***

### getBroadcastAreaCodes()

```ts
getBroadcastAreaCodes(): Collection<string>;
```

Defined in: [models/stream.ts:72](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L72)

#### Returns

`Collection`\<`string`\>

List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`, `ct/<city_code>`)

***

### getCategories()

```ts
getCategories(): Collection<Category>;
```

Defined in: [models/stream.ts:80](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L80)

#### Returns

`Collection`\<[`Category`](Category.md)\>

List of all categories of the stream

***

### getLanguages()

```ts
getLanguages(): Collection<Language>;
```

Defined in: [models/stream.ts:88](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L88)

#### Returns

`Collection`\<[`Language`](Language.md)\>

List of all languages in which the stream is broadcast

***

### getLogos()

```ts
getLogos(): Collection<Logo>;
```

Defined in: [models/stream.ts:96](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L96)

#### Returns

`Collection`\<[`Logo`](Logo.md)\>

List of logos for the stream

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/stream.ts:107](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L107)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): StreamData;
```

Defined in: [models/stream.ts:112](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/stream.ts#L112)

#### Returns

[`StreamData`](../../Types/type-aliases/StreamData.md)

JS object with all data
