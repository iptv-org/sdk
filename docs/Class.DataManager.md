# Class: DataManager

Defined in: core/dataManager.ts:39

## Constructors

### Constructor

```ts
new DataManager(config?: {
  dataDir?: string;
}): DataManager;
```

Defined in: core/dataManager.ts:47

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

Defined in: core/dataManager.ts:57

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

Defined in: core/dataManager.ts:64

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

Defined in: core/dataManager.ts:98

#### Returns

`Promise`\<`void`\>

***

### loadFileFromDisk()

```ts
loadFileFromDisk(basename: string): Promise<object[]>;
```

Defined in: core/dataManager.ts:104

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

Defined in: core/dataManager.ts:122

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

Defined in: core/dataManager.ts:137

#### Returns

`void`

***

### processData()

```ts
processData(): void;
```

Defined in: core/dataManager.ts:141

#### Returns

`void`

***

### getProcessedData()

```ts
getProcessedData(): ProcessedData;
```

Defined in: core/dataManager.ts:145

#### Returns

[`ProcessedData`](../wiki/Types.TypeAlias.ProcessedData)

***

### getRawData()

```ts
getRawData(): RawData;
```

Defined in: core/dataManager.ts:165

#### Returns

[`RawData`](../wiki/Types.TypeAlias.RawData)

***

### setRawData()

```ts
setRawData(rawData: RawData): void;
```

Defined in: core/dataManager.ts:169

#### Parameters

##### rawData

[`RawData`](../wiki/Types.TypeAlias.RawData)

#### Returns

`void`
