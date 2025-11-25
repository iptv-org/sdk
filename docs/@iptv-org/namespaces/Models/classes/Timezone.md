# Class: Timezone

Defined in: [models/timezone.ts:6](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/timezone.ts#L6)

## Constructors

### Constructor

```ts
new Timezone(data: TimezoneData): Timezone;
```

Defined in: [models/timezone.ts:14](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/timezone.ts#L14)

#### Parameters

##### data

[`TimezoneData`](../../Types/type-aliases/TimezoneData.md)

#### Returns

`Timezone`

## Properties

### id

```ts
id: string;
```

Defined in: [models/timezone.ts:8](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/timezone.ts#L8)

Timezone ID from [tz database](https://en.wikipedia.org/wiki/Tz_database)

***

### utc\_offset

```ts
utc_offset: string;
```

Defined in: [models/timezone.ts:10](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/timezone.ts#L10)

[UTC offset](https://en.wikipedia.org/wiki/UTC_offset) for this time zone

***

### countries

```ts
countries: string[];
```

Defined in: [models/timezone.ts:12](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/timezone.ts#L12)

List of country codes included in the time zone

## Methods

### getCountries()

```ts
getCountries(): Collection<Country>;
```

Defined in: [models/timezone.ts:21](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/timezone.ts#L21)

#### Returns

`Collection`\<[`Country`](Country.md)\>

List of countries included in the time zone

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/timezone.ts:32](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/timezone.ts#L32)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): TimezoneData;
```

Defined in: [models/timezone.ts:37](https://github.com/iptv-org/sdk/blob/34cebed36d94c861f34d122fcd7af13dfe418417/src/models/timezone.ts#L37)

#### Returns

[`TimezoneData`](../../Types/type-aliases/TimezoneData.md)

JS object with all data
