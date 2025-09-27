# Class: BroadcastAreaLocation

Defined in: models/broadcastAreaLocation.ts:4

## Constructors

### Constructor

```ts
new BroadcastAreaLocation(data: BroadcastAreaLocationData): BroadcastAreaLocation;
```

Defined in: models/broadcastAreaLocation.ts:10

#### Parameters

##### data

[`BroadcastAreaLocationData`](../wiki/Types.TypeAlias.BroadcastAreaLocationData)

#### Returns

`BroadcastAreaLocation`

## Properties

### code

```ts
code: string;
```

Defined in: models/broadcastAreaLocation.ts:6

Code of the location

***

### type

```ts
type: string;
```

Defined in: models/broadcastAreaLocation.ts:8

Type of the location

## Methods

### getName()

```ts
getName(): undefined | string;
```

Defined in: models/broadcastAreaLocation.ts:25

#### Returns

`undefined` \| `string`

Name of the location

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/broadcastAreaLocation.ts:49

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): BroadcastAreaLocationData;
```

Defined in: models/broadcastAreaLocation.ts:54

#### Returns

[`BroadcastAreaLocationData`](../wiki/Types.TypeAlias.BroadcastAreaLocationData)

JS object with all data
