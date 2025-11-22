# Class: BroadcastArea

Defined in: [models/broadcastArea.ts:5](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastArea.ts#L5)

## Constructors

### Constructor

```ts
new BroadcastArea(data: BroadcastAreaData): BroadcastArea;
```

Defined in: [models/broadcastArea.ts:9](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastArea.ts#L9)

#### Parameters

##### data

[`BroadcastAreaData`](../../Types/type-aliases/BroadcastAreaData.md)

#### Returns

`BroadcastArea`

## Properties

### codes

```ts
codes: string[];
```

Defined in: [models/broadcastArea.ts:7](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastArea.ts#L7)

List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`, `ct/<city_code>`)

## Methods

### getLocations()

```ts
getLocations(): Collection<BroadcastAreaLocation>;
```

Defined in: [models/broadcastArea.ts:14](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastArea.ts#L14)

#### Returns

`Collection`\<[`BroadcastAreaLocation`](BroadcastAreaLocation.md)\>

List of locations describing the broadcasting area

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/broadcastArea.ts:21](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastArea.ts#L21)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): BroadcastAreaData;
```

Defined in: [models/broadcastArea.ts:26](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastArea.ts#L26)

#### Returns

[`BroadcastAreaData`](../../Types/type-aliases/BroadcastAreaData.md)

JS object with all data
