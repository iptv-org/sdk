# SDK

JavaScript library to query data from [iptv-org/api](https://github.com/iptv-org/api).

## Installation

```sh
# set registry for @iptv-org scope
npm config set @iptv-org:registry https://npm.pkg.github.com
# install the package
npm install @iptv-org/sdk
```

## Quick Start

```js
import sdk from '@iptv-org/sdk'

const client = new sdk.Client()

await client.load()

const data = client.getData()

console.log(data.streams.all())
```

Results:

```jsonc
[
  {
    "channel": null,
    "feed": null,
    "title": "Iman TV",
    "url": "https://live.relentlessinnovations.net:1936/imantv/imantv/playlist.m3u8",
    "referrer": null,
    "user_agent": null,
    "quality": "480p"
  }
  //...
]
```

## Usage

### Get entities

```js
import sdk from '@iptv-org/sdk'

const client = new sdk.Client()

await client.load()

const data = client.getData()

const {
  channels,
  feeds,
  logos,
  streams,
  guides,
  categories,
  languages,
  countries,
  subdivisions,
  cities,
  regions,
  timezones,
  blocklist
} = data
```

All data is contained in the helper class [Collection](https://github.com/freearhey/core-js/blob/master/docs/classes/Collection.md), which makes it easy to filter and sort items:

```js
const filtered = channels
  .filter(channel => channel.country === 'FR')
  .sortBy(channel => channel.name)
  .all()

console.log(filtered)
```

Each element of the collection also has a set of useful methods:

```js
const channels = countries.first().getChannels()

console.log(channels)
```

A complete list of available methods can be found in the [documentation](docs/@iptv-org/namespaces/Models/README.md).

### Search channels

```js
import sdk from '@iptv-org/sdk'

const client = new sdk.Client()

await client.load()

const results = client.searchChannels('cat')

console.log(results)
```

## Testing

```sh
npm test
```

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/iptv-org/api/issues) or a [pull request](https://github.com/iptv-org/api/pulls).

And thank you to everyone who has already contributed!

### Backers

<a href="https://opencollective.com/iptv-org"><img src="https://opencollective.com/iptv-org/backers.svg?width=890" /></a>

### Contributors

<a href="https://github.com/iptv-org/iptv/graphs/contributors"><img src="https://opencollective.com/iptv-org/contributors.svg?width=890" /></a>

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](LICENSE)
