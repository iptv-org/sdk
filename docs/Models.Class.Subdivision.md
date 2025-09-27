# Class: Subdivision

Defined in: models/subdivision.ts:8

## Constructors

### Constructor

```ts
new Subdivision(data: SubdivisionData): Subdivision;
```

Defined in: models/subdivision.ts:18

#### Parameters

##### data

[`SubdivisionData`](../wiki/Types.TypeAlias.SubdivisionData)

#### Returns

`Subdivision`

## Properties

### country

```ts
country: string;
```

Defined in: models/subdivision.ts:10

[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country

***

### name

```ts
name: string;
```

Defined in: models/subdivision.ts:12

Subdivision name

***

### code

```ts
code: string;
```

Defined in: models/subdivision.ts:14

[ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code of the subdivision

***

### parent

```ts
parent: null | string;
```

Defined in: models/subdivision.ts:16

[ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code of the parent subdivision

## Methods

### getCountry()

```ts
getCountry(): undefined | Country;
```

Defined in: models/subdivision.ts:26

#### Returns

`undefined` \| [`Country`](../wiki/Models.Class.Country)

Country in which the subdivision is located

***

### getParent()

```ts
getParent(): undefined | Subdivision;
```

Defined in: models/subdivision.ts:31

#### Returns

`undefined` \| `Subdivision`

Parent subdivision

***

### getCities()

```ts
getCities(): Collection<City>;
```

Defined in: models/subdivision.ts:38

#### Returns

`Collection`\<[`City`](../wiki/Models.Class.City)\>

List of cities in which the subdivision is located

***

### getRegions()

```ts
getRegions(): Collection<Region>;
```

Defined in: models/subdivision.ts:43

#### Returns

`Collection`\<[`Region`](../wiki/Models.Class.Region)\>

List of regions in which the city is located

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/subdivision.ts:51

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): SubdivisionData;
```

Defined in: models/subdivision.ts:56

#### Returns

[`SubdivisionData`](../wiki/Types.TypeAlias.SubdivisionData)

JS object with all data
