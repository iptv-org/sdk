# Class: BroadcastAreaLocation

Defined in: [models/broadcastAreaLocation.ts:4](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastAreaLocation.ts#L4)

## Constructors

### Constructor

```ts
new BroadcastAreaLocation(data: BroadcastAreaLocationData): BroadcastAreaLocation;
```

Defined in: [models/broadcastAreaLocation.ts:12](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastAreaLocation.ts#L12)

#### Parameters

##### data

[`BroadcastAreaLocationData`](../../Types/type-aliases/BroadcastAreaLocationData.md)

#### Returns

`BroadcastAreaLocation`

## Properties

### rawCode

```ts
rawCode: string;
```

Defined in: [models/broadcastAreaLocation.ts:6](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastAreaLocation.ts#L6)

Raw code of the location *

***

### code

```ts
code: string;
```

Defined in: [models/broadcastAreaLocation.ts:8](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastAreaLocation.ts#L8)

Code of the location

***

### type

```ts
type: string;
```

Defined in: [models/broadcastAreaLocation.ts:10](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastAreaLocation.ts#L10)

Type of the location

## Methods

### getName()

```ts
getName(): string | undefined;
```

Defined in: [models/broadcastAreaLocation.ts:29](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastAreaLocation.ts#L29)

#### Returns

`string` \| `undefined`

Name of the location

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/broadcastAreaLocation.ts:53](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastAreaLocation.ts#L53)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): BroadcastAreaLocationData;
```

Defined in: [models/broadcastAreaLocation.ts:58](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/broadcastAreaLocation.ts#L58)

#### Returns

[`BroadcastAreaLocationData`](../../Types/type-aliases/BroadcastAreaLocationData.md)

JS object with all data
