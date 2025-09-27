# Class: Region

Defined in: models/region.ts:8

## Constructors

### Constructor

```ts
new Region(data: RegionData): Region;
```

Defined in: models/region.ts:16

#### Parameters

##### data

[`RegionData`](../wiki/Types.TypeAlias.RegionData)

#### Returns

`Region`

## Properties

### code

```ts
code: string;
```

Defined in: models/region.ts:10

Code of the region

***

### name

```ts
name: string;
```

Defined in: models/region.ts:12

Full name of the region

***

### countries

```ts
countries: string[];
```

Defined in: models/region.ts:14

List of countries in the region

## Methods

### getRegions()

```ts
getRegions(): Collection<Region>;
```

Defined in: models/region.ts:23

#### Returns

`Collection`\<`Region`\>

List of regions related to the region

***

### getCountries()

```ts
getCountries(): Collection<Country>;
```

Defined in: models/region.ts:33

#### Returns

`Collection`\<[`Country`](../wiki/Models.Class.Country)\>

List of country of the region

***

### getSubdivisions()

```ts
getSubdivisions(): Collection<Subdivision>;
```

Defined in: models/region.ts:44

#### Returns

`Collection`\<[`Subdivision`](../wiki/Models.Class.Subdivision)\>

List of subdivisions of the region

***

### getCities()

```ts
getCities(): Collection<City>;
```

Defined in: models/region.ts:54

#### Returns

`Collection`\<[`City`](../wiki/Models.Class.City)\>

List of cities of the region

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/region.ts:64

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): RegionData;
```

Defined in: models/region.ts:69

#### Returns

[`RegionData`](../wiki/Types.TypeAlias.RegionData)

JS object with all data
