import { LanguageData } from '../types'

export class Language {
  /** Language name */
  name: string
  /** [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code of the language */
  code: string

  constructor(data: LanguageData) {
    this.name = data.name
    this.code = data.code
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): LanguageData {
    return {
      name: this.name,
      code: this.code
    }
  }
}
