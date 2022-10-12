import express, { Request, Response } from 'express'
import { Compliment } from './entities/Compliment'
import { ComplimentsRepositories } from './modules/compliments/repositories/implementations/ComplimentsRepositories'

const app = express()

app.post('/complimentes', async (req: Request, res: Response) => {
  const complimentsRepositories = new ComplimentsRepositories()

  const compliment = new Compliment({
    description: 'Um elogio qualquer',
    to: 'Alex',
    createdBy: 'lolll',
  })

  await complimentsRepositories.saveCompliment(compliment)

  const compliments = await complimentsRepositories.listComplimentsReceived(
    'Alex',
  )

  return res.status(200).json({
    compliments,
  })
})

app.listen(3000, () => {
  console.log('Server is running at localhost 3001')
})
