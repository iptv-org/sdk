# Class: Country

Defined in: [models/country.ts:10](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L10)

## Constructors

### Constructor

```ts
new Country(data: CountryData): Country;
```

Defined in: [models/country.ts:20](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L20)

#### Parameters

##### data

[`CountryData`](../../Types/type-aliases/CountryData.md)

#### Returns

`Country`

## Properties

### name

```ts
name: string;
```

Defined in: [models/country.ts:12](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L12)

Name of the country

***

### code

```ts
code: string;
```

Defined in: [models/country.ts:14](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L14)

[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country

***

### languages

```ts
languages: string[];
```

Defined in: [models/country.ts:16](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L16)

List of official language [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) codes of the country

***

### flag

```ts
flag: string;
```

Defined in: [models/country.ts:18](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L18)

Country flag emoji

## Methods

### getLanguages()

```ts
getLanguages(): Collection<Language>;
```

Defined in: [models/country.ts:28](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L28)

#### Returns

`Collection`\<[`Language`](Language.md)\>

List of official languages of the country

***

### getChannels()

```ts
getChannels(): Collection<Channel>;
```

Defined in: [models/country.ts:41](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L41)

#### Returns

`Collection`\<[`Channel`](Channel.md)\>

List of channels broadcast from the country

***

### getRegions()

```ts
getRegions(): Collection<Region>;
```

Defined in: [models/country.ts:46](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L46)

#### Returns

`Collection`\<[`Region`](Region.md)\>

List of regions that include the country

***

### getSubdivisions()

```ts
getSubdivisions(): Collection<Subdivision>;
```

Defined in: [models/country.ts:53](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L53)

#### Returns

`Collection`\<[`Subdivision`](Subdivision.md)\>

List of subdivisions of the country

***

### getCities()

```ts
getCities(): Collection<City>;
```

Defined in: [models/country.ts:60](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L60)

#### Returns

`Collection`\<[`City`](City.md)\>

List of cities of the country

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/country.ts:65](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L65)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): CountryData;
```

Defined in: [models/country.ts:70](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/country.ts#L70)

#### Returns

[`CountryData`](../../Types/type-aliases/CountryData.md)

JS object with all data
