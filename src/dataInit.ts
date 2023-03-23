import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Message } from "./entity/Message"

export const dataInit = async (AppDataSource: DataSource) => {
// insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Timber",
            lastName: "Saw",
            age: 27,
            email: "test@test1.com",
            password: "test1"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Phantom",
            lastName: "Assassin",
            age: 24,
            email: "test@test.com",
            password: "test"
        })
    )

    // Write function to get user id of previously created user above using typeorm query builder
    const user = await AppDataSource.getRepository(User).findOne({
        where: { firstName: 'Timber' }
        });
    console.log(user)

    const user2 = await AppDataSource.getRepository(User).findOne({
        where: { firstName: 'Phantom' }
        });

    // console.log('USER_ID', user_id, 'USER_ID2', user_id2);
    await AppDataSource.manager.save(
        AppDataSource.manager.create(Message, {
            user_id: user.id,
            other_user_id: user2.id,
            message_body: "I'm not fuckin leavin"
        })
    )
    // await AppDataSource.getRepository(Message).findOneBy({user_id: user.id,
    //     other_user_id: user2.id,
    //     message_body: "I'm not fuckin leavin" }
    // )
};