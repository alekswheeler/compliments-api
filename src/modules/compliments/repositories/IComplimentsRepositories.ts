import { Compliment } from '../../../entities/Compliment'

interface IcomplimentsRepositories {
  listComplimentsReceived(name: string): Promise<Compliment[]>
  listComplimentsSended(name: string): Promise<Compliment[]>
  listComplimentsSendedByTag(tag: string): Promise<Compliment[]>
  listComplimentsReceivedByTag(tag: string): Promise<Compliment[]>
  editCompliment(id: string): Promise<Compliment>
  deleteCompliment(id: string): Promise<void>
  saveCompliment(compliment: Compliment): Promise<void>
}

export { IcomplimentsRepositories }
