# Class: Language

Defined in: models/language.ts:3

## Constructors

### Constructor

```ts
new Language(data: LanguageData): Language;
```

Defined in: models/language.ts:9

#### Parameters

##### data

[`LanguageData`](../wiki/Types.TypeAlias.LanguageData)

#### Returns

`Language`

## Properties

### name

```ts
name: string;
```

Defined in: models/language.ts:5

Language name

***

### code

```ts
code: string;
```

Defined in: models/language.ts:7

[ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code of the language

## Methods

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/language.ts:15

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): LanguageData;
```

Defined in: models/language.ts:20

#### Returns

[`LanguageData`](../wiki/Types.TypeAlias.LanguageData)

JS object with all data
