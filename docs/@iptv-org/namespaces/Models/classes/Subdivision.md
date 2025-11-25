# Class: Subdivision

Defined in: [models/subdivision.ts:6](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L6)

## Constructors

### Constructor

```ts
new Subdivision(data: SubdivisionData): Subdivision;
```

Defined in: [models/subdivision.ts:16](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L16)

#### Parameters

##### data

[`SubdivisionData`](../../Types/type-aliases/SubdivisionData.md)

#### Returns

`Subdivision`

## Properties

### country

```ts
country: string;
```

Defined in: [models/subdivision.ts:8](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L8)

[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country

***

### name

```ts
name: string;
```

Defined in: [models/subdivision.ts:10](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L10)

Subdivision name

***

### code

```ts
code: string;
```

Defined in: [models/subdivision.ts:12](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L12)

[ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code of the subdivision

***

### parent

```ts
parent: string | null;
```

Defined in: [models/subdivision.ts:14](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L14)

[ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code of the parent subdivision

## Methods

### getCountry()

```ts
getCountry(): Country | undefined;
```

Defined in: [models/subdivision.ts:24](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L24)

#### Returns

[`Country`](Country.md) \| `undefined`

Country in which the subdivision is located

***

### getParent()

```ts
getParent(): Subdivision | undefined;
```

Defined in: [models/subdivision.ts:29](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L29)

#### Returns

`Subdivision` \| `undefined`

Parent subdivision

***

### getCities()

```ts
getCities(): Collection<City>;
```

Defined in: [models/subdivision.ts:36](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L36)

#### Returns

`Collection`\<[`City`](City.md)\>

List of cities in which the subdivision is located

***

### getRegions()

```ts
getRegions(): Collection<Region>;
```

Defined in: [models/subdivision.ts:41](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L41)

#### Returns

`Collection`\<[`Region`](Region.md)\>

List of regions in which the city is located

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/subdivision.ts:49](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L49)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): SubdivisionData;
```

Defined in: [models/subdivision.ts:54](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/subdivision.ts#L54)

#### Returns

[`SubdivisionData`](../../Types/type-aliases/SubdivisionData.md)

JS object with all data
