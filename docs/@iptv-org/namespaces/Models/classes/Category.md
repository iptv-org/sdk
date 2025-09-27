# Class: Category

Defined in: [models/category.ts:3](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/category.ts#L3)

## Constructors

### Constructor

```ts
new Category(data: CategoryData): Category;
```

Defined in: [models/category.ts:11](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/category.ts#L11)

#### Parameters

##### data

[`CategoryData`](../../Types/type-aliases/CategoryData.md)

#### Returns

`Category`

## Properties

### id

```ts
id: string;
```

Defined in: [models/category.ts:5](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/category.ts#L5)

Category ID

***

### name

```ts
name: string;
```

Defined in: [models/category.ts:7](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/category.ts#L7)

Name of the category

***

### description

```ts
description: string;
```

Defined in: [models/category.ts:9](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/category.ts#L9)

Short description of the category

## Methods

### toJSON()

```ts
toJSON(): string;
```

Defined in: [models/category.ts:18](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/category.ts#L18)

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): CategoryData;
```

Defined in: [models/category.ts:23](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/models/category.ts#L23)

#### Returns

[`CategoryData`](../../Types/type-aliases/CategoryData.md)

JS object with all data
