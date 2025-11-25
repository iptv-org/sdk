# Class: City

Defined in: [models/city.ts:8](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L8)

## Constructors

### Constructor

```ts
new City(data: CityData): City;
```

Defined in: [models/city.ts:20](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L20)

#### Parameters

##### data

[`CityData`](../../Types/type-aliases/CityData.md)

#### Returns

`City`

## Properties

### country

```ts
country: string;
```

Defined in: [models/city.ts:10](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L10)

[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country where the city is located

***

### subdivision

```ts
subdivision: string | null;
```

Defined in: [models/city.ts:12](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L12)

[ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code of the subdivision where the city is located

***

### name

```ts
name: string;
```

Defined in: [models/city.ts:14](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L14)

City name

***

### code

```ts
code: string;
```

Defined in: [models/city.ts:16](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L16)

[UN/LOCODE](https://en.wikipedia.org/wiki/UN/LOCODE) of the city

***

### wikidata\_id

```ts
wikidata_id: string;
```

Defined in: [models/city.ts:18](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L18)

ID of this city in [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page)

## Methods

### getCountry()

```ts
getCountry(): Country | undefined;
```

Defined in: [models/city.ts:29](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L29)

#### Returns

[`Country`](Country.md) \| `undefined`

Country in which the city is located

***

### getSubdivision()

```ts
getSubdivision(): Subdivision | undefined;
```

Defined in: [models/city.ts:34](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L34)

#### Returns

[`Subdivision`](Subdivision.md) \| `undefined`

Subdivision in which the city is located

***

### getRegions()

```ts
getRegions(): Collection<Region>;
```

Defined in: [models/city.ts:41](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L41)

#### Returns

`Collection`\<[`Region`](Region.md)\>

List of regions in which the city is located

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/city.ts:46](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L46)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): CityData;
```

Defined in: [models/city.ts:51](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/city.ts#L51)

#### Returns

[`CityData`](../../Types/type-aliases/CityData.md)

JS object with all data
