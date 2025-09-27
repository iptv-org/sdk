# Class: Logo

Defined in: models/logo.ts:6

## Constructors

### Constructor

```ts
new Logo(data: LogoData): Logo;
```

Defined in: models/logo.ts:22

#### Parameters

##### data

[`LogoData`](../wiki/Types.TypeAlias.LogoData)

#### Returns

`Logo`

## Properties

### channel

```ts
channel: string;
```

Defined in: models/logo.ts:8

Channel ID

***

### feed

```ts
feed: null | string;
```

Defined in: models/logo.ts:10

Feed ID

***

### tags

```ts
tags: string[];
```

Defined in: models/logo.ts:12

List of keywords describing this version of the logo

***

### width

```ts
width: number;
```

Defined in: models/logo.ts:14

The width of the image in pixels

***

### height

```ts
height: number;
```

Defined in: models/logo.ts:16

The height of the image in pixels

***

### format

```ts
format: null | string;
```

Defined in: models/logo.ts:18

Image format (one of: `PNG`, `JPEG`, `SVG`, `GIF`, `WebP`, `AVIF`, `APNG`)

***

### url

```ts
url: string;
```

Defined in: models/logo.ts:20

Logo URL

## Methods

### getChannel()

```ts
getChannel(): undefined | Channel;
```

Defined in: models/logo.ts:33

#### Returns

`undefined` \| [`Channel`](../wiki/Models.Class.Channel)

Channel associated with the logo

***

### getFeed()

```ts
getFeed(): undefined | Feed;
```

Defined in: models/logo.ts:38

#### Returns

`undefined` \| [`Feed`](../wiki/Models.Class.Feed)

Feed associated with the logo

***

### getStreamId()

```ts
getStreamId(): string;
```

Defined in: models/logo.ts:43

#### Returns

`string`

Stream ID for the logo

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/logo.ts:50

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): LogoData;
```

Defined in: models/logo.ts:55

#### Returns

[`LogoData`](../wiki/Types.TypeAlias.LogoData)

JS object with all data
