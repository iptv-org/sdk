# Class: City

Defined in: models/city.ts:8

## Constructors

### Constructor

```ts
new City(data: CityData): City;
```

Defined in: models/city.ts:20

#### Parameters

##### data

[`CityData`](../wiki/Types.TypeAlias.CityData)

#### Returns

`City`

## Properties

### country

```ts
country: string;
```

Defined in: models/city.ts:10

[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country where the city is located

***

### subdivision

```ts
subdivision: null | string;
```

Defined in: models/city.ts:12

[ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code of the subdivision where the city is located

***

### name

```ts
name: string;
```

Defined in: models/city.ts:14

City name

***

### code

```ts
code: string;
```

Defined in: models/city.ts:16

[UN/LOCODE](https://en.wikipedia.org/wiki/UN/LOCODE) of the city

***

### wikidata\_id

```ts
wikidata_id: string;
```

Defined in: models/city.ts:18

ID of this city in [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page)

## Methods

### getCountry()

```ts
getCountry(): undefined | Country;
```

Defined in: models/city.ts:29

#### Returns

`undefined` \| [`Country`](../wiki/Models.Class.Country)

Country in which the city is located

***

### getSubdivision()

```ts
getSubdivision(): undefined | Subdivision;
```

Defined in: models/city.ts:34

#### Returns

`undefined` \| [`Subdivision`](../wiki/Models.Class.Subdivision)

Subdivision in which the city is located

***

### getRegions()

```ts
getRegions(): Collection<Region>;
```

Defined in: models/city.ts:41

#### Returns

`Collection`\<[`Region`](../wiki/Models.Class.Region)\>

List of regions in which the city is located

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/city.ts:46

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): CityData;
```

Defined in: models/city.ts:51

#### Returns

[`CityData`](../wiki/Types.TypeAlias.CityData)

JS object with all data
