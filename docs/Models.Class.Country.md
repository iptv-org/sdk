# Class: Country

Defined in: models/country.ts:10

## Constructors

### Constructor

```ts
new Country(data: CountryData): Country;
```

Defined in: models/country.ts:20

#### Parameters

##### data

[`CountryData`](../wiki/Types.TypeAlias.CountryData)

#### Returns

`Country`

## Properties

### name

```ts
name: string;
```

Defined in: models/country.ts:12

Name of the country

***

### code

```ts
code: string;
```

Defined in: models/country.ts:14

[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country

***

### languages

```ts
languages: string[];
```

Defined in: models/country.ts:16

List of official language [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) codes of the country

***

### flag

```ts
flag: string;
```

Defined in: models/country.ts:18

Country flag emoji

## Methods

### getLanguages()

```ts
getLanguages(): Collection<Language>;
```

Defined in: models/country.ts:28

#### Returns

`Collection`\<[`Language`](../wiki/Models.Class.Language)\>

List of official languages of the country

***

### getChannels()

```ts
getChannels(): Collection<Channel>;
```

Defined in: models/country.ts:41

#### Returns

`Collection`\<[`Channel`](../wiki/Models.Class.Channel)\>

List of channels broadcast from the country

***

### getRegions()

```ts
getRegions(): Collection<Region>;
```

Defined in: models/country.ts:46

#### Returns

`Collection`\<[`Region`](../wiki/Models.Class.Region)\>

List of regions that include the country

***

### getSubdivisions()

```ts
getSubdivisions(): Collection<Subdivision>;
```

Defined in: models/country.ts:53

#### Returns

`Collection`\<[`Subdivision`](../wiki/Models.Class.Subdivision)\>

List of subdivisions of the country

***

### getCities()

```ts
getCities(): Collection<City>;
```

Defined in: models/country.ts:60

#### Returns

`Collection`\<[`City`](../wiki/Models.Class.City)\>

List of cities of the country

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/country.ts:65

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): CountryData;
```

Defined in: models/country.ts:70

#### Returns

[`CountryData`](../wiki/Types.TypeAlias.CountryData)

JS object with all data
