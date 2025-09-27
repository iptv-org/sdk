# Class: Category

Defined in: models/category.ts:3

## Constructors

### Constructor

```ts
new Category(data: CategoryData): Category;
```

Defined in: models/category.ts:11

#### Parameters

##### data

[`CategoryData`](../wiki/Types.TypeAlias.CategoryData)

#### Returns

`Category`

## Properties

### id

```ts
id: string;
```

Defined in: models/category.ts:5

Category ID

***

### name

```ts
name: string;
```

Defined in: models/category.ts:7

Name of the category

***

### description

```ts
description: string;
```

Defined in: models/category.ts:9

Short description of the category

## Methods

### toJSON()

```ts
toJSON(): string;
```

Defined in: models/category.ts:18

#### Returns

`string`

JSON version of all data

***

### toObject()

```ts
toObject(): CategoryData;
```

Defined in: models/category.ts:23

#### Returns

[`CategoryData`](../wiki/Types.TypeAlias.CategoryData)

JS object with all data
