# Class: BroadcastArea

Defined in: models/broadcastArea.ts:5

## Constructors

### Constructor

```ts
new BroadcastArea(data: BroadcastAreaData): BroadcastArea;
```

Defined in: models/broadcastArea.ts:9

#### Parameters

##### data

[`BroadcastAreaData`](../wiki/Types.TypeAlias.BroadcastAreaData)

#### Returns

`BroadcastArea`

## Properties

### codes

```ts
codes: string[];
```

Defined in: models/broadcastArea.ts:7

List of codes describing the broadcasting area (`r/<region_code>`, `c/<country_code>`, `s/<subdivision_code>`, `ct/<city_code>`)

## Methods

### getLocations()

```ts
getLocations(): Collection<BroadcastAreaLocation>;
```

Defined in: models/broadcastArea.ts:14

#### Returns

`Collection`\<[`BroadcastAreaLocation`](../wiki/Models.Class.BroadcastAreaLocation)\>

List of locations describing the broadcasting area

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/broadcastArea.ts:21

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): BroadcastAreaData;
```

Defined in: models/broadcastArea.ts:26

#### Returns

[`BroadcastAreaData`](../wiki/Types.TypeAlias.BroadcastAreaData)

JS object with all data
