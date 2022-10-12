import { v4 as uuidV4 } from 'uuid'

class Compliment {
  private description: string
  private createdBy: string
  private created_at: Date
  private last_modified_at: Date
  private to: string
  private id: string

  constructor({ description, to, createdBy }) {
    const date = new Date()
    this.to = to
    this.description = description
    this.created_at = date
    this.createdBy = createdBy
    this.id = uuidV4()
    this.last_modified_at = date
  }
}

export { Compliment }
