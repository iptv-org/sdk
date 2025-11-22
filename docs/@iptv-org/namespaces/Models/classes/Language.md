# Class: Language

Defined in: [models/language.ts:3](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/language.ts#L3)

## Constructors

### Constructor

```ts
new Language(data: LanguageData): Language;
```

Defined in: [models/language.ts:9](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/language.ts#L9)

#### Parameters

##### data

[`LanguageData`](../../Types/type-aliases/LanguageData.md)

#### Returns

`Language`

## Properties

### name

```ts
name: string;
```

Defined in: [models/language.ts:5](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/language.ts#L5)

Language name

***

### code

```ts
code: string;
```

Defined in: [models/language.ts:7](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/language.ts#L7)

[ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code of the language

## Methods

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/language.ts:15](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/language.ts#L15)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): LanguageData;
```

Defined in: [models/language.ts:20](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/models/language.ts#L20)

#### Returns

[`LanguageData`](../../Types/type-aliases/LanguageData.md)

JS object with all data
