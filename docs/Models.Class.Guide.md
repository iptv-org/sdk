# Class: Guide

Defined in: models/guide.ts:6

## Constructors

### Constructor

```ts
new Guide(data: GuideData): Guide;
```

Defined in: models/guide.ts:20

#### Parameters

##### data

[`GuideData`](../wiki/Types.TypeAlias.GuideData)

#### Returns

`Guide`

## Properties

### channel

```ts
channel: null | string;
```

Defined in: models/guide.ts:8

Channel ID

***

### feed

```ts
feed: null | string;
```

Defined in: models/guide.ts:10

Feed ID

***

### site

```ts
site: string;
```

Defined in: models/guide.ts:12

Site domain name

***

### site\_id

```ts
site_id: string;
```

Defined in: models/guide.ts:14

Unique channel ID used on the site

***

### site\_name

```ts
site_name: string;
```

Defined in: models/guide.ts:16

Channel name used on the site

***

### lang

```ts
lang: string;
```

Defined in: models/guide.ts:18

Language of the guide ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code)

## Methods

### getChannel()

```ts
getChannel(): undefined | Channel;
```

Defined in: models/guide.ts:30

#### Returns

`undefined` \| [`Channel`](../wiki/Models.Class.Channel)

Channel associated with the guide

***

### getFeed()

```ts
getFeed(): undefined | Feed;
```

Defined in: models/guide.ts:37

#### Returns

`undefined` \| [`Feed`](../wiki/Models.Class.Feed)

Feed associated with the guide

***

### getStreamId()

```ts
getStreamId(): string;
```

Defined in: models/guide.ts:42

#### Returns

`string`

Stream ID for the guide

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/guide.ts:58

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): GuideData;
```

Defined in: models/guide.ts:63

#### Returns

[`GuideData`](../wiki/Types.TypeAlias.GuideData)

JS object with all data
