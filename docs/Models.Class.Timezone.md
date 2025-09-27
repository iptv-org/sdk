# Class: Timezone

Defined in: models/timezone.ts:6

## Constructors

### Constructor

```ts
new Timezone(data: TimezoneData): Timezone;
```

Defined in: models/timezone.ts:14

#### Parameters

##### data

[`TimezoneData`](../wiki/Types.TypeAlias.TimezoneData)

#### Returns

`Timezone`

## Properties

### id

```ts
id: string;
```

Defined in: models/timezone.ts:8

Timezone ID from [tz database](https://en.wikipedia.org/wiki/Tz_database)

***

### utc\_offset

```ts
utc_offset: string;
```

Defined in: models/timezone.ts:10

[UTC offset](https://en.wikipedia.org/wiki/UTC_offset) for this time zone

***

### countries

```ts
countries: string[];
```

Defined in: models/timezone.ts:12

List of country codes included in the time zone

## Methods

### getCountries()

```ts
getCountries(): Collection<Country>;
```

Defined in: models/timezone.ts:21

#### Returns

`Collection`\<[`Country`](../wiki/Models.Class.Country)\>

List of countries included in the time zone

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/timezone.ts:32

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): TimezoneData;
```

Defined in: models/timezone.ts:37

#### Returns

[`TimezoneData`](../wiki/Types.TypeAlias.TimezoneData)

JS object with all data
