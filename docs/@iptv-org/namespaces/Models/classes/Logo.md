# Class: Logo

Defined in: [models/logo.ts:6](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L6)

## Constructors

### Constructor

```ts
new Logo(data: LogoData): Logo;
```

Defined in: [models/logo.ts:22](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L22)

#### Parameters

##### data

[`LogoData`](../../Types/type-aliases/LogoData.md)

#### Returns

`Logo`

## Properties

### channel

```ts
channel: string;
```

Defined in: [models/logo.ts:8](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L8)

Channel ID

***

### feed

```ts
feed: string | null;
```

Defined in: [models/logo.ts:10](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L10)

Feed ID

***

### tags

```ts
tags: string[];
```

Defined in: [models/logo.ts:12](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L12)

List of keywords describing this version of the logo

***

### width

```ts
width: number;
```

Defined in: [models/logo.ts:14](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L14)

The width of the image in pixels

***

### height

```ts
height: number;
```

Defined in: [models/logo.ts:16](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L16)

The height of the image in pixels

***

### format

```ts
format: string | null;
```

Defined in: [models/logo.ts:18](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L18)

Image format (one of: `PNG`, `JPEG`, `SVG`, `GIF`, `WebP`, `AVIF`, `APNG`)

***

### url

```ts
url: string;
```

Defined in: [models/logo.ts:20](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L20)

Logo URL

## Methods

### getChannel()

```ts
getChannel(): Channel | undefined;
```

Defined in: [models/logo.ts:33](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L33)

#### Returns

[`Channel`](Channel.md) \| `undefined`

Channel associated with the logo

***

### getFeed()

```ts
getFeed(): Feed | undefined;
```

Defined in: [models/logo.ts:38](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L38)

#### Returns

[`Feed`](Feed.md) \| `undefined`

Feed associated with the logo

***

### getStreamId()

```ts
getStreamId(): string;
```

Defined in: [models/logo.ts:43](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L43)

#### Returns

`string`

Stream ID for the logo

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/logo.ts:50](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L50)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): LogoData;
```

Defined in: [models/logo.ts:55](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/logo.ts#L55)

#### Returns

[`LogoData`](../../Types/type-aliases/LogoData.md)

JS object with all data
