import { AppDataSource } from '../../../../data-source'
import { Compliment } from '../../../../entities/Compliment'
import { IcomplimentsRepositories } from '../IComplimentsRepositories'

class ComplimentsRepositories implements IcomplimentsRepositories {
  async saveCompliment(compliment: Compliment): Promise<void> {
    const remoteRepository = AppDataSource.getRepository(Compliment)
    await remoteRepository.save(compliment)
  }

  async listComplimentsReceived(name: string): Promise<Compliment[]> {
    const remoteRepository = AppDataSource.getRepository(Compliment)
    const query = await remoteRepository.find({
      where: {
        to: name,
      },
    })

    return query
  }

  listComplimentsSended(name: string): Promise<Compliment[]> {
    throw new Error('Method not implemented.')
  }

  listComplimentsSendedByTag(tag: string): Promise<Compliment[]> {
    throw new Error('Method not implemented.')
  }

  listComplimentsReceivedByTag(tag: string): Promise<Compliment[]> {
    throw new Error('Method not implemented.')
  }

  editCompliment(id: string): Promise<Compliment> {
    throw new Error('Method not implemented.')
  }

  deleteCompliment(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

export { ComplimentsRepositories }
