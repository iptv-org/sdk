# Class: Guide

Defined in: [models/guide.ts:6](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L6)

## Constructors

### Constructor

```ts
new Guide(data: GuideData): Guide;
```

Defined in: [models/guide.ts:20](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L20)

#### Parameters

##### data

[`GuideData`](../../Types/type-aliases/GuideData.md)

#### Returns

`Guide`

## Properties

### channel

```ts
channel: null | string;
```

Defined in: [models/guide.ts:8](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L8)

Channel ID

***

### feed

```ts
feed: null | string;
```

Defined in: [models/guide.ts:10](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L10)

Feed ID

***

### site

```ts
site: string;
```

Defined in: [models/guide.ts:12](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L12)

Site domain name

***

### site\_id

```ts
site_id: string;
```

Defined in: [models/guide.ts:14](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L14)

Unique channel ID used on the site

***

### site\_name

```ts
site_name: string;
```

Defined in: [models/guide.ts:16](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L16)

Channel name used on the site

***

### lang

```ts
lang: string;
```

Defined in: [models/guide.ts:18](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L18)

Language of the guide ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code)

## Methods

### getChannel()

```ts
getChannel(): undefined | Channel;
```

Defined in: [models/guide.ts:30](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L30)

#### Returns

`undefined` \| [`Channel`](Channel.md)

Channel associated with the guide

***

### getFeed()

```ts
getFeed(): undefined | Feed;
```

Defined in: [models/guide.ts:37](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L37)

#### Returns

`undefined` \| [`Feed`](Feed.md)

Feed associated with the guide

***

### getStreamId()

```ts
getStreamId(): string;
```

Defined in: [models/guide.ts:42](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L42)

#### Returns

`string`

Stream ID for the guide

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/guide.ts:58](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L58)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): GuideData;
```

Defined in: [models/guide.ts:63](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/guide.ts#L63)

#### Returns

[`GuideData`](../../Types/type-aliases/GuideData.md)

JS object with all data
