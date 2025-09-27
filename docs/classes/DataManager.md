# Class: DataManager

Defined in: [core/dataManager.ts:39](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L39)

## Constructors

### Constructor

```ts
new DataManager(config?: {
  dataDir?: string;
}): DataManager;
```

Defined in: [core/dataManager.ts:47](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L47)

#### Parameters

##### config?

###### dataDir?

`string`

#### Returns

`DataManager`

## Methods

### downloadToDisk()

```ts
downloadToDisk(config?: {
  request?: AxiosRequestConfig<any>;
}): Promise<void>;
```

Defined in: [core/dataManager.ts:57](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L57)

#### Parameters

##### config?

###### request?

`AxiosRequestConfig`\<`any`\>

#### Returns

`Promise`\<`void`\>

***

### downloadFileToDisk()

```ts
downloadFileToDisk(basename: string, requestConfig?: AxiosRequestConfig<any>): Promise<unknown>;
```

Defined in: [core/dataManager.ts:64](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L64)

#### Parameters

##### basename

`string`

##### requestConfig?

`AxiosRequestConfig`\<`any`\>

#### Returns

`Promise`\<`unknown`\>

***

### loadFromDisk()

```ts
loadFromDisk(): Promise<void>;
```

Defined in: [core/dataManager.ts:98](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L98)

#### Returns

`Promise`\<`void`\>

***

### loadFileFromDisk()

```ts
loadFileFromDisk(basename: string): Promise<object[]>;
```

Defined in: [core/dataManager.ts:104](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L104)

#### Parameters

##### basename

`string`

#### Returns

`Promise`\<`object`[]\>

***

### downloadToMemory()

```ts
downloadToMemory(config?: {
  request?: AxiosRequestConfig<any>;
}): Promise<void>;
```

Defined in: [core/dataManager.ts:122](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L122)

#### Parameters

##### config?

###### request?

`AxiosRequestConfig`\<`any`\>

#### Returns

`Promise`\<`void`\>

***

### loadFromMemory()

```ts
loadFromMemory(): void;
```

Defined in: [core/dataManager.ts:137](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L137)

#### Returns

`void`

***

### processData()

```ts
processData(): void;
```

Defined in: [core/dataManager.ts:141](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L141)

#### Returns

`void`

***

### getProcessedData()

```ts
getProcessedData(): ProcessedData;
```

Defined in: [core/dataManager.ts:145](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L145)

#### Returns

[`ProcessedData`](../@iptv-org/namespaces/Types/type-aliases/ProcessedData.md)

***

### getRawData()

```ts
getRawData(): RawData;
```

Defined in: [core/dataManager.ts:165](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L165)

#### Returns

[`RawData`](../@iptv-org/namespaces/Types/type-aliases/RawData.md)

***

### setRawData()

```ts
setRawData(rawData: RawData): void;
```

Defined in: [core/dataManager.ts:169](https://github.com/iptv-org/sdk/blob/88d645d3373c4ec810ba0ec144ac251980f41667/src/core/dataManager.ts#L169)

#### Parameters

##### rawData

[`RawData`](../@iptv-org/namespaces/Types/type-aliases/RawData.md)

#### Returns

`void`
