# Class: Client

Defined in: core/client.ts:9

## Constructors

### Constructor

```ts
new Client(options?: {
  dataDir?: string;
}): Client;
```

Defined in: core/client.ts:14

#### Parameters

##### options?

###### dataDir?

`string`

#### Returns

`Client`

## Methods

### load()

```ts
load(): Promise<void>;
```

Defined in: core/client.ts:20

#### Returns

`Promise`\<`void`\>

***

### getData()

```ts
getData(): ProcessedData;
```

Defined in: core/client.ts:46

#### Returns

[`ProcessedData`](../wiki/Types.TypeAlias.ProcessedData)

***

### searchChannels()

```ts
searchChannels(query: string): Collection<Channel>;
```

Defined in: core/client.ts:50

#### Parameters

##### query

`string`

#### Returns

`Collection`\<[`Channel`](../wiki/Models.Class.Channel)\>
