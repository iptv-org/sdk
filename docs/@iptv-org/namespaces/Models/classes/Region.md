# Class: Region

Defined in: [models/region.ts:6](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/region.ts#L6)

## Constructors

### Constructor

```ts
new Region(data: RegionData): Region;
```

Defined in: [models/region.ts:14](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/region.ts#L14)

#### Parameters

##### data

[`RegionData`](../../Types/type-aliases/RegionData.md)

#### Returns

`Region`

## Properties

### code

```ts
code: string;
```

Defined in: [models/region.ts:8](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/region.ts#L8)

Code of the region

***

### name

```ts
name: string;
```

Defined in: [models/region.ts:10](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/region.ts#L10)

Full name of the region

***

### countries

```ts
countries: string[];
```

Defined in: [models/region.ts:12](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/region.ts#L12)

List of countries in the region

## Methods

### getRegions()

```ts
getRegions(): Collection<Region>;
```

Defined in: [models/region.ts:21](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/region.ts#L21)

#### Returns

`Collection`\<`Region`\>

List of regions related to the region

***

### getCountries()

```ts
getCountries(): Collection<Country>;
```

Defined in: [models/region.ts:31](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/region.ts#L31)

#### Returns

`Collection`\<[`Country`](Country.md)\>

List of country of the region

***

### getSubdivisions()

```ts
getSubdivisions(): Collection<Subdivision>;
```

Defined in: [models/region.ts:42](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/region.ts#L42)

#### Returns

`Collection`\<[`Subdivision`](Subdivision.md)\>

List of subdivisions of the region

***

### getCities()

```ts
getCities(): Collection<City>;
```

Defined in: [models/region.ts:52](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/region.ts#L52)

#### Returns

`Collection`\<[`City`](City.md)\>

List of cities of the region

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/region.ts:62](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/region.ts#L62)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): RegionData;
```

Defined in: [models/region.ts:67](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/region.ts#L67)

#### Returns

[`RegionData`](../../Types/type-aliases/RegionData.md)

JS object with all data
