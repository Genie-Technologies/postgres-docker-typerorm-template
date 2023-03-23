import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Message } from "../entity/Message"

export class MessageController {

    private messageRepository = AppDataSource.getRepository(Message)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.messageRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        

        const user = await this.messageRepository.findOne({
            where: { user_id: id }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { user_id, other_user_id, message_body  } = request.body;

        const user = Object.assign(new Message(), {
            user_id,
            other_user_id,
            message_body
        })

        return this.messageRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.messageRepository.findOneBy({ user_id: id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.messageRepository.remove(userToRemove)

        return "user has been removed"
    }

}