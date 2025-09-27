import { CategoryData } from '../types'

export class Category {
  /** Category ID */
  id: string
  /** Name of the category */
  name: string
  /** Short description of the category */
  description: string

  constructor(data: CategoryData) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
  }

  /** @returns JSON version of all data */
  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /** @returns JS object with all data */
  toObject(): CategoryData {
    return {
      id: this.id,
      name: this.name,
      description: this.description
    }
  }
}
