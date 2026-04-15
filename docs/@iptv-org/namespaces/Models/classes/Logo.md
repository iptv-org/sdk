# Class: Logo

Defined in: [models/logo.ts:6](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L6)

## Constructors

### Constructor

```ts
new Logo(data: LogoData): Logo;
```

Defined in: [models/logo.ts:24](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L24)

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

Defined in: [models/logo.ts:8](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L8)

Channel ID

***

### feed

```ts
feed: string | null;
```

Defined in: [models/logo.ts:10](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L10)

Feed ID

***

### in\_use

```ts
in_use: boolean;
```

Defined in: [models/logo.ts:12](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L12)

Indicates whether the broadcaster is currently using this logo *

***

### tags

```ts
tags: string[];
```

Defined in: [models/logo.ts:14](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L14)

List of keywords describing this version of the logo

***

### width

```ts
width: number;
```

Defined in: [models/logo.ts:16](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L16)

The width of the image in pixels

***

### height

```ts
height: number;
```

Defined in: [models/logo.ts:18](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L18)

The height of the image in pixels

***

### format

```ts
format: string | null;
```

Defined in: [models/logo.ts:20](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L20)

Image format (one of: `PNG`, `JPEG`, `SVG`, `GIF`, `WebP`, `AVIF`, `APNG`)

***

### url

```ts
url: string;
```

Defined in: [models/logo.ts:22](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L22)

Logo URL

## Methods

### getChannel()

```ts
getChannel(): Channel | undefined;
```

Defined in: [models/logo.ts:36](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L36)

#### Returns

[`Channel`](Channel.md) \| `undefined`

Channel associated with the logo

***

### getFeed()

```ts
getFeed(): Feed | undefined;
```

Defined in: [models/logo.ts:41](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L41)

#### Returns

[`Feed`](Feed.md) \| `undefined`

Feed associated with the logo

***

### getStreamId()

```ts
getStreamId(): string;
```

Defined in: [models/logo.ts:46](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L46)

#### Returns

`string`

Stream ID for the logo

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/logo.ts:53](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L53)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): LogoData;
```

Defined in: [models/logo.ts:58](https://github.com/iptv-org/sdk/blob/master/src/models/logo.ts#L58)

#### Returns

[`LogoData`](../../Types/type-aliases/LogoData.md)

JS object with all data
