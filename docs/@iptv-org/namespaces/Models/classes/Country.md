# Class: Country

Defined in: [models/country.ts:9](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L9)

## Constructors

### Constructor

```ts
new Country(data: CountryData): Country;
```

Defined in: [models/country.ts:19](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L19)

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

Defined in: [models/country.ts:11](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L11)

Name of the country

***

### code

```ts
code: string;
```

Defined in: [models/country.ts:13](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L13)

[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country

***

### languages

```ts
languages: string[];
```

Defined in: [models/country.ts:15](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L15)

List of official language [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) codes of the country

***

### flag

```ts
flag: string;
```

Defined in: [models/country.ts:17](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L17)

Country flag emoji

## Methods

### getLanguages()

```ts
getLanguages(): Collection<Language>;
```

Defined in: [models/country.ts:27](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L27)

#### Returns

`Collection`\<[`Language`](Language.md)\>

List of official languages of the country

***

### getChannels()

```ts
getChannels(): Collection<Channel>;
```

Defined in: [models/country.ts:40](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L40)

#### Returns

`Collection`\<[`Channel`](Channel.md)\>

List of channels broadcast from the country

***

### getRegions()

```ts
getRegions(): Collection<Region>;
```

Defined in: [models/country.ts:45](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L45)

#### Returns

`Collection`\<[`Region`](Region.md)\>

List of regions that include the country

***

### getSubdivisions()

```ts
getSubdivisions(): Collection<Subdivision>;
```

Defined in: [models/country.ts:52](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L52)

#### Returns

`Collection`\<[`Subdivision`](Subdivision.md)\>

List of subdivisions of the country

***

### getCities()

```ts
getCities(): Collection<City>;
```

Defined in: [models/country.ts:59](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L59)

#### Returns

`Collection`\<[`City`](City.md)\>

List of cities of the country

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/country.ts:64](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L64)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): CountryData;
```

Defined in: [models/country.ts:69](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/country.ts#L69)

#### Returns

[`CountryData`](../../Types/type-aliases/CountryData.md)

JS object with all data
