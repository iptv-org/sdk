# Class: BlocklistRecord

Defined in: [models/blocklistRecord.ts:5](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/blocklistRecord.ts#L5)

## Constructors

### Constructor

```ts
new BlocklistRecord(data: BlocklistRecordData): BlocklistRecord;
```

Defined in: [models/blocklistRecord.ts:13](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/blocklistRecord.ts#L13)

#### Parameters

##### data

[`BlocklistRecordData`](../../Types/type-aliases/BlocklistRecordData.md)

#### Returns

`BlocklistRecord`

## Properties

### channel

```ts
channel: string;
```

Defined in: [models/blocklistRecord.ts:7](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/blocklistRecord.ts#L7)

Channel ID

***

### reason

```ts
reason: string;
```

Defined in: [models/blocklistRecord.ts:9](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/blocklistRecord.ts#L9)

Reason for blocking (`dmca` or `nsfw`)

***

### ref

```ts
ref: string;
```

Defined in: [models/blocklistRecord.ts:11](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/blocklistRecord.ts#L11)

Link to removal request or DMCA takedown notice

## Methods

### getChannel()

```ts
getChannel(): undefined | Channel;
```

Defined in: [models/blocklistRecord.ts:20](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/blocklistRecord.ts#L20)

#### Returns

`undefined` \| [`Channel`](Channel.md)

Channel associated with this record in the blocklist

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/blocklistRecord.ts:25](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/blocklistRecord.ts#L25)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): BlocklistRecordData;
```

Defined in: [models/blocklistRecord.ts:30](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/blocklistRecord.ts#L30)

#### Returns

[`BlocklistRecordData`](../../Types/type-aliases/BlocklistRecordData.md)

JS object with all data
