# Class: BlocklistRecord

Defined in: models/blocklistRecord.ts:5

## Constructors

### Constructor

```ts
new BlocklistRecord(data: BlocklistRecordData): BlocklistRecord;
```

Defined in: models/blocklistRecord.ts:13

#### Parameters

##### data

[`BlocklistRecordData`](../wiki/Types.TypeAlias.BlocklistRecordData)

#### Returns

`BlocklistRecord`

## Properties

### channel

```ts
channel: string;
```

Defined in: models/blocklistRecord.ts:7

Channel ID

***

### reason

```ts
reason: string;
```

Defined in: models/blocklistRecord.ts:9

Reason for blocking (`dmca` or `nsfw`)

***

### ref

```ts
ref: string;
```

Defined in: models/blocklistRecord.ts:11

Link to removal request or DMCA takedown notice

## Methods

### getChannel()

```ts
getChannel(): undefined | Channel;
```

Defined in: models/blocklistRecord.ts:20

#### Returns

`undefined` \| [`Channel`](../wiki/Models.Class.Channel)

Channel associated with this record in the blocklist

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/blocklistRecord.ts:25

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): BlocklistRecordData;
```

Defined in: models/blocklistRecord.ts:30

#### Returns

[`BlocklistRecordData`](../wiki/Types.TypeAlias.BlocklistRecordData)

JS object with all data
