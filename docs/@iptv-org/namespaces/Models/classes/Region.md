# Class: Region

Defined in: [models/region.ts:8](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/region.ts#L8)

## Constructors

### Constructor

```ts
new Region(data: RegionData): Region;
```

Defined in: [models/region.ts:16](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/region.ts#L16)

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

Defined in: [models/region.ts:10](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/region.ts#L10)

Code of the region

***

### name

```ts
name: string;
```

Defined in: [models/region.ts:12](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/region.ts#L12)

Full name of the region

***

### countries

```ts
countries: string[];
```

Defined in: [models/region.ts:14](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/region.ts#L14)

List of countries in the region

## Methods

### getRegions()

```ts
getRegions(): Collection<Region>;
```

Defined in: [models/region.ts:23](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/region.ts#L23)

#### Returns

`Collection`\<`Region`\>

List of regions related to the region

***

### getCountries()

```ts
getCountries(): Collection<Country>;
```

Defined in: [models/region.ts:33](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/region.ts#L33)

#### Returns

`Collection`\<[`Country`](Country.md)\>

List of country of the region

***

### getSubdivisions()

```ts
getSubdivisions(): Collection<Subdivision>;
```

Defined in: [models/region.ts:44](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/region.ts#L44)

#### Returns

`Collection`\<[`Subdivision`](Subdivision.md)\>

List of subdivisions of the region

***

### getCities()

```ts
getCities(): Collection<City>;
```

Defined in: [models/region.ts:54](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/region.ts#L54)

#### Returns

`Collection`\<[`City`](City.md)\>

List of cities of the region

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/region.ts:64](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/region.ts#L64)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): RegionData;
```

Defined in: [models/region.ts:69](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/region.ts#L69)

#### Returns

[`RegionData`](../../Types/type-aliases/RegionData.md)

JS object with all data
