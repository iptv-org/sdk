# Class: Client

Defined in: [core/client.ts:9](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/core/client.ts#L9)

## Constructors

### Constructor

```ts
new Client(options?: {
  dataDir?: string;
}): Client;
```

Defined in: [core/client.ts:14](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/core/client.ts#L14)

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

Defined in: [core/client.ts:20](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/core/client.ts#L20)

#### Returns

`Promise`\<`void`\>

***

### getData()

```ts
getData(): ProcessedData;
```

Defined in: [core/client.ts:46](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/core/client.ts#L46)

#### Returns

[`ProcessedData`](../@iptv-org/namespaces/Types/type-aliases/ProcessedData.md)

***

### searchChannels()

```ts
searchChannels(query: string): Collection<Channel>;
```

Defined in: [core/client.ts:50](https://github.com/iptv-org/sdk/blob/d542ea92cdc8fe123fd822281ef03e5c8cacb037/src/core/client.ts#L50)

#### Parameters

##### query

`string`

#### Returns

`Collection`\<[`Channel`](../@iptv-org/namespaces/Models/classes/Channel.md)\>
